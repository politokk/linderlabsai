import { Toggle } from "@/components/ui/toggle";
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";
import ToggleDemo from "./toggle-demo";
import ToggleDisabled from "./toggle-disabled";
import ToggleLg from "./toggle-lg";
import ToggleOutline from "./toggle-outline";
import ToggleSm from "./toggle-sm";
import ToggleWithText from "./toggle-with-text";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export function toggle() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Default" icon="ToggleLeft">
          <ToggleDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Disabled" icon="Ban">
          <ToggleDisabled />
        </ComponentWrapper>
        <ComponentWrapper name="Large" icon="Maximize">
          <ToggleLg />
        </ComponentWrapper>
        <ComponentWrapper name="Outline" icon="Circle">
          <ToggleOutline />
        </ComponentWrapper>
        <ComponentWrapper name="Small" icon="Minimize">
          <ToggleSm />
        </ComponentWrapper>
        <ComponentWrapper name="With Text" icon="Type">
          <ToggleWithText />
        </ComponentWrapper>
      </div>
    </div>
  )
}