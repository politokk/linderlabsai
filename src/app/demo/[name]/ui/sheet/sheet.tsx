import SheetDemo from "./sheet-demo";
import SheetSide from "./sheet-side";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export function sheet() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Demo" icon="PanelBottom">
          <SheetDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Side" icon="PanelRight">
          <SheetSide />
        </ComponentWrapper>
      </div>
    </div>
  )
}