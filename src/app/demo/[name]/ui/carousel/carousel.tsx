import CarouselDemo from "./carousel-demo";
import CarouselApiDemo from "./carousel-api";
import CarouselOrientation from "./carousel-orientation";
import CarouselPlugin from "./carousel-plugin";
import CarouselSize from "./carousel-size";
import CarouselSpacing from "./carousel-spacing";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export function carousel() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Default" icon="Images">
          <CarouselDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Api" icon="Code">
          <CarouselApiDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Orientation" icon="Compass">
          <CarouselOrientation />
        </ComponentWrapper>
        <ComponentWrapper name="Plugin" icon="Plug">
          <CarouselPlugin />
        </ComponentWrapper>
        <ComponentWrapper name="Size" icon="Maximize">
          <CarouselSize />
        </ComponentWrapper>
        <ComponentWrapper name="Spacing" icon="Space">
          <CarouselSpacing />
        </ComponentWrapper>
      </div>
    </div>
  )
}