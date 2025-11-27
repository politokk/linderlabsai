"use client"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { cn } from "@/lib/utils"
import { createContext, useContext } from "react"

const LinkContext = createContext<{
  href: string
  domain: string
} | null>(null)

function useLinkContext() {
  const ctx = useContext(LinkContext)
  if (!ctx) throw new Error("Link.* must be used inside <Link>")
  return ctx
}

export type LinkProps = {
  href: string
  children: React.ReactNode
}

export function Link({ href, children }: LinkProps) {
  let domain = ""
  try {
    domain = new URL(href).hostname
  } catch {
    domain = href.split("/").pop() || href
  }

  return (
    <LinkContext.Provider value={{ href, domain }}>
      <HoverCard openDelay={150} closeDelay={0}>
        {children}
      </HoverCard>
    </LinkContext.Provider>
  )
}

export type LinkTriggerProps = {
  label?: string | number
  showFavicon?: boolean
  className?: string
}

export function LinkTrigger({
  label,
  showFavicon = false,
  className,
}: LinkTriggerProps) {
    const { href, domain } = useLinkContext()
  const labelToShow = label ?? domain.replace("www.", "")

  return (
    <HoverCardTrigger asChild>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "bg-muted text-muted-foreground hover:bg-muted-foreground/30 hover:text-primary inline-flex h-5 max-w-32 items-center gap-1 overflow-hidden rounded-full py-0 text-xs leading-none no-underline transition-colors duration-150",
          showFavicon ? "pr-2 pl-1" : "px-1",
          className
        )}
      >
        {showFavicon && (
          <img
            src={`https://www.google.com/s2/favicons?sz=64&domain_url=${encodeURIComponent(
              href
            )}`}
            alt="favicon"
            width={14}
            height={14}
            className="size-3.5 rounded-full"
          />
        )}
        <span className="truncate text-center font-normal">{labelToShow}</span>
      </a>
    </HoverCardTrigger>
  )
}

export type LinkContentProps = {
  title: string
  description: string
  className?: string
}

export function LinkContent({
  title,
  description,
  className,
}: LinkContentProps) {
  const { href, domain } = useLinkContext()

  return (
    <HoverCardContent className={cn("w-80 p-0 shadow-xs", className)}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col gap-2 p-3"
      >
        <div className="flex items-center gap-1.5">
          <img
            src={`https://www.google.com/s2/favicons?sz=64&domain_url=${encodeURIComponent(
              href
            )}`}
            alt="favicon"
            className="size-4 rounded-full"
            width={16}
            height={16}
          />
          <div className="text-primary truncate text-sm">
            {domain.replace("www.", "")}
          </div>
        </div>
        <div className="line-clamp-2 text-sm font-medium">{title}</div>
        <div className="text-muted-foreground line-clamp-2 text-sm">
          {description}
        </div>
      </a>
    </HoverCardContent>
  )
}