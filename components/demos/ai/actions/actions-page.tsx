"use client"

import { Fragment, useState } from "react"
import { useChat } from "@ai-sdk/react"
import { toast } from "sonner"

import { cn } from "@/lib/utils"
import { Action, Actions } from "@/components/ai-elements/actions"
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation"
import {
  Message,
  MessageContent,
} from "@/components/ai-elements/message"
import {
  PromptInput,
  PromptInputSubmit,
  PromptInputTextarea,
} from "@/components/ai-elements/prompt-input"
import { Response } from "@/components/ai-elements/response"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ThumbsUpIcon, ThumbsDownIcon, UserIcon, RefreshCcwIcon, CheckIcon, CopyIcon, EditIcon, XIcon, Volume2Icon, AudioLinesIcon } from "lucide-react"

const ActionsDemo = () => {
  const [input, setInput] = useState("")
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [likedMessages, setLikedMessages] = useState<Record<string, boolean>>(
    {}
  )
  const [dislikedMessages, setDislikedMessages] = useState<
    Record<string, boolean>
  >({})
  const [readingMessageId, setReadingMessageId] = useState<string | null>(null)
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null)
  const [editText, setEditText] = useState("")

  const { messages, sendMessage, status, regenerate, setMessages } = useChat()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      sendMessage({ text: input })
      setInput("")
    }
  }

  const handleCopy = async (messageId: string, text: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedId(messageId)
    toast.success("Copied to clipboard")
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleLike = (messageId: string) => {
    const isCurrentlyLiked = likedMessages[messageId]

    setLikedMessages((prev) => ({
      ...prev,
      [messageId]: !prev[messageId],
    }))

    if (!isCurrentlyLiked) {
      setDislikedMessages((prev) => ({
        ...prev,
        [messageId]: false,
      }))
      toast.success("Feedback received: Liked")
    } else {
      toast.info("Like removed")
    }
  }

  const handleDislike = (messageId: string) => {
    const isCurrentlyDisliked = dislikedMessages[messageId]

    setDislikedMessages((prev) => ({
      ...prev,
      [messageId]: !prev[messageId],
    }))

    if (!isCurrentlyDisliked) {
      setLikedMessages((prev) => ({
        ...prev,
        [messageId]: false,
      }))
      toast.success("Feedback received: Disliked")
    } else {
      toast.info("Dislike removed")
    }
  }

  const handleReadAloud = (messageId: string, text: string) => {
    if (readingMessageId === messageId) {
      window.speechSynthesis.cancel()
      setReadingMessageId(null)
      return
    }

    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)

    utterance.onstart = () => {
      setReadingMessageId(messageId)
    }

    utterance.onend = () => {
      setReadingMessageId(null)
    }

    utterance.onerror = () => {
      setReadingMessageId(null)
    }

    window.speechSynthesis.speak(utterance)
  }

  const handleRegenerate = async () => {
    if (status !== "streaming" && regenerate) {
      try {
        await regenerate()
        toast.success("Regenerating response...")
      } catch (error) {
        toast.error("Failed to regenerate response")
        console.error("Regenerate error:", error)
      }
    }
  }

  const handleEdit = (messageId: string) => {
    const message = messages.find((m) => m.id === messageId)
    if (message) {
      const messageText = message.parts
        .filter((part) => part.type === "text")
        .map((part) => part.text)
        .join("")
      setEditText(messageText)
      setEditingMessageId(messageId)
    }
  }

  const handleSaveEdit = (messageId: string) => {
    if (editText.trim()) {
      const messageIndex = messages.findIndex((m) => m.id === messageId)

      if (messageIndex !== -1) {
        const editedMessage = messages[messageIndex]
        if (editedMessage.role === "user") {
          const updatedMessages = messages.slice(0, messageIndex)

          // Update messages to remove the edited message and everything after it
          setMessages(updatedMessages)

          // Then trigger a new response generation
          setTimeout(() => {
            sendMessage({ text: editText.trim() })
            toast.success("Message updated and regenerating response...")
          }, 0)
        }
      }

      setEditingMessageId(null)
      setEditText("")
    } else {
      toast.error("Message cannot be empty")
    }
  }

  const handleCancelEdit = () => {
    setEditingMessageId(null)
    setEditText("")
  }

  return (
    <TooltipProvider>
      <div className="relative mx-auto size-full h-[600px] max-w-4xl rounded-lg border p-6">
        <div className="flex h-full flex-col">
          <Conversation>
            <ConversationContent>
              {messages.map((message, messageIndex) => {
                const isLastMessage = messageIndex === messages.length - 1
                const isStreaming =
                  isLastMessage &&
                  status === "streaming" &&
                  message.role === "assistant"

                return (
                  <div key={message.id} className="group">
                    {message.parts.map((part, i) => {
                      switch (part.type) {
                        case "text":
                          const hasContent =
                            part.text && part.text.trim() !== ""

                          // Don't render assistant messages with no content unless streaming
                          if (
                            message.role === "assistant" &&
                            !hasContent &&
                            !isStreaming
                          ) {
                            return null
                          }

                          return (
                            <Fragment key={`${message.id}-${i}`}>
                              {message.role === "assistant" ? (
                                <>
                                  <Message from={message.role}>
                                    <MessageContent>
                                      <Response>{part.text}</Response>
                                    </MessageContent>
                                  </Message>

                                  {/* Actions for assistant messages */}
                                  {hasContent && !isStreaming && (
                                    <Actions className="ml-11">
                                      {isLastMessage && (
                                        <Action
                                          onClick={handleRegenerate}
                                          tooltip="Regenerate"
                                          disabled={status === "streaming"}
                                        >
                                          <RefreshCcwIcon
                                            className={`text-muted-foreground h-3.5 w-3.5 ${
                                              status === "streaming"
                                                ? "animate-spin"
                                                : ""
                                            }`}
                                          />
                                        </Action>
                                      )}

                                      <Action
                                        onClick={() =>
                                          handleReadAloud(message.id, part.text)
                                        }
                                        tooltip={
                                          readingMessageId === message.id
                                            ? "Stop reading"
                                            : "Read aloud"
                                        }
                                      >
                                        {readingMessageId === message.id ? (
                                          <AudioLinesIcon className="text-primary h-3.5 w-3.5 animate-pulse" />
                                        ) : (
                                          <Volume2Icon className="text-muted-foreground h-3.5 w-3.5" />
                                        )}
                                      </Action>

                                      <Action
                                        onClick={() =>
                                          handleCopy(message.id, part.text)
                                        }
                                        tooltip={
                                          copiedId === message.id
                                            ? "Copied!"
                                            : "Copy"
                                        }
                                      >
                                        {copiedId === message.id ? (
                                            <CheckIcon className="text-primary h-3.5 w-3.5" />
                                        ) : (
                                          <CopyIcon className="text-muted-foreground h-3.5 w-3.5" />
                                        )}
                                      </Action>

                                      <Action
                                        onClick={() => handleLike(message.id)}
                                        tooltip="Like"
                                        variant="like"
                                        className={
                                          likedMessages[message.id]
                                            ? "[&_svg]:stroke-emerald-500 [&_svg]:text-emerald-500"
                                            : ""
                                        }
                                      >
                                        <ThumbsUpIcon
                                          className={`h-3.5 w-3.5 ${
                                            likedMessages[message.id]
                                              ? "text-emerald-500"
                                              : "text-muted-foreground"
                                          }`}
                                        />
                                      </Action>

                                      <Action
                                        onClick={() =>
                                          handleDislike(message.id)
                                        }
                                        tooltip="Dislike"
                                        variant="dislike"
                                        className={
                                          dislikedMessages[message.id]
                                            ? "[&_svg]:text-destructive [&_svg]:stroke-destructive"
                                            : ""
                                        }
                                      >
                                        <ThumbsDownIcon
                                          className={`h-3.5 w-3.5 ${
                                            dislikedMessages[message.id]
                                              ? "text-destructive"
                                              : "text-muted-foreground"
                                          }`}
                                        />
                                      </Action>
                                    </Actions>
                                  )}
                                </>
                              ) : (
                                /* User message with actions to the left - manual layout to match page.tsx */
                                <div
                                  className={cn(
                                    "group mr-3 mb-4 flex justify-end gap-3"
                                  )}
                                >
                                  <div className="flex flex-row-reverse gap-3">
                                    <Avatar className="h-7 w-7 flex-shrink-0">
                                      <AvatarImage
                                        src="/images/authors/linderlabs/linderlabs.jpg"
                                        alt="User"
                                      />
                                      <AvatarFallback>
                                        <UserIcon className="h-4 w-4" />
                                      </AvatarFallback>
                                    </Avatar>

                                    <div className="flex max-w-[80%] flex-col gap-2">
                                      <div className="flex flex-col items-end gap-1">
                                        {editingMessageId === message.id ? (
                                          <Textarea
                                            value={editText}
                                            onChange={(e) =>
                                              setEditText(e.target.value)
                                            }
                                            onKeyDown={(e) => {
                                              if (
                                                e.key === "Enter" &&
                                                (e.ctrlKey || e.metaKey)
                                              ) {
                                                e.preventDefault()
                                                handleSaveEdit(message.id)
                                              } else if (e.key === "Escape") {
                                                e.preventDefault()
                                                handleCancelEdit()
                                              }
                                            }}
                                            className="min-h-[60px] max-w-full resize-none text-sm"
                                            placeholder="Edit message..."
                                            autoFocus
                                          />
                                        ) : (
                                          <>
                                            <div className="bg-primary text-primary-foreground rounded-[20px] rounded-tr-[5px] px-4 py-2 text-sm">
                                              <Response>{part.text}</Response>
                                            </div>

                                            {/* Timestamp - shows on hover */}
                                            <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                                              <span className="text-muted-foreground ml-auto text-xs whitespace-nowrap">
                                                {new Date().toLocaleTimeString(
                                                  [],
                                                  {
                                                    hour: "numeric",
                                                    minute: "2-digit",
                                                  }
                                                )}
                                              </span>
                                            </div>
                                          </>
                                        )}
                                      </div>
                                    </div>

                                    {/* Actions for user messages - positioned to the left */}
                                    {hasContent && (
                                      <Actions
                                        className={`mt-2 self-start ${editingMessageId === message.id ? "opacity-100" : ""}`}
                                      >
                                        {editingMessageId === message.id ? (
                                          <>
                                            <Action
                                              onClick={handleCancelEdit}
                                              tooltip="Cancel (Esc)"
                                              variant="dislike"
                                            >
                                              <XIcon className="text-muted-foreground h-3.5 w-3.5" />
                                            </Action>

                                            <Action
                                              onClick={() =>
                                                handleSaveEdit(message.id)
                                              }
                                              tooltip="Save (Ctrl+Enter)"
                                              disabled={
                                                editText.trim() === "" ||
                                                editText.trim() === part.text
                                              }
                                            >
                                              <CheckIcon
                                                className={`h-3.5 w-3.5 ${
                                                  editText.trim() === "" ||
                                                  editText.trim() === part.text
                                                    ? "text-muted-foreground"
                                                    : "text-primary"
                                                }`}
                                              />
                                            </Action>
                                          </>
                                        ) : (
                                          <>
                                            <Action
                                              onClick={() =>
                                                handleEdit(message.id)
                                              }
                                              tooltip="Edit"
                                            >
                                              <EditIcon className="text-muted-foreground h-3.5 w-3.5" />
                                            </Action>

                                            <Action
                                              onClick={() =>
                                                handleCopy(
                                                  message.id,
                                                  part.text
                                                )
                                              }
                                              tooltip={
                                                copiedId === message.id
                                                  ? "Copied!"
                                                  : "Copy"
                                              }
                                            >
                                              {copiedId === message.id ? (
                                                <CheckIcon className="text-primary h-3.5 w-3.5" />
                                              ) : (
                                                <CopyIcon className="text-muted-foreground h-3.5 w-3.5" />
                                              )}
                                            </Action>
                                          </>
                                        )}
                                      </Actions>
                                    )}
                                  </div>
                                </div>
                              )}
                            </Fragment>
                          )
                        default:
                          return null
                      }
                    })}
                  </div>
                )
              })}
            </ConversationContent>
            <ConversationScrollButton />
          </Conversation>

          <PromptInput
            onSubmit={(message: any) => {
              sendMessage({ text: message.text })
            }}
            className="relative mx-auto mt-4 w-full max-w-2xl"
          >
            <PromptInputTextarea
              value={input}
              placeholder="Say something..."
              onChange={(e) => setInput(e.currentTarget.value)}
              className="pr-12"
            />
            <PromptInputSubmit
              status={status === "streaming" ? "streaming" : "ready"}
              disabled={!input.trim()}
              className="absolute right-1 bottom-1"
            />
          </PromptInput>
        </div>
      </div>
    </TooltipProvider>
  )
}

export default ActionsDemo
