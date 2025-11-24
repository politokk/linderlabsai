import { ComponentWrapper } from "@/components/display/component-wrapper"
import AlertDemo from "./alert-demo"
import AlertDestructive from "./alert-destructive"
import AlertCustomColorsDemo from "./alert-custom-colors-demo"
import AlertSuccessDemo from "./alert-success-demo"
import AlertDescriptionOnlyDemo from "./alert-description-only-demo"
import AlertMinimalDemo from "./alert-minimal-demo"
import AlertTitleOnlyDemo from "./alert-title-only-demo"
import AlertLongTitleDemo from "./alert-long-title-demo"
import AlertLongDescriptionDemo from "./alert-long-description-demo"
import AlertExtensiveContentDemo from "./alert-extensive-content-demo"
import AlertDestructiveDemo from "./alert-destructive-demo"
import AlertDestructiveListDemo from "./alert-destructive-list-demo"
import AlertWithActionDemo from "./alert-with-action-demo"

export default function alert() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </div>
  )
}