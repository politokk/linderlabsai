import { ComponentWrapper } from "@/components/display/component-wrapper";
import CodeBlockCommandDemo from "@/components/demos/code/code-block-command/code-block-command";

export default function codeBlockCommand() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Code Block Command" icon="Code">
          <CodeBlockCommandDemo />
        </ComponentWrapper>    
      </div>
    </div>
  )
}