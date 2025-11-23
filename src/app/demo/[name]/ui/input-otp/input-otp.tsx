  import InputOTPDemo from "./input-otp-demo";
  import InputOTPControlled from "./input-otp-controlled";
  import InputOTPPattern from "./input-otp-pattern";
  import InputOTPWithSeparator from "./input-otp-separator";
  import InputOTPForm from "./input-otp-form";
  export const inputOtp = {
    name: "input-otp",
    components: {
        Default: <InputOTPDemo/>,
        Controlled: <InputOTPControlled/>,
        Pattern: <InputOTPPattern/>,
        Separator: <InputOTPWithSeparator/>,
      Form: <InputOTPForm/>,
    },
  };