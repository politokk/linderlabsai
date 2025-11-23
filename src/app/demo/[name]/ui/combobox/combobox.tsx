import ComboboxDemo from "./combobox-demo";
import ComboboxDropdownMenu from "./combobox-dropdown-menu";
import ComboboxForm from "./combobox-form";
import ComboboxPopover from "./combobox-popover";
import ComboboxResponsive from "./combobox-responsive";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export function combobox() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Demo" icon="Search">
          <ComboboxDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Dropdown Menu" icon="Menu">
          <ComboboxDropdownMenu />
        </ComponentWrapper>
        <ComponentWrapper name="Form" icon="FileText">
          <ComboboxForm />
        </ComponentWrapper>
        <ComponentWrapper name="Popover" icon="MessageSquare">
          <ComboboxPopover />
        </ComponentWrapper>
        <ComponentWrapper name="Responsive" icon="Monitor">
          <ComboboxResponsive />
        </ComponentWrapper>
      </div>
    </div>
  )
}