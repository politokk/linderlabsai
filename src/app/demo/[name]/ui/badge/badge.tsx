import BadgeDemo from "./badge-demo";
import BadgeDestructive from "./badge-destructive";
import BadgeOutline from "./badge-outline";
import BadgeSecondary from "./badge-secondary";

export const badge = {
  name: "badge",
  components: {
    Badge: <BadgeDemo />,
    BadgeDestructive: <BadgeDestructive />,
    BadgeOutline: <BadgeOutline />,
    BadgeSecondary: <BadgeSecondary />,
  },
};
