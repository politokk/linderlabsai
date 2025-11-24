
import { notFound } from "next/navigation";
import { ComponentCard } from "@/components/registry/component-card";
import { Blocks, Component, ToyBrick, type LucideIcon } from "lucide-react"
import * as LucideIcons from "lucide-react"
import { getRegistryItem, getRegistryItems } from "@/lib/registry";
import { RegistryHeader } from "@/components/registry/registry-header";
import { RegistryNavigation } from "@/components/registry/registry-navigation";
import { ComponentActions } from "@/components/registry/component-actions";
import { getActiveStyle } from "@/lib/styles";
import { getPrompt } from "@/lib/utils";
import { BlockDisplay } from "@/components/display/block-display";
import { CodePreviewToggle } from "@/components/display/code-preview-toggle"

function getIconComponent(component: { icon?: string; type?: string }): LucideIcon | null {
  if (component.icon && LucideIcons[component.icon as keyof typeof LucideIcons]) {
    return LucideIcons[component.icon as keyof typeof LucideIcons] as LucideIcon;
  }
  
  // Fallback icons based on component type
  if (component.type) {
    switch (component.type) {
      case "registry:block":
        return Blocks;
      case "registry:component":
        return Component;
      case "registry:ui":
        return ToyBrick;
    }
  }
  
  return null;
}

export async function generateStaticParams() {
  const components = getRegistryItems();

  return components.map(({ name }) => ({
    name,
  }));
}

export default async function RegistryItemPage({  
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const component = getRegistryItem(name);
  
  if (!component) {
    notFound();
  }

  const allComponents = getRegistryItems();
  const activeStyle = await getActiveStyle();

  // Get the icon component from the registry data
  const IconComponent = getIconComponent(component);
  const currentIndex = allComponents.findIndex(c => c.name === name);
  const prevComponent = currentIndex > 0 ? allComponents[currentIndex - 1] : null;
  const nextComponent = currentIndex < allComponents.length - 1 ? allComponents[currentIndex + 1] : null;
  const componentUrl = `${process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : ''}/registry/${component.name}`;
  const registryUrl = `${process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : ''}/r/${component.name}.json`;
  const npxCommand = `npx shadcn@latest add ${registryUrl}`;
  const markdown = `# ${component.title}

  ${component.description || ''}

  ## Installation
  
  \`\`\`bash
  ${npxCommand}
  \`\`\`
  
  ## Component Details
  
  - **Type**: ${component.type}
  - **Name**: ${component.name}
  - **URL**: [${componentUrl}](${componentUrl})
  - **Registry**: [${registryUrl}](${registryUrl})
  `;
  
  return (
    <div className="flex flex-col min-h-full w-full">
    <RegistryHeader componentTitle={component.title} componentIcon={component.icon} />
    <div className="flex-1 pb-0 pt-20 p-5 sm:pt-20 md:pt-20 sm:px-10 md:px-10">

      {/* Header with title, badges, and actions */}
      <div className="mb-4 px-2">
          <div className="flex flex-row sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <h1 className="flex items-center gap-3 text-muted-foreground [&_svg]:text-muted-foreground scroll-m-20 text-2xl font-semibold tracking-tight sm:text-2xl xl:text-2xl">
                {IconComponent && <IconComponent className="size-6 text-secondary-foreground" />}
                {component.title}
              </h1>
            </div>
            <div className="flex items-center gap-2 ml-auto">
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
        {/* Block Display */}
        <BlockDisplay
  name={component.name}
  styleName={activeStyle.name}
/>
      </div>

      {/* Footer navigation - sticky at bottom of content */}
      <RegistryNavigation 
        prevComponent={prevComponent}
        nextComponent={nextComponent}
      />
    </div>
       
  );
}