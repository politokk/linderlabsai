import { ActivityIcon, FolderRootIcon, GitBranchIcon, BrainIcon, MessagesSquareIcon, WandSparklesIcon, ImageIcon, CheckIcon, CodeIcon, MoonIcon, InfoIcon, QuoteIcon, LinkIcon, MessageCircleIcon, LoaderIcon, LoaderCircleIcon, TriangleIcon, CircleIcon, MoreHorizontalIcon, CircleDotIcon, TerminalIcon, BarChart3Icon, AudioLinesIcon, TypeIcon, SparklesIcon, EllipsisIcon } from "lucide-react";

import { ComponentDisplay } from "@/components/display/component-display"
import Actions from "@/components/demos/ai/actions/actions";
import ActionsPage from "@/components/demos/ai/actions/actions-page";
import Artifact from "@/components/demos/ai/artifact/artifact";
import Branch from "@/components/demos/ai/branch/branch";
import ChainOfThought from "@/components/demos/ai/chain-of-thought/chain-of-thought";
import Checkpoint from "@/components/demos/ai/checkpoint/checkpoint";
import CodeBlock from "@/components/demos/ai/code-block/code-block";
import CodeBlockDark from "@/components/demos/ai/code-block/code-block-dark";
import CodeBlockPage from "@/components/demos/ai/code-block/code-block-page";
import Confirmation from "@/components/demos/ai/confirmation/confirmation";
import ConfirmationRequest from "@/components/demos/ai/confirmation/confirmation-request";
import ConfirmationAccepted from "@/components/demos/ai/confirmation/confirmation-accepted";
import ConfirmationRejected from "@/components/demos/ai/confirmation/confirmation-rejected";
import ConfirmationPage from "@/components/demos/ai/confirmation/confirmation-page";
import Context from "@/components/demos/ai/context/context";
import Conversation from "@/components/demos/ai/conversation/conversation";
import ConversationPage from "@/components/demos/ai/conversation/conversation-page";
import { FeedbackBar } from "@/components/ai-elements/feedback-bar";
import ImageDemo from "@/components/demos/ai/image/image";
import ImagePage from "@/components/demos/ai/image/image-page";
import InlineCitation from "@/components/demos/ai/inline-citation/inline-citation";
import InlineCitationPage from "@/components/demos/ai/inline-citation/inline-citation-page";
import LinksCustom from "@/components/demos/ai/links/links-custom";
import Links from "@/components/demos/ai/links/links";
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
import { RegistryHeader } from "@/components/registry/registry-header";

export default function AIPage() {
  return (
    <div className="flex flex-col min-h-full w-full">
      <RegistryHeader componentTitle="AI Page" componentIcon="BrainIcon" />
    <div className="flex flex-1 flex-col gap-4 p-4 mt-15">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentDisplay path="/ai/actions/actions" icon={<ActivityIcon />}>
          <Actions />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/actions/actions-page" icon={<ActivityIcon />}>
          <ActionsPage />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/artifact/artifact" icon={<FolderRootIcon />}>
          <Artifact />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/branch/branch" icon={<GitBranchIcon />}>
          <Branch />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/chain-of-thought/chain-of-thought" icon={<BrainIcon />}>
          <ChainOfThought />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/checkpoint/checkpoint" icon={<CheckIcon />}>
          <Checkpoint />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/code-block/code-block" icon={<CodeIcon />}>
          <CodeBlock />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/code-block/code-block-dark" icon={<MoonIcon />}>
          <CodeBlockDark />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/code-block/code-block-page" icon={<CodeIcon />}>
          <CodeBlockPage />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/confirmation/confirmation" icon={<CheckIcon />}>
          <Confirmation />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/confirmation/confirmation-request" icon={<CheckIcon />}>
          <ConfirmationRequest />
        </ComponentDisplay>
            <ComponentDisplay path="/ai/confirmation/confirmation-accepted" icon={<CheckIcon />}>
          <ConfirmationAccepted />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/confirmation/confirmation-rejected" icon={<CheckIcon />}>
          <ConfirmationRejected />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/confirmation/confirmation-page" icon={<CheckIcon />}>
          <ConfirmationPage />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/context/context" icon={<BrainIcon />}>
          <Context />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/conversation/conversation" icon={<MessagesSquareIcon />} className="h-[450px]" >
          <Conversation />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/conversation/conversation-page" icon={<MessagesSquareIcon />}>
          <ConversationPage />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/feedbackbar/feedbackbar" icon={<InfoIcon />}>
          <FeedbackBar />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/image/image" icon={<ImageIcon />}>
          <ImageDemo />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/image/image-page" icon={<WandSparklesIcon />}>
          <ImagePage /> 
        </ComponentDisplay>
        <ComponentDisplay path="/ai/inline-citation/inline-citation" icon={<QuoteIcon />}>
          <InlineCitation />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/inline-citation/inline-citation-page" icon={<QuoteIcon />}>
          <InlineCitationPage />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/links/links" icon={<LinkIcon />}>
          <Links />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/links/links-custom" icon={<LinkIcon />}>
          <LinksCustom />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/loader/loader-message" icon={<MessageCircleIcon />}>
          <LoaderMessage />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/loader/loader-circular" icon={<LoaderCircleIcon />}>
          <LoaderCircular />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/loader/loader-classic" icon={<LoaderIcon />}>
          <LoaderClassic />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/loader/loader-vercel" icon={<TriangleIcon />}>
          <LoaderVercel />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/loader/loader-pulse" icon={<CircleIcon />}>
          <LoaderPulse />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/loader/loader-pulse-dot" icon={<CircleDotIcon />}>
          <LoaderPulseDot />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/loader/loader-dots" icon={<MoreHorizontalIcon />}>
          <LoaderDots />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/loader/loader-typing" icon={<MessageCircleIcon />}>
          <LoaderTyping />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/loader/loader-wave" icon={<AudioLinesIcon />}>
          <LoaderWave />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/loader/loader-bars" icon={<BarChart3Icon />}>
          <LoaderBars />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/loader/loader-terminal" icon={<TerminalIcon />}>
          <LoaderTerminal />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/loader/loader-text-blink" icon={<TypeIcon />}>
          <LoaderTextBlink />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/loader/loader-text-shimmer" icon={<SparklesIcon />}>
          <LoaderTextShimmer />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/loader/loader-loading-dots" icon={<EllipsisIcon />}>
          <LoaderLoadingDots />
        </ComponentDisplay>
      </div>
      </div>
    </div>
  )
}