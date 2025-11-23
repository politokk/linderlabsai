import { MultiCalendar } from "./multi-calendar";
import { SingleCalendar } from "./single-calendar";
import CalendarDemo from "./calendar-demo";
import CalendarForm from "./calendar-form";
import CalendarHijri from "./calendar-hijri";

export const calendar = {
  name: "calendar",
  components: {
    Default: <CalendarDemo />,
    Form: <CalendarForm />,
    Hijri: <CalendarHijri />,
    Single: <SingleCalendar />,
    Multi: <MultiCalendar />,
  },
};
