import React, { type ReactNode } from "react";

import { BrandHeader } from "@/components/brand-header";
import { BrandSidebar } from "@/components/brand-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/themes/theme-provider";
import { ActiveThemeProvider } from "@/components/themes/active-theme";

export default function ShellLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ThemeProvider>
      <ActiveThemeProvider>
    <SidebarProvider>
      <BrandSidebar />
      <SidebarInset>
        <BrandHeader />
        <main className="flex w-full justify-center pt-10">
          <div className="container">{children}</div>
        </main>
      </SidebarInset>
      <Toaster />
    </SidebarProvider>
    </ActiveThemeProvider>
    </ThemeProvider>
  );
}