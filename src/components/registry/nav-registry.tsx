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
  Sparkles,
  ShoppingCart,
  LogIn,
  Layers,
  type LucideIcon,
  BotMessageSquare,
} from "lucide-react"
import * as LucideIcons from "lucide-react"
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
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"

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

// Category icon mapping
const categoryIcons: Record<string, LucideIcon> = {
  brand: Sparkles,
  auth: LogIn,
  store: ShoppingCart,
  ui: ToyBrick,
  blocks: Blocks,
  ai: BotMessageSquare,
}

// Category display names
const categoryLabels: Record<string, string> = {
  brand: "Brand",
  auth: "Authentication",
  store: "Store",
  ui: "UI",
  blocks: "Blocks",
  ai: "AI",
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
}

function CategoryGroup({
  category,
  items,
  pathname,
  onItemClick,
  collapsedCategories,
  onOpenChange,
}: CategoryGroupProps) {
  const CategoryIcon = categoryIcons[category] || Layers
  const label = categoryLabels[category] || category.charAt(0).toUpperCase() + category.slice(1)
  const isOpen = !collapsedCategories.has(category)

  return (
    <Collapsible
      asChild
      open={isOpen}
      onOpenChange={(open) => onOpenChange(category, open)}
      className="group/collapsible"
    >
      <SidebarMenuItem>
        <SidebarMenuButton tooltip={label}>
          <CategoryIcon className="size-4" />
          <span>{label}</span>
        </SidebarMenuButton>
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
                        <div className=" flex items-center gap-2">
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
  const { setOpenMobile } = useSidebar()

  // Persist collapsed state
  const [collapsedCategories, setCollapsedCategories] = React.useState<Set<string>>(new Set())

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
                              <div className=" flex items-center gap-2">
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
                              <div className=" flex items-center gap-2">
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