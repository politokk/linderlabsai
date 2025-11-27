import { ComponentWrapper } from "@/components/display/component-wrapper"
import Response from "@/components/demos/ai/response/response";
export default function response() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Response" icon="TextCursorInput">
          <Response />
        </ComponentWrapper>
      </div>
    </div>
  )
}   
