import { ComponentWrapper } from "@/components/display/component-wrapper";
import BreadcrumbDemo from "./breadcrumb-demo";
import BreadcrumbDropdown from "./breadcrumb-dropdown";
import BreadcrumbEllipsis from "./breadcrumb-ellipsis";
import BreadcrumbLink from "./breadcrumb-link";
import BreadcrumbResponsive from "./breadcrumb-responsive";
import BreadcrumbSeparator from "./breadcrumb-separator";

export function breadcrumb() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Breadcrumb" icon="BreadcrumbIcon">
        <BreadcrumbDemo />
      </ComponentWrapper>
      <ComponentWrapper name="Breadcrumb Dropdown" icon="BreadcrumbDropdownIcon">
      <BreadcrumbDropdown />
      </ComponentWrapper>
      <ComponentWrapper name="Breadcrumb Ellipsis" icon="BreadcrumbEllipsisIcon">
        <BreadcrumbEllipsis />
      </ComponentWrapper>
      <ComponentWrapper name="Breadcrumb Link" icon="BreadcrumbLinkIcon">
        <BreadcrumbLink />
      </ComponentWrapper>
      <ComponentWrapper name="Breadcrumb Responsive" icon="BreadcrumbResponsiveIcon">
        <BreadcrumbResponsive />
      </ComponentWrapper>
      <ComponentWrapper name="Breadcrumb Separator" icon="BreadcrumbSeparatorIcon">
        <BreadcrumbSeparator />
      </ComponentWrapper>
      </div>
    </div>
  )
}
