import DialogDemo from "@/components/demos/dialog/dialog-demo";
import DialogCloseButton from "@/components/demos/dialog/dialog-close-button";
import DialogScroll from "@/components/demos/dialog/dialog-scroll";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export default function dialog() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Dialog" icon="MessageSquare">
          <DialogDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Dialog Close Button" icon="X">
          <DialogCloseButton />
        </ComponentWrapper>
        <ComponentWrapper name="Dialog Scroll" icon="Scroll">
          <DialogScroll />
        </ComponentWrapper>
      </div>
    </div>
  )
}