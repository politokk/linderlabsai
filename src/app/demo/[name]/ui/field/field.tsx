import FieldDemo from "./field-demo";
import FieldInput from "./field-input";
import FieldTextarea from "./field-textarea";
import FieldSelect from "./field-select";
import FieldCheckbox from "./field-checkbox";
import FieldRadio from "./field-radio";
import FieldSwitch from "./field-switch";
import FieldSlider from "./field-slider";
import FieldFieldset from "./field-fieldset";
import FieldGroup from "./field-group";
import FieldChoiceCard from "./field-choice-card";
import FieldResponsive from "./field-responsive";

export const field = {
  name: "field",
  components: {
    Default: <FieldDemo />,
    Input: <FieldInput />,
    Textarea: <FieldTextarea />,
    Select: <FieldSelect />,
    Checkbox: <FieldCheckbox />,
    Radio: <FieldRadio />,
    Switch: <FieldSwitch />,
    Slider: <FieldSlider />,
    Fieldset: <FieldFieldset />,
    Group: <FieldGroup />,
    ChoiceCard: <FieldChoiceCard />,
    Responsive: <FieldResponsive />,
  },
};