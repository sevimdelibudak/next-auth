# Docker için bir temel imaj seçin. Node.js v20 kullanacağız.
FROM node:20-alpine AS base

# Çalışma dizinini ayarlayın.
WORKDIR /app

# Uygulamanın bağımlılıklarını kurun.
COPY package.json package-lock.json ./
RUN npm install

# .env.local dosyasını kopyalayın.
COPY .env.local ./.env.local

# Uygulamanın kodunu kopyalayın.
COPY . .

# Next.js uygulamasını derleyin.
RUN npm run build

# Üretim ortamı için bağımlılıkları yükleyin ve derlenmiş uygulamayı kopyalayın.
FROM node:20-alpine AS runner
WORKDIR /app

# Uygulamanın çalışması için sadece üretim bağımlılıklarını kurun
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package.json ./package.json

# Uygulamayı kopyalayın
COPY --from=base /app/.env.local ./
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public

# Uygulamanın çalışacağı portu belirleyin
EXPOSE 3000

# Next.js sunucusunu başlatın
CMD ["npm", "start"]