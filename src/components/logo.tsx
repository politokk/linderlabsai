"use client"

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";

export function Logo() {
  const { state } = useSidebar();
  
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" className="group-data-[collapsible=icon]:!p-0 group-data-[collapsible=icon]:!size-8">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg overflow-hidden">
            <Image
              src="https://raw.githubusercontent.com/politokk/linderlabsai/refs/heads/main/public/orbs/orb-2.webp"
              alt="Logo"
              width={32}
              height={32}
              style={{
                filter: "hue-rotate(40deg) saturate(1.2)",
              }}
              className="size-full object-cover"
            />
          </div>
          {state !== "collapsed" && (
            <div className="flex flex-col gap-0.5 leading-none">
              <div className="flex items-center gap-1">
                <span className="font-medium">LinderLabs</span>
                <span className="text-primary font-medium">UI</span>
              </div>
              <Badge
                variant="secondary"
                className="w-fit h-4 px-1 py-0 text-[10px]"
              >
                AI
              </Badge>
            </div>
          )}
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}