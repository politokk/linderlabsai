import TextareaDemo from "./textarea-demo";
import TextareaDisabled from "./textarea-disabled";
import TextareaForm from "./textarea-form";
import TextareaWithButton from "./textarea-with-button";
import TextareaWithLabel from "./textarea-with-label";
import TextareaWithText from "./textarea-with-text";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export function textarea() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Default" icon="AlignLeft">
          <TextareaDemo />
        </ComponentWrapper>
        <ComponentWrapper name="With Label" icon="Tag">
          <TextareaWithLabel />
        </ComponentWrapper>
        <ComponentWrapper name="With Text" icon="Text">
          <TextareaWithText />
        </ComponentWrapper>
        <ComponentWrapper name="Disabled" icon="Ban">
          <TextareaDisabled />
        </ComponentWrapper>
        <ComponentWrapper name="Form" icon="FileText">
          <TextareaForm />
        </ComponentWrapper>
        <ComponentWrapper name="With Button" icon="Square">
          <TextareaWithButton />
        </ComponentWrapper>
      </div>
    </div>
  )
}