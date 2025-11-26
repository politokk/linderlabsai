import NavigationMenuDemo from "@/components/demos/navigation-menu/navigation-menu-demo";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export default function navigationMenu() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Navigation Menu" icon="Navigation" className="md:col-span-2" allowOverflow>
          <NavigationMenuDemo />
        </ComponentWrapper>
      </div>
    </div>
  )
}