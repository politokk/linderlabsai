import { ComponentWrapper } from "@/components/display/component-wrapper"
import Queue from "@/components/demos/ai/queue/queue";
import QueuePromptInput from "@/components/demos/ai/queue/queue-prompt-input";
export default function queue() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-1">
        <ComponentWrapper name="Queue" icon="ListOrdered" >
          <Queue />
        </ComponentWrapper>
        <ComponentWrapper name="Queue Prompt Input" icon="ListEnd" >
          <QueuePromptInput />
        </ComponentWrapper>
      </div>
    </div>
  )
}