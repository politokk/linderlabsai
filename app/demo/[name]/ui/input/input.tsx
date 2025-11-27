import InputDemo from "@/components/demos/ui/input/input-demo";
import InputDisabled from "@/components/demos/ui/input/input-disabled";
import InputFile from "@/components/demos/ui/input/input-file";
import InputForm from "@/components/demos/ui/input/input-form";
import InputWithButton from "@/components/demos/ui/input/input-with-button";
import InputWithLabel from "@/components/demos/ui/input/input-with-label";
import InputWithText from "@/components/demos/ui/input/input-with-text";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export default function input() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Input Default" icon="Type">
          <InputDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Input Disabled" icon="Ban">
          <InputDisabled />
        </ComponentWrapper>
        <ComponentWrapper name="Input File" icon="File">
          <InputFile />
        </ComponentWrapper>
        <ComponentWrapper name="Input Form" icon="FileText">
          <InputForm />
        </ComponentWrapper>
        <ComponentWrapper name="Input With Button" icon="MousePointerClick">
          <InputWithButton />
        </ComponentWrapper>
        <ComponentWrapper name="Input With Label" icon="Tag">
          <InputWithLabel />
        </ComponentWrapper>
        <ComponentWrapper name="Input With Text" icon="Text">
          <InputWithText />
        </ComponentWrapper>
      </div>
    </div>
  )
}
