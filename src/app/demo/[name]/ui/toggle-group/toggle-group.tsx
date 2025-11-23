import ToggleGroupDemo from "./toggle-group-demo";
import ToggleGroupDisabled from "./toggle-group-disabled";
import ToggleGroupLg from "./toggle-group-lg";
import ToggleGroupOutline from "./toggle-group-outline";
import ToggleGroupSingle from "./toggle-group-single";
import ToggleGroupSm from "./toggle-group-sm";
import ToggleGroupSpacing from "./toggle-group-spacing";

export const toggleGroup = {
  name: "toggle-group",
  components: {
    Default: <ToggleGroupDemo />,
    Disabled: <ToggleGroupDisabled />,
    Lg: <ToggleGroupLg />,
    Outline: <ToggleGroupOutline />,
    Single: <ToggleGroupSingle />,
    Sm: <ToggleGroupSm />,
    Spacing: <ToggleGroupSpacing />,
  },
};
