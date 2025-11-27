"use client"

import { Loader } from "@/components/ai-elements/loader"

export default function LoaderTextShimmerDemo() {
  return (
    <div className="flex items-center justify-center p-4">
      <Loader variant="text-shimmer" text="Loading" />
    </div>
  )
}