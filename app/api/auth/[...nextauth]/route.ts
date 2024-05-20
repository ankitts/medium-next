import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import prisma from "@/prisma/db";

const handler = NextAuth({
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                username: {label: "Username", type: "text", placeholder: "username"},
                password: {label: "Password", type: "text", placeholder: "password"}
            },
            async authorize(credentials: any){
                console.log(credentials);
                const user = await prisma.user.findUnique({
                    where: {
                        username: credentials.username
                    }
                })
                if(!user){
                    return null;
                }
                return {
                    id: user.id.toString(),
                    name: user.name
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: async ({ user, token }: any) => {
            if (user) {
                token.uid = user.id;
            }
            return token;
        },
        session: ({ session, token, user }: any) => {
            if (session.user) {
                session.user.id = token.uid
            }
            return session
        }
    },
})

export {handler as GET, handler as POST}