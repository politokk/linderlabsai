import SelectDemo from "./select-demo"; 
import SelectForm from "./select-form";
import SelectScrollable from "./select-scrollable";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export default function select() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Select" icon="ChevronDown">
          <SelectDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Select Form" icon="FileText">
          <SelectForm />
        </ComponentWrapper>
        <ComponentWrapper name="Select Scrollable" icon="ChevronsUpDown">
          <SelectScrollable />
        </ComponentWrapper>
      </div>
    </div>
  )
}
