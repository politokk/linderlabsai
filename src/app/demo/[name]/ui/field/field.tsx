import FieldDemo from "./field-demo";
import FieldInput from "./field-input";
import FieldTextarea from "./field-textarea";
import FieldSelect from "./field-select";
import FieldCheckbox from "./field-checkbox";
import FieldRadio from "./field-radio";
import FieldSwitch from "./field-switch";
import FieldSlider from "./field-slider";
import FieldFieldset from "./field-fieldset";
import FieldGroup from "./field-group";
import FieldChoiceCard from "./field-choice-card";
import FieldResponsive from "./field-responsive";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export function field() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Default" icon="FileText">
          <FieldDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Input" icon="Type">
          <FieldInput />
        </ComponentWrapper>
        <ComponentWrapper name="Textarea" icon="AlignLeft">
          <FieldTextarea />
        </ComponentWrapper>
        <ComponentWrapper name="Select" icon="ChevronDown">
          <FieldSelect />
        </ComponentWrapper>
        <ComponentWrapper name="Checkbox" icon="CheckSquare">
          <FieldCheckbox />
        </ComponentWrapper>
        <ComponentWrapper name="Radio" icon="Circle">
          <FieldRadio />
        </ComponentWrapper>
        <ComponentWrapper name="Switch" icon="ToggleRight">
          <FieldSwitch />
        </ComponentWrapper>
        <ComponentWrapper name="Slider" icon="SlidersHorizontal">
          <FieldSlider />
        </ComponentWrapper>
        <ComponentWrapper name="Fieldset" icon="LayoutGrid">
          <FieldFieldset />
        </ComponentWrapper>
        <ComponentWrapper name="Group" icon="Group">
          <FieldGroup />
        </ComponentWrapper>
        <ComponentWrapper name="Choice Card" icon="CreditCard">
          <FieldChoiceCard />
        </ComponentWrapper>
        <ComponentWrapper name="Responsive" icon="Monitor">
          <FieldResponsive />
        </ComponentWrapper>
      </div>
    </div>
  )
}