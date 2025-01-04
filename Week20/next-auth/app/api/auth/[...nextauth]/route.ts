import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;
        console.log(username);
        console.log(password);

        // DB request to check if the username and password are correct.
        const user = {
          name: "Sada",
          id: "1",
          username: "Sada_70"
        }

        if(user){
          return user;
        } else {
          return null;
        }
      }
    })
  ]
})

export { handler as GET, handler as POST }