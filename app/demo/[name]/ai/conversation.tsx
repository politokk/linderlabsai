import { ComponentWrapper } from "@/components/display/component-wrapper"
import Conversation from "@/components/demos/ai/conversation/conversation";
import ConversationPage from "@/components/demos/ai/conversation/conversation-page";
export default function conversation() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Conversation" icon="MessagesSquare" className="h-[450px]" >
          <Conversation />
        </ComponentWrapper>
        <ComponentWrapper name="Conversation Page" icon="MessagesSquare" >
          <ConversationPage />
        </ComponentWrapper>
      </div>
    </div>
  )
}