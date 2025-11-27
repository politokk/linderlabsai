"use client"

import * as React from "react"
import { Check, ClipboardIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { highlightCode } from "@/lib/highlight-code"
import { AddToCursor } from "@/components/registry/add-to-cursor"
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getIconForLanguageExtension } from "@/components/icons/icons"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { toast } from "sonner"

export async function copyToClipboard(value: string) {
  await navigator.clipboard.writeText(value)
}

function MCPIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M15.688 2.343a2.588 2.588 0 00-3.61 0l-9.626 9.44a.863.863 0 01-1.203 0 .823.823 0 010-1.18l9.626-9.44a4.313 4.313 0 016.016 0 4.116 4.116 0 011.204 3.54 4.3 4.3 0 013.609 1.18l.05.05a4.115 4.115 0 010 5.9l-8.706 8.537a.274.274 0 000 .393l1.788 1.754a.823.823 0 010 1.18.863.863 0 01-1.203 0l-1.788-1.753a1.92 1.92 0 010-2.754l8.706-8.538a2.47 2.47 0 000-3.54l-.05-.049a2.588 2.588 0 00-3.607-.003l-7.172 7.034-.002.002-.098.097a.863.863 0 01-1.204 0 .823.823 0 010-1.18l7.273-7.133a2.47 2.47 0 00-.003-3.537z" />
      <path d="M14.485 4.703a.823.823 0 000-1.18.863.863 0 00-1.204 0l-7.119 6.982a4.115 4.115 0 000 5.9 4.314 4.314 0 006.016 0l7.12-6.982a.823.823 0 000-1.18.863.863 0 00-1.204 0l-7.119 6.982a2.588 2.588 0 01-3.61 0 2.47 2.47 0 010-3.54l7.12-6.982z" />
    </svg>
  )
}

function MCPSetupContent({ rootUrl }: { rootUrl: string }) {
  const [tab, setTab] = React.useState("cursor")
  const [hasCopied, setHasCopied] = React.useState(false)
  const [highlightedCode, setHighlightedCode] = React.useState<string>("")

  const mcp = {
    command: "npx -y shadcn@canary registry:mcp",
    env: {
      REGISTRY_URL: `https://${rootUrl}/r/registry.json`,
    },
  }

  const mcpServer = JSON.stringify(
    {
      mcpServers: {
        shadcn: mcp,
      },
    },
    null,
    2
  )

  React.useEffect(() => {
    if (hasCopied) {
      const timer = setTimeout(() => {
        setHasCopied(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [hasCopied])

  React.useEffect(() => {
    const highlight = async () => {
      const highlighted = await highlightCode(mcpServer, "json", {
        showLineNumbers: false,
      })
      setHighlightedCode(highlighted)
    }
    highlight()
  }, [mcpServer])

  const handleCopy = () => {
    copyToClipboard(mcpServer)
    setHasCopied(true)
    toast.success("Copied to clipboard")
  }

  const filename =
    tab === "cursor" ? ".cursor/mcp.json" : ".codeium/windsurf/mcp_config.json"

  return (
    <div className="flex flex-col gap-4 px-4 pb-4 md:px-0 md:pb-0 min-w-0">
      <Tabs value={tab} onValueChange={setTab}>
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="cursor">Cursor</TabsTrigger>
            <TabsTrigger value="windsurf">Windsurf</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="cursor" className="mt-4">
          <p className="text-muted-foreground text-sm">
            Click Add to Cursor or copy and paste the code into{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              .cursor/mcp.json
            </code>
          </p>
        </TabsContent>

        <TabsContent value="windsurf" className="mt-4">
          <p className="text-muted-foreground text-sm">
            Copy and paste the code into{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              .codeium/windsurf/mcp_config.json
            </code>
          </p>
        </TabsContent>

        <figure
          data-rehype-pretty-code-figure=""
          className="!mx-0 mt-4 flex min-w-0 flex-1 flex-col border-border border-solid-1 h-auto bg-background overflow-hidden rounded-xl border"
        >
          <figcaption
            className="text-sm text-code-foreground [&_svg]:text-code-foreground flex h-12 shrink-0 items-center gap-2 border-b px-4 py-2 [&_svg]:size-4 [&_svg]:opacity-70"
            data-language="json"
          >
            {getIconForLanguageExtension("json")}
            {filename}
            <div className="ml-auto flex items-center gap-2">
              {tab === "cursor" && <AddToCursor mcp={mcp} />}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-7"
                      onClick={handleCopy}
                    >
                      {hasCopied ? (
                        <Check className="size-4" />
                      ) : (
                        <ClipboardIcon className="size-4" />
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{hasCopied ? "Copied!" : "Copy code"}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </figcaption>
          {highlightedCode ? (
            <div
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
              className="no-scrollbar overflow-y-auto overflow-x-auto px-0 text-sm [&>pre]:!bg-transparent [&>pre]:px-4 [&>pre]:py-3.5"
            />
          ) : (
            <pre className="no-scrollbar overflow-x-auto px-4 py-3.5">
              <code className="relative font-mono text-muted-foreground text-sm">
                {mcpServer}
              </code>
            </pre>
          )}
        </figure>
      </Tabs>
    </div>
  )
}

export function MCPSetup({
  rootUrl,
  className,
}: {
  rootUrl: string
} & React.ComponentProps<typeof Button>) {
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
            <MCPIcon className="size-4" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-auto max-h-[85vh] overflow-hidden">
          <DrawerHeader>
            <DrawerTitle className="flex items-center justify-center gap-2">
              <MCPIcon className="size-4" />
              Setup MCP Server
            </DrawerTitle>
            <DrawerDescription className="text-center">
              Configure the MCP server for your AI code editor.
            </DrawerDescription>
          </DrawerHeader>
          <div className="overflow-y-auto overflow-x-hidden min-w-0 px-0">
            <MCPSetupContent rootUrl={rootUrl} />
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
            <MCPIcon className="size-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="md:max-w-2xl max-w-[calc(100vw-2rem)] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <MCPIcon className="size-4" />
              Setup MCP Server
            </DialogTitle>
            <DialogDescription>
              Configure the MCP server for your AI code editor.
            </DialogDescription>
          </DialogHeader>
          <div className="overflow-y-auto overflow-x-hidden min-w-0">
            <MCPSetupContent rootUrl={rootUrl} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}