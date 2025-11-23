import InputDemo from "./input-demo";
import InputDisabled from "./input-disabled";
import InputFile from "./input-file";
import InputForm from "./input-form";
import InputWithButton from "./input-with-button";
import InputWithLabel from "./input-with-label";
import InputWithText from "./input-with-text";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export function input() {
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
