import CheckboxDemo from "@/components/demos/ui/checkbox/checkbox-demo";
import CheckboxDisabled from "@/components/demos/ui/checkbox/checkbox-disabled";
import CheckboxWithText from "@/components/demos/ui/checkbox/checkbox-with-text";
import CheckboxFormMultiple from "@/components/demos/ui/checkbox/checkbox-form-multiple";
import CheckboxFormSingle from "@/components/demos/ui/checkbox/checkbox-form-single";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export default function checkbox() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Checkbox" icon="Square">
          <CheckboxDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Checkbox Disabled" icon="SquareSlash">
          <CheckboxDisabled />
        </ComponentWrapper>
        <ComponentWrapper name="Checkbox With Text" icon="SquareCheck">
          <CheckboxWithText />
        </ComponentWrapper>
        <ComponentWrapper name="Checkbox Form Multiple" icon="CheckSquare">
          <CheckboxFormMultiple />
        </ComponentWrapper>
        <ComponentWrapper name="Checkbox Form Single" icon="Check">
          <CheckboxFormSingle />
        </ComponentWrapper>
      </div>
    </div>
  )
}
