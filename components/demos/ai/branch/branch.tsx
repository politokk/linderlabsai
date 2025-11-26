"use client"

import { useState } from "react"
import { nanoid } from "nanoid"
import { toast } from "sonner"

import { cn } from "@/lib/utils"
import { Action, Actions } from "@/components/ai-elements/actions"
import {
  Branch,
  BranchMessages,
  BranchNext,
  BranchPage,
  BranchPrevious,
  BranchSelector,
} from "@/components/ai-elements/branch"
import { Message, MessageContent } from "@/components/ai-elements/message"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { TooltipProvider } from "@/components/ui/tooltip"
import { RefreshCcwIcon, UserIcon, CheckIcon, CopyIcon, EditIcon, XIcon } from "lucide-react"

type MessageBranch = {
  id: string
  content: string
}

type ConversationPair = {
  id: string
  userBranches: MessageBranch[]
  assistantBranches: MessageBranch[]
  currentUserBranch: number
  currentAssistantBranch: number
}

const initialConversation: ConversationPair = {
  id: nanoid(),
  userBranches: [
    {
      id: nanoid(),
      content: "What are the key strategies for optimizing React performance?",
    },
  ],
  assistantBranches: [
    {
      id: nanoid(),
      content:
        "Here's the first response to your question. This approach focuses on performance optimization using React.memo, useMemo, and useCallback hooks.",
    },
  ],
  currentUserBranch: 0,
  currentAssistantBranch: 0,
}

