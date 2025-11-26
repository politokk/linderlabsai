import { ComponentWrapper } from "@/components/display/component-wrapper"
import AccordionDemo from "@/components/demos/accordion/accordion-demo";
import AccordionExtensive from "@/components/demos/accordion/accordion-extensive";
import { Preview } from "@/components/code/preview";
import { ComponentDisplay } from "@/components/display/component-display";
import { FolderRootIcon, ScrollTextIcon } from "lucide-react";
export const dynamic = "force-dynamic"

export default function accordion() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <ComponentDisplay key="accordion-demo" path="accordion/accordion-demo" icon={<FolderRootIcon />}>
              <AccordionDemo />
            </ComponentDisplay>
            <ComponentDisplay key="accordion-extensive" path="accordion/accordion-extensive" icon={<ScrollTextIcon />} >
              <AccordionExtensive />
            </ComponentDisplay>
      </div>
    </div>
  )
}