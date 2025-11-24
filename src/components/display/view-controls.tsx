"use client"

import Link from "next/link"
import { Fullscreen, Monitor, Smartphone, Tablet } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface ViewControlsProps {
  view: "desktop" | "tablet" | "mobile" | "fullscreen"
  onViewChange: (view: "desktop" | "tablet" | "mobile" | "fullscreen") => void
  styleName?: string
  itemName?: string
}

export function ViewControls({ view, onViewChange, styleName, itemName }: ViewControlsProps) {
  const views = [
    ["desktop", Monitor, "Desktop"] as const,
    ["tablet", Tablet, "Tablet"] as const,
    ["mobile", Smartphone, "Mobile"] as const,
  ]

  return (
    <TooltipProvider>
      <div
        className="inline-flex items-center rounded-lg border p-0 shrink-0"
        data-view-toggle=""
      >
        {views.map(([key, Icon, tooltipText]) => (
          <Tooltip key={key}>
            <TooltipTrigger asChild>
              <Button
                size="iconSm"
                variant="ghost"
                aria-label={tooltipText}
                className={cn(
                  "size-6.5 rounded-full p-1.5",
                  view === key
                    ? "bg-primary-foreground text-primary [&_svg]:text-primary"
                    : "text-muted-foreground"
                )}
                onClick={() => onViewChange(key)}
              >
                <Icon className="size-full" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{tooltipText}</p>
            </TooltipContent>
          </Tooltip>
        ))}
        
        {/* Fullscreen button as a link */}
        {styleName && itemName && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="iconSm"
                variant="ghost"
                aria-label="Fullscreen"
                className={cn(
                  "size-6.5 rounded-full p-1.5",
                  view === "fullscreen"
                    ? "bg-primary-foreground text-primary [&_svg]:text-primary"
                    : "text-muted-foreground"
                )}
                asChild
              >
                <Link href={`/view/${styleName}/${itemName}`} target="_blank">
                  <Fullscreen className="size-full" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Open in New Tab</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
    </TooltipProvider>
  )
}