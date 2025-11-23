import ResizableDemo from "./resizable-demo";
import ResizableDemoWithHandle from "./resizable-demo-with-handle";
import ResizableHandleDemo from "./resizable-handle";
import ResizableVertical from "./resizable-vertical";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export function resizable() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Default" icon="Maximize2">
          <ResizableDemo />
        </ComponentWrapper>
        <ComponentWrapper name="With Handle" icon="GripVertical">
          <ResizableDemoWithHandle />
        </ComponentWrapper>
        <ComponentWrapper name="Handle" icon="GripHorizontal">
          <ResizableHandleDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Vertical" icon="SeparatorVertical">
          <ResizableVertical />
        </ComponentWrapper>
      </div>
    </div>
  )
}