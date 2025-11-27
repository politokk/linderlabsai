import DatePickerDemo from "@/components/demos/ui/date-picker/date-picker-demo";
import DatePickerWithPresets from "@/components/demos/ui/date-picker/date-picker-with-presets";
import DatePickerWithRange from "@/components/demos/ui/date-picker/date-picker-with-range";
import DatePickerForm from "@/components/demos/ui/date-picker/date-picker-form";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export default function datePicker() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Date Picker" icon="CalendarDays">
          <DatePickerDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Date Picker With Presets" icon="CalendarClock">
          <DatePickerWithPresets />
        </ComponentWrapper>
        <ComponentWrapper name="Date Picker With Range" icon="CalendarRange">
          <DatePickerWithRange />
        </ComponentWrapper>
        <ComponentWrapper name="Date Picker Form" icon="Calendar">
          <DatePickerForm />
        </ComponentWrapper>
      </div>
    </div>
  )
}
