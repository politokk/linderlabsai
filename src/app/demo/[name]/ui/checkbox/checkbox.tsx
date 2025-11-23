import CheckboxDemo from "./checkbox-demo";
import CheckboxDisabled from "./checkbox-disabled";
import CheckboxWithText from "./checkbox-with-text";
import CheckboxFormMultiple from "./checkbox-form-multiple";
import CheckboxFormSingle from "./checkbox-form-single";
export const checkbox = {
  name: "checkbox",
  components: {
      Default: <CheckboxDemo />,
      Disabled: <CheckboxDisabled />,
      WithText: <CheckboxWithText />,
      FormMultiple: <CheckboxFormMultiple />,
      FormSingle: <CheckboxFormSingle />,
  },
};
