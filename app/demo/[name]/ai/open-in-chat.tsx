import { ComponentWrapper } from "@/components/display/component-wrapper"
import OpenInChat from "@/components/demos/ai/open-in-chat/open-in-chat";
export default function openInChat() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Open in Chat" icon="MessageSquareShare">
            <OpenInChat />
        </ComponentWrapper>
      </div>
    </div>
  )
}