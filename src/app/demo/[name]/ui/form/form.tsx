import FormNextComplex from "./form-next-complex";
import FormRhfArray from "./form-rhf-array";
import FormRhfCheckbox from "./form-rhf-checkbox";
import FormRhfComplex from "./form-rhf-complex";
import FormRhfDemo from "./form-rhf-demo";
import FormRhfInput from "./form-rhf-input";
import FormRhfPassword from "./form-rhf-password";
import FormRhfRadiogroup from "./form-rhf-radiogroup";
import FormRhfSelect from "./form-rhf-select";
import FormRhfSwitch from "./form-rhf-switch";
import FormRhfTextarea from "./form-rhf-textarea";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export function form() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Form RHF Array" icon="List">
          <FormRhfArray />
        </ComponentWrapper>
        <ComponentWrapper name="Form RHF Checkbox" icon="CheckSquare">
          <FormRhfCheckbox />
        </ComponentWrapper>
        <ComponentWrapper name="Form RHF Demo" icon="FileText">
          <FormRhfDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Form RHF Textarea" icon="AlignLeft">
          <FormRhfTextarea />
        </ComponentWrapper>
        <ComponentWrapper name="Form RHF Password" icon="Lock">
          <FormRhfPassword />
        </ComponentWrapper>
        <ComponentWrapper name="Form RHF Radio Group" icon="Circle">
          <FormRhfRadiogroup />
        </ComponentWrapper>
        <ComponentWrapper name="Form RHF Select" icon="ChevronDown">
          <FormRhfSelect />
        </ComponentWrapper>
        <ComponentWrapper name="Form RHF Switch" icon="ToggleRight">
          <FormRhfSwitch />
        </ComponentWrapper>
        <ComponentWrapper name="Form RHF Input" icon="Type">
          <FormRhfInput />
        </ComponentWrapper>
        <ComponentWrapper name="Form Next Complex" icon="FileText">
          <FormNextComplex />
        </ComponentWrapper>
        <ComponentWrapper name="Form RHF Complex" icon="FileCode">
          <FormRhfComplex />
        </ComponentWrapper>
      </div>
    </div>
  )
}