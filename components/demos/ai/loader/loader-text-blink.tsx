"use client"

import { Loader } from "@/components/ai-elements/loader"

export default function LoaderTextBlinkDemo() {
  return (
    <div className="flex items-center justify-center p-4">
      <Loader variant="text-blink" text="Loading" />
    </div>
  )
}