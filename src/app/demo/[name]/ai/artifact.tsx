import { ComponentWrapper } from "@/components/display/component-wrapper"
import Artifact from "@/components/demos/ai/artifact/artifact";
import { Preview } from "@/components/code/preview";
export default function artifact() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Preview path="ai/artifact/artifact" />
      </div>
    </div>
  )
}