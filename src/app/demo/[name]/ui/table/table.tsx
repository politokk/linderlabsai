import TableDemo from "./table-demo";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export function table() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Table" icon="Table" className="md:col-span-2">
          <TableDemo />
        </ComponentWrapper>
      </div>
    </div>
  )
}
