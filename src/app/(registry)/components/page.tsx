import { RegistryHeader } from "@/components/registry/registry-header";
import { ComponentWrapper } from "@/components/display/component-wrapper"
import AccordionDemo from "@/app/demo/[name]/ui/accordion/accordion-demo";
import AccordionExtensive from "@/app/demo/[name]/ui/accordion/accordion-extensive";
import AlertDemo from "@/app/demo/[name]/ui/alert/alert-demo"
import AlertDestructive from "@/app/demo/[name]/ui/alert/alert-destructive"
import AlertCustomColorsDemo from "@/app/demo/[name]/ui/alert/alert-custom-colors-demo"
import AlertSuccessDemo from "@/app/demo/[name]/ui/alert/alert-success-demo"
import AlertDescriptionOnlyDemo from "@/app/demo/[name]/ui/alert/alert-description-only-demo"
import AlertMinimalDemo from "@/app/demo/[name]/ui/alert/alert-minimal-demo"
import AlertTitleOnlyDemo from "@/app/demo/[name]/ui/alert/alert-title-only-demo"
import AlertLongTitleDemo from "@/app/demo/[name]/ui/alert/alert-long-title-demo"
import AlertLongDescriptionDemo from "@/app/demo/[name]/ui/alert/alert-long-description-demo"
import AlertExtensiveContentDemo from "@/app/demo/[name]/ui/alert/alert-extensive-content-demo"
import AlertDestructiveDemo from "@/app/demo/[name]/ui/alert/alert-destructive-demo"
import AlertDestructiveListDemo from "@/app/demo/[name]/ui/alert/alert-destructive-list-demo"
import AlertWithActionDemo from "@/app/demo/[name]/ui/alert/alert-with-action-demo"
import AlertDialogDemo from "@/app/demo/[name]/ui/alert-dialog/alert-dialog-demo"
import AspectRatioWideDemo from "@/app/demo/[name]/ui/aspect-ratio/aspect-ratio-wide-demo"
import AspectRatioSquareDemo from "@/app/demo/[name]/ui/aspect-ratio/aspect-ratio-square-demo"
import AvatarDemo from "@/app/demo/[name]/ui/avatar/avatar-demo"
import BadgeDemo from "@/app/demo/[name]/ui/badge/badge-demo";
import BadgeDestructive from "@/app/demo/[name]/ui/badge/badge-destructive";
import BadgeOutline from "@/app/demo/[name]/ui/badge/badge-outline";
import BadgeSecondary from "@/app/demo/[name]/ui/badge/badge-secondary";
import BreadcrumbDemo from "@/app/demo/[name]/ui/breadcrumb/breadcrumb-demo";
import BreadcrumbDropdown from "@/app/demo/[name]/ui/breadcrumb/breadcrumb-dropdown";
import BreadcrumbEllipsis from "@/app/demo/[name]/ui/breadcrumb/breadcrumb-ellipsis";
import BreadcrumbLink from "@/app/demo/[name]/ui/breadcrumb/breadcrumb-link";
import BreadcrumbResponsive from "@/app/demo/[name]/ui/breadcrumb/breadcrumb-responsive";
import BreadcrumbSeparator from "@/app/demo/[name]/ui/breadcrumb/breadcrumb-separator";
import ButtonDemo from "@/app/demo/[name]/ui/button/button-demo";
import ButtonDestructive from "@/app/demo/[name]/ui/button/button-destructive";
import ButtonGhost from "@/app/demo/[name]/ui/button/button-ghost";
import ButtonIcon from "@/app/demo/[name]/ui/button/button-icon";
import ButtonLink from "@/app/demo/[name]/ui/button/button-link";
import ButtonLoading from "@/app/demo/[name]/ui/button/button-loading";
import ButtonOutline from "@/app/demo/[name]/ui/button/button-outline";
import ButtonRounded from "@/app/demo/[name]/ui/button/button-rounded";
import ButtonSecondary from "@/app/demo/[name]/ui/button/button-secondary";
import ButtonSize from "@/app/demo/[name]/ui/button/button-size";
import ButtonWithIcon from "@/app/demo/[name]/ui/button/button-with-icon";
import ButtonGroupDemo from "@/app/demo/[name]/ui/button-group/button-group-demo";
import ButtonGroupNested from "@/app/demo/[name]/ui/button-group/button-group-nested";
import ButtonGroupSize from "@/app/demo/[name]/ui/button-group/button-group-size";
import ButtonGroupSeparator from "@/app/demo/[name]/ui/button-group/button-group-separator";
import ButtonGroupSplit from "@/app/demo/[name]/ui/button-group/button-group-split";
import ButtonGroupInput from "@/app/demo/[name]/ui/button-group/button-group-input";
import ButtonGroupDropdown from "@/app/demo/[name]/ui/button-group/button-group-dropdown";
import ButtonGroupSelect from "@/app/demo/[name]/ui/button-group/button-group-select";
import ButtonGroupPopover from "@/app/demo/[name]/ui/button-group/button-group-popover";
import ButtonGroupInputGroup from "@/app/demo/[name]/ui/button-group/button-group-input-group";
import ButtonGroupOrientation from "@/app/demo/[name]/ui/button-group/button-group-orientation";
import CalendarDemo from "@/app/demo/[name]/ui/calendar/calendar-demo";
import CalendarForm from "@/app/demo/[name]/ui/calendar/calendar-form";
import CalendarHijri from "@/app/demo/[name]/ui/calendar/calendar-hijri";
import SingleCalendar from "@/app/demo/[name]/ui/calendar/single-calendar";
import MultiCalendar from "@/app/demo/[name]/ui/calendar/multi-calendar";
import CardDemo from "@/app/demo/[name]/ui/card/card-demo";
import CardWithForm from "@/app/demo/[name]/ui/card/card-with-form";
import CardMeetingNotesDemo from "@/app/demo/[name]/ui/card/card-meeting-notes-demo";
import CardImageDemo from "@/app/demo/[name]/ui/card/card-image-demo";
import ChartBarDemo from "@/app/demo/[name]/ui/chart/chart-bar-demo";
import ChartBarDemoAxis from "@/app/demo/[name]/ui/chart/chart-bar-demo-axis";
import ChartBarDemoGrid from "@/app/demo/[name]/ui/chart/chart-bar-demo-grid";
import ChartBarDemoLegend from "@/app/demo/[name]/ui/chart/chart-bar-demo-legend";
import ChartBarDemoTooltip from "@/app/demo/[name]/ui/chart/chart-bar-demo-tooltip";
import ChartTooltipDemo from "@/app/demo/[name]/ui/chart/chart-tooltip-demo";
import CheckboxDemo from "@/app/demo/[name]/ui/checkbox/checkbox-demo";
import CheckboxDisabled from "@/app/demo/[name]/ui/checkbox/checkbox-disabled";
import CheckboxWithText from "@/app/demo/[name]/ui/checkbox/checkbox-with-text";
import CheckboxFormMultiple from "@/app/demo/[name]/ui/checkbox/checkbox-form-multiple";
import CheckboxFormSingle from "@/app/demo/[name]/ui/checkbox/checkbox-form-single";

