import SkeletonDemo from "./skeleton-demo";
import SkeletonCard from "./skeleton-card";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export default function skeleton() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Skeleton" icon="Box">
          <SkeletonDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Skeleton Card" icon="CreditCard">
          <SkeletonCard />
        </ComponentWrapper>
      </div>
    </div>
  )
}
