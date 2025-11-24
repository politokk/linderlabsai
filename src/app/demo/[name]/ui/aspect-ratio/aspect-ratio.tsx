import { ComponentWrapper } from "@/components/display/component-wrapper";
import AspectRatioWideDemo from "./aspect-ratio-wide-demo";
import AspectRatioSquareDemo from "./aspect-ratio-square-demo";
  
export default function aspectRatio() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Aspect Ratio Wide" icon="RectangleHorizontalIcon">
          <AspectRatioWideDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Aspect Ratio Square" icon="SquareIcon">
          <AspectRatioSquareDemo />
        </ComponentWrapper>
      </div>
    </div>
  )
}
