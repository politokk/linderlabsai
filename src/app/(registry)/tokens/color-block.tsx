"use client"

import { Check, Clipboard } from "lucide-react"
import { toast } from "sonner"

import { cn } from "@/lib/utils"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"

interface ColorBlockProps {
  name: string
  className: string
}

export function ColorBlock({ name, className }: ColorBlockProps) {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 })
  const cssVar = `var(--${className.slice(3)})`

  return (
    <button
      className={cn(
        "group relative flex aspect-[3/1] w-full cursor-pointer flex-col gap-2 sm:aspect-[2/1]",
        "[&>svg]:absolute [&>svg]:top-4 [&>svg]:right-4 [&>svg]:z-10 [&>svg]:size-4 [&>svg]:opacity-0 [&>svg]:transition-opacity"
      )}
      onClick={() => {
        copyToClipboard(cssVar)
        toast.success(`Copied ${cssVar} to clipboard.`)
      }}
    >
      {isCopied ? (
        <Check className="text-primary-foreground group-hover:opacity-100 opacity-100" />
      ) : (
        <Clipboard className="text-primary-foreground group-hover:opacity-100" />
      )}
      <div
        className={cn(
          "w-full flex-1 rounded-lg border",
          className
        )}
      />
      <div className="flex w-full flex-col items-start gap-0.5">
        <span className="text-foreground font-medium text-sm">
          {name}
        </span>
        <code className="text-muted-foreground group-hover:text-foreground font-mono text-xs transition-colors">
          --{className.slice(3)}
        </code>
      </div>
    </button>
  )
}