import DatePickerDemo from "./date-picker-demo";
import DatePickerWithPresets from "./date-picker-with-presets";
import DatePickerWithRange from "./date-picker-with-range";
import DatePickerForm from "./date-picker-form";

export const datePicker = {
  name: "date-picker",
  components: {
    Default: <DatePickerDemo />,
    WithPresets: <DatePickerWithPresets />,
    WithRange: <DatePickerWithRange />,
    Form: <DatePickerForm />,
  },
};
