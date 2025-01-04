"use client"
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react"

export default function Home() {
  return <SessionProvider>
    <RealHome />
  </SessionProvider>
}

function RealHome() {
  const session = useSession()

  return <div>
    {session.status === "authenticated" && <button className="border p-2 rounded-lg" onClick={() => signOut()}>Logout</button>}
    {session.status === "unauthenticated" && <button className="border p-2 rounded-lg" onClick={() => signIn()}>SignIn</button>}
  </div>
}
