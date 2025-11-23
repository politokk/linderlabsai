import EmptyDemo from "./empty-demo";
import EmptyInputGroup from "./empty-input-group";
import EmptyOutline from "./empty-outline";
import EmptyIcon from "./empty-icon";
import EmptyBackground from "./empty-background";
import EmptyAvatar from "./empty-avatar";
import EmptyAvatarGroup from "./empty-avatar-group";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export function empty() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Default" icon="Box">
          <EmptyDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Input Group" icon="Layers">
          <EmptyInputGroup />
        </ComponentWrapper>
        <ComponentWrapper name="Outline" icon="Square">
          <EmptyOutline />
        </ComponentWrapper>
        <ComponentWrapper name="Icon" icon="Image">
          <EmptyIcon />
        </ComponentWrapper>
        <ComponentWrapper name="Background" icon="Palette">
          <EmptyBackground />
        </ComponentWrapper>
        <ComponentWrapper name="Avatar" icon="User">
          <EmptyAvatar />
        </ComponentWrapper>
        <ComponentWrapper name="Avatar Group" icon="Users">
          <EmptyAvatarGroup />
        </ComponentWrapper>
      </div>
    </div>
  )
}