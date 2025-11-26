import { ComponentWrapper } from "@/components/display/component-wrapper"
import Shimmer from "@/components/demos/ai/shimmer/shimmer";
import ShimmerDuration from "@/components/demos/ai/shimmer/shimmer-duration";
import ShimmerElements from "@/components/demos/ai/shimmer/shimmer-elements";
export default function shimmer() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ComponentWrapper name="Shimmer" icon="Sparkles" >
          <Shimmer />
        </ComponentWrapper>
        <ComponentWrapper name="Shimmer Duration" icon="Hourglass" >
          <ShimmerDuration />
        </ComponentWrapper>
        <ComponentWrapper name="Shimmer Elements" icon="Sparkle" >
          <ShimmerElements />
        </ComponentWrapper>
      </div>
    </div>
  )
}