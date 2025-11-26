import { ComponentWrapper } from "@/components/display/component-wrapper"
import AccordionDemo from "@/components/demos/accordion/accordion-demo";
import AccordionExtensive from "@/components/demos/accordion/accordion-extensive";
import { Preview } from "@/components/code/preview";
export default function accordion() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Preview path="accordion/accordion-demo" />
        <Preview path="accordion/accordion-extensive" />
      </div>
    </div>
  )
}