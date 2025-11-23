import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const textarea = {
  name: "textarea",
  components: {
    Default: <Textarea placeholder="Type your message here." />,
    WithLabel: (
      <div className="grid w-full gap-1.5">
        <Label htmlFor="message">Your message</Label>
        <Textarea placeholder="Type your message here." id="message" />
      </div>
    ),
  },
};