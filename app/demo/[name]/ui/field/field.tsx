import FieldDemo from "@/components/demos/ui/field/field-demo";
import FieldInput from "@/components/demos/ui/field/field-input";
import FieldTextarea from "@/components/demos/ui/field/field-textarea";
import FieldSelect from "@/components/demos/ui/field/field-select";
import FieldCheckbox from "@/components/demos/ui/field/field-checkbox";
import FieldRadio from "@/components/demos/ui/field/field-radio";
  import FieldSwitch from "@/components/demos/ui/field/field-switch";
import FieldSlider from "@/components/demos/ui/field/field-slider";
import FieldFieldset from "@/components/demos/ui/field/field-fieldset";
import FieldGroup from "@/components/demos/ui/field/field-group";
import FieldChoiceCard from "@/components/demos/ui/field/field-choice-card";
import FieldResponsive from "@/components/demos/ui/field/field-responsive";
import FieldHear from "@/components/demos/ui/field/field-hear";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export default function field() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
        <ComponentWrapper name="Field Hear" icon="Headset">
          <FieldHear />
        </ComponentWrapper>
        <ComponentWrapper name="Field Responsive" icon="Monitor">
          <FieldResponsive />
        </ComponentWrapper>
        <ComponentWrapper name="Field" icon="FileText">
          <FieldDemo />
        </ComponentWrapper>
      </div>
    </div>
  )
}