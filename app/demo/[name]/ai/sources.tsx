import { ComponentWrapper } from "@/components/display/component-wrapper"
import Sources from "@/components/demos/ai/sources/sources";
import SourcesCustom from "@/components/demos/ai/sources/sources-custom";
export default function sources() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ComponentWrapper name="Sources" icon="BookOpen" >
          <Sources />
        </ComponentWrapper>
        <ComponentWrapper name="Sources Custom" icon="BookOpen" >
          <SourcesCustom />
        </ComponentWrapper>
      </div>
    </div>
  )
}