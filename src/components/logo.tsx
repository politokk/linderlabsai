import { GalleryVerticalEnd } from "lucide-react";
import Link from "next/link";
import { SidebarMenuButton } from "./ui/sidebar";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
     <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Documentation</span>
                  <span className="">v1.0.0</span>
                </div>
              </Link>
            </SidebarMenuButton>
    </div>
  );
}
