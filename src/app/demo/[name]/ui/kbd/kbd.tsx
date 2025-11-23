import KbdGroupExample from "./kbd-group";
import KbdInputGroup from "./kbd-input-group";
import KbdTooltip from "./kbd-tooltip";
import KbdButton from "./kbd-button";
import KbdDemo from "./kbd-demo";

export const kbd = {
  name: "kbd",
  components: {
    Default: <KbdDemo/>,
    Multiple: <KbdGroupExample/>,
    InputGroup: <KbdInputGroup/>,
    Tooltip: <KbdTooltip/>,
    Button: <KbdButton/>,
  },
};