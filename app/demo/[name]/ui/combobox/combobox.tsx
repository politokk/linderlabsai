import ComboboxDemo from "@/components/demos/combobox/combobox-demo";
import ComboboxDropdownMenu from "@/components/demos/combobox/combobox-dropdown-menu";
import ComboboxForm from "@/components/demos/combobox/combobox-form";
import ComboboxPopover from "@/components/demos/combobox/combobox-popover";
import ComboboxResponsive from "@/components/demos/combobox/combobox-responsive";
import ComboboxUserDemo from "@/components/demos/combobox/combobox-user-demo";
import ComboboxTimezoneDemo from "@/components/demos/combobox/combobox-timezone-demo";
import ComboboxTagsDemo from "@/components/demos/combobox/combobox-tags-demo";
import ComboboxMultiSelectDemo from "@/components/demos/combobox/combobox-multi-select-demo";
import { ComponentWrapper } from "@/components/display/component-wrapper";

export default function combobox() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Combobox" icon="Search">
          <ComboboxDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Combobox Dropdown Menu" icon="Menu">
          <ComboboxDropdownMenu />
        </ComponentWrapper>
        <ComponentWrapper name="Combobox Form" icon="FileText">
          <ComboboxForm />
        </ComponentWrapper>
        <ComponentWrapper name="Combobox Popover" icon="MessageSquare">
          <ComboboxPopover />
        </ComponentWrapper>
        <ComponentWrapper name="Combobox Responsive" icon="Monitor">
          <ComboboxResponsive />
        </ComponentWrapper>
        <ComponentWrapper name="Combobox User" icon="User">
          <ComboboxUserDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Combobox Tags" icon="TagsIcon">
          <ComboboxTagsDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Combobox Timezone" icon="Clock">
          <ComboboxTimezoneDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Combobox Multi Select" icon="ListOrdered">
          <ComboboxMultiSelectDemo />
        </ComponentWrapper>
      </div>
    </div>
  )
}