import CommandDemo from "./command-demo";
import CommandDialogDemo from "./command-dialog";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export function command() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Command" icon="Terminal">
          <CommandDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Command Dialog" icon="MessageSquare">
          <CommandDialogDemo />
        </ComponentWrapper>
      </div>
    </div>
  )
}