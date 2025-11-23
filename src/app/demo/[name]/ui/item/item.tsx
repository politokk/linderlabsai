import ItemDemo from "./item-demo";
import ItemSizeDemo from "./item-size";
import ItemVariant from "./item-variant";
import ItemAvatar from "./item-avatar";
import ItemDropdown from "./item-dropdown";
import ItemGroup from "./item-group";
import ItemHeader from "./item-header";
import ItemIcon from "./item-icon";
import ItemImage from "./item-image";
import ItemLink from "./item-link";
import { ComponentWrapper } from "@/components/display/component-wrapper";


export function item() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Default" icon="Box">
          <ItemDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Size" icon="Maximize">
          <ItemSizeDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Variant" icon="Palette">
          <ItemVariant />
        </ComponentWrapper>
        <ComponentWrapper name="Avatar" icon="User">
          <ItemAvatar />
        </ComponentWrapper>
        <ComponentWrapper name="Dropdown" icon="ChevronDown">
          <ItemDropdown />
        </ComponentWrapper>
        <ComponentWrapper name="Group" icon="Group">
          <ItemGroup />
        </ComponentWrapper>
        <ComponentWrapper name="Header" icon="Heading">
          <ItemHeader />
        </ComponentWrapper>
        <ComponentWrapper name="Icon" icon="Sparkles">
          <ItemIcon />
        </ComponentWrapper>
        <ComponentWrapper name="Image" icon="Image">
          <ItemImage />
        </ComponentWrapper>
        <ComponentWrapper name="Link" icon="Link">
          <ItemLink />
        </ComponentWrapper>
      </div>
    </div>
  )
}