import SidebarControlled from "@/components/demos/sidebar/sidebar-controlled";
import SidebarDemo from "@/components/demos/sidebar/sidebar-demo";
import SidebarFooter from "@/components/demos/sidebar/sidebar-footer";
import SidebarGroup from "@/components/demos/sidebar/sidebar-group";
import SidebarGroupAction from "@/components/demos/sidebar/sidebar-group-action";
import SidebarGroupCollapsible from "@/components/demos/sidebar/sidebar-group-collapsible";
import SidebarHeader from "@/components/demos/sidebar/sidebar-header";
import SidebarMenu from "@/components/demos/sidebar/sidebar-menu";
import SidebarMenuAction from "@/components/demos/sidebar/sidebar-menu-action";
import { ComponentDisplay } from "@/components/display/component-display";
import { ComponentWrapper } from "@/components/display/component-wrapper";
import { MoreVerticalIcon, MousePointerClickIcon, ChevronsUpDownIcon, PanelTopIcon, MenuIcon, PanelLeftIcon, PanelBottomIcon, GroupIcon, Gamepad2Icon } from "lucide-react";

export default function sidebar() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ComponentDisplay path="sidebar/sidebar-controlled" icon={<Gamepad2Icon />}>
          <SidebarControlled />
        </ComponentDisplay>
        <ComponentDisplay path="sidebar/sidebar-demo" icon={<PanelLeftIcon />}>
          <SidebarDemo />
        </ComponentDisplay>
        <ComponentDisplay path="sidebar/sidebar-footer" icon={<PanelBottomIcon />}>
          <SidebarFooter />
        </ComponentDisplay>
        <ComponentDisplay path="sidebar/sidebar-group" icon={<GroupIcon />}>
          <SidebarGroup />
        </ComponentDisplay>
        <ComponentDisplay path="sidebar/sidebar-group-action" icon={<MousePointerClickIcon />}>
          <SidebarGroupAction />
        </ComponentDisplay>
        <ComponentDisplay path="sidebar/sidebar-group-collapsible" icon={<ChevronsUpDownIcon />}>
          <SidebarGroupCollapsible />
        </ComponentDisplay>
        <ComponentDisplay path="sidebar/sidebar-header" icon={<PanelTopIcon />}>
          <SidebarHeader />
        </ComponentDisplay>
        <ComponentDisplay path="sidebar/sidebar-menu" icon={<MenuIcon />}>
          <SidebarMenu />
        </ComponentDisplay>
        <ComponentDisplay path="sidebar/sidebar-menu-action" icon={<MoreVerticalIcon />}>
          <SidebarMenuAction />
        </ComponentDisplay>
      </div>
    </div>
  )
}