import MultiCalendar from "@/components/demos/calendar/multi-calendar";
import SingleCalendar from "@/components/demos/calendar/single-calendar";
import CalendarDemo from "@/components/demos/calendar/calendar-demo";
import CalendarForm from "@/components/demos/calendar/calendar-form";
import CalendarHijri from "@/components/demos/calendar/calendar-hijri";
import { ComponentWrapper } from "@/components/display/component-wrapper";

  export default function calendar() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Calendar" icon="Calendar">
          <CalendarDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Calendar Form" icon="CalendarCheck">
          <CalendarForm />
        </ComponentWrapper>
        <ComponentWrapper name="Calendar Hijri" icon="CalendarDays">
          <CalendarHijri />
        </ComponentWrapper>
        <ComponentWrapper name="Calendar Single" icon="CalendarRange">
          <SingleCalendar />
        </ComponentWrapper>
        <ComponentWrapper name="Calendar Multi" icon="CalendarDays">
          <MultiCalendar />
        </ComponentWrapper>
      </div>
    </div>
  )
}
