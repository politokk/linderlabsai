import { Login } from "@/components/login";
import { SidebarProvider } from "@/components/ui/sidebar";

export const login = {
  name: "login",
  components: {
    Default:  <SidebarProvider>
    <Login />
  </SidebarProvider>
  },
};
