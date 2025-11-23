import CommandDemo from "./command-demo";
import CommandDialogDemo from "./command-dialog";
export const command = {
  name: "command",
  components: {
    Default: <CommandDemo />,
    Dialog: <CommandDialogDemo />,
  },
};