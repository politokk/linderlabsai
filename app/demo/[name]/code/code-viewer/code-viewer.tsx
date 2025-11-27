import { ComponentWrapper } from "@/components/display/component-wrapper";
import CodeViewer from "@/components/demos/code/code-viewer/code-viewer";

export default function codeViewer() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Code Viewer" icon="Eye">
          <CodeViewer />
        </ComponentWrapper>    
      </div>
    </div>
  )
}