import { Hero } from "@/components/hero";

export const hero = {
  name: "hero",
  components: {
    Default: (
      <Hero 
  badgeText="Coming soon"
  title="LinderLabs" 
  titleAccent="UI"
  description="AI Tools, Blocks, & Components for your projects." 
  button1Text="Explore Tools" 
  button1Link="/tools"
  button2Text="View Docs"
  button2Link="/docs"
  backgroundImage="/images/dashboard.jpg"  
/>
    ),
  },
};
