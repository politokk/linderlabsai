import RadioGroupDemo from "./radio-group-demo";
import RadioGroupForm from "./radio-group-form";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export function radioGroup() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Default" icon="Circle">
          <RadioGroupDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Form" icon="FileText">
          <RadioGroupForm />
        </ComponentWrapper>
      </div>
    </div>
  )
}