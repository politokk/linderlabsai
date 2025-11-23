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
export const item = {
  name: "item",
  components: {
    Default: <ItemDemo/>,
    Size: <ItemSizeDemo/>,
    Variant: <ItemVariant/>,
    Avatar: <ItemAvatar/>,
    Dropdown: <ItemDropdown/>,
    Group: <ItemGroup/>,
    Header: <ItemHeader/>,
    Icon: <ItemIcon/>,
    Image: <ItemImage/>,
    Link: <ItemLink/>,
  },
};