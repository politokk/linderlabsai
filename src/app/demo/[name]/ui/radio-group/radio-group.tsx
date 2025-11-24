import RadioGroupDemo from "./radio-group-demo";
import RadioGroupForm from "./radio-group-form";
import RadioGroupPlan from "./radio-group-plan";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export default function radioGroup() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Radio Group" icon="Circle">
          <RadioGroupDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Radio Group Form" icon="FileText">
          <RadioGroupForm />
        </ComponentWrapper>
        <ComponentWrapper name="Radio Group Plan" icon="Star">
          <RadioGroupPlan />
        </ComponentWrapper>
      </div>
    </div>
  )
}