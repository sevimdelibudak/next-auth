import { DefaultSession, DefaultJWT } from "next-auth";
import type { Profile as Auth0Profile } from "next-auth/providers/auth0";

declare module "next-auth" {
  interface Session {
    user: {
      roles?: string[];
    } & DefaultSession["user"];
  }

  interface Profile extends Auth0Profile {
    "http://localhost:3000/roles"?: string[];
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    roles?: string[];
  }
}