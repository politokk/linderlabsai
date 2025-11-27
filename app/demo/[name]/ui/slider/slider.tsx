import SliderDemo from "@/components/demos/ui/slider/slider-demo";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export default function slider() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Slider" icon="SlidersHorizontal">
          <SliderDemo />
        </ComponentWrapper>
      </div>
    </div>
  )
}
