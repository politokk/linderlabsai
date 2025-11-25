import { Hero } from "@/components/hero";

export default function DashboardPage() {
  return (
    <div className="flex min-h-[90vh] flex-col items-center justify-center gap-4 rounded-md bg-background">
      <div className="min-w-32 text-muted-foreground">
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
      </div>
    </div>
  );
}
