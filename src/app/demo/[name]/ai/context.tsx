import { ComponentWrapper } from "@/components/display/component-wrapper"
import Context from "@/components/demos/ai/context/context";
export default function context() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Context" icon="Brain" >
          <Context />
        </ComponentWrapper>
      </div>
    </div>
  )
}