import { Badge } from "@/components/ui/badge";
import { ArrowRight, AlertCircleIcon, BadgeCheckIcon, CheckIcon } from "lucide-react";
import Link from "next/link";

export const badge = {
  name: "badge",
  components: {
    Default: <Badge>Badge</Badge>,
    Secondary: <Badge variant="secondary">Secondary</Badge>,
    Outline: <Badge variant="outline">Outline</Badge>,
    Destructive: <Badge variant="destructive">Destructive</Badge>,

    DefaultLink: (
      <Badge>
        <Link href="#" className="flex items-center gap-1">
          Link
          <ArrowRight className="size-3" />
        </Link>
      </Badge>
    ),
    SecondaryLink: (
      <Badge variant="secondary">
        <Link href="#" className="flex items-center gap-1">
          Link
          <ArrowRight className="size-3" />
        </Link>
      </Badge>
    ),
    OutlineLink: (
      <Badge variant="outline">
        <Link href="#" className="flex items-center gap-1">
          Link
          <ArrowRight className="size-3" />
        </Link>
      </Badge>
    ),
    DestructiveLink: (
      <Badge variant="destructive">
        <Link href="#" className="flex items-center gap-1">
          Link
          <ArrowRight className="size-3" />
        </Link>
      </Badge>
    ),

    Verified: (
      <Badge
        variant="secondary"
        className="bg-blue-500 text-white dark:bg-blue-600"
      >
        <BadgeCheckIcon className="size-3" />
        Verified
      </Badge>
    ),

    CountDefault: (
      <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
        8
      </Badge>
    ),
    CountDestructive: (
      <Badge
        className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
        variant="destructive"
      >
        99
      </Badge>
    ),
    CountOutline: (
      <Badge
        className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums"
        variant="outline"
      >
        20+
      </Badge>
    ),
  },
};