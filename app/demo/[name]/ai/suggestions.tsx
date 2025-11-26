import { ComponentWrapper } from "@/components/display/component-wrapper"
import Suggestions from "@/components/demos/ai/suggestion/suggestion";
import SuggestionsInput from "@/components/demos/ai/suggestion/suggestion-input";
import SuggestionsPage from "@/components/demos/ai/suggestion/suggestion-page";
export default function suggestions() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ComponentWrapper name="Suggestions" icon="BookOpen" >
          <Suggestions />
        </ComponentWrapper>
        <ComponentWrapper name="Suggestions Input" icon="BookOpen" >
          <SuggestionsInput />
        </ComponentWrapper>
        <ComponentWrapper name="Suggestions Page" icon="BookOpen" >
          <SuggestionsPage />
        </ComponentWrapper>
      </div>
    </div>
  )
}