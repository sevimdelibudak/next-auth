# Next.js Güvenli Yemek Uygulaması

Bu proje, modern bir web uygulamasının nasıl güvenli hale getirileceğini ve kullanıcı deneyiminin nasıl zenginleştirileceğini gösteren örnek bir Next.js uygulamasıdır. Proje, kullanıcı kimlik yönetimi için **Auth0** ve **NextAuth.js** entegrasyonlarını içerirken, görsel olarak çekici bir yemek uygulaması konsepti üzerine kurulmuştur.

## Özellikler

- **Gelişmiş Kullanıcı Deneyimi:** Daha iyi bir görünüm ve his için görsel olarak çekici bir ana sayfa, başlık (Header) ve altbilgi (Footer) bileşenleri içerir.
- **Güvenli Kimlik Doğrulama:** Auth0 üzerinden güvenli kullanıcı girişi ve çıkışı sağlar.
- **Rol Tabanlı Yetkilendirme:** Kullanıcı rolleri (`admin`, `user`) tanımlanarak belirli sayfalara (`/admin`) erişim kısıtlanır.
- **Kapsayıcı Desteği:** Proje, bir Docker konteyneri içinde çalıştırılmak üzere hazırlanmıştır.
- **Kod Kalitesi:** Temiz kod ve SOLID prensiplerine uygun bir yapı hedeflenmiştir.

---

## Kurulum ve Çalıştırma

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin.

### Ön Koşullar

- Node.js (v18.x veya üstü)
- npm
- Git
- Docker (sadece Docker ile çalıştırmak isterseniz)

### Kurulum Adımları

1.  **Projeyi Klonla:**
    ```bash
    git clone https://github.com/sevimdelibudak/next-auth
    cd next-auth
    ```

2.  **Bağımlılıkları Yükle:**
    ```bash
    npm install
    ```

3.  **Ortam Değişkenlerini Ayarla:**
    Proje ana dizininde `.env.local` adında bir dosya oluştur ve içine Auth0 kimlik bilgilerinizi gir. Bu bilgiler, uygulamanın Auth0 ile iletişim kurması için gereklidir.

    ```bash
    AUTH0_SECRET=dofdpfdfdfodplofpgfogkogkopgopgpogkpogktpogtrggjkraty
    AUTH0_CLIENT_ID=3T0nZZFRYXXcrX1r8YPDNrEUrBFcIKgh
    AUTH0_CLIENT_SECRET=hPQOSM3jxO2aS9VQJ6boh-bgNNnJ4k2KdxJvILyqDTZ4As5zHXJ7eKJWTa2R7nKu
    AUTH0_ISSUER=https://next-auth-task.us.auth0.com
    ```
    (Not: Bu bilgileri Auth0 panelinizden alabilirsiniz.)

## Uygulamayı Çalıştırma

### Geliştirme Ortamı

Yerel bir geliştirme sunucusu başlatmak için:
```bash
npm run dev
# Proje Adı

Bu proje, bir Next.js uygulamasına Auth0 ve NextAuth.js kullanarak modern kimlik doğrulama ve yetkilendirme (authorization) özelliklerinin nasıl eklendiğini gösteren örnek bir uygulamadır. Uygulama, farklı kullanıcı rolleri için sayfa erişimini kısıtlar.

## Özellikler

- **Giriş/Çıkış:** Kullanıcıların güvenli bir şekilde oturum açmasını ve kapatmasını sağlar.
- **Kullanıcı Profili:** Giriş yapan kullanıcılar için özel bir profil sayfası oluşturur.
- **Yetkilendirme:** "admin" rolüne sahip kullanıcılar, özel bir admin paneli sayfasına erişebilir.
- **Middleware Koruması:** Giriş yapmamış kullanıcıları yetkisiz sayfalardan yönlendirir.
- **Docker Desteği:** Uygulama, bir Docker konteyneri içinde çalıştırılmaya hazırdır.

## Kurulum ve Çalıştırma

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin.

### Ön Koşullar

- Node.js (v18.x veya üstü)
- npm
- Git
- Docker (sadece Docker ile çalıştırmak isterseniz)

### Kurulum Adımları

1.  **Projeyi Klonla:**
    ```bash
    git clone https://github.com/sevimdelibudak/next-auth
    cd next-auth
    ```

2.  **Bağımlılıkları Yükle:**
    ```bash
    npm install
    ```

3.  **Ortam Değişkenlerini Ayarla:**
    Proje ana dizininde `.env.local` adında bir dosya oluştur ve içine Auth0 kimlik bilgilerinizi gir. Bu bilgiler, uygulamanın Auth0 ile iletişim kurması için gereklidir.

    ```bash
    AUTH0_SECRET=dofdpfdfdfodplofpgfogkogkopgopgpogkpogktpogtrggjkraty
    AUTH0_CLIENT_ID=3T0nZZFRYXXcrX1r8YPDNrEUrBFcIKgh
    AUTH0_CLIENT_SECRET=hPQOSM3jxO2aS9VQJ6boh-bgNNnJ4k2KdxJvILyqDTZ4As5zHXJ7eKJWTa2R7nKu
    AUTH0_ISSUER=https://next-auth-task.us.auth0.com
    ```
    (Not: Bu bilgileri Auth0 panelinizden alabilirsiniz.)

## Uygulamayı Çalıştırma

### Geliştirme Ortamı

Yerel bir geliştirme sunucusu başlatmak için:
```bash
npm run dev

### Docker ile Çalıştırma

Eğer projeyi Docker konteyneri içinde çalıştırmak isterseniz, aşağıdaki adımları izleyin.

1.  **Docker İmajını Oluşturun:**
    ```bash
    docker build -t next-app-docker .
    ```

2.  **Konteyneri Çalıştırın:**
    ```bash
    docker run -p 3000:3000 next-app-docker
    ```

3.  **Uygulamaya Erişim:**  
    http://localhost:3000 adresinden uygulamaya erişebilirsiniz.




