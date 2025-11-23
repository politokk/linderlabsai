"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Blocks, Component, ToyBrick, type LucideIcon } from "lucide-react"
import * as LucideIcons from "lucide-react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

interface SearchCommandProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  searchableItems?: Array<{ 
    title: string
    name: string
    type: string
    icon?: string
  }>
}

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

export function SearchCommand({ 
  open, 
  onOpenChange,
  searchableItems = []
}: SearchCommandProps) {
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        onOpenChange(!open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [open, onOpenChange])

  const blocks = searchableItems.filter((item) => item.type === "registry:block")
  const components = searchableItems.filter((item) => item.type === "registry:component")
  const uiPrimitives = searchableItems.filter((item) => item.type === "registry:ui")

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search components..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        
        {blocks.length > 0 && (
          <CommandGroup heading="Blocks">
            {blocks.map((item) => {
              const Icon = getIconComponent(item)
              return (
                <CommandItem
                  key={item.name}
                  onSelect={() => {
                    router.push(`/registry/${item.name}`)
                    onOpenChange(false)
                  }}
                >
                  <Icon className="mr-2 size-4" />
                  {item.title}
                </CommandItem>
              )
            })}
          </CommandGroup>
        )}

        {components.length > 0 && (
          <CommandGroup heading="Components">
            {components.map((item) => {
              const Icon = getIconComponent(item)
              return (
                <CommandItem
                  key={item.name}
                  onSelect={() => {
                    router.push(`/registry/${item.name}`)
                    onOpenChange(false)
                  }}
                >
                  <Icon className="mr-2 size-4" />
                  {item.title}
                </CommandItem>
              )
            })}
          </CommandGroup>
        )}

        {uiPrimitives.length > 0 && (
          <CommandGroup heading="UI Primitives">
            {uiPrimitives.map((item) => {
              const Icon = getIconComponent(item)
              return (
                <CommandItem
                  key={item.name}
                  onSelect={() => {
                    router.push(`/registry/${item.name}`)
                    onOpenChange(false)
                  }}
                >
                  <Icon className="mr-2 size-4" />
                  {item.title}
                </CommandItem>
              )
            })}
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  )
}