import { ComponentWrapper } from "@/components/display/component-wrapper"
import Links from "@/components/demos/ai/links/links";
import LinksCustom from "@/components/demos/ai/links/links-custom";
export default function links() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ComponentWrapper name="Links" icon="Link" >
          <Links />
        </ComponentWrapper>
        <ComponentWrapper name="Links Custom" icon="Link" >
          <LinksCustom />
        </ComponentWrapper>
      </div>
    </div>
  )
}