import { ComponentWrapper } from "@/components/display/component-wrapper"
import Message from "@/components/demos/ai/message/message";
import MessagePage from "@/components/demos/ai/message/message-page";
import MessageFlat from "@/components/demos/ai/message/message-flat";
export default function message() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Message" icon="MessageSquare">
          <Message />
        </ComponentWrapper>
        <ComponentWrapper name="Message Flat" icon="MessageSquare" >
          <MessageFlat />
        </ComponentWrapper>
        <ComponentWrapper name="Message Page" icon="MessageSquare" >
          <MessagePage />
        </ComponentWrapper>
      </div>
    </div>
  )
}