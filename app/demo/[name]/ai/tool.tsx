import { ComponentWrapper } from "@/components/display/component-wrapper"
import Tool from "@/components/demos/ai/tool/tool";
import ToolInputAvailable from "@/components/demos/ai/tool/tool-input-available";
import ToolInputStreaming from "@/components/demos/ai/tool/tool-input-streaming";
import ToolOutputAvailable from "@/components/demos/ai/tool/tool-output-available";
import ToolOutputError from "@/components/demos/ai/tool/tool-output-error";
import ToolPage from "@/components/demos/ai/tool/tool-page";
export default function tool() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ComponentWrapper name="Tool" icon="Wrench" >
          <Tool />
        </ComponentWrapper>
        <ComponentWrapper name="Tool Input Available" icon="Wrench" >
          <ToolInputAvailable />
        </ComponentWrapper>
        <ComponentWrapper name="Tool Input Streaming" icon="Wrench" >
          <ToolInputStreaming />
        </ComponentWrapper>
        <ComponentWrapper name="Tool Output Available" icon="Wrench" >
          <ToolOutputAvailable />
        </ComponentWrapper>
        <ComponentWrapper name="Tool Output Error" icon="Wrench" >
          <ToolOutputError />
        </ComponentWrapper>
        <ComponentWrapper name="Tool Page" icon="Wrench" >
          <ToolPage />
        </ComponentWrapper>
      </div>
    </div>
  )
}