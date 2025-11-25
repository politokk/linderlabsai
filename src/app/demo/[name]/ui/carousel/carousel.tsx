import CarouselDemo from "@/components/demos/carousel/carousel-demo";
import CarouselApiDemo from "@/components/demos/carousel/carousel-api";
import CarouselOrientation from "@/components/demos/carousel/carousel-orientation";
import CarouselPlugin from "@/components/demos/carousel/carousel-plugin";
import CarouselSize from "@/components/demos/carousel/carousel-size";
import CarouselSpacing from "@/components/demos/carousel/carousel-spacing";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export default function carousel() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Carousel" icon="Images">
          <CarouselDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Carousel Api" icon="Code">
          <CarouselApiDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Carousel Orientation" icon="Compass">
          <CarouselOrientation />
        </ComponentWrapper>
        <ComponentWrapper name="Carousel Plugin" icon="Plug">
          <CarouselPlugin />
        </ComponentWrapper>
        <ComponentWrapper name="Carousel Size" icon="Maximize">
          <CarouselSize />
        </ComponentWrapper>
        <ComponentWrapper name="Carousel Spacing" icon="Space">
          <CarouselSpacing />
        </ComponentWrapper>
      </div>
    </div>
  )
}