import TabsDemo from "@/components/demos/tabs/tabs-demo";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export default function tabs() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Tabs" icon="Folder">
          <TabsDemo />
        </ComponentWrapper>
      </div>
    </div>
  )
}