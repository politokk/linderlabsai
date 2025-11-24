"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { useColors } from "@/hooks/use-colors"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"

const formats = [
  { key: "oklch", label: "OKLCH", example: "oklch(0.5 0.1 250)" },
  { key: "var", label: "CSS Var", example: "var(--primary)" },
  { key: "hsl", label: "HSL", example: "hsl(240 5.9% 10%)" },
  { key: "rgb", label: "RGB", example: "59 130 246" },
  { key: "hex", label: "HEX", example: "#3b82f6" },
  { key: "className", label: "Class", example: "bg-primary" },
] as const

export function TokenFormatSelector({
  className,
  ...props
}: React.ComponentProps<typeof SelectTrigger>) {
  const { format, setFormat, isLoading } = useColors()

  if (isLoading) {
    return <TokenFormatSelectorSkeleton />
  }

  return (
    <Select value={format} onValueChange={setFormat}>
      <SelectTrigger
        size="sm"
        className={cn(
          "text-secondary-foreground border-secondary shadow-none",
          className
        )}
        {...props}
      >
        <span className="font-medium">Format: </span>
        <span className="text-muted-foreground font-mono">{format}</span>
      </SelectTrigger>
      <SelectContent align="end" className="rounded-xl">
        {formats.map((fmt) => (
          <SelectItem
            key={fmt.key}
            value={fmt.key}
            className="gap-2 rounded-lg [&>span]:flex [&>span]:items-center [&>span]:gap-2"
          >
            <span className="font-medium">{fmt.label}</span>
            <span className="text-muted-foreground font-mono text-xs">
              {fmt.example}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export function TokenFormatSelectorSkeleton({
  className,
  ...props
}: React.ComponentProps<typeof Skeleton>) {
  return (
    <Skeleton
      className={cn("h-8 w-[132px] gap-1.5 rounded-md", className)}
      {...props}
    />
  )
}

