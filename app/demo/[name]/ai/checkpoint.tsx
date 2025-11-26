import { ComponentWrapper } from "@/components/display/component-wrapper"
import Checkpoint from "@/components/demos/ai/checkpoint/checkpoint";
export default function checkpoint() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Checkpoint" icon="Check" >
          <Checkpoint />
        </ComponentWrapper>
      </div>
    </div>
  )
}