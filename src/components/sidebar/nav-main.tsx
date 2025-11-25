"use client"

import { ChevronRight, ChevronDown, ChevronsUpDown, Check, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { PaletteIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import * as React from "react"
import { usePathname } from "next/navigation"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
      icon?: LucideIcon
    }[]
  }[]
}) {
  const pathname = usePathname()
  const { state } = useSidebar()
  const [openCombobox, setOpenCombobox] = React.useState<string | null>(null)

  return (
    <Collapsible defaultOpen={true} className="group/collapsible">
      <SidebarGroup>
        <CollapsibleTrigger className="w-full">
          <SidebarGroupLabel className="flex cursor-pointer items-center justify-between">
            <div className="relative flex min-w-0 items-center">
              <PaletteIcon className="size-3 flex-shrink-0 transition-opacity duration-200 group-hover/collapsible:opacity-0" />
              <ChevronDown className="absolute size-3 flex-shrink-0 opacity-0 transition-all duration-200 group-hover/collapsible:opacity-100 group-data-[state=open]/collapsible:block group-data-[state=closed]/collapsible:hidden" />
              <ChevronRight className="absolute size-3 flex-shrink-0 opacity-0 transition-all duration-200 group-hover/collapsible:opacity-100 group-data-[state=open]/collapsible:hidden group-data-[state=closed]/collapsible:block" />
              <span className="ml-2 transition-all duration-200 group-data-[collapsible=icon]:opacity-0">
                Platform
              </span>
            </div>
          </SidebarGroupLabel>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <SidebarMenu>
            {items.map((item) => (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  {state === "collapsed" ? (
                    <Popover
                      open={openCombobox === item.title}
                      onOpenChange={(open) =>
                        setOpenCombobox(open ? item.title : null)
                      }
                    >
                      <PopoverTrigger asChild>
                        <SidebarMenuButton
                          tooltip={item.title}
                          role="combobox"
                          aria-expanded={openCombobox === item.title}
                          className="justify-between"
                        >
                          {item.icon && <item.icon />}
                          <span>{item.title}</span>
                          <ChevronsUpDown className="ml-auto size-4 shrink-0 opacity-50" />
                        </SidebarMenuButton>
                      </PopoverTrigger>
                      <PopoverContent
                        side="right"
                        align="start"
                        className="w-64 p-0"
                      >
                        <Command>
                          <CommandInput
                            placeholder={`Search ${item.title.toLowerCase()}...`}
                            className="h-9"
                          />
                          <CommandList>
                            <CommandEmpty>No items found.</CommandEmpty>
                            <CommandGroup heading={item.title}>
                              {item.items?.map((subItem) => (
                                <CommandItem
                                  key={subItem.title}
                                  value={subItem.title}
                                  onSelect={() => {
                                    setOpenCombobox(null)
                                    window.location.href = subItem.url
                                  }}
                                >
                                  {subItem.icon && <subItem.icon />}
                                  <span>{subItem.title}</span>
                                  <Check
                                    className={cn(
                                      "ml-auto size-4",
                                      pathname === subItem.url
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  ) : (
                    <>
                      <SidebarMenuButton tooltip={item.title}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                      <SidebarMenuBadge>
                        {item.items?.length || 0}
                      </SidebarMenuBadge>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuAction
                          className="left-1.5 bg-sidebar-accent text-sidebar-accent-foreground transition-transform data-[state=open]:opacity-0 data-[state=open]:hover:opacity-100 data-[state=open]:rotate-90"
                          showOnHover
                          aria-label={`Toggle ${item.title}`}
                        >
                          <ChevronRight className="size-4" />
                        </SidebarMenuAction>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items?.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild>
                                <a href={subItem.url}>
                                  {subItem.icon && <subItem.icon />}
                                  <span>{subItem.title}</span>
                                </a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </>
                  )}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>
  )
}