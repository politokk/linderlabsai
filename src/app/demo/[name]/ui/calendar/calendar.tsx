import { MultiCalendar } from "./multi-calendar";
import { SingleCalendar } from "./single-calendar";
import CalendarDemo from "./calendar-demo";
import CalendarForm from "./calendar-form";
import CalendarHijri from "./calendar-hijri";
import { ComponentWrapper } from "@/components/display/component-wrapper";

  export function calendar() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Calendar" icon="CalendarIcon">
          <CalendarDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Calendar Form" icon="CalendarFormIcon">
          <CalendarForm />
        </ComponentWrapper>
        <ComponentWrapper name="Calendar Hijri" icon="CalendarHijriIcon">
          <CalendarHijri />
        </ComponentWrapper>
        <ComponentWrapper name="Calendar Single" icon="CalendarSingleIcon">
          <SingleCalendar />
        </ComponentWrapper>
        <ComponentWrapper name="Calendar Multi" icon="CalendarMultiIcon">
          <MultiCalendar />
        </ComponentWrapper>
      </div>
    </div>
  )
}
