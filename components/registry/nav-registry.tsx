"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Blocks,
  ChevronDown,
  ChevronRight,
  ChevronsUpDown,
  Check,
  Component,
  ToyBrick,
  Sparkles,
  ShoppingCart,
  Key,
  Layers,
  type LucideIcon,
  Wand,
  Code,
} from "lucide-react"
import * as LucideIcons from "lucide-react"
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
  SidebarGroupContent,
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
import { cn } from "@/lib/utils"

interface RegistryItem {
  name: string
  title: string
  icon?: string
  type: string
  category?: string
  isNew?: boolean
  badge?: {
    text: string
  }
}

// Category configuration with icon, label, and optional URL
interface CategoryConfig {
  icon: LucideIcon
  label: string
  url?: string
}

// Category configuration mapping
const categoryConfig: Record<string, CategoryConfig> = {
  brand: { icon: Sparkles, label: "Brand" },
  auth: { icon: Key, label: "Authentication" },
  store: { icon: ShoppingCart, label: "Store"},
  ui: { icon: Component, label: "UI" },
  blocks: { icon: Blocks, label: "Blocks" },
  ai: { icon: Wand, label: "AI", url: "/registry/ai" },
  code: { icon: Code, label: "Code" },
}

// Function to get icon component from registry data
function getIconComponent(component: RegistryItem): LucideIcon {
  if (component.icon && LucideIcons[component.icon as keyof typeof LucideIcons]) {
    return LucideIcons[component.icon as keyof typeof LucideIcons] as LucideIcon
  }

  // Fallback icons based on component type
  switch (component.type) {
    case "registry:block":
      return Blocks
    case "registry:component":
      return Component
    case "registry:ui":
      return ToyBrick
    default:
      return Component
  }
}

// Group items by category
function groupByCategory(items: RegistryItem[]): Record<string, RegistryItem[]> {
  return items.reduce((acc, item) => {
    const category = item.category || "uncategorized"
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(item)
    return acc
  }, {} as Record<string, RegistryItem[]>)
}

interface CategoryGroupProps {
  category: string
  items: RegistryItem[]
  pathname: string
  onItemClick: () => void
  collapsedCategories: Set<string>
  onOpenChange: (category: string, open: boolean) => void
  sidebarState: "expanded" | "collapsed"
  openCombobox: string | null
  setOpenCombobox: (category: string | null) => void
}

