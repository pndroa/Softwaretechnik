import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcrypt"
import prisma from "../../../../../prisma"
import { connectToDatabase } from "@/module/server"

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials: any, req: any) {
        await connectToDatabase()
        const response = await prisma.user.findMany({
          where: {
            email: credentials.email,
          },
        })

        const user = response[0]
        const password = user.password

        if (password) {
          return {
            id: user.id,
            email: user.email,
          }
        }

        console.log({ credentials })

        return null
      },
    }),
  ],
})

export { handler as GET, handler as POST }
