import { Hero } from "@/components/hero";

export const hero = {
  name: "hero",
  components: {
    Default: (
      <Hero
        title="Build a Registry"
        description="This starter helps you create a registry so you can distribute your custom components, hooks, pages, and other files to any React project"
        button1Text="Learn more"
        button1Link="#sale"
        button2Text="View Docs"
        button2Link="/docs"
        backgroundImage="/assets/hero.png"
        badgeText="Coming"
      />
    ),
  },
};
