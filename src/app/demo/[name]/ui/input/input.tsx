import InputDemo from "./input-demo";
import InputDisabled from "./input-disabled";
import InputFile from "./input-file";
import InputForm from "./input-form";
import InputWithButton from "./input-with-button";
import InputWithLabel from "./input-with-label";
import InputWithText from "./input-with-text";

export const input = {
  name: "input",
  components: {
    Default: <InputDemo/>,
    Disabled: <InputDisabled/>,
    File: <InputFile/>,
    Form: <InputForm/>,
    WithButton: <InputWithButton/>,
    WithLabel: <InputWithLabel/>,
    WithText: <InputWithText/>,
  },
};
