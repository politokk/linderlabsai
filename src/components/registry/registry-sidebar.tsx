"use client";

import {
  Blocks,
  ChevronDown,
  Command,
  Component,
  GalleryVerticalEnd,
  Home,
  Menu,
  ToyBrick,
  AudioWaveform,
  Figma,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
  const [filteredUiItems, setFilteredUiItems] = useState(uiItems);
  const [filteredComponents, setFilteredComponents] = useState(componentItems);
  const [filteredBlocks, setFilteredBlocks] = useState(blockItems);

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
        <SearchForm />
      </SidebarHeader>
      
      <SidebarContent>
        <NavMain items={data.navMain} />
        
        <ScrollArea className="h-full w-full pr-2">
          <Collapsible defaultOpen={true} className="group/collapsible">
            <SidebarGroup>
              <CollapsibleTrigger className="w-full">
                <SidebarGroupLabel className="flex cursor-pointer items-center justify-between">
                  <div className="flex min-w-0 items-center">
                    <Blocks className="size-4 flex-shrink-0" />
                    <span className="ml-2 transition-all duration-200">
                      Blocks
                    </span>
                  </div>
                  <ChevronDown className="size-4 flex-shrink-0 transition-all duration-200 group-data-[state=open]/collapsible:rotate-180" />
                </SidebarGroupLabel>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {filteredBlocks.map((item) => (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton
                          asChild
                          isActive={pathname === item.name}
                        >
                          <Link
                            onClick={() => setOpenMobile(false)}
                            href={`/registry/${item.name}`}
                          >
                            {item.title}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>

          <Collapsible defaultOpen={true} className="group/collapsible">
            <SidebarGroup>
              <CollapsibleTrigger className="w-full">
                <SidebarGroupLabel className="flex cursor-pointer items-center justify-between">
                  <div className="flex min-w-0 items-center">
                    <Component className="size-4 flex-shrink-0" />
                    <span className="ml-2 transition-all duration-200">
                      Components
                    </span>
                  </div>
                  <ChevronDown className="size-4 flex-shrink-0 transition-all duration-200 group-data-[state=open]/collapsible:rotate-180" />
                </SidebarGroupLabel>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {filteredComponents.map((item) => (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton
                          asChild
                          isActive={pathname === item.name}
                        >
                          <Link
                            onClick={() => setOpenMobile(false)}
                            href={`/registry/${item.name}`}
                          >
                            {item.title}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>

          <Collapsible defaultOpen={true} className="group/collapsible">
            <SidebarGroup>
              <CollapsibleTrigger className="w-full">
                <SidebarGroupLabel className="flex cursor-pointer items-center justify-between">
                  <div className="flex min-w-0 items-center">
                    <ToyBrick className="size-4 flex-shrink-0" />
                    <span className="ml-2 transition-all duration-200">
                      UI Primitives
                    </span>
                  </div>
                  <ChevronDown className="size-4 flex-shrink-0 transition-all duration-200 group-data-[state=open]/collapsible:rotate-180" />
                </SidebarGroupLabel>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {filteredUiItems.map((item) => (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton
                          asChild
                          isActive={pathname === item.name}
                        >
                          <Link
                            onClick={() => setOpenMobile(false)}
                            href={`/registry/${item.name}`}
                          >
                            {item.title}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
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
    </Sidebar>
  );
}