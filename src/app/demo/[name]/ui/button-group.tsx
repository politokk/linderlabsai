import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group";
import {
  ArrowLeftIcon,
  MoreHorizontalIcon,
  ChevronDownIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  MinusIcon,
  PlusIcon,
  ArrowRightIcon,
  CopyIcon,
  ClipboardPasteIcon,
  SearchIcon,
  AudioLinesIcon,
  UserRoundXIcon,
  ShareIcon,
  AlertTriangleIcon,
  CheckIcon,
  TrashIcon,
  VolumeOffIcon,
  BotIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText } from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

export const buttonGroup = {
  name: "button-group",
  components: {
    Default: (
      <ButtonGroup>
        <Button variant="outline">Left</Button>
        <Button variant="outline">Center</Button>
        <Button variant="outline">Right</Button>
      </ButtonGroup>
    ),

    Orientation: (
        <ButtonGroup
        orientation="vertical"
        aria-label="Media controls"
        className="h-fit"
      >
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
        <Button variant="outline" size="icon">
          <MinusIcon />
        </Button>
      </ButtonGroup>
    ),

    Size: (
        <div className="flex flex-col items-start gap-8">
        <ButtonGroup>
          <Button variant="outline" size="sm">
            Small
          </Button>
          <Button variant="outline" size="sm">
            Button
          </Button>
          <Button variant="outline" size="sm">
            Group
          </Button>
          <Button variant="outline" size="icon-sm">
            <PlusIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline">Default</Button>
          <Button variant="outline">Button</Button>
          <Button variant="outline">Group</Button>
          <Button variant="outline" size="icon">
            <PlusIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline" size="lg">
            Large
          </Button>
          <Button variant="outline" size="lg">
            Button
          </Button>
          <Button variant="outline" size="lg">
            Group
          </Button>
          <Button variant="outline" size="icon-lg">
            <PlusIcon />
          </Button>
        </ButtonGroup>
      </div>
    ),

    Nested: (
        <ButtonGroup>
        <ButtonGroup>
          <Button variant="outline" size="sm">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            4
          </Button>
          <Button variant="outline" size="sm">
            5
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline" size="icon-sm" aria-label="Previous">
            <ArrowLeftIcon />
          </Button>
          <Button variant="outline" size="icon-sm" aria-label="Next">
            <ArrowRightIcon />
          </Button>
        </ButtonGroup>
      </ButtonGroup>
    ),

    Separator: (
        <ButtonGroup>
        <Button variant="outline" size="sm">
          <CopyIcon />
          Copy
        </Button>
        <ButtonGroupSeparator />
        <Button variant="outline" size="sm">
          <ClipboardPasteIcon />
          Paste
        </Button>
      </ButtonGroup>
    ),

    Split: (
        <ButtonGroup>
        <Button variant="secondary">Button</Button>
        <ButtonGroupSeparator />
        <Button size="icon" variant="secondary">
          <PlusIcon />
        </Button>
      </ButtonGroup>
    ),

    Input: (
        <ButtonGroup>
        <Input placeholder="Search..." />
        <Button variant="outline" aria-label="Search">
          <SearchIcon />
        </Button>
      </ButtonGroup>
    ),

    InputGroup: (
        <ButtonGroup className="[--radius:9999rem]">
        <ButtonGroup>
          <Button variant="outline" size="icon">
            <PlusIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <InputGroup>
            <InputGroupInput placeholder="Send a message..." />
            <Tooltip>
              <TooltipTrigger asChild>
                <InputGroupAddon align="inline-end">
                  <AudioLinesIcon />
                </InputGroupAddon>
              </TooltipTrigger>
              <TooltipContent>Voice Mode</TooltipContent>
            </Tooltip>
          </InputGroup>
        </ButtonGroup>
      </ButtonGroup>
    ),

    Dropdown: (
        <ButtonGroup>
        <Button variant="outline">Follow</Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="!pl-2">
              <ChevronDownIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="[--radius:1rem]">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <VolumeOffIcon />
                Mute Conversation
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CheckIcon />
                Mark as Read
              </DropdownMenuItem>
              <DropdownMenuItem>
                <AlertTriangleIcon />
                Report Conversation
              </DropdownMenuItem>
              <DropdownMenuItem>
                <UserRoundXIcon />
                Block User
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ShareIcon />
                Share Conversation
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CopyIcon />
                Copy Conversation
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem variant="destructive">
                <TrashIcon />
                Delete Conversation
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    ),

    Select: (
      <ButtonGroup>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
          </SelectContent>
        </Select>
        <Button>Submit</Button>
      </ButtonGroup>
    ),

    Popover: (
        <ButtonGroup>
        <Button variant="outline">
          <BotIcon /> Copilot
        </Button>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Open Popover">
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end" className="rounded-xl p-0 text-sm">
            <div className="px-4 py-3">
              <div className="text-sm font-medium">Agent Tasks</div>
            </div>
            <Separator />
            <div className="p-4 text-sm *:[p:not(:last-child)]:mb-2">
              <Textarea
                placeholder="Describe your task in natural language."
                className="mb-4 resize-none"
              />
              <p className="font-medium">Start a new task with Copilot</p>
              <p className="text-muted-foreground">
                Describe your task in natural language. Copilot will work in the
                background and open a pull request for your review.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </ButtonGroup>
    ),
  },
};