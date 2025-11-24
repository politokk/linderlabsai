"use client"

import * as React from "react"
import { CodePreviewToggle } from "@/components/display/code-preview-toggle"
import { ComponentActions } from "@/components/registry/component-actions"
import { RegistryNavigation } from "@/components/registry/registry-navigation"
import { BlockDisplay } from "@/components/display/block-display"
import type { LucideIcon } from "lucide-react"
import type { Style } from "@/lib/styles"

interface RegistryItemContentProps {
  component: {
    name: string
    title: string
    description?: string
    type: string
    icon?: string
  }
  markdown: string
  IconComponent: LucideIcon | null
  prevComponent: { name: string; title: string } | null
  nextComponent: { name: string; title: string } | null
  activeStyleName: Style["name"]
}

export function RegistryItemContent({
  component,
  markdown,
  IconComponent,
  prevComponent,
  nextComponent,
  activeStyleName,
}: RegistryItemContentProps) {
  const [view, setView] = React.useState<"code" | "preview">("preview")

  return (
    <>
      {/* Header with title, badges, and actions */}
      <div className="mb-4 px-2">
        <div className="flex flex-row sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <h1 className="flex items-center gap-3 text-muted-foreground [&_svg]:text-muted-foreground scroll-m-20 text-2xl font-bold tracking-tight sm:text-2xl xl:text-2xl">
              {IconComponent && <IconComponent className="size-6 text-secondary-foreground" />}
              {component.title}
            </h1>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <CodePreviewToggle view={view} onViewChange={setView} />
            <ComponentActions 
              component={component} 
              markdown={markdown}
            />
            <RegistryNavigation 
              prevComponent={prevComponent}
              nextComponent={nextComponent}
              variant="compact"
            />
          </div>
        </div>
        {/* Description */}
        {component.description && (
          <p className="text-muted-foreground font-default">
            {component.description}
          </p>
        )}
      </div>
      
      {/* Block Display with controlled view */}
      <div data-view={view}>
        <BlockDisplay
          name={component.name}
          styleName={activeStyleName}
          hideToolbar={true}
          view={view}
        />
      </div>
    </>
  )
}