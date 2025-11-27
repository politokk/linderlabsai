import ProgressDemo from "@/components/demos/ui/progress/progress-demo";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export default function progress() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Progress" icon="Activity">
          <ProgressDemo />
        </ComponentWrapper>
      </div>
    </div>
  )
}