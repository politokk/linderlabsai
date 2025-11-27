import { ActivityIcon, FolderRootIcon, GitBranchIcon, BrainIcon, MessagesSquareIcon, WandSparklesIcon, ImageIcon, CheckIcon, CodeIcon, MoonIcon, InfoIcon, QuoteIcon, LinkIcon, MessageCircleIcon, LoaderIcon, LoaderCircleIcon, TriangleIcon, CircleIcon, MoreHorizontalIcon, CircleDotIcon, TerminalIcon, BarChart3Icon, AudioLinesIcon, TypeIcon, SparklesIcon, EllipsisIcon, MessageSquareIcon, BotIcon, CalendarDaysIcon, MousePointerClickIcon, ListEndIcon, ListOrderedIcon, TextCursorInputIcon, HourglassIcon, SparkleIcon, BookOpenIcon, CalendarCheckIcon, WrenchIcon, GlobeIcon } from "lucide-react";
import { RegistryHeader } from "@/components/registry/registry-header";

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
import MessagePage from "@/components/demos/ai/message/message-page";
import Message from "@/components/demos/ai/message/message";
import MessageFlat from "@/components/demos/ai/message/message-flat";
import ModelDropdown from "@/components/demos/ai/model-selector/model-dropdown";
import ModelSelector from "@/components/demos/ai/model-selector/model-selector";
import OpenInChat from "@/components/demos/ai/open-in-chat/open-in-chat";
import Plan from "@/components/demos/ai/plan/plan";
import PromptInputCursor from "@/components/demos/ai/prompt-input/prompt-input-cursor";
import PromptInput from "@/components/demos/ai/prompt-input/prompt-input";
import PromptInputPage from "@/components/demos/ai/prompt-input/prompt-input-page";
import Queue from "@/components/demos/ai/queue/queue";
import QueuePromptInput from "@/components/demos/ai/queue/queue-prompt-input";
import Reasoning from "@/components/demos/ai/reasoning/reasoning";
import ReasoningPage from "@/components/demos/ai/reasoning/reasoning-page";
import Response from "@/components/demos/ai/response/response";
import Shimmer from "@/components/demos/ai/shimmer/shimmer";
import ShimmerDuration from "@/components/demos/ai/shimmer/shimmer-duration";
import ShimmerElements from "@/components/demos/ai/shimmer/shimmer-elements";
import Sources from "@/components/demos/ai/sources/sources";
import SourcesCustom from "@/components/demos/ai/sources/sources-custom";
import Suggestions from "@/components/demos/ai/suggestion/suggestion";
import SuggestionsInput from "@/components/demos/ai/suggestion/suggestion-input";
import SuggestionsPage from "@/components/demos/ai/suggestion/suggestion-page";
import Task from "@/components/demos/ai/task/task";
import Tool from "@/components/demos/ai/tool/tool";
import ToolInputAvailable from "@/components/demos/ai/tool/tool-input-available";
import ToolInputStreaming from "@/components/demos/ai/tool/tool-input-streaming";
import ToolOutputAvailable from "@/components/demos/ai/tool/tool-output-available";
import ToolOutputError from "@/components/demos/ai/tool/tool-output-error";
import ToolPage from "@/components/demos/ai/tool/tool-page";
import WebPreview from "@/components/demos/ai/web-preview/web-preview";
import WebPreviewPage from "@/components/demos/ai/web-preview/web-preview-page";

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
        <ComponentDisplay path="/ai/message/message" icon={<MessageSquareIcon />}>
          <Message />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/message/message-flat" icon={<MessageSquareIcon />}>
          <MessageFlat />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/message/message-page" icon={<MessageSquareIcon />}>
          <MessagePage />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/plan/plan" icon={<CalendarDaysIcon />}>
            <Plan />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/model-selector/model-selector" icon={<BotIcon />}>
            <ModelSelector />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/model-selector/model-dropdown" icon={<BotIcon />}>
          <ModelDropdown />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/open-in-chat/open-in-chat" icon={<MessageSquareIcon />}>
            <OpenInChat />
        </ComponentDisplay>
        
        <ComponentDisplay path="/ai/prompt-input/prompt-input" icon={<MessageSquareIcon />}>
          <PromptInput />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/prompt-input/prompt-input-cursor" icon={<MousePointerClickIcon />}>
          <PromptInputCursor />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/prompt-input/prompt-input-page" icon={<MessageSquareIcon />}>
          <PromptInputPage />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/queue/queue" icon={<ListOrderedIcon />}>
          <Queue />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/queue/queue-prompt-input" icon={<ListEndIcon />}>
          <QueuePromptInput />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/reasoning/reasoning" icon={<BrainIcon />}>
          <Reasoning />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/reasoning/reasoning-page" icon={<BrainIcon />}>
          <ReasoningPage />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/response/response" icon={<TextCursorInputIcon />}>
          <Response />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/shimmer/shimmer" icon={<SparklesIcon />}>
          <Shimmer />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/shimmer/shimmer-duration" icon={<HourglassIcon />}>
          <ShimmerDuration />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/shimmer/shimmer-elements" icon={<SparkleIcon />}>
          <ShimmerElements />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/sources/sources" icon={<BookOpenIcon />}>
          <Sources />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/sources/sources-custom" icon={<BookOpenIcon />}>
          <SourcesCustom />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/suggestions/suggestions" icon={<BookOpenIcon />}>
          <Suggestions />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/suggestions/suggestions-input" icon={<BookOpenIcon />}>
          <SuggestionsInput />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/suggestions/suggestions-page" icon={<BookOpenIcon />}>
          <SuggestionsPage />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/task/task" icon={<CalendarCheckIcon />}>
          <Task />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/tool/tool" icon={<WrenchIcon />}>
          <Tool />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/tool/tool-input-available" icon={<WrenchIcon />}>
          <ToolInputAvailable />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/tool/tool-input-streaming" icon={<WrenchIcon />}>
          <ToolInputStreaming />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/tool/tool-output-available" icon={<WrenchIcon />}>
          <ToolOutputAvailable />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/tool/tool-output-error" icon={<WrenchIcon />}>
          <ToolOutputError />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/tool/tool-page" icon={<WrenchIcon />}>
          <ToolPage />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/web-preview/web-preview" icon={<GlobeIcon />}>
          <WebPreview />
        </ComponentDisplay>
        <ComponentDisplay path="/ai/web-preview/web-preview-page" icon={<GlobeIcon />}>
          <WebPreviewPage />
        </ComponentDisplay>
      </div>
      </div>
    </div>
  )
}