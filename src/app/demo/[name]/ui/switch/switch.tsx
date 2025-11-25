import SwitchDemo from "@/components/demos/switch/switch-demo";
import SwitchForm from "@/components/demos/switch/switch-form";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export default function switchComponent() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Switch Default" icon="ToggleRight">
          <SwitchDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Switch Form" icon="FileCheck">
          <SwitchForm />
        </ComponentWrapper>
      </div>
    </div>
  )
}
