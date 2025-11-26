"use client"

import * as React from "react"
import { BlockViewer } from "@/components/display/block-viewer"
import { ComponentPreview } from "@/components/display/component-preview"
import { cn } from "@/lib/utils"
import type { Style } from "@/lib/styles"
import type { registryItemFileSchema, registryItemSchema } from "shadcn/schema"
import type { z } from "zod"
import type { createFileTreeForRegistryItemFiles } from "@/lib/registry-server"

interface BlockDisplayClientProps {
  item: z.infer<typeof registryItemSchema>
  tree: ReturnType<typeof createFileTreeForRegistryItemFiles> | null
  highlightedFiles: (z.infer<typeof registryItemFileSchema> & {
    highlightedContent: string
  })[] | null
  styleName: Style["name"]
  hideToolbar?: boolean
}

export function BlockDisplayClient({
  item,
  tree,
  highlightedFiles,
  styleName,
  hideToolbar = false,
}: BlockDisplayClientProps) {
  return (
    <BlockViewer
      item={item}
      tree={tree}
      highlightedFiles={highlightedFiles}
      styleName={styleName}
      hideToolbar={hideToolbar}
    >
      <ComponentPreview
        name={item.name}
        styleName={styleName}
        hideCode
        className={cn(
          "my-0 **:[.preview]:h-auto **:[.preview]:p-4 **:[.preview>.p-6]:p-0",
          item.meta?.containerClassName
        )}
      />
    </BlockViewer>
  )
}