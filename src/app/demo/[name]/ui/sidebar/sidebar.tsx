import SidebarControlled from "./sidebar-controlled";
import SidebarDemo from "./sidebar-demo";
import SidebarFooter from "./sidebar-footer";
import SidebarGroup from "./sidebar-group";
import SidebarGroupAction from "./sidebar-group-action";
import SidebarGroupCollapsible from "./sidebar-group-collapsible";
import SidebarHeader from "./sidebar-header";
import SidebarMenu from "./sidebar-menu";
import SidebarMenuAction from "./sidebar-menu-action";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export function sidebar() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Sidebar Controlled" icon="Gamepad2">
          <SidebarControlled />
        </ComponentWrapper>
        <ComponentWrapper name="Sidebar Demo" icon="PanelLeft">
          <SidebarDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Sidebar Footer" icon="PanelBottom">
          <SidebarFooter />
        </ComponentWrapper>
        <ComponentWrapper name="Sidebar Group" icon="Group">
          <SidebarGroup />
        </ComponentWrapper>
        <ComponentWrapper name="Sidebar Group Action" icon="MousePointerClick">
          <SidebarGroupAction />
        </ComponentWrapper>
        <ComponentWrapper name="Sidebar Group Collapsible" icon="ChevronsUpDown">
          <SidebarGroupCollapsible />
        </ComponentWrapper>
        <ComponentWrapper name="Sidebar Header" icon="PanelTop">
          <SidebarHeader />
        </ComponentWrapper>
        <ComponentWrapper name="Sidebar Menu" icon="Menu">
          <SidebarMenu />
        </ComponentWrapper>
        <ComponentWrapper name="Sidebar Menu Action" icon="MoreVertical">
          <SidebarMenuAction />
        </ComponentWrapper>
      </div>
    </div>
  )
}