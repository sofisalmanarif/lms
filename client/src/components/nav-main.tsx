import { type LucideIcon } from "lucide-react"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import {  NavLink,} from "react-router-dom"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean

  }[]
}) {

  // const location = useLocation()
  // console.log("location",location.pathname)
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuButton asChild tooltip={item.title} className=" hover:bg-gray-200 py-2">
            
            <NavLink
              to={item.url}
              className={({ isActive }) => (isActive ? "bg-gray-200 rounded-md" : "bg-transparent hover:bg-orange-200")}
            >
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
            </NavLink>
                  </SidebarMenuButton>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
