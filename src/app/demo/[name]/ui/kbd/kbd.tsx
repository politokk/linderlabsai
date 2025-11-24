import KbdGroupExample from "./kbd-group";
import KbdInputGroup from "./kbd-input-group";
import KbdTooltip from "./kbd-tooltip";
import KbdButton from "./kbd-button";
import KbdDemo from "./kbd-demo";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export default function kbd() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="KBD" icon="Keyboard">
          <KbdDemo />
        </ComponentWrapper>
        <ComponentWrapper name="KBD Multiple" icon="Grid3x3">
          <KbdGroupExample />
        </ComponentWrapper>
        <ComponentWrapper name="KBD Input Group" icon="Layers">
          <KbdInputGroup />
        </ComponentWrapper>
        <ComponentWrapper name="KBD Tooltip" icon="Info">
          <KbdTooltip />
        </ComponentWrapper>
        <ComponentWrapper name="KBD Button" icon="Square">
          <KbdButton />
        </ComponentWrapper>
      </div>
    </div>
  )
}