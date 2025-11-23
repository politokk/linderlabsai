import { Progress } from "@/components/ui/progress";

export const progress = {
  name: "progress",
  components: {
    Default: <Progress value={33} />,
    Complete: <Progress value={100} />,
  },
};