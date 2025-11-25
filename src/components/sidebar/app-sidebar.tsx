"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  Settings2,
  SquareTerminal,
  History,
  Star,
  Settings,
  Sparkles,
  Compass,
  Zap,
  FileText,
  Rocket,
  GraduationCap,
  ScrollText,
  User,
  Users,
  CreditCard,
  Gauge,
} from "lucide-react"

import { NavMain } from "@/components/sidebar/nav-main"
import { NavUser } from "@/components/sidebar/nav-user"
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
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://raw.githubusercontent.com/politokk/linderlabsai/refs/heads/main/public/linderavatar.png",
  },
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
          icon: History,
        },
        {
          title: "Starred",
          url: "#",
          icon: Star,
        },
        {
          title: "Settings",
          url: "#",
          icon: Settings,
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
          icon: Sparkles,
        },
        {
          title: "Explorer",
          url: "#",
          icon: Compass,
        },
        {
          title: "Quantum",
          url: "#",
          icon: Zap,
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
          icon: FileText,
        },
        {
          title: "Get Started",
          url: "#",
          icon: Rocket,
        },
        {
          title: "Tutorials",
          url: "#",
          icon: GraduationCap,
        },
        {
          title: "Changelog",
          url: "#",
          icon: ScrollText,
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
          icon: User,
        },
        {
          title: "Team",
          url: "#",
          icon: Users,
        },
        {
          title: "Billing",
          url: "#",
          icon: CreditCard,
        },
        {
          title: "Limits",
          url: "#",
          icon: Gauge,
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Logo />
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