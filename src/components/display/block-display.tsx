import * as React from "react"
import type { registryItemFileSchema } from "shadcn/schema"
import type { z } from "zod"

import { highlightCode } from "@/lib/highlight-code"
import {
  createFileTreeForRegistryItemFiles,
  getRegistryItem,
} from "@/lib/registry-server"
import { BlockDisplayClient } from "@/components/display/block-display-client"
import type { Style } from "@/lib/styles"

export async function BlockDisplay({
  name,
  styleName,
  hideToolbar = false,
}: {
  name: string
  styleName: Style["name"]
  hideToolbar?: boolean
}) {
  const item = await getCachedRegistryItem(name, styleName)

  if (!item?.files) {
    return null
  }

  const [tree, highlightedFiles] = await Promise.all([
    getCachedFileTree(item.files),
    getCachedHighlightedFiles(item.files),
  ])

  return (
    <BlockDisplayClient
      item={item}
      tree={tree}
      highlightedFiles={highlightedFiles}
      styleName={styleName}
      hideToolbar={hideToolbar}
    />
  )
}

const getCachedRegistryItem = React.cache(
  async (name: string, styleName: Style["name"]) => {
    return await getRegistryItem(name, styleName)
  }
)

const getCachedFileTree = React.cache(
  async (files: Array<{ path: string; target?: string }>) => {
    if (!files) {
      return null
    }

    return await createFileTreeForRegistryItemFiles(files)
  }
)

const getCachedHighlightedFiles = React.cache(
  async (files: z.infer<typeof registryItemFileSchema>[]) => {
    return await Promise.all(
      files.map(async (file) => ({
        ...file,
        highlightedContent: await highlightCode(file.content ?? ""),
      }))
    )
  }
)