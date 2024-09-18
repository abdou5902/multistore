import Link from "next/link"
import { LogOut } from "lucide-react"
import logoutAction from "@/_serverAction/logoutAction"


function LogoutClient() {
  return (

    <form action={logoutAction}>
      <div className="w-full flex flex-col mt-3 mb-0">
          <button type="submit" href={"/"} className="flex gap-2"><LogOut/> logout </button>
      </div>
    </form>
    
  )
}

export default LogoutClient