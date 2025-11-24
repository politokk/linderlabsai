"use client"

import * as React from "react"
import * as LucideIcons from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { CodePreviewToggle } from "@/components/display/code-preview-toggle"
import { ComponentActions } from "@/components/registry/component-actions"
import { RegistryNavigation } from "@/components/registry/registry-navigation"

interface RegistryItemHeaderProps {
  component: {
    name: string
    title: string
    description?: string
    type: string
    icon?: string
  }
  markdown: string
  iconName: string | null
  prevComponent: { name: string; title: string } | null
  nextComponent: { name: string; title: string } | null
}

export function RegistryItemHeader({
  component,
  markdown,
  iconName,
  prevComponent,
  nextComponent,
}: RegistryItemHeaderProps) {
  const [view, setView] = React.useState<"code" | "preview">("preview")

  // Dynamically get the icon component from the icon name
  const IconComponent = React.useMemo(() => {
    if (!iconName) return null
    return LucideIcons[iconName as keyof typeof LucideIcons] as LucideIcon | undefined
  }, [iconName])

  // Expose view state to parent via event
  React.useEffect(() => {
    const event = new CustomEvent('registry-view-change', { detail: view })
    window.dispatchEvent(event)
  }, [view])

  return (
    <div className="mb-4 px-2">
      <div className="flex flex-row sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <h1 className="flex items-center gap-3 text-muted-foreground [&_svg]:text-muted-foreground scroll-m-20 text-2xl font-semibold tracking-tight sm:text-2xl xl:text-2xl">
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
  )
}