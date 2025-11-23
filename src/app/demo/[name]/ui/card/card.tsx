import CardDemo from "./card-demo";
import CardWithForm from "./card-with-form";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export function card() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Default" icon="CreditCard">
          <CardDemo />
        </ComponentWrapper>
        <ComponentWrapper name="With Form" icon="FileText">
          <CardWithForm />
        </ComponentWrapper>
      </div>
    </div>
  )
}