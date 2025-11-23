import SeparatorDemo from "./separator-demo";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export function separator() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Separator" icon="Minus">
          <SeparatorDemo />
        </ComponentWrapper>
      </div>
    </div>
  )
}
