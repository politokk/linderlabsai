import DatePickerDemo from "./date-picker-demo";
import DatePickerWithPresets from "./date-picker-with-presets";
import DatePickerWithRange from "./date-picker-with-range";
import DatePickerForm from "./date-picker-form";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export function datePicker() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Default" icon="CalendarDays">
          <DatePickerDemo />
        </ComponentWrapper>
        <ComponentWrapper name="With Presets" icon="CalendarClock">
          <DatePickerWithPresets />
        </ComponentWrapper>
        <ComponentWrapper name="With Range" icon="CalendarRange">
          <DatePickerWithRange />
        </ComponentWrapper>
        <ComponentWrapper name="Form" icon="Calendar">
          <DatePickerForm />
        </ComponentWrapper>
      </div>
    </div>
  )
}
