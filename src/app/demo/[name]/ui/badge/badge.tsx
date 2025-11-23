import { ComponentWrapper } from "@/components/display/component-wrapper";
import BadgeDemo from "./badge-demo";
import BadgeDestructive from "./badge-destructive";
import BadgeOutline from "./badge-outline";
import BadgeSecondary from "./badge-secondary";

export function badge() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Badge" icon="Tag">
        <BadgeDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Badge Destructive" icon="XCircle">
          <BadgeDestructive />
        </ComponentWrapper>
        <ComponentWrapper name="Badge Outline" icon="Circle">
          <BadgeOutline />
        </ComponentWrapper>
        <ComponentWrapper name="Badge Secondary" icon="Tag">
          <BadgeSecondary />
        </ComponentWrapper>
      </div>
    </div>
  )
}
