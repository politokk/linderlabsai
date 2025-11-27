import DropdownMenuDemo from "@/components/demos/ui/dropdown-menu/dropdown-menu-demo";
import DropdownMenuCheckboxes from "@/components/demos/ui/dropdown-menu/dropdown-menu-checkboxes";
import DropdownMenuDialog from "@/components/demos/ui/dropdown-menu/dropdown-menu-dialog";
import DropdownMenuRadioGroup from "@/components/demos/ui/dropdown-menu/dropdown-menu-radio-group";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export default function dropdownMenu() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Dropdown Menu" icon="ChevronDown">
          <DropdownMenuDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Dropdown Menu Checkboxes" icon="CheckSquare">
          <DropdownMenuCheckboxes />
        </ComponentWrapper>
        <ComponentWrapper name="Dropdown Menu Dialog" icon="MessageSquare">
          <DropdownMenuDialog />
        </ComponentWrapper>
        <ComponentWrapper name="Dropdown Menu Radio Group" icon="Circle">
          <DropdownMenuRadioGroup />
        </ComponentWrapper>
      </div>
    </div>
  )
}