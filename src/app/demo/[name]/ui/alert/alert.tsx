import { ComponentWrapper } from "@/components/display/component-wrapper"
import AlertDemo from "./alert-demo"
import AlertDestructive from "./alert-destructive"

export function alert() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Alert" icon="BellIcon">
          <AlertDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Alert Destructive" icon="AlertTriangleIcon">
          <AlertDestructive />
        </ComponentWrapper>
      </div>
    </div>
  )
}