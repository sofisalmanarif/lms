import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { Link } from "react-router-dom"

export function DropdownMenuDemo({children}:{children:React.ReactNode}) {

  const [isAdmin,] = useState<boolean>(true)
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
            Profile
          </DropdownMenuItem>
          </Link>
          {isAdmin &&
          
          <DropdownMenuItem>
            <Link to={"/dashboard"}>
            Dashboard
            </Link>
            
          </DropdownMenuItem>}
         
          
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <Link to={"/admin"}>
        <DropdownMenuItem>My Library</DropdownMenuItem>
        </Link>
        
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
