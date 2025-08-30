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
      clientId: clientId,
      clientSecret: clientSecret,
      issuer: issuer,
    }),
  ],
  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };