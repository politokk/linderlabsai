import { ComponentWrapper } from "@/components/display/component-wrapper"
import Confirmation from "@/components/demos/ai/confirmation/confirmation";
import ConfirmationRequest from "@/components/demos/ai/confirmation/confirmation-request";
import ConfirmationAccepted from "@/components/demos/ai/confirmation/confirmation-accepted";
import ConfirmationRejected from "@/components/demos/ai/confirmation/confirmation-rejected";
export default function confirmation() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Confirmation" icon="Check" >
          <Confirmation />
        </ComponentWrapper>
        <ComponentWrapper name="Confirmation Request" icon="Check" >
          <ConfirmationRequest />
        </ComponentWrapper>
        <ComponentWrapper name="Confirmation Accepted" icon="Check" >
          <ConfirmationAccepted />
        </ComponentWrapper>
        <ComponentWrapper name="Confirmation Rejected" icon="Check" >
          <ConfirmationRejected />
        </ComponentWrapper>
      </div>
    </div>
  )
}