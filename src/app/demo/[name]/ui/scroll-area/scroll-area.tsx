import ScrollAreaDemo from "./scroll-area-demo";  
import ScrollAreaHorizontalDemo from "./scroll-area-horizontal-demo";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export function scrollArea() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Scroll Area" icon="ArrowDown">
          <ScrollAreaDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Scroll Area Horizontal" icon="ArrowRight">
          <ScrollAreaHorizontalDemo />
        </ComponentWrapper>
      </div>
    </div>
  )
}