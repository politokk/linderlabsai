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


export default function sidebar() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentDisplay name="Sidebar Controlled" styleName="new-york-v4" icon="Gamepad2">
          <SidebarControlled />
        </ComponentDisplay>
        <ComponentDisplay name="Sidebar Demo" styleName="new-york-v4" icon="PanelLeft">
          <SidebarDemo />
        </ComponentDisplay>
        <ComponentDisplay name="Sidebar Footer" styleName="new-york-v4" icon="PanelBottom">
          <SidebarFooter />
        </ComponentDisplay>
        <ComponentDisplay name="Sidebar Group" styleName="new-york-v4" icon="Group">
          <SidebarGroup />
        </ComponentDisplay>
        <ComponentDisplay name="Sidebar Group Action" styleName="new-york-v4" icon="MousePointerClick">
          <SidebarGroupAction />
        </ComponentDisplay>
        <ComponentDisplay name="Sidebar Group Collapsible" styleName="new-york-v4" icon="ChevronsUpDown">
          <SidebarGroupCollapsible />
        </ComponentDisplay>
        <ComponentDisplay name="Sidebar Header" styleName="new-york-v4" icon="PanelTop">
          <SidebarHeader />
        </ComponentDisplay>
        <ComponentDisplay name="Sidebar Menu" styleName="new-york-v4" icon="Menu">
          <SidebarMenu />
        </ComponentDisplay>
        <ComponentDisplay name="Sidebar Menu Action" styleName="new-york-v4" icon="MoreVertical">
          <SidebarMenuAction />
        </ComponentDisplay>
      </div>
    </div>
  )
}