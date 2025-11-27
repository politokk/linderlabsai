import SheetDemo from "@/components/demos/ui/sheet/sheet-demo";
import SheetSide from "@/components/demos/ui/sheet/sheet-side";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export default function sheet() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Sheet" icon="PanelBottom">
          <SheetDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Sheet Side" icon="PanelRight">
          <SheetSide />
        </ComponentWrapper>
      </div>
    </div>
  )
}