import { ComponentWrapper } from "@/components/display/component-wrapper"
import ImageDemo from "@/components/demos/ai/image/image";
export default function Image() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Image" icon="Image" >
          <ImageDemo />
        </ComponentWrapper>

      </div>
    </div>
  )
}