import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import type { NextAuthOptions } from "next-auth";

const namespace = 'http://localhost:3000/';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (profile) {
        // Auth0'dan gelen namespaced rol bilgisini doğrudan token'a ekle
        const roles = profile[`${namespace}roles`];
        if (roles) {
          token.roles = roles;
        }
      }
      return token;
    },
    async session({ session, token }) {
      // Token'daki rolleri session objesine ekle
      if (token.roles) {
        session.user.roles = token.roles;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };