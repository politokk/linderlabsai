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


export default function inputGroup() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Input Group" icon="Layers">
          <InputGroupDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Input Group Button Group" icon="SquareStack">
          <InputGroupButtonGroup />
        </ComponentWrapper>
        <ComponentWrapper name="Input Group Button" icon="Square">
          <InputGroupButton />
        </ComponentWrapper>
        <ComponentWrapper name="Input Group Custom" icon="Wrench">
          <InputGroupCustom />
        </ComponentWrapper>
        <ComponentWrapper name="Input Group Dropdown" icon="ChevronDown">
          <InputGroupDropdown />
        </ComponentWrapper>
        <ComponentWrapper name="Input Group Icon" icon="Sparkles">
          <InputGroupIcon />
        </ComponentWrapper>
        <ComponentWrapper name="Input Group Label" icon="Tag">
          <InputGroupLabel />
        </ComponentWrapper>
        <ComponentWrapper name="Input Group Spinner" icon="Loader">
          <InputGroupSpinner />
        </ComponentWrapper>
        <ComponentWrapper name="Input Group Text" icon="Type">
          <InputGroupText />
        </ComponentWrapper>
        <ComponentWrapper name="Input Group Textarea" icon="AlignLeft">
          <InputGroupTextarea />
        </ComponentWrapper>
        <ComponentWrapper name="Input Group Tooltip" icon="Info">
          <InputGroupTooltip />
        </ComponentWrapper>
      </div>
    </div>
  )
}