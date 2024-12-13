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
          {/* <User2Icon/> */}
            Profile
          </DropdownMenuItem>
          {isAdmin &&<DropdownMenuItem>
            {/* <LayoutDashboardIcon/> */}
            Dashboard
          </DropdownMenuItem>}
         </Link>
         <Link to={"/my-borrowings"}>
          <DropdownMenuItem>
            Borrowings
            
          </DropdownMenuItem>
         </Link>
         
          
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>My Library</DropdownMenuItem>
        
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
