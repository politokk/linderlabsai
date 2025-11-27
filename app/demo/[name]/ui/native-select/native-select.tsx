import NativeSelectDemo from "@/components/demos/ui/native-select/native-select-demo";
import NativeSelectDisabled from "@/components/demos/ui/native-select/native-select-disabled";
import NativeSelectGroups from "@/components/demos/ui/native-select/native-select-groups";
import NativeSelectInvalid from "@/components/demos/ui/native-select/native-select-invalid";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export default function nativeSelect() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Native Select" icon="ChevronDown">
          <NativeSelectDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Native Select Disabled" icon="Ban">
          <NativeSelectDisabled />
        </ComponentWrapper>
        <ComponentWrapper name="Native Select Groups" icon="Group">
          <NativeSelectGroups />
        </ComponentWrapper>
        <ComponentWrapper name="Native Select Invalid" icon="AlertCircle">
          <NativeSelectInvalid />
        </ComponentWrapper>
      </div>
    </div>
  )
}