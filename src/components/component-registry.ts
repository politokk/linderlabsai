import AccordionDemo   from "@/components/demos/accordion/accordion-demo"
import AlertDemo from "@/components/demos/alert/alert-demo"
import AlertDialogDemo from "@/components/demos/alert-dialog/alert-dialog-demo"
import AvatarDemo from "@/components/demos/avatar/avatar-demo"
import BadgeDemo from "@/components/demos/badge/badge-demo"
import BreadcrumbDemo from "@/components/demos/breadcrumb/breadcrumb-demo"
import ButtonDemo from "@/components/demos/button/button-demo"
import ButtonGroupDemo from "@/components/demos/button-group/button-group-demo"
import CalendarDemo from "@/components/demos/calendar/calendar-demo"
import CardDemo from "@/components/demos/card/card-demo"
import CarouselDemo from "@/components/demos/carousel/carousel-demo"
import CheckboxDemo from "@/components/demos/checkbox/checkbox-demo"
import CollapsibleDemo from "@/components/demos/collapsible/collapsible-demo"
import ComboboxDemo from "@/components/demos/combobox/combobox-demo"
import CommandDemo from "@/components/demos/command/command-demo"
import ContextMenuDemo from "@/components/demos/context-menu/context-menu-demo"
import DatePickerDemo from "@/components/demos/date-picker/date-picker-demo"
import DialogDemo from "@/components/demos/dialog/dialog-demo"
import DrawerDemo from "@/components/demos/drawer/drawer-demo"
import DropdownMenuDemo from "@/components/demos/dropdown-menu/dropdown-menu-demo"
import EmptyDemo from "@/components/demos/empty/empty-demo"
import FieldDemo from "@/components/demos/field/field-demo"
import HoverCardDemo from "@/components/demos/hover-card/hover-card-demo"
import InputDemo from "@/components/demos/input/input-demo"
import InputGroupDemo from "@/components/demos/input-group/input-group-demo"
import InputOTPDemo from "@/components/demos/input-otp/input-otp-demo"
import ItemDemo from "@/components/demos/item/item-demo"
import KbdDemo from "@/components/demos/kbd/kbd-demo"
import LabelDemo from "@/components/demos/label/label-demo"
import MenuBarDemo from "@/components/demos/menu-bar/menubar-demo"
import NativeSelectDemo from "@/components/demos/native-select/native-select-demo"
import NavigationMenuDemo from "@/components/demos/navigation-menu/navigation-menu-demo"
import PaginationDemo from "@/components/demos/pagination/pagination-demo"
import PopoverDemo from "@/components/demos/popover/popover-demo"
import ProgressDemo from "@/components/demos/progress/progress-demo"
import RadioGroupDemo from "@/components/demos/radio-group/radio-group-demo"
import ResizableDemo from "@/components/demos/resizable/resizable-demo"
import ScrollAreaDemo from "@/components/demos/scroll-area/scroll-area-demo"
import SelectDemo from "@/components/demos/select/select-demo"
import SeparatorDemo from "@/components/demos/separator/separator-demo"
import SheetDemo from "@/components/demos/sheet/sheet-demo"
import SkeletonDemo from "@/components/demos/skeleton/skeleton-demo"
import SliderDemo from "@/components/demos/slider/slider-demo"
import SonnerDemo from "@/components/demos/sonner/sonner-demo"
import SpinnerDemo from "@/components/demos/spinner/spinner-demo"
import SwitchDemo from "@/components/demos/switch/switch-demo"
import TableDemo from "@/components/demos/table/table-demo"
import TabsDemo from "@/components/demos/tabs/tabs-demo"
import TextareaDemo from "@/components/demos/textarea/textarea-demo"
import ToggleDemo from "@/components/demos/toggle/toggle-demo"
import ToggleGroupDemo from "@/components/demos/toggle-group/toggle-group-demo"
import TooltipDemo from "@/components/demos/tooltip/tooltip-demo"

