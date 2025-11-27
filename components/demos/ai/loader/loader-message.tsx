"use client"

import { Loader } from "@/components/ai-elements/loader"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { UserIcon, BotMessageSquare } from "lucide-react"

export default function LoaderTypingDemo() {
  return (
    <div className="space-y-4 p-4">
      {/* User Message */}
      <div className="flex justify-end gap-3">
        <div className="bg-primary text-primary-foreground max-w-[80%] rounded-[20px] rounded-tr-[5px] px-4 py-2 text-sm">
          Can you help me with React hooks?
        </div>
        <Avatar className="h-7 w-7 flex-shrink-0">
          <AvatarFallback>
            <UserIcon className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      </div>

      {/* AI Typing Indicator */}
      <div className="flex gap-3">
        <Avatar className="h-7 w-7 flex-shrink-0">
          <AvatarFallback className="from-primary/10 to-primary/8 ring-primary bg-gradient-to-br ring-1">
            <BotMessageSquare className="text-primary h-4 w-4" />
          </AvatarFallback>
        </Avatar>
        <div className="bg-primary/3 flex items-center rounded-lg px-3 py-1">
          <Loader variant="typing" size="md" />
        </div>
      </div>
    </div>
  )
}
