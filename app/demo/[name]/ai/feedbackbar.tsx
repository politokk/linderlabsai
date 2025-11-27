import { ComponentWrapper } from "@/components/display/component-wrapper"
import FeedbackBar from "@/components/demos/ai/feedbackbar/feedbackbar";
export default function feedbackbar() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Feedback Bar" icon="Info" >
          <FeedbackBar />
        </ComponentWrapper>
      </div>
    </div>
  )
}