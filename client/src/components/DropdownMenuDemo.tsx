import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LayoutDashboard, LogOut, User2 } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

export function DropdownMenuDemo({ children }: { children: React.ReactNode }) {

  const [isAdmin,] = useState<boolean>(true)
  const [isSuperAdmin,] = useState<boolean>(true)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 sm:mr-20 mr-5">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link to={"/profile"}>
            <DropdownMenuItem className="flex items-center">
              <User2 /> Profile
            </DropdownMenuItem>
          </Link>
          <Link to={"/dashboard"}>
            {isSuperAdmin &&

              <DropdownMenuItem>
                <LayoutDashboard /> Dashboard

              </DropdownMenuItem>}
          </Link>


        </DropdownMenuGroup>

        <Link to={"/admin"}>
          {isAdmin &&

            <DropdownMenuItem>
              <LayoutDashboard /> Admin</DropdownMenuItem>
          }
        </Link>

        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-400 focus:text-red-500">
          <LogOut /> Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
