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
        <ComponentWrapper name="Spinner" icon="Loader2">
          <SpinnerDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Spinner Basic" icon="Circle">
          <SpinnerBasic />
        </ComponentWrapper>
        <ComponentWrapper name="Spinner Button" icon="Square">
          <SpinnerButton />
        </ComponentWrapper>
        <ComponentWrapper name="Spinner Badge" icon="Tag">
          <SpinnerBadge />
        </ComponentWrapper>
        <ComponentWrapper name="Spinner Input Group" icon="Layers">
          <SpinnerInputGroup />
        </ComponentWrapper>
        <ComponentWrapper name="Spinner Empty" icon="Box">
          <SpinnerEmpty />
        </ComponentWrapper>
        <ComponentWrapper name="Spinner Color" icon="Palette">
          <SpinnerColor />
        </ComponentWrapper>
        <ComponentWrapper name="Spinner Custom" icon="Wrench">
          <SpinnerCustom />
        </ComponentWrapper>
        <ComponentWrapper name="Spinner Size" icon="Maximize">
          <SpinnerSize />
        </ComponentWrapper>
        <ComponentWrapper name="Spinner Item" icon="Box">
          <SpinnerItem />
        </ComponentWrapper>
      </div>
    </div>
  )
}