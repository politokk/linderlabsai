import CheckboxDemo from "./checkbox-demo";
import CheckboxDisabled from "./checkbox-disabled";
import CheckboxWithText from "./checkbox-with-text";
import CheckboxFormMultiple from "./checkbox-form-multiple";
import CheckboxFormSingle from "./checkbox-form-single";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export function checkbox() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Default" icon="Square">
          <CheckboxDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Disabled" icon="SquareSlash">
          <CheckboxDisabled />
        </ComponentWrapper>
        <ComponentWrapper name="With Text" icon="SquareCheck">
          <CheckboxWithText />
        </ComponentWrapper>
        <ComponentWrapper name="Form Multiple" icon="CheckSquare">
          <CheckboxFormMultiple />
        </ComponentWrapper>
        <ComponentWrapper name="Form Single" icon="Check">
          <CheckboxFormSingle />
        </ComponentWrapper>
      </div>
    </div>
  )
}