export default function ComponentsPage() {
  return (
    <>
      <RegistryHeader componentTitle="Components" />
      <div className="flex flex-1 flex-col gap-4 p-4 mt-15">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Accordion" icon="ChevronDown">
          <AccordionDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Accordion Extensive" icon="ScrollText">
          <AccordionExtensive />
        </ComponentWrapper>
        <ComponentWrapper name="Alert" icon="Bell">
          <AlertDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Alert Destructive" icon="AlertTriangle">
          <AlertDestructive />
        </ComponentWrapper>
        <ComponentWrapper name="Alert Success" icon="CheckCircle2Icon">
          <AlertSuccessDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Alert Description Only" icon="BookmarkCheckIcon">
          <AlertDescriptionOnlyDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Alert Minimal" icon="FileTextIcon">
          <AlertMinimalDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Alert Title Only" icon="PopcornIcon">
          <AlertTitleOnlyDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Alert Long Title" icon="TextIcon">
          <AlertLongTitleDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Alert Long Description" icon="GiftIcon">
          <AlertLongDescriptionDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Alert Extensive Content" icon="LayoutListIcon">
          <AlertExtensiveContentDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Alert Destructive" icon="AlertCircleIcon">
          <AlertDestructiveDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Alert Destructive List" icon="AlertTriangleIcon">
          <AlertDestructiveListDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Alert With Action" icon="MousePointerClickIcon">
          <AlertWithActionDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Alert Custom Colors" icon="PaletteIcon">
          <AlertCustomColorsDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Alert Dialog" icon="AlertCircle">
          <AlertDialogDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Aspect Ratio Wide" icon="RectangleHorizontalIcon">
          <AspectRatioWideDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Aspect Ratio Square" icon="SquareIcon">
          <AspectRatioSquareDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Avatar" icon="User">
          <AvatarDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Badge" icon="Tag">
        <BadgeDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Badge Destructive" icon="XCircle">
          <BadgeDestructive />
        </ComponentWrapper>
        <ComponentWrapper name="Badge Outline" icon="Circle">
          <BadgeOutline />
        </ComponentWrapper>
        <ComponentWrapper name="Badge Secondary" icon="Tag">
          <BadgeSecondary />
        </ComponentWrapper>
        <ComponentWrapper name="Breadcrumb" icon="ChevronRight">
        <BreadcrumbDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Breadcrumb Dropdown" icon="ChevronDown">
      <BreadcrumbDropdown />
      </ComponentWrapper>
      <ComponentWrapper name="Breadcrumb Ellipsis" icon="MoreHorizontal">
        <BreadcrumbEllipsis />
      </ComponentWrapper>
      <ComponentWrapper name="Breadcrumb Link" icon="Link">
        <BreadcrumbLink />
      </ComponentWrapper>
      <ComponentWrapper name="Breadcrumb Responsive" icon="Menu">
        <BreadcrumbResponsive />
      </ComponentWrapper>
      <ComponentWrapper name="Breadcrumb Separator" icon="Slash">
        <BreadcrumbSeparator />
      </ComponentWrapper>
      <ComponentWrapper name="Button" icon="Square">
          <ButtonDemo />
        </ComponentWrapper>
      <ComponentWrapper name="Button Destructive" icon="Trash2">
        <ButtonDestructive />
      </ComponentWrapper>
      <ComponentWrapper name="Button Ghost" icon="Ghost">
        <ButtonGhost />
      </ComponentWrapper>
      <ComponentWrapper name="Button Icon" icon="Smile">
        <ButtonIcon />
      </ComponentWrapper>
      <ComponentWrapper name="Button Link" icon="Link2">
        <ButtonLink />
      </ComponentWrapper>
      <ComponentWrapper name="Button Loading" icon="Loader2">
        <ButtonLoading />
      </ComponentWrapper>
      <ComponentWrapper name="Button Outline" icon="Circle">
        <ButtonOutline />
      </ComponentWrapper>
      <ComponentWrapper name="Button Rounded" icon="CircleDot">
        <ButtonRounded />
      </ComponentWrapper>
      <ComponentWrapper name="Button Secondary" icon="SquareDot">
        <ButtonSecondary />
      </ComponentWrapper>
      <ComponentWrapper name="Button Size" icon="Maximize">
        <ButtonSize />
      </ComponentWrapper>
      <ComponentWrapper name="Button With Icon" icon="Star">
        <ButtonWithIcon />
      </ComponentWrapper>
      <ComponentWrapper name="Button Group" icon="Layers">
          <ButtonGroupDemo />
        </ComponentWrapper>
      <ComponentWrapper name="Button Nested" icon="Layers2">
        <ButtonGroupNested />
      </ComponentWrapper>
      <ComponentWrapper name="Button Sizes" icon="Maximize2">
        <ButtonGroupSize />
      </ComponentWrapper>
      <ComponentWrapper name="Button Separator" icon="Minus">
        <ButtonGroupSeparator />
      </ComponentWrapper>
      <ComponentWrapper name="Button With Icon" icon="Split">
        <ButtonGroupSplit />
      </ComponentWrapper>
      <ComponentWrapper name="Button Input" icon="Type">
        <ButtonGroupInput />
      </ComponentWrapper>
      <ComponentWrapper name="Button Dropdown" icon="ChevronDown">
        <ButtonGroupDropdown />
      </ComponentWrapper>
      <ComponentWrapper name="Button Select" icon="CheckSquare">
        <ButtonGroupSelect />
      </ComponentWrapper>
      <ComponentWrapper name="Button Popover" icon="MessageSquare">
        <ButtonGroupPopover />
      </ComponentWrapper>
      <ComponentWrapper name="Button Input Group" icon="Group">
        <ButtonGroupInputGroup />
      </ComponentWrapper>
      <ComponentWrapper name="Button Orientation" icon="ListOrdered">
        <ButtonGroupOrientation />
      </ComponentWrapper>
      <ComponentWrapper name="Calendar" icon="Calendar">
          <CalendarDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Calendar Form" icon="CalendarCheck">
          <CalendarForm />
        </ComponentWrapper>
        <ComponentWrapper name="Calendar Hijri" icon="CalendarDays">
          <CalendarHijri />
        </ComponentWrapper>
        <ComponentWrapper name="Calendar Single" icon="CalendarRange">
          <SingleCalendar />
        </ComponentWrapper>
        <ComponentWrapper name="Calendar Multi" icon="CalendarDays">
          <MultiCalendar />
        </ComponentWrapper>
        <ComponentWrapper name="Card" icon="CreditCard">
          <CardDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Card With Form" icon="FileText">
          <CardWithForm />
        </ComponentWrapper>
        <ComponentWrapper name="Card Meeting Notes" icon="FileText"> 
          <CardMeetingNotesDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Card Image" icon="Image">
          <CardImageDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Bar Demo" icon="BarChart">
          <ChartBarDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Bar Demo Axis" icon="Axis3d">
          <ChartBarDemoAxis />
        </ComponentWrapper>
        <ComponentWrapper name="Bar Demo Grid" icon="Grid3x3">
          <ChartBarDemoGrid />
        </ComponentWrapper>
        <ComponentWrapper name="Bar Demo Legend" icon="Layers">
          <ChartBarDemoLegend />
        </ComponentWrapper>
        <ComponentWrapper name="Bar Demo Tooltip" icon="MessageSquare">
          <ChartBarDemoTooltip />
        </ComponentWrapper>
        <ComponentWrapper name="Tooltip" icon="Info">
          <ChartTooltipDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Checkbox" icon="Square">
          <CheckboxDemo />
        </ComponentWrapper>
        <ComponentWrapper name="Checkbox Disabled" icon="SquareSlash">
          <CheckboxDisabled />
        </ComponentWrapper>
        <ComponentWrapper name="Checkbox With Text" icon="SquareCheck">
          <CheckboxWithText />
        </ComponentWrapper>
        <ComponentWrapper name="Checkbox Form Multiple" icon="CheckSquare">
          <CheckboxFormMultiple />
        </ComponentWrapper>
        <ComponentWrapper name="Checkbox Form Single" icon="Check">
          <CheckboxFormSingle />
        </ComponentWrapper>
      </div>
    </div>
    </>
  )
}