type ComponentConfig = {
  name: string
  component: React.ComponentType
  className?: string
  type: "registry:ui" | "registry:page" | "registry:block"
  href: string
  label?: string
}

export const componentRegistry: Record<string, ComponentConfig> = {
  accordion: {
    name: "Accordion",
    component: AccordionDemo,
    type: "registry:ui",
    href: "/sink/accordion",
  },
  alert: {
    name: "Alert",
    component: AlertDemo,
    type: "registry:ui",
    href: "/sink/alert",
  },
  "alert-dialog": {
    name: "Alert Dialog",
    component: AlertDialogDemo,
    type: "registry:ui",
    href: "/sink/alert-dialog",
  },
  avatar: {
    name: "Avatar",
    component: AvatarDemo,
    type: "registry:ui",
    href: "/sink/avatar",
  },
  badge: {
    name: "Badge",
    component: BadgeDemo,
    type: "registry:ui",
    href: "/sink/badge",
  },
  breadcrumb: {
    name: "Breadcrumb",
    component: BreadcrumbDemo,
    type: "registry:ui",
    href: "/sink/breadcrumb",
  },
  button: {
    name: "Button",
    component: ButtonDemo,
    type: "registry:ui",
    href: "/sink/button",
  },
  "button-group": {
    name: "Button Group",
    component: ButtonGroupDemo,
    type: "registry:ui",
    href: "/sink/button-group",
    label: "New",
  },
  calendar: {
    name: "Calendar",
    component: CalendarDemo,
    type: "registry:ui",
    href: "/sink/calendar",
  },
  card: {
    name: "Card",
    component: CardDemo,
    type: "registry:ui",
    href: "/sink/card",
  },
  carousel: {
    name: "Carousel",
    component: CarouselDemo,
    type: "registry:ui",
    href: "/sink/carousel",
  },
  checkbox: {
    name: "Checkbox",
    component: CheckboxDemo,
    type: "registry:ui",
    href: "/sink/checkbox",
  },
  collapsible: {
    name: "Collapsible",
    component: CollapsibleDemo,
    type: "registry:ui",
    href: "/sink/collapsible",
  },
  combobox: {
    name: "Combobox",
    component: ComboboxDemo,
    type: "registry:ui",
    href: "/sink/combobox",
  },
  command: {
    name: "Command",
    component: CommandDemo,
    type: "registry:ui",
    href: "/sink/command",
  },
  "context-menu": {
    name: "Context Menu",
    component: ContextMenuDemo,
    type: "registry:ui",
    href: "/sink/context-menu",
  },
  "date-picker": {
    name: "Date Picker",
    component: DatePickerDemo,
    type: "registry:ui",
    href: "/sink/date-picker",
  },
  dialog: {
    name: "Dialog",
    component: DialogDemo,
    type: "registry:ui",
    href: "/sink/dialog",
  },
  drawer: {
    name: "Drawer",
    component: DrawerDemo,
    type: "registry:ui",
    href: "/sink/drawer",
  },
  "dropdown-menu": {
    name: "Dropdown Menu",
    component: DropdownMenuDemo,
    type: "registry:ui",
    href: "/sink/dropdown-menu",
  },
  empty: {
    name: "Empty",
    component: EmptyDemo,
    type: "registry:ui",
    href: "/sink/empty",
    label: "New",
  },
  field: {
    name: "Field",
    component: FieldDemo,
    type: "registry:ui",
    href: "/sink/field",
    label: "New",
  },
  "hover-card": {
    name: "Hover Card",
    component: HoverCardDemo,
    type: "registry:ui",
    href: "/sink/hover-card",
  },
  input: {
    name: "Input",
    component: InputDemo,
    type: "registry:ui",
    href: "/sink/input",
  },
  "input-group": {
    name: "Input Group",
    component: InputGroupDemo,
    type: "registry:ui",
    href: "/sink/input-group",
    label: "New",
  },
  "input-otp": {
    name: "Input OTP",
    component: InputOTPDemo,
    type: "registry:ui",
    href: "/sink/input-otp",
  },
  item: {
    name: "Item",
    component: ItemDemo,
    type: "registry:ui",
    href: "/sink/item",
    label: "New",
  },
  kbd: {
    name: "Kbd",
    component: KbdDemo,
    type: "registry:ui",
    href: "/sink/kbd",
    label: "New",
  },
  label: {
    name: "Label",
    component: LabelDemo,
    type: "registry:ui",
    href: "/sink/label",
  },
  menubar: {
    name: "Menubar",
    component: MenuBarDemo,
    type: "registry:ui",
    href: "/sink/menubar",
  },
  "navigation-menu": {
    name: "Navigation Menu",
    component: NavigationMenuDemo,
    type: "registry:ui",
    href: "/sink/navigation-menu",
  },
  "native-select": {
    name: "Native Select",
    component: NativeSelectDemo,
    type: "registry:ui",
    href: "/sink/native-select",
    label: "New",
  },
  pagination: {
    name: "Pagination",
    component: PaginationDemo,
    type: "registry:ui",
    href: "/sink/pagination",
  },
  popover: {
    name: "Popover",
    component: PopoverDemo,
    type: "registry:ui",
    href: "/sink/popover",
  },
  progress: {
    name: "Progress",
    component: ProgressDemo,
    type: "registry:ui",
    href: "/sink/progress",
  },
  "radio-group": {
    name: "Radio Group",
    component: RadioGroupDemo,
    type: "registry:ui",
    href: "/sink/radio-group",
  },
  resizable: {
    name: "Resizable",
    component: ResizableDemo,
    type: "registry:ui",
    href: "/sink/resizable",
  },
  "scroll-area": {
    name: "Scroll Area",
    component: ScrollAreaDemo,
    type: "registry:ui",
    href: "/sink/scroll-area",
  },
  select: {
    name: "Select",
    component: SelectDemo,
    type: "registry:ui",
    href: "/sink/select",
  },
  separator: {
    name: "Separator",
    component: SeparatorDemo,
    type: "registry:ui",
    href: "/sink/separator",
  },
  sheet: {
    name: "Sheet",
    component: SheetDemo,
    type: "registry:ui",
    href: "/sink/sheet",
  },
  skeleton: {
    name: "Skeleton",
    component: SkeletonDemo,
    type: "registry:ui",
    href: "/sink/skeleton",
  },
  slider: {
    name: "Slider",
    component: SliderDemo,
    type: "registry:ui",
    href: "/sink/slider",
  },
  sonner: {
    name: "Sonner",
    component: SonnerDemo,
    type: "registry:ui",
    href: "/sink/sonner",
  },
  spinner: {
    name: "Spinner",
    component: SpinnerDemo,
    type: "registry:ui",
    href: "/sink/spinner",
    label: "New",
  },
  switch: {
    name: "Switch",
    component: SwitchDemo,
    type: "registry:ui",
    href: "/sink/switch",
  },
  table: {
    name: "Table",
    component: TableDemo,
    type: "registry:ui",
    href: "/sink/table",
  },
  tabs: {
    name: "Tabs",
    component: TabsDemo,
    type: "registry:ui",
    href: "/sink/tabs",
  },
  textarea: {
    name: "Textarea",
    component: TextareaDemo,
    type: "registry:ui",
    href: "/sink/textarea",
  },
  toggle: {
    name: "Toggle",
    component: ToggleDemo,
    type: "registry:ui",
    href: "/sink/toggle",
  },
  "toggle-group": {
    name: "Toggle Group",
    component: ToggleGroupDemo,
    type: "registry:ui",
    href: "/sink/toggle-group",
  },
  tooltip: {
    name: "Tooltip",
    component: TooltipDemo,
    type: "registry:ui",
    href: "/sink/tooltip",
  }
}

export type ComponentKey = keyof typeof componentRegistry