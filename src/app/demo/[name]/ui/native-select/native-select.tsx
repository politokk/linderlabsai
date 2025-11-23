import NativeSelectDemo from "./native-select-demo";
import NativeSelectDisabled from "./native-select-disabled";
import NativeSelectGroups from "./native-select-groups";
import NativeSelectInvalid from "./native-select-invalid";
  export const nativeSelect = {
    name: "native-select",
    components: {
      NativeSelect: <NativeSelectDemo/>,
      NativeSelectDisabled: <NativeSelectDisabled/>,
      NativeSelectGroups: <NativeSelectGroups/>,
      NativeSelectInvalid: <NativeSelectInvalid/>,
    },
  };