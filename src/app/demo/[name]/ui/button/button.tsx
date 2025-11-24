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

export default function button() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Button" icon="Square">
          <ButtonDemo />
        </ComponentWrapper>
      <ComponentWrapper name="Button Destructive" icon="Trash2">
        <ButtonDestructive />
      </ComponentWrapper>
      <ComponentWrapper name="Button Ghost" icon="Ghost">
        <ButtonGhost />
      </ComponentWrapper>
      <ComponentWrapper name="Button Icon" icon="Smile">
        <ButtonIcon />
      </ComponentWrapper>
      <ComponentWrapper name="Button Link" icon="Link2">
        <ButtonLink />
      </ComponentWrapper>
      <ComponentWrapper name="Button Loading" icon="Loader2">
        <ButtonLoading />
      </ComponentWrapper>
      <ComponentWrapper name="Button Outline" icon="Circle">
        <ButtonOutline />
      </ComponentWrapper>
      <ComponentWrapper name="Button Rounded" icon="CircleDot">
        <ButtonRounded />
      </ComponentWrapper>
      <ComponentWrapper name="Button Secondary" icon="SquareDot">
        <ButtonSecondary />
      </ComponentWrapper>
      <ComponentWrapper name="Button Size" icon="Maximize">
        <ButtonSize />
      </ComponentWrapper>
      <ComponentWrapper name="Button With Icon" icon="Star">
        <ButtonWithIcon />
      </ComponentWrapper>
      </div>
    </div>
  )
}