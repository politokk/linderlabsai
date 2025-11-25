"use client"

import { Badge } from "@/components/ui/badge";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { Orb } from "./themes/orb";

export function Logo() {
  const { state } = useSidebar();
  
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" className="group-data-[collapsible=icon]:!p-0 group-data-[collapsible=icon]:!size-8">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg overflow-hidden">
             <Orb
                src="/orbs/orb-1.mp4"
                size={32}
                hueDeg={40}
                saturate={2}
                className="size-8"
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