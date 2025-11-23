import { Spinner } from "@/components/ui/spinner";

export const spinner = {
  name: "spinner",
  components: {
    Default: <Spinner />,
    Small: <Spinner size="sm" />,
    Large: <Spinner size="lg" />,
  },
};