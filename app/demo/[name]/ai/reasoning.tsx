import { ComponentWrapper } from "@/components/display/component-wrapper"
import Reasoning from "@/components/demos/ai/reasoning/reasoning";
import ReasoningPage from "@/components/demos/ai/reasoning/reasoning-page";
export default function reasoning() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Reasoning" icon="Brain" >
          <Reasoning />
        </ComponentWrapper>
        <ComponentWrapper name="Reasoning Page" icon="Brain" >
          <ReasoningPage />
        </ComponentWrapper>
      </div>
    </div>
  )
}   
