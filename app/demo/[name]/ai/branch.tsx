import { ComponentWrapper } from "@/components/display/component-wrapper"
import Branch from "@/components/demos/ai/branch/branch";
export default function branch() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Branch" icon="GitBranch">
          <Branch />
        </ComponentWrapper>
      </div>
    </div>
  )
}