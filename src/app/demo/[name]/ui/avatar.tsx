import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const avatar = {
  name: "avatar",
  components: {
    Default: (
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback className="bg-primary text-primary-foreground">
          <span className="text-xs">CN</span>
        </AvatarFallback>
      </Avatar>
    ),
    Fallback: (
      <Avatar>
        <AvatarImage src="https://github.com" alt="@shadcn" />
        <AvatarFallback className="bg-primary-foreground text-primary">
          <span className="text-xs">CN</span>
        </AvatarFallback>
      </Avatar>
    ),
    Rounded: (
      <Avatar className="rounded-lg">
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback className="bg-primary text-primary-foreground rounded-lg">
          <span className="text-xs">ER</span>
        </AvatarFallback>
      </Avatar>
    ),
    Group: (
      <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback className="bg-primary text-primary-foreground">
            <span className="text-xs">CN</span>
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/maxleiter.png"
            alt="@maxleiter"
          />
          <AvatarFallback className="bg-primary text-primary-foreground">
            <span className="text-xs">LR</span>
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback className="bg-primary text-primary-foreground">
            <span className="text-xs">ER</span>
          </AvatarFallback>
        </Avatar>
      </div>
    ),
  },
};