const Example = () => {
  const [conversation, setConversation] =
    useState<ConversationPair>(initialConversation)
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null)
  const [editText, setEditText] = useState("")
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const handleUserBranchChange = (branchIndex: number) => {
    setConversation((prev) => ({
      ...prev,
      currentUserBranch: branchIndex,
      currentAssistantBranch: branchIndex, // Sync assistant branch with user branch
    }))
  }

  const handleAssistantBranchChange = (branchIndex: number) => {
    setConversation((prev) => ({
      ...prev,
      currentAssistantBranch: branchIndex,
    }))
  }

  const handleEdit = (messageId: string, content: string) => {
    setEditText(content)
    setEditingMessageId(messageId)
  }

  const handleSaveEdit = (messageId: string) => {
    if (
      editText.trim() &&
      editText.trim() !==
        conversation.userBranches[conversation.currentUserBranch].content
    ) {
      // Create new branch with edited message
      const newUserBranch: MessageBranch = {
        id: nanoid(),
        content: editText.trim(),
      }

      // Create new assistant response for this branch
      const newAssistantBranch: MessageBranch = {
        id: nanoid(),
        content: `Here's a response to your edited question: "${editText.trim().substring(0, 50)}...". This is a new branch created from your edit.`,
      }

      setConversation((prev) => ({
        ...prev,
        userBranches: [...prev.userBranches, newUserBranch],
        assistantBranches: [...prev.assistantBranches, newAssistantBranch],
        currentUserBranch: prev.userBranches.length,
        currentAssistantBranch: prev.assistantBranches.length,
      }))

      toast.success("Message edited - new branch created!")
      setEditingMessageId(null)
      setEditText("")
    } else {
      toast.error("Message cannot be empty or unchanged")
    }
  }

  const handleCancelEdit = () => {
    setEditingMessageId(null)
    setEditText("")
  }

  const handleRegenerate = () => {
    // Create new assistant branch
    const newAssistantBranch: MessageBranch = {
      id: nanoid(),
      content: `Here's an alternative response (Branch ${conversation.assistantBranches.length + 1}). This demonstrates branching when regenerating responses.`,
    }

    setConversation((prev) => ({
      ...prev,
      assistantBranches: [...prev.assistantBranches, newAssistantBranch],
      currentAssistantBranch: prev.assistantBranches.length,
    }))

    toast.success("Response regenerated - new branch created!")
  }

  const handleCopy = async (messageId: string, text: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedId(messageId)
    toast.success("Copied to clipboard")
    setTimeout(() => setCopiedId(null), 2000)
  }

  const currentUserMessage =
    conversation.userBranches[conversation.currentUserBranch]
  const currentAssistantMessage =
    conversation.assistantBranches[conversation.currentAssistantBranch]
  const isEditing = editingMessageId === currentUserMessage.id

  return (
    <TooltipProvider>
      <div className="space-y-4 p-4">
        {/* User Message with Branches */}
        <div className="group">
          <Branch
            key={`user-${conversation.currentUserBranch}`}
            defaultBranch={conversation.currentUserBranch}
            onBranchChange={handleUserBranchChange}
          >
            <BranchMessages>
              {conversation.userBranches.map((message) => (
                <div
                  key={message.id}
                  className={cn("mr-3 mb-4 flex justify-end gap-3")}
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
                        {isEditing && message.id === currentUserMessage.id ? (
                          <Textarea
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
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

                    {/* Actions for user messages */}
                    <Actions
                      className={`mt-2 self-start ${isEditing ? "opacity-100" : ""}`}
                    >
                      {isEditing && message.id === currentUserMessage.id ? (
                        <>
                          <Action
                            onClick={handleCancelEdit}
                            tooltip="Cancel (Esc)"
                            variant="dislike"
                          >
                            <XIcon className="text-muted-foreground h-3.5 w-3.5" />
                          </Action>

                          <Action
                            onClick={() => handleSaveEdit(message.id)}
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
                              handleEdit(message.id, message.content)
                            }
                            tooltip="Edit"
                          >
                            <EditIcon className="text-muted-foreground h-3.5 w-3.5" />
                          </Action>

                          <Action
                            onClick={() =>
                              handleCopy(message.id, message.content)
                            }
                            tooltip={
                              copiedId === message.id ? "Copied!" : "Copy"
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
                  </div>
                </div>
              ))}
            </BranchMessages>

            {/* Branch selector for user messages - only shows on hover */}
            {conversation.userBranches.length > 1 && (
              <BranchSelector
                from="user"
                className="mr-12 mb-2 opacity-0 transition-opacity group-hover:opacity-100"
              >
                <BranchPrevious className="size-3" />
                <BranchPage />
                <BranchNext className="size-3" />
              </BranchSelector>
            )}
          </Branch>
        </div>

        {/* Assistant Message with Branches */}
        <div className="group">
          <Branch
            key={`assistant-${conversation.currentAssistantBranch}`}
            defaultBranch={conversation.currentAssistantBranch}
            onBranchChange={handleAssistantBranchChange}
          >
            <BranchMessages>
              {conversation.assistantBranches.map((message) => (
                <div key={message.id}>
                  <Message from="assistant">
                    <MessageContent>{message.content}</MessageContent>
                  </Message>

                  {/* Actions for assistant messages */}
                  <Actions className="ml-11">
                    <Action onClick={handleRegenerate} tooltip="Regenerate">
                        <RefreshCcwIcon className="text-muted-foreground h-3.5 w-3.5" />
                    </Action>

                    <Action
                      onClick={() => handleCopy(message.id, message.content)}
                      tooltip={copiedId === message.id ? "Copied!" : "Copy"}
                    >
                      {copiedId === message.id ? (
                        <CheckIcon className="text-primary h-3.5 w-3.5" />
                      ) : (
                        <CopyIcon className="text-muted-foreground h-3.5 w-3.5" />
                      )}
                    </Action>
                  </Actions>
                </div>
              ))}
            </BranchMessages>

            {/* Branch selector for assistant messages - only shows on hover */}
            {conversation.assistantBranches.length > 1 && (
              <BranchSelector
                from="assistant"
                className="mt-1 ml-11 opacity-0 transition-opacity group-hover:opacity-100"
              >
                <BranchPrevious className="size-3" />
                <BranchPage />
                <BranchNext className="size-3" />
              </BranchSelector>
            )}
          </Branch>
        </div>
      </div>
    </TooltipProvider>
  )
}

export default Example
