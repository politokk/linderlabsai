import InputOTPDemo from "@/components/demos/input-otp/input-otp-demo";
import InputOTPControlled from "@/components/demos/input-otp/input-otp-controlled";
import InputOTPPattern from "@/components/demos/input-otp/input-otp-pattern";
import InputOTPWithSeparator from "@/components/demos/input-otp/input-otp-separator";
import InputOTPForm from "@/components/demos/input-otp/input-otp-form";
import InputOTPSpacing from "@/components/demos/input-otp/input-spacing";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export default function inputOtp() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Input OTP" icon="Hash">
          <InputOTPDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Input OTP Controlled" icon="Gamepad2">
          <InputOTPControlled />
        </ComponentWrapper>
        <ComponentWrapper name="Input OTP Pattern" icon="Grid3x3">
          <InputOTPPattern />
        </ComponentWrapper>
        <ComponentWrapper name="Input OTP Separator" icon="Minus">
          <InputOTPWithSeparator />
        </ComponentWrapper>
        <ComponentWrapper name="Input OTP Form" icon="FileText">
          <InputOTPForm />
        </ComponentWrapper>
        <ComponentWrapper name="Input OTP Spacing" icon="Spacing">
          <InputOTPSpacing />
        </ComponentWrapper>
      </div>
    </div>
  )
}