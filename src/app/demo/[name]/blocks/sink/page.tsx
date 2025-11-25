import { Metadata } from "next"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { ModeSwitcher } from "@/components/themes/mode-switcher"
import { ThemeSelector } from "@/components/themes/theme-selector"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export const dynamic = "force-static"
export const revalidate = false

export const metadata: Metadata = {
  title: "Kitchen Sink",
  description: "A page with all components for testing purposes.",
}

export default function SinkPage() {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset>
        <header className="bg-background sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Kitchen Sink</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>All Components</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="ml-auto flex items-center gap-2 px-4">
            <ModeSwitcher />
            <ThemeSelector />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
         
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}