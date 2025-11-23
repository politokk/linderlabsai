import SelectDemo from "./select-demo"; 
import SelectForm from "./select-form";
import SelectScrollable from "./select-scrollable";
export const select = {
  name: "select", 
  components: {
    Default: <SelectDemo/>,
    Form: <SelectForm/>,
    Scrollable: <SelectScrollable/>,
  },
};
