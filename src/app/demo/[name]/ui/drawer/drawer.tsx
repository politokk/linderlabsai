import DrawerDemo from "./drawer-demo";
import DrawerDialogDemo from "./drawer-dialog";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export function drawer() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Drawer" icon="SidebarOpen">
          <DrawerDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Drawer Dialog" icon="PanelLeft">
          <DrawerDialogDemo />
        </ComponentWrapper>
      </div>
    </div>
  )
}