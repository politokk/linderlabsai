"use client"

import Link from "next/link"
import { Fullscreen, Monitor, RotateCw, Smartphone, Tablet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ViewportControlsProps {
  styleName: string
  itemName: string
  onViewportChange: (value: string) => void
  onRefresh?: () => void
}

export function ViewportControls({
  styleName,
  itemName,
  onViewportChange,
  onRefresh,
}: ViewportControlsProps) {
  return (
    <div className="h-8 items-center gap-1.5 rounded-md border p-1 shadow-none">
      <ToggleGroup
        type="single"
        defaultValue="100"
        onValueChange={onViewportChange}
        className="gap-1 *:data-[slot=toggle-group-item]:!size-6 *:data-[slot=toggle-group-item]:!rounded-sm"
      >
        <ToggleGroupItem value="100" title="Desktop">
          <Monitor />
        </ToggleGroupItem>
        <ToggleGroupItem value="60" title="Tablet">
          <Tablet />
        </ToggleGroupItem>
        <ToggleGroupItem value="30" title="Mobile">
          <Smartphone />
        </ToggleGroupItem>
        <Separator orientation="vertical" className="!h-4" />
        <Button
          size="icon"
          variant="ghost"
          className="size-6 rounded-sm p-0"
          asChild
          title="Open in New Tab"
        >
          <Link href={`/view/${styleName}/${itemName}`} target="_blank">
            <span className="sr-only">Open in New Tab</span>
            <Fullscreen />
          </Link>
        </Button>
        <Separator orientation="vertical" className="!h-4" />
        <Button
          size="icon"
          variant="ghost"
          className="size-6 rounded-sm p-0"
          title="Refresh Preview"
          onClick={onRefresh}
        >
          <RotateCw />
          <span className="sr-only">Refresh Preview</span>
        </Button>
      </ToggleGroup>
    </div>
  )
}