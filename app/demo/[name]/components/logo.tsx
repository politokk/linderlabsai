import { Logo } from "@/components/logo";
import { SidebarProvider } from "@/components/ui/sidebar";

export const logo = {
  name: "logo",
  components: {
    Default:
     <SidebarProvider>
        <Logo />
      </SidebarProvider>,
  },
};
