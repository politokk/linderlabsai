"use client"

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { Orb } from "@/components/themes/orb";
import { useThemeConfig } from "@/components/themes/active-theme";
import { getOrbPropsForTheme } from "@/lib/theme-hue";

export function Logo() {
  const { state } = useSidebar();
  const { activeTheme } = useThemeConfig();
  
  // Get the orb props based on the active theme
  const orbProps = getOrbPropsForTheme(activeTheme);
  
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" className="group-data-[collapsible=icon]:!p-0 group-data-[collapsible=icon]:!size-8" asChild>
          <Link href="/">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg overflow-hidden">
               <Orb
                  src={orbProps.src}
                  size={32}
                  hueDeg={orbProps.hueDeg}
                  saturate={orbProps.saturate}
                  rotateDeg={orbProps.rotateDeg}
                  imgStyle={orbProps.imgStyle}
                  wrapperStyle={orbProps.wrapperStyle}
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
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}