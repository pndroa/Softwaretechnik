import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "../../../../../prisma"
import { connectToDatabase } from "@/module/server"

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "E-Mail" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials: any, req: any) {
        const { email, password } = credentials as {
          email: string
          password: string
        }

        await connectToDatabase()
        const response = await prisma.user.findMany({
          where: {
            email: email,
          },
        })

        const user = response[0]

        if (user.email === email && user.password === password) {
          return user
        } else {
          throw new Error("Invalide credentials")
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
