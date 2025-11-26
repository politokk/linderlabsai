import TextareaDemo from "@/components/demos/textarea/textarea-demo";
import TextareaDisabled from "@/components/demos/textarea/textarea-disabled";
import TextareaForm from "@/components/demos/textarea/textarea-form";
import TextareaWithButton from "@/components/demos/textarea/textarea-with-button";
import TextareaWithLabel from "@/components/demos/textarea/textarea-with-label";
import TextareaWithText from "@/components/demos/textarea/textarea-with-text";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export default function textarea() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Textarea" icon="AlignLeft">
          <TextareaDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Textarea With Label" icon="Tag">
          <TextareaWithLabel />
        </ComponentWrapper>
        <ComponentWrapper name="Textarea With Text" icon="Text">
          <TextareaWithText />
        </ComponentWrapper>
        <ComponentWrapper name="Textarea Disabled" icon="Ban">
          <TextareaDisabled />
        </ComponentWrapper>
        <ComponentWrapper name="Textarea Form" icon="FileText">
          <TextareaForm />
        </ComponentWrapper>
        <ComponentWrapper name="Textarea With Button" icon="Square">
          <TextareaWithButton />
        </ComponentWrapper>
      </div>
    </div>
  )
}