import * as React from "react"
import {
 
  Library,
  LucideLayoutDashboard,
  Settings2,
  Users,
  
} from "lucide-react"

import { NavMain } from "@/components/nav-main"

import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"

// This is sample data.
const user=  {
  name: "shadcn",
  email: "m@example.com",
  avatar: "/avatars/shadcn.jpg",
}

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LucideLayoutDashboard,
      // isActive: true,
      
    },
    {
      title: "Libraries",
      url: "/dashboard/libraries",
      icon: Library ,
    },
    {
      title: "Admins",
      url: "/dashboard/library-admins",
      icon: Users ,
    },
    {
      title: "Requests",
      url: "/dashboard/new-library",
      icon: Settings2,
    },
  ],
  
}

export function AppSidebar({ ...props }:React.ComponentProps<typeof Sidebar>) {
  
  return (
    <Sidebar collapsible="icon" variant="sidebar" {...props} className="mt-[7svh] bg-orange-00/20 h-[93vh] mx-20 ">
      <SidebarHeader>
        <header className="flex h-16 shrink-0 mt-2 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                  <div className="flex items-start gap-0 ">
                    <SidebarTrigger />
                   
                  </div>
                </header>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
