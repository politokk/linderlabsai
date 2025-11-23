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
import { ComponentWrapper } from "@/components/display/component-wrapper";


export function spinner() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Default" icon="Loader2">
          <SpinnerDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Basic" icon="Circle">
          <SpinnerBasic />
        </ComponentWrapper>
        <ComponentWrapper name="Button" icon="Square">
          <SpinnerButton />
        </ComponentWrapper>
        <ComponentWrapper name="Badge" icon="Tag">
          <SpinnerBadge />
        </ComponentWrapper>
        <ComponentWrapper name="Input Group" icon="Layers">
          <SpinnerInputGroup />
        </ComponentWrapper>
        <ComponentWrapper name="Empty" icon="Box">
          <SpinnerEmpty />
        </ComponentWrapper>
        <ComponentWrapper name="Color" icon="Palette">
          <SpinnerColor />
        </ComponentWrapper>
        <ComponentWrapper name="Custom" icon="Wrench">
          <SpinnerCustom />
        </ComponentWrapper>
        <ComponentWrapper name="Size" icon="Maximize">
          <SpinnerSize />
        </ComponentWrapper>
        <ComponentWrapper name="Item" icon="Box">
          <SpinnerItem />
        </ComponentWrapper>
      </div>
    </div>
  )
}