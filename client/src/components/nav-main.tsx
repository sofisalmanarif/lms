"use client"

import { type LucideIcon } from "lucide-react"

import {
  Collapsible,
  
  
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { NavLink } from "react-router-dom"

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
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <NavLink to={item.url} className="hover:bg-orange-100 rounded-md">
              <SidebarMenuItem>
                <SidebarMenuButton tooltip={item.title} className="!bg-transparent">
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </NavLink>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
