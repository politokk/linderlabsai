import { ComponentWrapper } from "@/components/display/component-wrapper";
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

export function button() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Button" icon="ButtonIcon">
          <ButtonDemo />
        </ComponentWrapper>
      <ComponentWrapper name="Button Destructive" icon="ButtonDestructiveIcon">
        <ButtonDestructive />
      </ComponentWrapper>
      <ComponentWrapper name="Button Ghost" icon="ButtonGhostIcon">
        <ButtonGhost />
      </ComponentWrapper>
      <ComponentWrapper name="Button Icon" icon="ButtonIconIcon">
        <ButtonIcon />
      </ComponentWrapper>
      <ComponentWrapper name="Button Link" icon="ButtonLinkIcon">
        <ButtonLink />
      </ComponentWrapper>
      <ComponentWrapper name="Button Loading" icon="ButtonLoadingIcon">
        <ButtonLoading />
      </ComponentWrapper>
      <ComponentWrapper name="Button Outline" icon="ButtonOutlineIcon">
        <ButtonOutline />
      </ComponentWrapper>
      <ComponentWrapper name="Button Rounded" icon="ButtonRoundedIcon">
        <ButtonRounded />
      </ComponentWrapper>
      <ComponentWrapper name="Button Secondary" icon="ButtonSecondaryIcon">
        <ButtonSecondary />
      </ComponentWrapper>
      <ComponentWrapper name="Button Size" icon="ButtonSizeIcon">
        <ButtonSize />
      </ComponentWrapper>
      <ComponentWrapper name="Button With Icon" icon="ButtonWithIconIcon">
        <ButtonWithIcon />
      </ComponentWrapper>
      </div>
    </div>
  )
}