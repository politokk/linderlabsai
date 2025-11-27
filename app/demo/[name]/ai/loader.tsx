import { ComponentWrapper } from "@/components/display/component-wrapper"
import LoaderCircular from "@/components/demos/ai/loader/loader-circular"
import LoaderClassic from "@/components/demos/ai/loader/loader-classic"
import LoaderVercel from "@/components/demos/ai/loader/loader-vercel"
import LoaderPulse from "@/components/demos/ai/loader/loader-pulse"
import LoaderPulseDot from "@/components/demos/ai/loader/loader-pulse-dot"
import LoaderDots from "@/components/demos/ai/loader/loader-dots"
import LoaderTyping from "@/components/demos/ai/loader/loader-typing"
import LoaderWave from "@/components/demos/ai/loader/loader-wave"
import LoaderBars from "@/components/demos/ai/loader/loader-bars"
import LoaderTerminal from "@/components/demos/ai/loader/loader-terminal"
import LoaderTextBlink from "@/components/demos/ai/loader/loader-text-blink"
import LoaderTextShimmer from "@/components/demos/ai/loader/loader-text-shimmer"
import LoaderLoadingDots from "@/components/demos/ai/loader/loader-loading-dots"
import LoaderMessage from "@/components/demos/ai/loader/loader-message"

export default function Loader() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Circular" icon="LoaderCircle">
        <ComponentWrapper name="Message" icon="MessageCircle">
          <LoaderMessage />
        </ComponentWrapper>
          <LoaderCircular />
        </ComponentWrapper>
        <ComponentWrapper name="Classic" icon="Loader">
          <LoaderClassic />
        </ComponentWrapper>
        <ComponentWrapper name="Vercel" icon="Triangle">
          <LoaderVercel />
        </ComponentWrapper>
        <ComponentWrapper name="Pulse" icon="Circle">
          <LoaderPulse />
        </ComponentWrapper>
        <ComponentWrapper name="Pulse Dot" icon="CircleDot">
          <LoaderPulseDot />
        </ComponentWrapper>
        <ComponentWrapper name="Dots" icon="MoreHorizontal">
          <LoaderDots />
        </ComponentWrapper>
        <ComponentWrapper name="Typing" icon="MessageCircle">
          <LoaderTyping />
        </ComponentWrapper>
        <ComponentWrapper name="Wave" icon="AudioLines">
          <LoaderWave />
        </ComponentWrapper>
        <ComponentWrapper name="Bars" icon="BarChart3">
          <LoaderBars />
        </ComponentWrapper>
        <ComponentWrapper name="Terminal" icon="Terminal">
          <LoaderTerminal />
        </ComponentWrapper>
        <ComponentWrapper name="Text Blink" icon="Type">
          <LoaderTextBlink />
        </ComponentWrapper>
        <ComponentWrapper name="Text Shimmer" icon="Sparkles">
          <LoaderTextShimmer />
        </ComponentWrapper>
        <ComponentWrapper name="Loading Dots" icon="Ellipsis">
          <LoaderLoadingDots />
        </ComponentWrapper>
      </div>
    </div>
  )
}