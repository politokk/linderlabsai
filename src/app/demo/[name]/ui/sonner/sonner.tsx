import SonnerDemo from "./sonner-demo";
import SonnerTypes from "./sonner-types";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export default function sonner() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Sonner" icon="Bell">
          <SonnerDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Sonner Types" icon="Layers">
          <SonnerTypes />
        </ComponentWrapper>
      </div>
    </div>
  )
}
