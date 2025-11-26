import AccordionDemo from "@/components/demos/accordion/accordion-demo"
import AccordionExtensive from "@/components/demos/accordion/accordion-extensive"
import { ComponentDisplay } from "@/components/display/component-display"
import { FolderRootIcon, ScrollTextIcon } from "lucide-react"

export default function accordion() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentDisplay name="accordion-demo" styleName="new-york-v4" icon={<FolderRootIcon />}>
          <AccordionDemo />
        </ComponentDisplay>
        <ComponentDisplay name="accordion-extensive" styleName="new-york-v4" icon={<ScrollTextIcon />}>
          <AccordionExtensive />
        </ComponentDisplay>
      </div>
    </div>
  )
}
