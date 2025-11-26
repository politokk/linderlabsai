"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Blocks, Component, ToyBrick, ChevronRight, type LucideIcon } from "lucide-react"
import * as LucideIcons from "lucide-react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

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
function getIconComponent(component: { icon?: string; type: string }): LucideIcon {
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
  const [openGroups, setOpenGroups] = React.useState({
    blocks: true,
    components: true,
    uiPrimitives: true,
  })

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

  const toggleGroup = (group: keyof typeof openGroups) => {
    setOpenGroups(prev => ({ ...prev, [group]: !prev[group] }))
  }

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search components..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        
        {blocks.length > 0 && (
          <Collapsible
            open={openGroups.blocks}
            onOpenChange={() => toggleGroup('blocks')}
          >
            <CollapsibleTrigger className="flex w-full items-center justify-between gap-2 px-2 py-1.5 text-sm font-medium hover:bg-accent">
              <div className="flex items-center gap-2">
                <Blocks className="size-4" />
                <span>Blocks</span>
              </div>
              <ChevronRight 
                className={`size-4 transition-transform ${openGroups.blocks ? 'rotate-90' : ''}`}
              />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CommandGroup>
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
            </CollapsibleContent>
          </Collapsible>
        )}

        {components.length > 0 && (
          <Collapsible
            open={openGroups.components}
            onOpenChange={() => toggleGroup('components')}
          >
            <CollapsibleTrigger className="flex w-full items-center justify-between gap-2 px-2 py-1.5 text-sm font-medium hover:bg-accent">
              <div className="flex items-center gap-2">
                <Component className="size-4" />
                <span>Components</span>
              </div>
              <ChevronRight 
                className={`size-4 transition-transform ${openGroups.components ? 'rotate-90' : ''}`}
              />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CommandGroup>
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
            </CollapsibleContent>
          </Collapsible>
        )}

        {uiPrimitives.length > 0 && (
          <Collapsible
            open={openGroups.uiPrimitives}
            onOpenChange={() => toggleGroup('uiPrimitives')}
          >
            <CollapsibleTrigger className="flex w-full items-center justify-between gap-2 px-2 py-1.5 text-sm font-medium hover:bg-accent">
              <div className="flex items-center gap-2">
                <ToyBrick className="size-4" />
                <span>UI</span>
              </div>
              <ChevronRight 
                className={`size-4 transition-transform ${openGroups.uiPrimitives ? 'rotate-90' : ''}`}
              />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CommandGroup>
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
            </CollapsibleContent>
          </Collapsible>
        )}
      </CommandList>
    </CommandDialog>
  )
}