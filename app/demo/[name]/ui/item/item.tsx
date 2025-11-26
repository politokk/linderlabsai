import ItemDemo from "@/components/demos/item/item-demo";
import ItemVariant from "@/components/demos/item/item-variant";
import ItemAvatar from "@/components/demos/item/item-avatar";
import ItemDropdown from "@/components/demos/item/item-dropdown";
import ItemGroup from "@/components/demos/item/item-group";
import ItemHeader from "@/components/demos/item/item-header";
import ItemIcon from "@/components/demos/item/item-icon";
import ItemImage from "@/components/demos/item/item-image";
import ItemLink from "@/components/demos/item/item-link";
import { ComponentWrapper } from "@/components/display/component-wrapper";

export default function item() {
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