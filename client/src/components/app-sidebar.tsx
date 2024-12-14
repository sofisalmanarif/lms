import * as React from "react"
import {
  
  BookOpen,
  Bot,
  LucideLayoutDashboard,
  Settings2,
  
} from "lucide-react"

import { NavMain } from "@/components/nav-main"

import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LucideLayoutDashboard,
      isActive: true,
      
    },
    {
      title: "Libraries",
      url: "/dashboard/libraries",
      icon: Bot,
    },
    {
      title: "Admins",
      url: "/",
      icon: BookOpen,
    },
    {
      title: "Requests",
      url: "/dashboard/new-library",
      icon: Settings2,
    },
  ],
  
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="mt-20 h-[92vh] ml-20">
      <SidebarHeader>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
