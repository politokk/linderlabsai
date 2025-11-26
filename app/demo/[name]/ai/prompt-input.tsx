import { ComponentWrapper } from "@/components/display/component-wrapper"
import PromptInput from "@/components/demos/ai/prompt-input/prompt-input";
import PromptInputCursor from "@/components/demos/ai/prompt-input/prompt-input-cursor";
import PromptInputPage from "@/components/demos/ai/prompt-input/prompt-input-page";
export default function promptInput() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Prompt Input" icon="MessageSquareQuote" >
          <PromptInput />
        </ComponentWrapper>
        <ComponentWrapper name="Prompt Input Cursor" icon="MousePointerClick" >
          <PromptInputCursor />
        </ComponentWrapper>
        <ComponentWrapper name="Prompt Input Page" icon="MessageSquareQuote" >
          <PromptInputPage />
        </ComponentWrapper>
      </div>
    </div>
  )
}