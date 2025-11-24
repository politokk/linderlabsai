import ItemDemo from "./item-demo";
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
        <ComponentWrapper name="Item" icon="Box">
          <ItemDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Item Variant" icon="Palette">
          <ItemVariant />
        </ComponentWrapper>
        <ComponentWrapper name="Item Avatar" icon="User">
          <ItemAvatar />
        </ComponentWrapper>
        <ComponentWrapper name="Item Dropdown" icon="ChevronDown">
          <ItemDropdown />
        </ComponentWrapper>
        <ComponentWrapper name="Item Group" icon="Group">
          <ItemGroup />
        </ComponentWrapper>
        <ComponentWrapper name="Item Header" icon="Heading">
          <ItemHeader />
        </ComponentWrapper>
        <ComponentWrapper name="Item Icon" icon="Sparkles">
          <ItemIcon />
        </ComponentWrapper>
        <ComponentWrapper name="Item Image" icon="Image">
          <ItemImage />
        </ComponentWrapper>
        <ComponentWrapper name="Item Link" icon="Link">
          <ItemLink />
        </ComponentWrapper>
      </div>
    </div>
  )
}