function CategoryGroup({
  category,
  items,
  pathname,
  onItemClick,
  collapsedCategories,
  onOpenChange,
  sidebarState,
  openCombobox,
  setOpenCombobox,
}: CategoryGroupProps) {
  const config = categoryConfig[category] || { 
    icon: Layers, 
    label: category.charAt(0).toUpperCase() + category.slice(1) 
  }
  const CategoryIcon = config.icon
  const label = config.label
  const categoryUrl = config.url
  const isOpen = !collapsedCategories.has(category)
  const isCategoryActive = categoryUrl ? pathname === categoryUrl : false

  return (
    <Collapsible
      asChild
      open={isOpen}
      onOpenChange={(open) => onOpenChange(category, open)}
      className="group/collapsible"
    >
      <SidebarMenuItem>
        {sidebarState === "collapsed" ? (
          <Popover
            open={openCombobox === category}
            onOpenChange={(open) => setOpenCombobox(open ? category : null)}
          >
            <PopoverTrigger asChild>
              <SidebarMenuButton
                tooltip={label}
                role="combobox"
                aria-expanded={openCombobox === category}
                className="justify-between"
                isActive={isCategoryActive}
              >
                <CategoryIcon className="size-4" />
                <span>{label}</span>
                <ChevronsUpDown className="ml-auto size-4 shrink-0 opacity-50" />
              </SidebarMenuButton>
            </PopoverTrigger>
            <PopoverContent side="right" align="start" className="w-64 p-0">
              <Command>
                <CommandInput placeholder={`Search ${label.toLowerCase()}...`} className="h-9" />
                <CommandList>
                  <CommandEmpty>No component found.</CommandEmpty>
                  <CommandGroup heading={label}>
                    {categoryUrl && (
                      <CommandItem
                        value={`view-all-${category}`}
                        onSelect={() => {
                          setOpenCombobox(null)
                          onItemClick()
                          window.location.href = categoryUrl
                        }}
                        className="font-medium"
                      >
                        <CategoryIcon className="size-4" />
                        <span>View All {label}</span>
                        <Check className={cn("ml-auto size-4", isCategoryActive ? "opacity-100" : "opacity-0")} />
                      </CommandItem>
                    )}
                    {items.map((item) => {
                      const Icon = getIconComponent(item)
                      const itemPath = `/registry/${item.name}`
                      return (
                        <CommandItem
                          key={item.name}
                          value={item.title}
                          onSelect={() => {
                            setOpenCombobox(null)
                            onItemClick()
                            window.location.href = itemPath
                          }}
                        >
                          <Icon className="size-4" />
                          <span>{item.title}</span>
                          {item.isNew && (
                            <span className="ml-auto size-2 rounded-full bg-primary border-primary-foreground border-2" />
                          )}
                          <Check
                            className={cn("ml-auto size-4", pathname === itemPath ? "opacity-100" : "opacity-0")}
                          />
                        </CommandItem>
                      )
                    })}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        ) : (
          <>
            {categoryUrl ? (
              <SidebarMenuButton 
                asChild 
                tooltip={label}
                isActive={isCategoryActive}
              >
                <Link href={categoryUrl} onClick={onItemClick}>
                  <CategoryIcon className="size-4" />
                  <span>{label}</span>
                </Link>
              </SidebarMenuButton>
            ) : (
              <SidebarMenuButton tooltip={label}>
                <CategoryIcon className="size-4" />
                <span>{label}</span>
              </SidebarMenuButton>
            )}
            <SidebarMenuBadge>{items.length}</SidebarMenuBadge>
            <CollapsibleTrigger asChild>
              <SidebarMenuAction
                className="left-1.5 bg-sidebar-accent text-sidebar-accent-foreground transition-transform data-[state=open]:opacity-0 data-[state=open]:hover:opacity-100 data-[state=open]:rotate-90"
                showOnHover
                aria-label={`Toggle ${label}`}
              >
                <ChevronRight className="size-4" />
              </SidebarMenuAction>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {items.map((item) => {
                  const Icon = getIconComponent(item)
                  return (
                    <SidebarMenuSubItem key={item.name}>
                      <SidebarMenuSubButton
                        asChild
                        isActive={pathname === `/registry/${item.name}`}
                      >
                        <Link onClick={onItemClick} href={`/registry/${item.name}`}>
                          <Icon className="size-3.5" />
                          <span>{item.title}</span>
                          {(item.badge || item.isNew) && (
                            <div className="flex items-center gap-2">
                              {item.badge && (
                                <SidebarMenuBadge>{item.badge.text}</SidebarMenuBadge>
                              )}
                              {item.isNew && (
                                <span className="flex size-2 shrink-0 rounded-full bg-primary border-2 border-primary-foreground" />
                              )}
                            </div>
                          )}
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  )
                })}
              </SidebarMenuSub>
            </CollapsibleContent>
          </>
        )}
      </SidebarMenuItem>
    </Collapsible>
  )
}

interface NavRegistryProps {
  filteredBlocks: RegistryItem[]
  filteredComponents: RegistryItem[]
  filteredUiItems: RegistryItem[]
}

