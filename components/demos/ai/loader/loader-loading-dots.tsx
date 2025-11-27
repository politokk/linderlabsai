"use client"

import { Loader } from "@/components/ai-elements/loader"

export default function LoaderLoadingDotsDemo() {
  return (
    <div className="flex items-center justify-center p-4">
      <Loader variant="loading-dots" text="Loading" />
    </div>
  )
}