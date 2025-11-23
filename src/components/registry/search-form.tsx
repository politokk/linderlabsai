"use client"

import type * as React from "react"
import { Search } from "lucide-react"
import { Label } from "@/components/ui/label"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

export function SearchForm({ 
  onSearchChange,
  onOpenCommand,
  ...props 
}: React.ComponentProps<"form"> & {
  onSearchChange?: (value: string) => void
  onOpenCommand?: () => void
}) {
  const { state } = useSidebar()

  // When sidebar is collapsed, show icon button
  if (state === "collapsed") {
    return (
      <SidebarGroup className="p-0 mt-4">
        <SidebarGroupContent>
          <Button
            variant="outline"
            size="iconSm"
            className="w-full"
            onClick={onOpenCommand}
            aria-label="Search"
          >
            <Search className="size-4" />
          </Button>
        </SidebarGroupContent>
      </SidebarGroup>
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
            onClick={onOpenCommand}
          />
          <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  )
}