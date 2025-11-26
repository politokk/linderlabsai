import { ComponentWrapper } from "@/components/display/component-wrapper"
import WebPreview from "@/components/demos/ai/web-preview/web-preview";
import WebPreviewPage from "@/components/demos/ai/web-preview/web-preview-page";
export default function webPreview() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ComponentWrapper name="Web Preview" icon="Globe" >
          <WebPreview />
        </ComponentWrapper>
        <ComponentWrapper name="Web Preview Page" icon="Globe" >
          <WebPreviewPage />
        </ComponentWrapper>
      </div>
    </div>
  )
}