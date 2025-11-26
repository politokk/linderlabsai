import { ComponentWrapper } from "@/components/display/component-wrapper"
import LoaderDemo from "@/components/demos/ai/loader/loader";
import LoaderCustom from "@/components/demos/ai/loader/loader-custom";
import LoaderSizes from "@/components/demos/ai/loader/loader-sizes";
export default function Loader() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ComponentWrapper name="Loader" icon="Loader" >
          <LoaderDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Loader Custom" icon="LoaderCircle" >
          <LoaderCustom />
        </ComponentWrapper>
        <ComponentWrapper name="Loader Sizes" icon="LoaderPinWheel" >
          <LoaderSizes />
        </ComponentWrapper>
      </div>
    </div>
  )
}