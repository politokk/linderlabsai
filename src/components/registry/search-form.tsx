"use client"

import * as React from "react"
import { Search } from "lucide-react"
import { Label } from "@/components/ui/label"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function SearchForm({ 
  onSearchChange,
  searchableItems,
  ...props 
}: React.ComponentProps<"form"> & {
  onSearchChange?: (value: string) => void
  searchableItems?: Array<{ title: string; name: string; type: string }>
}) {
  const { state } = useSidebar()
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  // When sidebar is collapsed, show icon button
  if (state === "collapsed") {
    return (
      <>
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <Button
              variant="outline"
              size="iconSm"
              className="w-full"
              onClick={() => setOpen(true)}
              aria-label="Search"
            >
              <Search className="size-4" />
            </Button>
          </SidebarGroupContent>
        </SidebarGroup>

        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Search components..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {searchableItems && searchableItems.length > 0 && (
              <>
                <CommandGroup heading="Blocks">
                  {searchableItems
                    .filter((item) => item.type === "registry:block")
                    .map((item) => (
                      <CommandItem
                        key={item.name}
                        onSelect={() => {
                          router.push(`/registry/${item.name}`)
                          setOpen(false)
                        }}
                      >
                        {item.title}
                      </CommandItem>
                    ))}
                </CommandGroup>
                <CommandGroup heading="Components">
                  {searchableItems
                    .filter((item) => item.type === "registry:component")
                    .map((item) => (
                      <CommandItem
                        key={item.name}
                        onSelect={() => {
                          router.push(`/registry/${item.name}`)
                          setOpen(false)
                        }}
                      >
                        {item.title}
                      </CommandItem>
                    ))}
                </CommandGroup>
                <CommandGroup heading="UI Primitives">
                  {searchableItems
                    .filter((item) => item.type === "registry:ui")
                    .map((item) => (
                      <CommandItem
                        key={item.name}
                        onSelect={() => {
                          router.push(`/registry/${item.name}`)
                          setOpen(false)
                        }}
                      >
                        {item.title}
                      </CommandItem>
                    ))}
                </CommandGroup>
              </>
            )}
          </CommandList>
        </CommandDialog>
      </>
    )
  }

  // When sidebar is expanded, show search input
  return (
    <form {...props}>
      <SidebarGroup className="p-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput
            id="search"
            placeholder="Search the docs..."
            className="pl-8"
            onChange={(e) => onSearchChange?.(e.target.value)}
            onClick={() => setOpen(true)}
          />
          <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
        </SidebarGroupContent>
      </SidebarGroup>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search components..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {searchableItems && searchableItems.length > 0 && (
            <>
              <CommandGroup heading="Blocks">
                {searchableItems
                  .filter((item) => item.type === "registry:block")
                  .map((item) => (
                    <CommandItem
                      key={item.name}
                      onSelect={() => {
                        router.push(`/registry/${item.name}`)
                        setOpen(false)
                      }}
                    >
                      {item.title}
                    </CommandItem>
                  ))}
              </CommandGroup>
              <CommandGroup heading="Components">
                {searchableItems
                  .filter((item) => item.type === "registry:component")
                  .map((item) => (
                    <CommandItem
                      key={item.name}
                      onSelect={() => {
                        router.push(`/registry/${item.name}`)
                        setOpen(false)
                      }}
                    >
                      {item.title}
                    </CommandItem>
                  ))}
              </CommandGroup>
              <CommandGroup heading="UI Primitives">
                {searchableItems
                  .filter((item) => item.type === "registry:ui")
                  .map((item) => (
                    <CommandItem
                      key={item.name}
                      onSelect={() => {
                        router.push(`/registry/${item.name}`)
                        setOpen(false)
                      }}
                    >
                      {item.title}
                    </CommandItem>
                  ))}
              </CommandGroup>
            </>
          )}
        </CommandList>
      </CommandDialog>
    </form>
  )
}