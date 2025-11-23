import TextareaDemo from "./textarea-demo";
import TextareaDisabled from "./textarea-disabled";
import TextareaForm from "./textarea-form";
import TextareaWithButton from "./textarea-with-button";
import TextareaWithLabel from "./textarea-with-label";
import TextareaWithText from "./textarea-with-text";

export const textarea = {
  name: "textarea",
  components: {
    Default: <TextareaDemo />,
    WithLabel: <TextareaWithLabel />,
    WithText: <TextareaWithText />,
    Disabled: <TextareaDisabled />,
    Form: <TextareaForm />,
    WithButton: <TextareaWithButton />,
  },
};