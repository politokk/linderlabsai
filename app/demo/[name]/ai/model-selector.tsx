import { ComponentWrapper } from "@/components/display/component-wrapper"
import ModelSelector from "@/components/demos/ai/model-selector/model-selector";
import ModelDropdown from "@/components/demos/ai/model-selector/model-dropdown";
export default function modelSelector() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Model Selector" icon="Bot">
            <ModelSelector />
        </ComponentWrapper>
        <ComponentWrapper name="Model Dropdown" icon="Bot">
          <ModelDropdown />
        </ComponentWrapper>
      </div>
    </div>
  )
}