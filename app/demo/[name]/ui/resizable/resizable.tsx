import ResizableDemo from "@/components/demos/ui/resizable/resizable-demo";
import ResizableDemoWithHandle from "@/components/demos/ui/resizable/resizable-demo-with-handle";
import ResizableHandleDemo from "@/components/demos/ui/resizable/resizable-handle";
import ResizableVertical from "@/components/demos/ui/resizable/resizable-vertical";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export default function resizable() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Resizable" icon="Maximize2">
          <ResizableDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Resizable With Handle" icon="GripVertical">
          <ResizableDemoWithHandle />
        </ComponentWrapper>
        <ComponentWrapper name="Resizable Handle" icon="GripHorizontal">
          <ResizableHandleDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Resizable Vertical" icon="SeparatorVertical">
          <ResizableVertical />
        </ComponentWrapper>
      </div>
    </div>
  )
}