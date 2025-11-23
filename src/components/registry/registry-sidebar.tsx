"use client";

import {
  Blocks,
  ChevronDown,
  ChevronRight,
  Command,
  Component,
  GalleryVerticalEnd,
  Home,
  Menu,
  ToyBrick,
  AudioWaveform,
  Figma,
  type LucideIcon,
} from "lucide-react";
import * as LucideIcons from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
  SidebarRail,
} from "@/components/ui/sidebar";
import { getBlocks, getComponents, getUIPrimitives } from "@/lib/registry";
import { NavUser } from "./nav-user";
import { SearchForm } from "./search-form";
import { SearchCommand } from "./search-command";
import { TeamSwitcher } from "./team-switcher";
import { NavMain } from "./nav-main";

const data = {
  user: {
    name: "Linder",
    email: "hello@linderlabs.com",
    avatar: "/linderavatar.png",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Home",
      path: "/",
      icon: Home,
    },
    {
      title: "Design Tokens",
      path: "/tokens",
      icon: Figma,
    },
  ],
};

const uiItems = getUIPrimitives();
const componentItems = getComponents();
const blockItems = getBlocks();

// Function to get icon component from registry data
function getIconComponent(component: RegistryComponent): LucideIcon {
  if (component.icon && LucideIcons[component.icon as keyof typeof LucideIcons]) {
    return LucideIcons[component.icon as keyof typeof LucideIcons] as LucideIcon;
  }
  
  // Fallback icons based on component type
  switch (component.type) {
    case "registry:block":
      return Blocks;
    case "registry:component":
      return Component;
    case "registry:ui":
      return ToyBrick;
    default:
      return Component;
  }
}

export function MobileSidebarTrigger() {
  const { setOpenMobile } = useSidebar();

  return (
    <div className="absolute top-8 right-4 md:hidden">
      <Button aria-label="Open menu" onClick={() => setOpenMobile(true)}>
        <Menu className="size-5" />
      </Button>
    </div>
  );
}

