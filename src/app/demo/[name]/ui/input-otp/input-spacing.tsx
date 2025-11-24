"use client"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"

export default function InputOTPSpacing() {
  return (
    <div className="flex flex-col flex-wrap gap-6 md:flex-row">
      <InputOTPWithSpacing />
    </div>
  )
}

function InputOTPWithSpacing() {
  return (
    <div className="grid gap-2">
      <Label htmlFor="with-spacing">With Spacing</Label>
      <InputOTP id="with-spacing" maxLength={6}>
        <InputOTPGroup className="gap-2 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border">
          <InputOTPSlot index={0} aria-invalid="true" />
          <InputOTPSlot index={1} aria-invalid="true" />
          <InputOTPSlot index={2} aria-invalid="true" />
          <InputOTPSlot index={3} aria-invalid="true" />
        </InputOTPGroup>
      </InputOTP>
    </div>
  )
}