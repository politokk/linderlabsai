"use client"

import type * as React from "react"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { ComponentCopyButton } from "@/components/display/component-copy-button"
import type { Component } from "@/components/display/component-display"
import { getIconForLanguageExtension } from "@/components/icons/icons"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { OpenInV0Button } from "@/components/display/open-in-v0-button"
import { Code } from "lucide-react"
export function ComponentCodeViewer({
  component,
  className,
  icon,
}: {
  component: Component
  icon?: React.ReactNode
} & React.ComponentProps<"div">) {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const button = (
    <Button size="iconSm" variant="ghost">
      <Code className="size-3.5 text-muted-foreground" />
    </Button>
  )

  function getComponentTitle(name: string) {
    return name.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())
  }

  const content = (
    <div className="flex min-h-0 flex-1 flex-col gap-0">
      <div className="flex min-w-0 flex-col overflow-hidden">
        <figure data-rehype-pretty-code-figure="" className="mt-0 flex h-full min-w-0 flex-col overflow-hidden">
          <figcaption
            className="text-foreground [&>svg]:text-foreground flex h-12 shrink-0 items-center gap-2 border-b py-2 pr-2 pl-4 [&>svg]:size-4 [&>svg]:opacity-70"
            data-language="tsx"
          >
            {getIconForLanguageExtension("tsx")}
            {component.name}
            <div className="ml-auto flex items-center gap-2">
              <ComponentCopyButton name={component.name} code={component.code} />
              <OpenInV0Button name={component.registryName} className="rounded-sm" variant="icon" />
            </div>
          </figcaption>
          <div
            dangerouslySetInnerHTML={{
              __html: component.highlightedCode,
            }}
            className="no-scrollbar overflow-y-auto"
          />
        </figure>
      </div>
    </div>
  )

  if (!isDesktop) {
    return (
      <Drawer>
        <DrawerTrigger asChild>{button}</DrawerTrigger>
        <DrawerContent
          className={cn("flex max-h-[80vh] flex-col sm:max-h-[90vh] [&>div.bg-muted]:shrink-0", className)}
        >
          <DrawerHeader className="sr-only">
            <DrawerTitle>Code</DrawerTitle>
            <DrawerDescription>View the code for the component.</DrawerDescription>
          </DrawerHeader>
          <div className="flex h-full flex-col overflow-auto">{content}</div>
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <Sheet>
      <SheetTrigger asChild>{button}</SheetTrigger>
      <SheetContent
        side="right"
        className={cn(
          "flex flex-col gap-0 border-l-0 p-0 sm:max-w-sm md:w-[700px] md:max-w-[700px] dark:border-l",
          className,
        )}
      >
        <SheetHeader className="sr-only">
          <SheetTitle>Code</SheetTitle>
          <SheetDescription>View the code for the component.</SheetDescription>
        </SheetHeader>
        {content}
      </SheetContent>
    </Sheet>
  )
}