import ToggleGroupDemo from "@/components/demos/ui/toggle-group/toggle-group-demo";
import ToggleGroupDisabled from "@/components/demos/ui/toggle-group/toggle-group-disabled";
import ToggleGroupLg from "@/components/demos/ui/toggle-group/toggle-group-lg";
import ToggleGroupOutline from "@/components/demos/ui/toggle-group/toggle-group-outline";
import ToggleGroupSingle from "@/components/demos/ui/toggle-group/toggle-group-single";
import ToggleGroupSm from "@/components/demos/ui/toggle-group/toggle-group-sm";
import ToggleGroupSpacing from "@/components/demos/ui/toggle-group/toggle-group-spacing";
import { ComponentWrapper } from "@/components/display/component-wrapper";

export default function toggleGroup() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Toggle Group" icon="ToggleLeft">
          <ToggleGroupDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Toggle Group Disabled" icon="Ban">
          <ToggleGroupDisabled />
        </ComponentWrapper>
        <ComponentWrapper name="Toggle Group Large" icon="Maximize">
          <ToggleGroupLg />
        </ComponentWrapper>
        <ComponentWrapper name="Toggle Group Outline" icon="Circle">
          <ToggleGroupOutline />
        </ComponentWrapper>
        <ComponentWrapper name="Toggle Group Single" icon="CircleDot">
          <ToggleGroupSingle />
        </ComponentWrapper>
        <ComponentWrapper name="Toggle Group Small" icon="Minimize">
          <ToggleGroupSm />
        </ComponentWrapper>
        <ComponentWrapper name="Toggle Group Spacing" icon="Space">
          <ToggleGroupSpacing />
        </ComponentWrapper>
      </div>
    </div>
  )
}
