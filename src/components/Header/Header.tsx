import { getServerSession } from "next-auth"
import Logout from "@/components/Logout/Logout"
import Link from "next/link"

const Header = async () => {
  const session = await getServerSession()
  return (
    <div>
      {!!session && (
        <div style={{ padding: "1rem" }}>
          You are logged in <Logout />
        </div>
      )}
      {!session && <Link href="/login">Login Here</Link>}
    </div>
  )
}

export default Header
