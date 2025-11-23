import ButtonDemo from "./button-demo";
import ButtonDestructive from "./button-destructive";
import ButtonGhost from "./button-ghost";
import ButtonIcon from "./button-icon";
import ButtonLink from "./button-link";
import ButtonLoading from "./button-loading";
import ButtonOutline from "./button-outline";
import ButtonRounded from "./button-rounded";
import ButtonSecondary from "./button-secondary";
import ButtonSize from "./button-size";
import ButtonWithIcon from "./button-with-icon";

export const button = {
  name: "button",
  components: {
    Button: <ButtonDemo />,
    ButtonDestructive: <ButtonDestructive />,
    ButtonGhost: <ButtonGhost />,
    ButtonIcon: <ButtonIcon />,
    ButtonLink: <ButtonLink />,
    ButtonLoading: <ButtonLoading />,
    ButtonOutline: <ButtonOutline />,
    ButtonRounded: <ButtonRounded />,
    ButtonSecondary: <ButtonSecondary />,
    ButtonSize: <ButtonSize />,
    ButtonWithIcon: <ButtonWithIcon />,
  },
};