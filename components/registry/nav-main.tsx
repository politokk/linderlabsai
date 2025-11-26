"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type * as React from "react"
import type { LucideIcon } from "lucide-react"
import { ChevronDown, ChevronRight, Lightbulb } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
  ...props
}: {
  items: {
    title: string
    path: string
    icon: LucideIcon
  }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const pathname = usePathname()
  const { setOpenMobile } = useSidebar()

  return (
    <Collapsible defaultOpen={true} className="group/collapsible" id="getting-started">
      <SidebarGroup {...props}>
        <CollapsibleTrigger className="w-full">
          <SidebarGroupLabel className="flex cursor-pointer items-center justify-between">
            <div className="relative flex min-w-0 items-center">
              <Lightbulb className="size-3 flex-shrink-0 transition-opacity duration-200 group-hover/collapsible:opacity-0" />
              <ChevronDown className="absolute size-3 flex-shrink-0 opacity-0 transition-all duration-200 group-hover/collapsible:opacity-100 group-data-[state=open]/collapsible:block group-data-[state=closed]/collapsible:hidden" />
              <ChevronRight className="absolute size-3 flex-shrink-0 opacity-0 transition-all duration-200 group-hover/collapsible:opacity-100 group-data-[state=open]/collapsible:hidden group-data-[state=closed]/collapsible:block" />
              <span className="ml-2 opacity-100 transition-all duration-200 group-data-[collapsible=icon]:opacity-0">
                Getting Started
              </span>
            </div>
          </SidebarGroupLabel>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.path}
                      tooltip={item.title}
                    >
                      <Link
                        onClick={() => setOpenMobile(false)}
                        href={item.path}
                        className="flex items-center gap-2"
                      >
                        <Icon className="size-4" />
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>
  )
}