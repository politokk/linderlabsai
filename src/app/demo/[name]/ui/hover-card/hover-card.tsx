import HoverCardDemo from "./hover-card-demo";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export default function hoverCard() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Hover Card" icon="MousePointer">
          <HoverCardDemo />
        </ComponentWrapper>
      </div>
    </div>
  )
}