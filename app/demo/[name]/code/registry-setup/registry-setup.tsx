import { ComponentWrapper } from "@/components/display/component-wrapper";
import  RegistrySetupDemo from "@/components/demos/code/registry-setup/registry-setup";

export default function RegistrySetup() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Registry Setup" icon="Code">
          <RegistrySetupDemo />
        </ComponentWrapper>
      </div>
    </div>
  )
}