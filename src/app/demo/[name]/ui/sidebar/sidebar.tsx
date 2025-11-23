import SidebarControlled from "./sidebar-controlled";
import SidebarDemo from "./sidebar-demo";
import SidebarFooter from "./sidebar-footer";
import SidebarGroup from "./sidebar-group";
import SidebarGroupAction from "./sidebar-group-action";
import SidebarGroupCollapsible from "./sidebar-group-collapsible";
import SidebarHeader from "./sidebar-header";
import SidebarMenu from "./sidebar-menu";
import SidebarMenuAction from "./sidebar-menu-action";
  export const sidebar = {
    name: "sidebar",
    components: {
      Controlled: <SidebarControlled/>,
      Demo: <SidebarDemo/>,
      Footer: <SidebarFooter/>,
      Group: <SidebarGroup/>,
      GroupAction: <SidebarGroupAction/>,
      GroupCollapsible: <SidebarGroupCollapsible/>,
      Header: <SidebarHeader/>,
      Menu: <SidebarMenu/>,
      MenuAction: <SidebarMenuAction/>,
    },
  };