import { Button } from "@/components/ui/button";
import ComboboxDemo from "./combobox-demo";
import ComboboxDropdownMenu from "./combobox-dropdown-menu";
import ComboboxForm from "./combobox-form";
import ComboboxPopover from "./combobox-popover";
import ComboboxResponsive from "./combobox-responsive";

export const combobox = {
  name: "combobox",
  components: {
    Default: <ComboboxDemo />,
    DropdownMenu: <ComboboxDropdownMenu />,
    Form: <ComboboxForm />,
    Popover: <ComboboxPopover />,
  },
};