"use client";

import {
  Home,
  Menu,
  Figma,
  Component,
} from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
  SidebarRail,
} from "@/components/ui/sidebar";
import { getBlocks, getComponents, getUIPrimitives } from "@/lib/registry";
import { NavUser } from "./nav-user";
import { SearchForm } from "./search-form";
import { SearchCommand } from "./search-command";
import { TeamSwitcher } from "./team-switcher";
import { NavMain } from "./nav-main";
import { NavRegistry } from "./nav-registry";

const data = {
  user: {
    name: "Linder",
    email: "hello@linderlabs.com",
    avatar: "/linderavatar.png",
  },
  teams: [
    {
      name: "LinderLabs",
      accent: "UI",
      plan: "AI",
      avatar: "/orbs/orb-3.mp4",
    }
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
    {
      title: "Components",
      path: "/components",
      icon: Component,
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
      setTimeout(() => {
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
    }, 100);
    } else {
      setTimeout(() => {
      setFilteredUiItems(uiItems);
      setFilteredComponents(componentItems);
      setFilteredBlocks(blockItems);
    }, 100);
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
        <ScrollArea className="h-full w-full pr-2">
          <NavMain items={data.navMain} />
          <NavRegistry
            filteredBlocks={filteredBlocks}
            filteredComponents={filteredComponents}
            filteredUiItems={filteredUiItems}
          />
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