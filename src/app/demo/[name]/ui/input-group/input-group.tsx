import InputGroupDemo from "./input-group-demo";
import InputGroupButtonGroup from "./input-group-button-group";
import InputGroupButton from "./input-group-button";
import InputGroupCustom from "./input-group-custom";
import InputGroupDropdown from "./input-group-dropdown";
import InputGroupIcon from "./input-group-icon";
import InputGroupLabel from "./input-group-label";
import InputGroupSpinner from "./input-group-spinner";
import InputGroupText from "./input-group-text";
import InputGroupTextarea from "./input-group-textarea";
import InputGroupTooltip from "./input-group-tooltip";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export function inputGroup() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Default" icon="Layers">
          <InputGroupDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Button Group" icon="SquareStack">
          <InputGroupButtonGroup />
        </ComponentWrapper>
        <ComponentWrapper name="Button" icon="Square">
          <InputGroupButton />
        </ComponentWrapper>
        <ComponentWrapper name="Custom" icon="Wrench">
          <InputGroupCustom />
        </ComponentWrapper>
        <ComponentWrapper name="Dropdown" icon="ChevronDown">
          <InputGroupDropdown />
        </ComponentWrapper>
        <ComponentWrapper name="Icon" icon="Sparkles">
          <InputGroupIcon />
        </ComponentWrapper>
        <ComponentWrapper name="Label" icon="Tag">
          <InputGroupLabel />
        </ComponentWrapper>
        <ComponentWrapper name="Spinner" icon="Loader">
          <InputGroupSpinner />
        </ComponentWrapper>
        <ComponentWrapper name="Text" icon="Type">
          <InputGroupText />
        </ComponentWrapper>
        <ComponentWrapper name="Textarea" icon="AlignLeft">
          <InputGroupTextarea />
        </ComponentWrapper>
        <ComponentWrapper name="Tooltip" icon="Info">
          <InputGroupTooltip />
        </ComponentWrapper>
      </div>
    </div>
  )
}