export function NavRegistry({
  filteredBlocks,
  filteredComponents,
  filteredUiItems,
}: NavRegistryProps) {
  const pathname = usePathname()
  const { setOpenMobile, state } = useSidebar()

  // Persist collapsed state
  const [collapsedCategories, setCollapsedCategories] = React.useState<Set<string>>(new Set())
  const [openCombobox, setOpenCombobox] = React.useState<string | null>(null)

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem("sidebar-registry-collapsed")
      if (stored) {
        setCollapsedCategories(new Set(JSON.parse(stored)))
      }
    } catch {
      // Ignore localStorage errors
    }
  }, [])

  const handleOpenChange = React.useCallback((category: string, open: boolean) => {
    setCollapsedCategories((prev) => {
      const next = new Set(prev)
      if (open) {
        next.delete(category)
      } else {
        next.add(category)
      }
      try {
        localStorage.setItem("sidebar-registry-collapsed", JSON.stringify(Array.from(next)))
      } catch {
        // Ignore localStorage errors
      }
      return next
    })
  }, [])

  const handleItemClick = () => setOpenMobile(false)

  // Group components by category
  const groupedComponents = React.useMemo(
    () => groupByCategory(filteredComponents),
    [filteredComponents]
  )

  // Group UI items by category
  const groupedUiItems = React.useMemo(
    () => groupByCategory(filteredUiItems),
    [filteredUiItems]
  )

  // Sort categories for consistent ordering
  const componentCategories = Object.keys(groupedComponents).sort()
  const uiCategories = Object.keys(groupedUiItems).sort()

  return (
    <>
      {/* Blocks Section */}
      <Collapsible defaultOpen className="group/collapsible" id="blocks">
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
                  const Icon = getIconComponent(item)
                  return (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === `/registry/${item.name}`}
                        tooltip={item.title}
                      >
                        <Link onClick={handleItemClick} href={`/registry/${item.name}`}>
                          <Icon className="size-4" />
                          {item.title}
                          {(item.badge || item.isNew) && (
                            <div className="flex items-center gap-2">
                              {item.badge && (
                                <SidebarMenuBadge>{item.badge.text}</SidebarMenuBadge>
                              )}
                              {item.isNew && (
                                <span className="flex size-2 rounded-full bg-primary border-2 border-primary-foreground" />
                              )}
                            </div>
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </CollapsibleContent>
        </SidebarGroup>
      </Collapsible>

      {/* Components Section - Grouped by Category */}
      <Collapsible defaultOpen className="group/collapsible" id="components">
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
                {componentCategories.map((category) => (
                  <CategoryGroup
                    key={category}
                    category={category}
                    items={groupedComponents[category]}
                    pathname={pathname}
                    onItemClick={handleItemClick}
                    collapsedCategories={collapsedCategories}
                    onOpenChange={handleOpenChange}
                    sidebarState={state}
                    openCombobox={openCombobox}
                    setOpenCombobox={setOpenCombobox}
                  />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </CollapsibleContent>
        </SidebarGroup>
      </Collapsible>

      {/* UI Primitives Section - Grouped by Category */}
      <Collapsible defaultOpen className="group/collapsible" id="ui-primitives">
        <SidebarGroup>
          <CollapsibleTrigger className="w-full">
            <SidebarGroupLabel className="flex cursor-pointer items-center justify-between">
              <div className="relative flex min-w-0 items-center">
                <ToyBrick className="size-3 flex-shrink-0 transition-opacity duration-200 group-hover/collapsible:opacity-0" />
                <ChevronDown className="absolute size-3 flex-shrink-0 opacity-0 transition-all duration-200 group-hover/collapsible:opacity-100 group-data-[state=open]/collapsible:block group-data-[state=closed]/collapsible:hidden" />
                <ChevronRight className="absolute size-3 flex-shrink-0 opacity-0 transition-all duration-200 group-hover/collapsible:opacity-100 group-data-[state=open]/collapsible:hidden group-data-[state=closed]/collapsible:block" />
                <span className="ml-2 transition-all duration-200 group-data-[collapsible=icon]:opacity-0">
                  UI
                </span>
              </div>
            </SidebarGroupLabel>
          </CollapsibleTrigger>

          <CollapsibleContent>
            <SidebarGroupContent>
              <SidebarMenu>
                {uiCategories.length > 1 ? (
                  // If multiple categories, show grouped
                  uiCategories.map((category) => (
                    <CategoryGroup
                      key={category}
                      category={category}
                      items={groupedUiItems[category]}
                      pathname={pathname}
                      onItemClick={handleItemClick}
                      collapsedCategories={collapsedCategories}
                      onOpenChange={handleOpenChange}
                      sidebarState={state}
                      openCombobox={openCombobox}
                      setOpenCombobox={setOpenCombobox}
                    />
                  ))
                ) : (
                  // If single category (all "ui"), show flat list
                  filteredUiItems.map((item) => {
                    const Icon = getIconComponent(item)
                    return (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton
                          asChild
                          isActive={pathname === `/registry/${item.name}`}
                          tooltip={item.title}
                        >
                          <Link onClick={handleItemClick} href={`/registry/${item.name}`}>
                            <Icon className="size-4" />
                            {item.title}
                            {(item.badge || item.isNew) && (
                              <div className="flex items-center gap-2">
                                {item.badge && (
                                  <SidebarMenuBadge>{item.badge.text}</SidebarMenuBadge>
                                )}
                                {item.isNew && (
                                  <span className="flex size-2 rounded-full bg-primary border-2 border-primary-foreground" />
                                )}
                              </div>
                            )}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  })
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </CollapsibleContent>
        </SidebarGroup>
      </Collapsible>
    </>
  )
}