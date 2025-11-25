import { Hero } from "@/components/hero";

export default function DashboardPage() {
  return (
    <div className="flex min-h-[90vh] flex-col items-center justify-center gap-4 rounded-md bg-background">
      <div className="min-w-32 text-muted-foreground">
  <Hero title="Dashboard" description="Welcome to the dashboard" buttonText="Get Started" buttonLink="/" backgroundImage="/images/dashboard.jpg"  />
      </div>
    </div>
  );
}
