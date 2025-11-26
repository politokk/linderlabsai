import { ComponentWrapper } from "@/components/display/component-wrapper"
import AccordionDemo from "@/components/demos/accordion/accordion-demo";
import AccordionExtensive from "@/components/demos/accordion/accordion-extensive";
export default function accordion() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Accordion" icon="ChevronDown">
          <AccordionDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Accordion Extensive" icon="ScrollText">
          <AccordionExtensive />
        </ComponentWrapper>
      </div>
    </div>
  )
}