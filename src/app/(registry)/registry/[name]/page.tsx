import { notFound } from "next/navigation";
import * as LucideIcons from "lucide-react"
import { getRegistryItem, getRegistryItems } from "@/lib/registry";
import { RegistryHeader } from "@/components/registry/registry-header";
import { RegistryNavigation } from "@/components/registry/registry-navigation";
import { getActiveStyle } from "@/lib/styles";
import { RegistryItemHeader } from "./registry-item-header";
import { BlockDisplay } from "@/components/display/block-display";

function getIconName(component: { icon?: string; type?: string }): string | null {
  if (component.icon && LucideIcons[component.icon as keyof typeof LucideIcons]) {
    return component.icon;
  }
  
  // Fallback icons based on component type
  if (component.type) {
    switch (component.type) {
      case "registry:block":
        return "Blocks";
      case "registry:component":
        return "Component";
      case "registry:ui":
        return "ToyBrick";
      case "registry:ai":
        return "Brain";
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

  // Get the icon name instead of component
  const iconName = getIconName(component);
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
        {/* Client component for header with toggle */}
        <RegistryItemHeader
          component={component}
          markdown={markdown}
          iconName={iconName}
          prevComponent={prevComponent}
          nextComponent={nextComponent}
          styleName={activeStyle.name}
        />
        
        {/* Server component for block display */}
        <BlockDisplay
          name={component.name}
          styleName={activeStyle.name}
          hideToolbar={true}
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