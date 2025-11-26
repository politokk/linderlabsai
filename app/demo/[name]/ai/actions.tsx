import { ComponentWrapper } from "@/components/display/component-wrapper"
import Actions from "@/components/demos/ai/actions/actions";
import ActionsPage from "@/components/demos/ai/actions/actions-page";
export default function actions() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Actions" icon="Activity">
          <Actions />
        </ComponentWrapper>
        <ComponentWrapper name="Actions Page" icon="Activity">
          <ActionsPage />
        </ComponentWrapper>
      </div>
    </div>
  )
}