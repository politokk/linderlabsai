import ToggleGroupDemo from "./toggle-group-demo";
import ToggleGroupDisabled from "./toggle-group-disabled";
import ToggleGroupLg from "./toggle-group-lg";
import ToggleGroupOutline from "./toggle-group-outline";
import ToggleGroupSingle from "./toggle-group-single";
import ToggleGroupSm from "./toggle-group-sm";
import ToggleGroupSpacing from "./toggle-group-spacing";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export function toggleGroup() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Default" icon="ToggleLeft">
          <ToggleGroupDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Disabled" icon="Ban">
          <ToggleGroupDisabled />
        </ComponentWrapper>
        <ComponentWrapper name="Large" icon="Maximize">
          <ToggleGroupLg />
        </ComponentWrapper>
        <ComponentWrapper name="Outline" icon="Circle">
          <ToggleGroupOutline />
        </ComponentWrapper>
        <ComponentWrapper name="Single" icon="CircleDot">
          <ToggleGroupSingle />
        </ComponentWrapper>
        <ComponentWrapper name="Small" icon="Minimize">
          <ToggleGroupSm />
        </ComponentWrapper>
        <ComponentWrapper name="Spacing" icon="Space">
          <ToggleGroupSpacing />
        </ComponentWrapper>
      </div>
    </div>
  )
}
