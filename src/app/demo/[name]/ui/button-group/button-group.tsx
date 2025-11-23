import ButtonGroupDemo from "./button-group-demo";
import ButtonGroupNested from "./button-group-nested";
import ButtonGroupSize from "./button-group-size";
import ButtonGroupSeparator from "./button-group-separator";
import ButtonGroupSplit from "./button-group-split";
import ButtonGroupInput from "./button-group-input";
import ButtonGroupDropdown from "./button-group-dropdown";
import ButtonGroupSelect from "./button-group-select";
import ButtonGroupPopover from "./button-group-popover";
import ButtonGroupInputGroup from "./button-group-input-group";
import ButtonGroupOrientation from "./button-group-orientation";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export function buttonGroup() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Button Group" icon="ButtonGroupIcon">
          <ButtonGroupDemo />
        </ComponentWrapper>
      <ComponentWrapper name="Button Destructive" icon="ButtonDestructiveIcon">
        <ButtonGroupNested />
      </ComponentWrapper>
      <ComponentWrapper name="Button Secondary" icon="ButtonSecondaryIcon">
        <ButtonGroupSize />
      </ComponentWrapper>
      <ComponentWrapper name="Button Size" icon="ButtonSizeIcon">
        <ButtonGroupSeparator />
      </ComponentWrapper>
      <ComponentWrapper name="Button With Icon" icon="ButtonWithIconIcon">
        <ButtonGroupSplit />
      </ComponentWrapper>
      <ComponentWrapper name="Button Input" icon="ButtonInputIcon">
        <ButtonGroupInput />
      </ComponentWrapper>
      <ComponentWrapper name="Button Dropdown" icon="ButtonDropdownIcon">
        <ButtonGroupDropdown />
      </ComponentWrapper>
      <ComponentWrapper name="Button Select" icon="ButtonSelectIcon">
        <ButtonGroupSelect />
      </ComponentWrapper>
      <ComponentWrapper name="Button Popover" icon="ButtonPopoverIcon">
        <ButtonGroupPopover />
      </ComponentWrapper>
      <ComponentWrapper name="Button Input Group" icon="ButtonInputGroupIcon">
        <ButtonGroupInputGroup />
      </ComponentWrapper>
      <ComponentWrapper name="Button Orientation" icon="ButtonOrientationIcon">
        <ButtonGroupOrientation />
      </ComponentWrapper>
      </div>
    </div>
  )
}