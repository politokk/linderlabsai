import ResizableDemo from "./resizable-demo";
import ResizableDemoWithHandle from "./resizable-demo-with-handle";
import ResizableHandleDemo from "./resizable-handle";
import ResizableVertical from "./resizable-vertical";
  
export const resizable = {
    name: "resizable",
    components: {
      Default: <ResizableDemo/>,
      WithHandle: <ResizableDemoWithHandle/>,
      Handle: <ResizableHandleDemo/>,
      Vertical: <ResizableVertical/>,
    },
  };