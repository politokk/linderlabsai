"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Blocks,
  ChevronDown,
  ChevronRight,
  Component,
  ToyBrick,
  type LucideIcon,
} from "lucide-react"
import * as LucideIcons from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

// Function to get icon component from registry data
function getIconComponent(component: { icon: string; type: string }): LucideIcon {
  if (component.icon && LucideIcons[component.icon as keyof typeof LucideIcons]) {
    return LucideIcons[component.icon as keyof typeof LucideIcons] as LucideIcon;
  }
  
  // Fallback icons based on component type
  switch (component.type) {
    case "registry:block":
      return Blocks;
    case "registry:component":
      return Component;
    case "registry:ui":
      return ToyBrick;
    default:
      return Component;
  }
}

interface NavRegistryProps {
  filteredBlocks: RegistryComponent[]
  filteredComponents: RegistryComponent[]
  filteredUiItems: RegistryComponent[]
}

export function NavRegistry({
  filteredBlocks,
  filteredComponents,
  filteredUiItems,
}: NavRegistryProps) {
  const pathname = usePathname()
  const { setOpenMobile } = useSidebar()

  return (
    <ScrollArea className="h-full w-full pr-2">
      <Collapsible defaultOpen={true} className="group/collapsible" id="blocks">
        <SidebarGroup>
          <CollapsibleTrigger className="w-full">
            <SidebarGroupLabel className="flex cursor-pointer items-center justify-between">
              <div className="relative flex min-w-0 items-center">
                <Blocks className="size-3 flex-shrink-0 transition-opacity duration-200 group-hover/collapsible:opacity-0" />
                <ChevronDown className="absolute size-3 flex-shrink-0 opacity-0 transition-all duration-200 group-hover/collapsible:opacity-100 group-data-[state=open]/collapsible:block group-data-[state=closed]/collapsible:hidden" />
                <ChevronRight className="absolute size-3 flex-shrink-0 opacity-0 transition-all duration-200 group-hover/collapsible:opacity-100 group-data-[state=open]/collapsible:hidden group-data-[state=closed]/collapsible:block" />
                <span className="ml-2 transition-all duration-200 group-data-[collapsible=icon]:opacity-0">
                  Blocks
                </span>
              </div>
            </SidebarGroupLabel>
          </CollapsibleTrigger>

          <CollapsibleContent>
            <SidebarGroupContent>
              <SidebarMenu>
                {filteredBlocks.map((item) => {
                  const Icon = getIconComponent(item);
                  return (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === `/registry/${item.name}`}
                        tooltip={item.title}
                      >
                        <Link
                          onClick={() => setOpenMobile(false)}
                          href={`/registry/${item.name}`}
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

      <Collapsible defaultOpen={true} className="group/collapsible" id="components">
        <SidebarGroup>
          <CollapsibleTrigger className="w-full">
            <SidebarGroupLabel className="flex cursor-pointer items-center justify-between">
              <div className="relative flex min-w-0 items-center">
                <Component className="size-3 flex-shrink-0 transition-opacity duration-200 group-hover/collapsible:opacity-0" />
                <ChevronDown className="absolute size-3 flex-shrink-0 opacity-0 transition-all duration-200 group-hover/collapsible:opacity-100 group-data-[state=open]/collapsible:block group-data-[state=closed]/collapsible:hidden" />
                <ChevronRight className="absolute size-3 flex-shrink-0 opacity-0 transition-all duration-200 group-hover/collapsible:opacity-100 group-data-[state=open]/collapsible:hidden group-data-[state=closed]/collapsible:block" />
                <span className="ml-2 transition-all duration-200 group-data-[collapsible=icon]:opacity-0">
                  Components
                </span>
              </div>
            </SidebarGroupLabel>
          </CollapsibleTrigger>

          <CollapsibleContent>
            <SidebarGroupContent>
              <SidebarMenu>
                {filteredComponents.map((item) => {
                  const Icon = getIconComponent(item);
                  return (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === `/registry/${item.name}`}
                        tooltip={item.title}
                      >
                        <Link
                          onClick={() => setOpenMobile(false)}
                          href={`/registry/${item.name}`}
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

      <Collapsible defaultOpen={true} className="group/collapsible" id="ui-primitives">
        <SidebarGroup>
          <CollapsibleTrigger className="w-full">
            <SidebarGroupLabel className="flex cursor-pointer items-center justify-between">
              <div className="relative flex min-w-0 items-center">
                <ToyBrick className="size-3 flex-shrink-0 transition-opacity duration-200 group-hover/collapsible:opacity-0" />
                <ChevronDown className="absolute size-3 flex-shrink-0 opacity-0 transition-all duration-200 group-hover/collapsible:opacity-100 group-data-[state=open]/collapsible:block group-data-[state=closed]/collapsible:hidden" />
                <ChevronRight className="absolute size-3 flex-shrink-0 opacity-0 transition-all duration-200 group-hover/collapsible:opacity-100 group-data-[state=open]/collapsible:hidden group-data-[state=closed]/collapsible:block" />
                <span className="ml-2 transition-all duration-200 group-data-[collapsible=icon]:opacity-0">
                  UI Primitives
                </span>
              </div>
            </SidebarGroupLabel>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarGroupContent>
              <SidebarMenu>
                {filteredUiItems.map((item) => {
                  const Icon = getIconComponent(item);
                  return (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === `/registry/${item.name}`}
                        tooltip={item.title}
                      >
                        <Link
                          onClick={() => setOpenMobile(false)}
                          href={`/registry/${item.name}`}
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
    </ScrollArea>
  )
}