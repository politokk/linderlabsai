"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import {
  Component,
  Boxes,
  FileText,
  Send,
  LifeBuoy,
} from "lucide-react"

import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Logo } from "@/components/logo"

// This is sample data.
const data = {
  user: {
    name: "LinderLabs UI",
    email: "hello@linderlabs.com",
    avatar: "https://raw.githubusercontent.com/politokk/linderlabsai/refs/heads/main/public/linderavatar.png",
  },
  teams: [
    {
      name: "LinderLabs",
      accent: "UI",
      avatar: "https://raw.githubusercontent.com/politokk/linderlabsai/refs/heads/main/public/orbs/orb-2.webp",
      plan: "Free",
    }
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  return (
    <Sidebar side="left" collapsible="icon" {...props}>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <NavMain type="registry:ui" label="Components" icon={Component} />
        <NavMain type="registry:block" label="Blocks" icon={Boxes} />
        <NavMain type="registry:page" label="Pages" icon={FileText} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}