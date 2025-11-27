import EmptyDemo from "@/components/demos/ui/empty/empty-demo";
import EmptyInputGroup from "@/components/demos/ui/empty/empty-input-group";
import EmptyOutline from "@/components/demos/ui/empty/empty-outline";
import EmptyIcon from "@/components/demos/ui/empty/empty-icon";
import EmptyBackground from "@/components/demos/ui/empty/empty-background";
import EmptyAvatar from "@/components/demos/ui/empty/empty-avatar";
import EmptyAvatarGroup from "@/components/demos/ui/empty/empty-avatar-group";
import EmptyPopover from "@/components/demos/ui/empty/empty-popover";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export default function empty() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Empty" icon="Box">
          <EmptyDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Empty Input Group" icon="Layers">
          <EmptyInputGroup />
        </ComponentWrapper>
        <ComponentWrapper name="Empty Outline" icon="Square">
          <EmptyOutline />
        </ComponentWrapper>
        <ComponentWrapper name="Empty Background" icon="Palette">
          <EmptyBackground />
        </ComponentWrapper>
        <ComponentWrapper name="Empty Avatar" icon="User">
          <EmptyAvatar />
        </ComponentWrapper>
        <ComponentWrapper name="Empty Avatar Group" icon="Users">
          <EmptyAvatarGroup />
        </ComponentWrapper>
        <ComponentWrapper name="Empty Icon" icon="Image" className="md:col-span-2">
          <EmptyIcon />
        </ComponentWrapper>
        <ComponentWrapper name="Empty Popover" icon="PictureInPicture">
          <EmptyPopover />
        </ComponentWrapper>
      </div>
    </div>
  )
}