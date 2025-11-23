import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon, CircleFadingArrowUpIcon, GitBranchIcon} from "lucide-react";

export const button = {
  name: "button",
  components: {
    Default: <Button>Button</Button>,
    Secondary: <Button variant="secondary">Secondary</Button>,
    Outline: <Button variant="outline">Outline</Button>,
    Ghost: <Button variant="ghost">Ghost</Button>,
    Destructive: <Button variant="destructive">Destructive</Button>,
    Link: <Button variant="link">Link</Button>,
    
    Icon: (
      <Button variant="outline" size="icon" aria-label="Submit">
        <CircleFadingArrowUpIcon />
      </Button>
    ),
    
    WithIcon: (
      <Button variant="outline" size="sm">
        <GitBranchIcon />
        New Branch
      </Button>
    ),
    
    Rounded: (
      <Button variant="outline" size="icon" className="rounded-full">
        <ArrowUpRightIcon />
      </Button>
    ),
  },
};