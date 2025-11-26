import ToggleDemo from "@/components/demos/toggle/toggle-demo";
import ToggleDisabled from "@/components/demos/toggle/toggle-disabled";
import ToggleLg from "@/components/demos/toggle/toggle-lg";
import ToggleOutline from "@/components/demos/toggle/toggle-outline";
import ToggleSm from "@/components/demos/toggle/toggle-sm";
import ToggleWithText from "@/components/demos/toggle/toggle-with-text";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export default function toggle() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Toggle" icon="ToggleLeft">
          <ToggleDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Toggle Disabled" icon="Ban">
          <ToggleDisabled />
        </ComponentWrapper>
        <ComponentWrapper name="Toggle Large" icon="Maximize">
          <ToggleLg />
        </ComponentWrapper>
        <ComponentWrapper name="Toggle Outline" icon="Circle">
          <ToggleOutline />
        </ComponentWrapper>
        <ComponentWrapper name="Toggle Small" icon="Minimize">
          <ToggleSm />
        </ComponentWrapper>
        <ComponentWrapper name="Toggle With Text" icon="Type">
          <ToggleWithText />
        </ComponentWrapper>
      </div>
    </div>
  )
}