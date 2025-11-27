import DrawerDemo from "@/components/demos/ui/drawer/drawer-demo";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export default function drawer() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Drawer" icon="SidebarOpen">
          <DrawerDemo />
        </ComponentWrapper>
      </div>
    </div>
  )
}