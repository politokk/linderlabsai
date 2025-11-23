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

export const buttonGroup = {
  name: "button-group",
  components: {
    ButtonGroup: <ButtonGroupDemo />,
    ButtonGroupNested: <ButtonGroupNested />,
    ButtonGroupSize: <ButtonGroupSize />,
    ButtonGroupSeparator: <ButtonGroupSeparator />,
    ButtonGroupSplit: <ButtonGroupSplit />,
    ButtonGroupInput: <ButtonGroupInput />,
    ButtonGroupDropdown: <ButtonGroupDropdown />,
    ButtonGroupSelect: <ButtonGroupSelect />,
    ButtonGroupPopover: <ButtonGroupPopover />,
    ButtonGroupInputGroup: <ButtonGroupInputGroup />,
    ButtonGroupOrientation: <ButtonGroupOrientation />,
  },
};