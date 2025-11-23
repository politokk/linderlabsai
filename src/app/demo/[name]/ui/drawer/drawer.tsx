import DrawerDemo from "./drawer-demo";
import DrawerDialogDemo from "./drawer-dialog";

  export const drawer = {
    name: "drawer",
    components: {
      Default: <DrawerDemo />,
      Dialog: <DrawerDialogDemo />,
    },
  };