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
        <ComponentWrapper name="Field" icon="FileText">
          <FieldDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Field Input" icon="Type">
          <FieldInput />
        </ComponentWrapper>
        <ComponentWrapper name="Field Textarea" icon="AlignLeft">
          <FieldTextarea />
        </ComponentWrapper>
        <ComponentWrapper name="Field Select" icon="ChevronDown">
          <FieldSelect />
        </ComponentWrapper>
        <ComponentWrapper name="Field Checkbox" icon="CheckSquare">
          <FieldCheckbox />
        </ComponentWrapper>
        <ComponentWrapper name="Field Radio" icon="Circle">
          <FieldRadio />
        </ComponentWrapper>
        <ComponentWrapper name="Field Switch" icon="ToggleRight">
          <FieldSwitch />
        </ComponentWrapper>
        <ComponentWrapper name="Field Slider" icon="SlidersHorizontal">
          <FieldSlider />
        </ComponentWrapper>
        <ComponentWrapper name="Field Fieldset" icon="LayoutGrid">
          <FieldFieldset />
        </ComponentWrapper>
        <ComponentWrapper name="Field Group" icon="Group">
          <FieldGroup />
        </ComponentWrapper>
        <ComponentWrapper name="Field Choice Card" icon="CreditCard">
          <FieldChoiceCard />
        </ComponentWrapper>
        <ComponentWrapper name="Field Responsive" icon="Monitor">
          <FieldResponsive />
        </ComponentWrapper>
      </div>
    </div>
  )
}