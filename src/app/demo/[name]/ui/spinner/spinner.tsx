import SpinnerDemo from "./spinner-demo";
import SpinnerBasic from "./spinner-basic";
import SpinnerButton from "./spinner-button";
import SpinnerBadge from "./spinner-badge";
import SpinnerInputGroup from "./spinner-input-group";
import SpinnerEmpty from "./spinner-empty";
import SpinnerColor from "./spinner-color";
import SpinnerCustom from "./spinner-custom";
import SpinnerSize from "./spinner-size";
import SpinnerItem from "./spinner-item";
export const spinner = {
  name: "spinner",
  components: {
    Default: <SpinnerDemo/>,
    Basic: <SpinnerBasic/>,
    Button: <SpinnerButton/>,
    Badge: <SpinnerBadge/>,
    InputGroup: <SpinnerInputGroup/>,
    Empty: <SpinnerEmpty/>,
    Color: <SpinnerColor/>,
    Custom: <SpinnerCustom/>,
    Size: <SpinnerSize/>,
    Item: <SpinnerItem/>,
  },
};