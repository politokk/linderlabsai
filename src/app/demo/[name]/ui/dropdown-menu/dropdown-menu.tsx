import DropdownMenuDemo from "./dropdown-menu-demo";
import DropdownMenuCheckboxes from "./dropdown-menu-checkboxes";
import DropdownMenuDialog from "./dropdown-menu-dialog";
import DropdownMenuRadioGroup from "./dropdown-menu-radio-group";

export const dropdownMenu = {
  name: "dropdown-menu",
  components: {
    Default: <DropdownMenuDemo />,
    Checkboxes: <DropdownMenuCheckboxes />,
    Dialog: <DropdownMenuDialog />,
    RadioGroup: <DropdownMenuRadioGroup />,
  },
};
     