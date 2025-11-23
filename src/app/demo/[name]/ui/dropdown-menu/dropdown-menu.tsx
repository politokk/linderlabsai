import DropdownMenuDemo from "./dropdown-menu-demo";
import DropdownMenuCheckboxes from "./dropdown-menu-checkboxes";
import DropdownMenuDialog from "./dropdown-menu-dialog";
import DropdownMenuRadioGroup from "./dropdown-menu-radio-group";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export function dropdownMenu() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Default" icon="ChevronDown">
          <DropdownMenuDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Checkboxes" icon="CheckSquare">
          <DropdownMenuCheckboxes />
        </ComponentWrapper>
        <ComponentWrapper name="Dialog" icon="MessageSquare">
          <DropdownMenuDialog />
        </ComponentWrapper>
        <ComponentWrapper name="Radio Group" icon="Circle">
          <DropdownMenuRadioGroup />
        </ComponentWrapper>
      </div>
    </div>
  )
}