export function RegistrySidebar() {
  const pathname = usePathname();

  const { setOpenMobile } = useSidebar();

  const [searchTerm, setSearchTerm] = useState("");
  const [commandOpen, setCommandOpen] = useState(false);
  const [filteredUiItems, setFilteredUiItems] = useState(uiItems);
  const [filteredComponents, setFilteredComponents] = useState(componentItems);
  const [filteredBlocks, setFilteredBlocks] = useState(blockItems);

  // Combine all items for search command
  const allItems = useMemo(() => [
    ...blockItems,
    ...componentItems,
    ...uiItems,
  ], []);

  useEffect(() => {
    if (searchTerm) {
      setFilteredUiItems(
        uiItems.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      );
      setFilteredComponents(
        componentItems.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      );
      setFilteredBlocks(
        blockItems.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
      );
    } else {
      setFilteredUiItems(uiItems);
      setFilteredComponents(componentItems);
      setFilteredBlocks(blockItems);
    }
  }, [searchTerm]);

  return (
    <Sidebar collapsible="icon">
      <SidebarRail />
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <SearchForm 
          onSearchChange={setSearchTerm}
          onOpenCommand={() => setCommandOpen(true)}
        />
      </SidebarHeader>
      
      <SidebarContent>
        <NavMain items={data.navMain} />
        
        <ScrollArea className="h-full w-full pr-2">
          <Collapsible defaultOpen={true} className="group/collapsible" id="blocks">
            <SidebarGroup>
              <CollapsibleTrigger className="w-full">
                <SidebarGroupLabel className="flex cursor-pointer items-center justify-between">
                  <div className="relative flex min-w-0 items-center">
                    <Blocks className="size-3 flex-shrink-0 transition-opacity duration-200 group-hover/collapsible:opacity-0" />
                    <ChevronDown className="absolute size-3 flex-shrink-0 opacity-0 transition-all duration-200 group-hover/collapsible:opacity-100 group-data-[state=open]/collapsible:block group-data-[state=closed]/collapsible:hidden" />
                    <ChevronRight className="absolute size-3 flex-shrink-0 opacity-0 transition-all duration-200 group-hover/collapsible:opacity-100 group-data-[state=open]/collapsible:hidden group-data-[state=closed]/collapsible:block" />
                    <span className="ml-2 transition-all duration-200 group-data-[collapsible=icon]:opacity-0">
                      Blocks
                    </span>
                  </div>
                </SidebarGroupLabel>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {filteredBlocks.map((item) => {
                      const Icon = getIconComponent(item);
                      return (
                        <SidebarMenuItem key={item.name}>
                          <SidebarMenuButton
                            asChild
                            isActive={pathname === `/registry/${item.name}`}
                            tooltip={item.title}
                          >
                            <Link
                              onClick={() => setOpenMobile(false)}
                              href={`/registry/${item.name}`}
                            >
                              <Icon className="size-4" />
                              {item.title}
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      );
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>

          <Collapsible defaultOpen={true} className="group/collapsible" id="components">
            <SidebarGroup>
              <CollapsibleTrigger className="w-full">
                <SidebarGroupLabel className="flex cursor-pointer items-center justify-between">
                  <div className="relative flex min-w-0 items-center">
                    <Component className="size-3 flex-shrink-0 transition-opacity duration-200 group-hover/collapsible:opacity-0" />
                    <ChevronDown className="absolute size-3 flex-shrink-0 opacity-0 transition-all duration-200 group-hover/collapsible:opacity-100 group-data-[state=open]/collapsible:block group-data-[state=closed]/collapsible:hidden" />
                    <ChevronRight className="absolute size-3 flex-shrink-0 opacity-0 transition-all duration-200 group-hover/collapsible:opacity-100 group-data-[state=open]/collapsible:hidden group-data-[state=closed]/collapsible:block" />
                    <span className="ml-2 transition-all duration-200 group-data-[collapsible=icon]:opacity-0">
                      Components
                    </span>
                  </div>
                </SidebarGroupLabel>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {filteredComponents.map((item) => {
                      const Icon = getIconComponent(item);
                      return (
                        <SidebarMenuItem key={item.name}>
                          <SidebarMenuButton
                            asChild
                            isActive={pathname === `/registry/${item.name}`}
                            tooltip={item.title}
                          >
                            <Link
                              onClick={() => setOpenMobile(false)}
                              href={`/registry/${item.name}`}
                            >
                              <Icon className="size-4" />
                              {item.title}
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      );
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>

          <Collapsible defaultOpen={true} className="group/collapsible" id="ui-primitives">
            <SidebarGroup>
              <CollapsibleTrigger className="w-full">
                <SidebarGroupLabel className="flex cursor-pointer items-center justify-between">
                  <div className="relative flex min-w-0 items-center">
                    <ToyBrick className="size-3 flex-shrink-0 transition-opacity duration-200 group-hover/collapsible:opacity-0" />
                    <ChevronDown className="absolute size-3 flex-shrink-0 opacity-0 transition-all duration-200 group-hover/collapsible:opacity-100 group-data-[state=open]/collapsible:block group-data-[state=closed]/collapsible:hidden" />
                    <ChevronRight className="absolute size-3 flex-shrink-0 opacity-0 transition-all duration-200 group-hover/collapsible:opacity-100 group-data-[state=open]/collapsible:hidden group-data-[state=closed]/collapsible:block" />
                    <span className="ml-2 transition-all duration-200 group-data-[collapsible=icon]:opacity-0">
                      UI Primitives
                    </span>
                  </div>
                </SidebarGroupLabel>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {filteredUiItems.map((item) => {
                      const Icon = getIconComponent(item);
                      return (
                        <SidebarMenuItem key={item.name}>
                          <SidebarMenuButton
                            asChild
                            isActive={pathname === `/registry/${item.name}`}
                            tooltip={item.title}
                          >
                            <Link
                              onClick={() => setOpenMobile(false)}
                              href={`/registry/${item.name}`}
                            >
                              <Icon className="size-4" />
                              {item.title}
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      );
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        </ScrollArea>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex justify-end">
          <NavUser user={data.user} />
        </div>
      </SidebarFooter>

      <SearchCommand
        open={commandOpen}
        onOpenChange={setCommandOpen}
        searchableItems={allItems}
      />
    </Sidebar>
  );
}