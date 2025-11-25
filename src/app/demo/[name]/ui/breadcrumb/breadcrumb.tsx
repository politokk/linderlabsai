import { ComponentWrapper } from "@/components/display/component-wrapper";
import BreadcrumbDemo from "@/components/demos/breadcrumb/breadcrumb-demo";
import BreadcrumbDropdown from "@/components/demos/breadcrumb/breadcrumb-dropdown";
import BreadcrumbEllipsis from "@/components/demos/breadcrumb/breadcrumb-ellipsis";
import BreadcrumbLink from "@/components/demos/breadcrumb/breadcrumb-link";
import BreadcrumbResponsive from "@/components/demos/breadcrumb/breadcrumb-responsive";
import BreadcrumbSeparator from "@/components/demos/breadcrumb/breadcrumb-separator";

export default function breadcrumb() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </div>
  )
}
