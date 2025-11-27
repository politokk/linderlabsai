"use client"

import type * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { InlineCode } from "@/components/code/code-block"
import { RegistryCodeBlock } from "@/components/code/registry-code-block"
import { CodeBlockCommand } from "@/components/code/code-block-command"

function RegistrySetupContent() {
  return (
    <div className="flex flex-col gap-4 px-4 pb-4 md:px-0 md:pb-0 min-w-0">
      <div className="font-medium">
        Copy and paste the code into <InlineCode>components.json</InlineCode>
      </div>
      <div className="min-w-0 max-w-full overflow-hidden">
        <RegistryCodeBlock
          code={registrySetupCode}
          language="json"
          filename="components.json"
        />
      </div>
      <div className="font-medium">
        Then use the following command to add components:
      </div>
      <div className="min-w-0 max-w-full overflow-hidden">
        <CodeBlockCommand
          __npm__="npx shadcn@latest add @linderlabs/[component-name]"
          __yarn__="yarn shadcn@latest add @linderlabs/[component-name]"
          __pnpm__="pnpm shadcn@latest add @linderlabs/[component-name]"
          __bun__="bun shadcn@latest add @linderlabs/[component-name]"
        />
      </div>
      <div className="font-medium">
        To setup the MCP server, run the following command:
      </div>
      <div className="min-w-0 max-w-full overflow-hidden">
        <CodeBlockCommand
          __npm__="npx shadcn@latest mcp init"
          __yarn__="yarn shadcn@latest mcp init"
          __pnpm__="pnpm shadcn@latest mcp init"
          __bun__="bun shadcn@latest mcp init"
        />
      </div>
    </div>
  )
}

function RegistryIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={className}
    >
      <rect width="256" height="256" fill="none"></rect>
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      ></line>
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      ></line>
    </svg>
  )
}

export default function RegistrySetupDemo({
  className,
}: React.ComponentProps<typeof Button>) {
  return (
    <>
      {/* Mobile Drawer */}
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            variant="ghost"
            size="iconXs"
            className={cn("sm:hidden", className)}
          >
            <RegistryIcon className="size-4" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-auto max-h-[85vh] overflow-hidden">
          <DrawerHeader>
            <DrawerTitle className="flex items-center justify-center gap-2">
              <RegistryIcon className="size-4" />
              Setup Registry
            </DrawerTitle>
            <DrawerDescription className="text-center">
              Use the code below to configure the @linderlabs registry for your
              project.
            </DrawerDescription>
          </DrawerHeader>
          <div className="overflow-y-auto overflow-x-hidden min-w-0 px-0">
            <RegistrySetupContent />
          </div>
        </DrawerContent>
      </Drawer>

      {/* Desktop Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            size="iconXs"
            className={cn("hidden sm:flex", className)}
          >
            <RegistryIcon className="size-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="md:max-w-4xl max-w-[calc(100vw-2rem)] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <RegistryIcon className="size-4" />
              Setup Registry
            </DialogTitle>
            <DialogDescription>
              Use the code below to configure the @linderlabs registry for your
              project.
            </DialogDescription>
          </DialogHeader>
          <div className="overflow-y-auto overflow-x-hidden min-w-0">
            <RegistrySetupContent />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

const registrySetupCode = `"registries": {
  "@linderlabs": "${"https://linderlabsai.vercel.app"}/r/{name}.json"
}
`