import BreadcrumbDemo from "./breadcrumb-demo";
import BreadcrumbDropdown from "./breadcrumb-dropdown";
import BreadcrumbEllipsis from "./breadcrumb-ellipsis";
import BreadcrumbLink from "./breadcrumb-link";
import BreadcrumbResponsive from "./breadcrumb-responsive";
import BreadcrumbSeparator from "./breadcrumb-separator";

export const breadcrumb = {
  name: "breadcrumb",
  components: {
    Breadcrumb: <BreadcrumbDemo />,
    BreadcrumbDropdown: <BreadcrumbDropdown />,
    BreadcrumbEllipsis: <BreadcrumbEllipsis />,
    BreadcrumbLink: <BreadcrumbLink />,
    BreadcrumbResponsive: <BreadcrumbResponsive />,
    BreadcrumbSeparator: <BreadcrumbSeparator />,
  },
};
