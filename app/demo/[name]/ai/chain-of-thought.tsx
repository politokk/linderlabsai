import { ComponentWrapper } from "@/components/display/component-wrapper"
import ChainOfThought from "@/components/demos/ai/chain-of-thought/chain-of-thought";
export default function chainofthought() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Chain of Thought" icon="Brain" >
          <ChainOfThought />
        </ComponentWrapper>
      </div>
    </div>
  )
}