import { ComponentWrapper } from "@/components/display/component-wrapper"
import InlineCitation from "@/components/demos/ai/inline-citation/inline-citation";
import InlineCitationPage from "@/components/demos/ai/inline-citation/inline-citation-page";
export default function inlineCitation() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Inline Citation" icon="Quote" >
          <InlineCitation />
        </ComponentWrapper>
        <ComponentWrapper name="Inline Citation Page" icon="Quote" >
          <InlineCitationPage />
        </ComponentWrapper>
      </div>
    </div>
  )
}