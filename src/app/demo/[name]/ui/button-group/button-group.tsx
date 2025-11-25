import ButtonGroupDemo from "@/components/demos/button-group/button-group-demo";
import ButtonGroupNested from "@/components/demos/button-group/button-group-nested";
import ButtonGroupSize from "@/components/demos/button-group/button-group-size";
import ButtonGroupSeparator from "@/components/demos/button-group/button-group-separator";
import ButtonGroupSplit from "@/components/demos/button-group/button-group-split";
import ButtonGroupInput from "@/components/demos/button-group/button-group-input";
import ButtonGroupDropdown from "@/components/demos/button-group/button-group-dropdown";
import ButtonGroupSelect from "@/components/demos/button-group/button-group-select";
import ButtonGroupPopover from "@/components/demos/button-group/button-group-popover";
import ButtonGroupInputGroup from "@/components/demos/button-group/button-group-input-group";
import ButtonGroupOrientation from "@/components/demos/button-group/button-group-orientation";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export default function buttonGroup() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Button Group" icon="Layers">
          <ButtonGroupDemo />
        </ComponentWrapper>
      <ComponentWrapper name="Button Nested" icon="Layers2">
        <ButtonGroupNested />
      </ComponentWrapper>
      <ComponentWrapper name="Button Sizes" icon="Maximize2">
        <ButtonGroupSize />
      </ComponentWrapper>
      <ComponentWrapper name="Button Separator" icon="Minus">
        <ButtonGroupSeparator />
      </ComponentWrapper>
      <ComponentWrapper name="Button With Icon" icon="Split">
        <ButtonGroupSplit />
      </ComponentWrapper>
      <ComponentWrapper name="Button Input" icon="Type">
        <ButtonGroupInput />
      </ComponentWrapper>
      <ComponentWrapper name="Button Dropdown" icon="ChevronDown">
        <ButtonGroupDropdown />
      </ComponentWrapper>
      <ComponentWrapper name="Button Select" icon="CheckSquare">
        <ButtonGroupSelect />
      </ComponentWrapper>
      <ComponentWrapper name="Button Popover" icon="MessageSquare">
        <ButtonGroupPopover />
      </ComponentWrapper>
      <ComponentWrapper name="Button Input Group" icon="Group">
        <ButtonGroupInputGroup />
      </ComponentWrapper>
      <ComponentWrapper name="Button Orientation" icon="ListOrdered">
        <ButtonGroupOrientation />
      </ComponentWrapper>
      </div>
    </div>
  )
}