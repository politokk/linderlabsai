"use client"

import { Loader } from "@/components/ai-elements/loader"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { BotMessageSquare } from "lucide-react"

export default function LoaderTypingDemo() {
  return (
    <div className="space-y-4 p-4">     
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
