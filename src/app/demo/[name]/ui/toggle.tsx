import { Toggle } from "@/components/ui/toggle";
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

export const toggle = {
  name: "toggle",
  components: {
    Default: (
      <Toggle aria-label="Toggle bold">
        <BoldIcon className="h-4 w-4" />
      </Toggle>
    ),
    WithText: (
      <Toggle aria-label="Toggle italic">
        <ItalicIcon className="h-4 w-4" />
        Italic
      </Toggle>
    ),
    Outline: (
      <Toggle variant="outline" aria-label="Toggle underline">
        <UnderlineIcon className="h-4 w-4" />
      </Toggle>
    ),
  },
};