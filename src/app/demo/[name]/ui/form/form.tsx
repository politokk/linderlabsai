import FormNextComplex from "@/components/demos/form/form-next-complex";
import FormRhfArray from "@/components/demos/form/form-rhf-array";
import FormRhfCheckbox from "@/components/demos/form/form-rhf-checkbox";
import FormRhfComplex from "@/components/demos/form/form-rhf-complex";
import FormRhfDemo from "@/components/demos/form/form-rhf-demo";
import FormRhfInput from "@/components/demos/form/form-rhf-input";
import FormRhfPassword from "@/components/demos/form/form-rhf-password";
import FormRhfRadiogroup from "@/components/demos/form/form-rhf-radiogroup";
import FormRhfSelect from "@/components/demos/form/form-rhf-select";
import FormRhfSwitch from "@/components/demos/form/form-rhf-switch";
import FormRhfTextarea from "@/components/demos/form/form-rhf-textarea";
import AppearanceSettings from "@/components/demos/form/appearance-settings";
import ChatSettings from "@/components/demos/form/chat-settings";
import DisplaySettings from "@/components/demos/form/display-settings";
import ShipRegistrationForm from "@/components/demos/form/ship-registration-form";
import ShippingForm from "@/components/demos/form/shipping-form";
import NotionPromptForm from "@/components/demos/form/notion-prompt-form";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export default function form() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <ComponentWrapper name="Notion Prompt Form" icon="NotebookText">
          <NotionPromptForm />
        </ComponentWrapper>
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
        <ComponentWrapper name="Display Settings" icon="Monitor">
          <DisplaySettings />
        </ComponentWrapper>
        <ComponentWrapper name="Chat Settings" icon="MessageSquare">
          <ChatSettings />
        </ComponentWrapper>
        <ComponentWrapper name="Appearance Settings" icon="Settings">
          <AppearanceSettings />
        </ComponentWrapper>
        <ComponentWrapper name="Ship Registration Form" icon="Ship">
          <ShipRegistrationForm />
        </ComponentWrapper>
        <ComponentWrapper name="Shipping Form" icon="Truck">
          <ShippingForm />
        </ComponentWrapper>
      </div>
    </div>
  )
}