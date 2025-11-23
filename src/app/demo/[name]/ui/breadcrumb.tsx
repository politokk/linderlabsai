import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ComponentIcon, EllipsisIcon, FileDigitIcon, GithubIcon, HomeIcon, PaletteIcon } from "lucide-react";

export const breadcrumb = {
  name: "breadcrumb",
  components: {
    Default: (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#home" className="flex items-center gap-1"><HomeIcon className="size-3.5" /> Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                <BreadcrumbEllipsis className="size-4" />
                <span className="sr-only">Toggle menu</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem><FileDigitIcon className="size-3.5" /> Documentation</DropdownMenuItem>
                <DropdownMenuItem><PaletteIcon className="size-3.5" /> Themes</DropdownMenuItem>
                <DropdownMenuItem><GithubIcon className="size-3.5" /> GitHub</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#components" className="flex items-center gap-1"><ComponentIcon className="size-3.5" /> Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="flex items-center gap-1"><EllipsisIcon className="size-3.5" /> Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    ),
  },
};
