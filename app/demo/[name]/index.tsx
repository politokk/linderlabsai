import type { ReactElement, ReactNode } from "react";

// blocks
import { blank } from "@/app/demo/[name]/blocks/blank";
import { dashboard } from "@/app/demo/[name]/blocks/dashboard";
import { store } from "@/app/demo/[name]/blocks/store";

// components
import { brandHeader } from "@/app/demo/[name]/components/brand-header";
import { brandSidebar } from "@/app/demo/[name]/components/brand-sidebar";
import { hero } from "@/app/demo/[name]/components/hero";
import { login } from "@/app/demo/[name]/components/login";
import { logo } from "@/app/demo/[name]/components/logo";
import { productGrid } from "@/app/demo/[name]/components/product-grid";
import promo from "@/app/demo/[name]/components/promo";

// ui
import accordion from "@/app/demo/[name]/ui/accordion/accordion";
import alertDialog from "@/app/demo/[name]/ui/alert-dialog/alert-dialog";
import alert from "@/app/demo/[name]/ui/alert/alert";
import aspectRatio from "@/app/demo/[name]/ui/aspect-ratio/aspect-ratio";
import avatar from "@/app/demo/[name]/ui/avatar/avatar";
import badge from "@/app/demo/[name]/ui/badge/badge";
import breadcrumb from "@/app/demo/[name]/ui/breadcrumb/breadcrumb";
import buttonGroup from "@/app/demo/[name]/ui/button-group/button-group";
import button from "@/app/demo/[name]/ui/button/button";
import calendar from "@/app/demo/[name]/ui/calendar/calendar";
import card from "@/app/demo/[name]/ui/card/card";
import carousel from "@/app/demo/[name]/ui/carousel/carousel";
import chart from "@/app/demo/[name]/ui/chart/chart";
import checkbox from "@/app/demo/[name]/ui/checkbox/checkbox";
import collapsible from "@/app/demo/[name]/ui/collapsible/collapsible";
import combobox from "@/app/demo/[name]/ui/combobox/combobox";
import command from "@/app/demo/[name]/ui/command/command";
import contextMenu from "@/app/demo/[name]/ui/context-menu/context-menu";
import dataTable from "@/app/demo/[name]/ui/data-table/data-table";
  import datePicker from "@/app/demo/[name]/ui/date-picker/date-picker";
import dialog from "@/app/demo/[name]/ui/dialog/dialog";
import drawer from "@/app/demo/[name]/ui/drawer/drawer"; 
import dropdownMenu from "@/app/demo/[name]/ui/dropdown-menu/dropdown-menu";
import empty from "@/app/demo/[name]/ui/empty/empty";
import field from "@/app/demo/[name]/ui/field/field";
import form from "@/app/demo/[name]/ui/form/form";
import hoverCard from "@/app/demo/[name]/ui/hover-card/hover-card";
import inputGroup from "@/app/demo/[name]/ui/input-group/input-group";
import inputOtp from "@/app/demo/[name]/ui/input-otp/input-otp";
import input from "@/app/demo/[name]/ui/input/input";
import item from "@/app/demo/[name]/ui/item/item";
import kbd from "@/app/demo/[name]/ui/kbd/kbd";
import label from "@/app/demo/[name]/ui/label/label";
  import menuBar from "@/app/demo/[name]/ui/menu-bar/menu-bar";
import navigationMenu from "@/app/demo/[name]/ui/navigation-menu/navigation-menu";
import nativeSelect from "@/app/demo/[name]/ui/native-select/native-select";
import pagination from "@/app/demo/[name]/ui/pagination/pagination";
import popover from "@/app/demo/[name]/ui/popover/popover";
import progress from "@/app/demo/[name]/ui/progress/progress";
import radioGroup from "@/app/demo/[name]/ui/radio-group/radio-group";
import resizable from "@/app/demo/[name]/ui/resizable/resizable";
import scrollArea from "@/app/demo/[name]/ui/scroll-area/scroll-area";
import select from "@/app/demo/[name]/ui/select/select";
import separator from "@/app/demo/[name]/ui/separator/separator";
import sheet from "@/app/demo/[name]/ui/sheet/sheet";
import sidebar from "@/app/demo/[name]/ui/sidebar/sidebar";
import skeleton from "@/app/demo/[name]/ui/skeleton/skeleton";
import slider from "@/app/demo/[name]/ui/slider/slider";
import sonner from "@/app/demo/[name]/ui/sonner/sonner";
import spinner from "@/app/demo/[name]/ui/spinner/spinner";
import switchComponent from "@/app/demo/[name]/ui/switch/switch";
import table from "@/app/demo/[name]/ui/table/table";
import tabs from "@/app/demo/[name]/ui/tabs/tabs";
import textarea from "@/app/demo/[name]/ui/textarea/textarea";
import toggleGroup from "@/app/demo/[name]/ui/toggle-group/toggle-group";
import toggle from "@/app/demo/[name]/ui/toggle/toggle";
import tooltip from "@/app/demo/[name]/ui/tooltip/tooltip";

// ai
import artifact from "@/app/demo/[name]/ai/artifact";
import chainofthought from "@/app/demo/[name]/ai/chainofthought";
import checkpoint from "@/app/demo/[name]/ai/checkpoint";
import codeBlock from "@/app/demo/[name]/ai/code-block";
import confirmation from "@/app/demo/[name]/ai/confirmation";
import context from "@/app/demo/[name]/ai/context";
import conversation from "@/app/demo/[name]/ai/conversation";
import image from "@/app/demo/[name]/ai/image";
import loader from "@/app/demo/[name]/ai/loader";
import inlineCitation from "@/app/demo/[name]/ai/inline-citation";
import message from "@/app/demo/[name]/ai/message";
interface Demo {
  name: string; // this must match the `registry.json` name
  components?: {
    [name: string]: ReactNode | ReactElement;
  };
}

export const demos: { [name: string]: Demo } = {
  // blocks
  blank,
  store,
  dashboard,
  // components
  hero,
  login,
  promo,
  logo,
  "brand-header": brandHeader,
  "brand-sidebar": brandSidebar,
  "product-grid": productGrid,

  // ui
  accordion,
  "alert-dialog": alertDialog,
  alert,
  "aspect-ratio": aspectRatio,
  avatar,
  badge,
  breadcrumb,
  "button-group": buttonGroup,
  button,
  calendar,
  card,
  carousel,
  chart,
  checkbox,
  collapsible,
  combobox,
  command,
  "context-menu": contextMenu,
  "data-table": dataTable,
  "date-picker": datePicker,
  dialog,
  drawer,
  "dropdown-menu": dropdownMenu,
  empty,
  field,
  form,
  "hover-card": hoverCard,
  "input-group": inputGroup,
  "input-otp": inputOtp,
  input,
  item,
  kbd,
  label,
  menubar: menuBar,
  "navigation-menu": navigationMenu,
  "native-select": nativeSelect,
  pagination,
  popover,
  progress,
  "radio-group": radioGroup,
  resizable,
  "scroll-area": scrollArea,
  select,
  separator,
  sheet,
  sidebar,
  skeleton,
  slider,
  sonner,
  spinner,
  switch: switchComponent,
  table,
  tabs,
  textarea,
  "toggle-group": toggleGroup,
  toggle,
  tooltip,
   
  // ai
  artifact,
  chainofthought,
  checkpoint,
  "code-block": codeBlock,
  confirmation,
  context,
  conversation,
  image,
  loader,
  "inline-citation": inlineCitation,
  message,
};