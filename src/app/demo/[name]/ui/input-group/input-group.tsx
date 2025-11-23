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

export const inputGroup = {
  name: "input-group",
  components: {
    Default: <InputGroupDemo/>,
    ButtonGroup: <InputGroupButtonGroup/>,
    Button: <InputGroupButton/>,
    Custom: <InputGroupCustom/>,
    Dropdown: <InputGroupDropdown/>,
    Icon: <InputGroupIcon/>,
    Label: <InputGroupLabel/>,
    Spinner: <InputGroupSpinner/>,
    Text: <InputGroupText/>,
    Textarea: <InputGroupTextarea/>,
    Tooltip: <InputGroupTooltip/>,
  },
};