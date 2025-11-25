import Image from "next/image";
import { Badge } from "./ui/badge";
import { SidebarMenuButton } from "./ui/sidebar";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <SidebarMenuButton size="lg">
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
      </SidebarMenuButton>
    </div>
  );
}