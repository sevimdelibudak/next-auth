// app/api/auth/[...nextauth]/route.ts

import NextAuth from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';

const clientId = process.env.AUTH0_CLIENT_ID;
const clientSecret = process.env.AUTH0_CLIENT_SECRET;
const issuer = process.env.AUTH0_ISSUER;

if (!clientId || !clientSecret || !issuer) {
  throw new Error('Missing AUTH0 environment variables in .env.local file');
}

const handler = NextAuth({
  providers: [
    Auth0Provider({
      clientId,
      clientSecret,
      issuer,
      authorization: {
        params: {
          scope: 'openid profile email',
          audience: process.env.AUTH0_AUDIENCE, // ✅ burası environment’tan gelsin
        },
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user, account, profile }) {
      // Auth0'dan gelen roles claim'i varsa token içine ekle
      if (profile && (profile as any).roles) {
        token.roles = (profile as any).roles;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.roles) {
        (session.user as any).roles = token.roles;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };

