import { Toggle } from "@/components/ui/toggle";
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";
import ToggleDemo from "./toggle-demo";
import ToggleDisabled from "./toggle-disabled";
import ToggleLg from "./toggle-lg";
import ToggleOutline from "./toggle-outline";
import ToggleSm from "./toggle-sm";
import ToggleWithText from "./toggle-with-text";

export const toggle = {
  name: "toggle",
  components: {
    Default: <ToggleDemo />,
    Disabled: <ToggleDisabled />,
    Lg: <ToggleLg />,
    Outline: <ToggleOutline />,
    Sm: <ToggleSm />,
    WithText: <ToggleWithText />,
  },
};