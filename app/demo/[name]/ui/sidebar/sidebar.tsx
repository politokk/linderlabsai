import SidebarControlled from "@/components/demos/sidebar/sidebar-controlled";
import SidebarDemo from "@/components/demos/sidebar/sidebar-demo";
import SidebarFooter from "@/components/demos/sidebar/sidebar-footer";
import SidebarGroup from "@/components/demos/sidebar/sidebar-group";
import SidebarGroupAction from "@/components/demos/sidebar/sidebar-group-action";
import SidebarGroupCollapsible from "@/components/demos/sidebar/sidebar-group-collapsible";
import SidebarHeader from "@/components/demos/sidebar/sidebar-header";
import SidebarMenu from "@/components/demos/sidebar/sidebar-menu";
import SidebarMenuAction from "@/components/demos/sidebar/sidebar-menu-action";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export default function sidebar() {
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