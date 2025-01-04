import { getServerSession } from "next-auth"

export default function Home() {
  return <div>
    <RealHome />
  </div>
}

async function RealHome() {
  const session = await getServerSession();

  return <div>
    {JSON.stringify(session)}
  </div>
}
