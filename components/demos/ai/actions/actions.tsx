"use client"

import { useState } from "react"
import { nanoid } from "nanoid"
import { toast } from "sonner"

import { cn } from "@/lib/utils"
import { Action, Actions } from "@/components/ai-elements/actions"
import {
  Conversation,
  ConversationContent,
} from "@/components/ai-elements/conversation"
import { Message, MessageContent } from "@/components/ai-elements/message"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { TooltipProvider } from "@/components/ui/tooltip"
import { CheckIcon, Volume2,CopyIcon, ThumbsUpIcon, ThumbsDownIcon, EditIcon, RefreshCcwIcon, UserIcon, AudioLinesIcon, XIcon } from "lucide-react"

const messages: {
  key: string
  from: "user" | "assistant"
  content: string
  avatar?: string
  name: string
}[] = [
  {
    key: nanoid(),
    from: "user",
    content: "Can you explain how React hooks work?",
    avatar: "https://raw.githubusercontent.com/politokk/linderlabsai/refs/heads/main/public/linderavatar.png",
    name: "LinderLabs",
  },
  {
    key: nanoid(),
    from: "assistant",
    content:
      "React Hooks are functions that let you use state and other React features in functional components. The most common hooks are useState for managing state, useEffect for side effects, and useContext for accessing context values. They follow rules like only calling them at the top level of functions and only from React functions.",
    name: "Assistant",
  },
]

const Example = () => {
  const [likedMessages, setLikedMessages] = useState<Record<string, boolean>>(
    {}
  )
  const [dislikedMessages, setDislikedMessages] = useState<
    Record<string, boolean>
  >({})
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [readingMessageId, setReadingMessageId] = useState<string | null>(null)
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null)
  const [editText, setEditText] = useState("")

  const handleRegenerate = () => {
    toast.success("Regenerating response...")
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

  const handleEdit = (messageId: string, content: string) => {
    setEditText(content)
    setEditingMessageId(messageId)
  }

  const handleSaveEdit = (messageId: string) => {
    if (editText.trim()) {
      toast.success("Message updated!")
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
      <Conversation className="relative w-full">
        <ConversationContent>
          {messages.map((message, index) => {
            const isLastMessage = index === messages.length - 1
            const isLastAssistantMessage =
              isLastMessage && message.from === "assistant"

            return (
              <div key={message.key} className="group">
                {message.from === "assistant" ? (
                  <>
                    <Message from={message.from}>
                      <MessageContent>{message.content}</MessageContent>
                    </Message>

                    {/* Actions for assistant messages */}
                    <Actions className="ml-11">
                      {isLastAssistantMessage && (
                        <Action onClick={handleRegenerate} tooltip="Regenerate">
                          <RefreshCcwIcon className="text-muted-foreground h-3.5 w-3.5" />
                        </Action>
                      )}

                      <Action
                        onClick={() =>
                          handleReadAloud(message.key, message.content)
                        }
                        tooltip={
                          readingMessageId === message.key
                            ? "Stop reading"
                            : "Read aloud"
                        }
                      >
                        {readingMessageId === message.key ? (
                          <AudioLinesIcon className="text-primary h-3.5 w-3.5 animate-pulse" />
                        ) : (
                          <Volume2 className="text-muted-foreground h-3.5 w-3.5" />
                        )}
                      </Action>

                      <Action
                        onClick={() => handleCopy(message.key, message.content)}
                        tooltip={copiedId === message.key ? "Copied!" : "Copy"}
                      >
                        {copiedId === message.key ? (
                          <CheckIcon className="text-primary h-3.5 w-3.5" />
                        ) : (
                          <CopyIcon className="text-muted-foreground h-3.5 w-3.5" />
                        )}
                      </Action>

                      <Action
                        onClick={() => handleLike(message.key)}
                        tooltip="Like"
                        variant="like"
                      >
                                <ThumbsUpIcon
                          className={`h-3.5 w-3.5 ${
                            likedMessages[message.key]
                              ? "[&_svg]:stroke-emerald-500 [&_svg]:text-emerald-500"
                              : "text-muted-foreground"
                          }`}
                        />
                      </Action>

                      <Action
                        onClick={() => handleDislike(message.key)}
                        tooltip="Dislike"
                        variant="dislike"
                      >
                        <ThumbsDownIcon
                          className={`h-3.5 w-3.5 ${
                            dislikedMessages[message.key]
                              ? "[&_svg]:text-destructive [&_svg]:stroke-destructive"
                              : "text-muted-foreground"
                          }`}
                        />
                      </Action>
                    </Actions>
                  </>
                ) : (
                  /* User message with actions to the left - manual layout to match page.tsx */
                  <div className={cn("group mr-3 mb-4 flex justify-end gap-3")}>
                    <div className="flex flex-row-reverse gap-3">
                      <Avatar className="h-7 w-7 flex-shrink-0">
                        <AvatarImage
                          src={
                            message.avatar ||
                            "https://raw.githubusercontent.com/politokk/linderlabsai/refs/heads/main/public/linderavatar.png"
                          }
                          alt="User"
                        />
                        <AvatarFallback>
                          <UserIcon className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex max-w-[80%] flex-col gap-2">
                        <div className="flex flex-col items-end gap-1">
                          {editingMessageId === message.key ? (
                            <Textarea
                              value={editText}
                              onChange={(e) => setEditText(e.target.value)}
                              onKeyDown={(e) => {
                                if (
                                  e.key === "Enter" &&
                                  (e.ctrlKey || e.metaKey)
                                ) {
                                  e.preventDefault()
                                  handleSaveEdit(message.key)
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
                                {message.content}
                              </div>

                              {/* Timestamp - shows on hover */}
                              <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                                <span className="text-muted-foreground ml-auto text-xs whitespace-nowrap">
                                  {new Date().toLocaleTimeString([], {
                                    hour: "numeric",
                                    minute: "2-digit",
                                  })}
                                </span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Actions for user messages - positioned to the left */}
                      <Actions
                        className={`mt-2 self-start ${editingMessageId === message.key ? "opacity-100" : ""}`}
                      >
                        {editingMessageId === message.key ? (
                          <>
                            <Action
                              onClick={handleCancelEdit}
                              tooltip="Cancel (Esc)"
                              variant="dislike"
                            >
                              <XIcon className="text-muted-foreground h-3.5 w-3.5" />
                            </Action>

                            <Action
                              onClick={() => handleSaveEdit(message.key)}
                              tooltip="Save (Ctrl+Enter)"
                              disabled={
                                editText.trim() === "" ||
                                editText.trim() === message.content
                              }
                            >
                              <CheckIcon
                                className={`h-3.5 w-3.5 ${
                                  editText.trim() === "" ||
                                  editText.trim() === message.content
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
                                handleEdit(message.key, message.content)
                              }
                              tooltip="Edit"
                            >
                              <EditIcon className="text-muted-foreground h-3.5 w-3.5" />
                            </Action>

                            <Action
                              onClick={() =>
                                handleCopy(message.key, message.content)
                              }
                              tooltip={
                                copiedId === message.key ? "Copied!" : "Copy"
                              }
                            >
                              {copiedId === message.key ? (
                                <CheckIcon className="text-primary h-3.5 w-3.5" />
                              ) : (
                                <CopyIcon className="text-muted-foreground h-3.5 w-3.5" />
                              )}
                            </Action>
                          </>
                        )}
                      </Actions>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </ConversationContent>
      </Conversation>
    </TooltipProvider>
  )
}

export default Example