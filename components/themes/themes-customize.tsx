"use client"

import * as React from "react"
import { CheckIcon, ChevronRightIcon, PaletteIcon, Settings2Icon, TypeIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"

const themes = [
  { id: "red", name: "Red", color: "#ef4444" },
  { id: "orange", name: "Orange", color: "#f97316" },
  { id: "amber", name: "Amber", color: "#f59e0b" },
  { id: "yellow", name: "Yellow", color: "#eab308" },
  { id: "lime", name: "Lime", color: "#84cc16" },
  { id: "green", name: "Green", color: "#22c55e" },
  { id: "emerald", name: "Emerald", color: "#10b981" },
  { id: "teal", name: "Teal", color: "#14b8a6" },
  { id: "cyan", name: "Cyan", color: "#06b6d4" },
  { id: "sky", name: "Sky", color: "#0ea5e9" },
  { id: "blue", name: "Blue", color: "#3b82f6" },
  { id: "indigo", name: "Indigo", color: "#6366f1" },
  { id: "violet", name: "Violet", color: "#8b5cf6" },
  { id: "purple", name: "Purple", color: "#a855f7" },
  { id: "fuchsia", name: "Fuchsia", color: "#d946ef" },
  { id: "pink", name: "Pink", color: "#ec4899" },
  { id: "rose", name: "Rose", color: "#f43f5e" },
  { id: "slate", name: "Slate", color: "#64748b" },
  { id: "gray", name: "Gray", color: "#6b7280" },
  { id: "zinc", name: "Zinc", color: "#71717a" },
  { id: "neutral", name: "Neutral", color: "#737373" },
  { id: "stone", name: "Stone", color: "#78716c" },
] as const

const fonts = [
  { id: "inter", name: "Inter" },
  { id: "roboto", name: "Roboto" },
  { id: "open-sans", name: "Open Sans" },
  { id: "lato", name: "Lato" },
  { id: "poppins", name: "Poppins" },
  { id: "montserrat", name: "Montserrat" },
  { id: "source-sans", name: "Source Sans Pro" },
  { id: "nunito", name: "Nunito" },
  { id: "raleway", name: "Raleway" },
  { id: "ubuntu", name: "Ubuntu" },
] as const

type Theme = (typeof themes)[number]
type ThemeId = Theme["id"]
type Font = (typeof fonts)[number]
type FontId = Font["id"]

export function ThemesCustomize() {
  const [open, setOpen] = React.useState(false)
  const [dropdownOpen, setDropdownOpen] = React.useState(false)
  const [activeTab, setActiveTab] = React.useState<"colors" | "fonts">("colors")
  const [selectedTheme, setSelectedTheme] = React.useState<ThemeId>("blue")
  const [selectedFont, setSelectedFont] = React.useState<FontId>("inter")

  const currentTheme = React.useMemo(
    () => themes.find((theme) => theme.id === selectedTheme),
    [selectedTheme]
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-expanded={open}
          aria-label="Customize theme"
        >
          {currentTheme ? (
            <div
              className="size-5 rounded-full"
              style={{ backgroundColor: currentTheme.color }}
            />
          ) : (
            <PaletteIcon />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0" align="end">
        <TooltipProvider>
          <Tabs
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as "colors" | "fonts")}
            className="gap-0"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="ml-3 text-muted-foreground text-sm flex items-center gap-2">
                <Settings2Icon className="size-4" />
                Customize
              </span>
              <TabsList className="bg-transparent">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <TabsTrigger
                      value="colors"
                      className="data-[state=active]:bg-input/25 size-8 p-0 data-[state=active]:shadow-none"
                    >
                      <PaletteIcon className="size-4" />
                    </TabsTrigger>
                  </TooltipTrigger>
                  <TooltipContent>Colors</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <TabsTrigger
                      value="fonts"
                      className="data-[state=active]:bg-input/25 size-8 p-0 data-[state=active]:shadow-none"
                    >
                      <TypeIcon className="size-4" />
                    </TabsTrigger>
                  </TooltipTrigger>
                  <TooltipContent>Fonts</TooltipContent>
                </Tooltip>
              </TabsList>
            </div>
            <Separator />

            <TabsContent value="colors" className="m-0 p-2">
              <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="size-4 rounded-full"
                        style={{ backgroundColor: currentTheme?.color }}
                      />
                      {currentTheme?.name ?? "Select color"}
                    </div>
                    <ChevronRightIcon className="size-4 text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="right" align="start" className="p-0">
                  <Command>
                    <CommandInput placeholder="Search colors..." className="h-9" />
                    <CommandList>
                      <CommandEmpty>No color found.</CommandEmpty>
                      <CommandGroup>
                        {themes.map((theme) => (
                          <CommandItem
                            key={theme.id}
                            value={theme.id}
                            onSelect={(value) => {
                              setSelectedTheme(value as ThemeId)
                              setDropdownOpen(false)
                            }}
                          >
                            <div
                              className="size-4 rounded-full"
                              style={{ backgroundColor: theme.color }}
                            />
                            {theme.name}
                            <CheckIcon
                              className={cn(
                                "ml-auto size-4",
                                selectedTheme === theme.id ? "opacity-100" : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </DropdownMenuContent>
              </DropdownMenu>
            </TabsContent>

            <TabsContent value="fonts" className="m-0">
              <Command>
                <CommandInput placeholder="Search fonts..." />
                <CommandList>
                  <CommandEmpty>No font found.</CommandEmpty>
                  <CommandGroup>
                    {fonts.map((font) => (
                      <CommandItem
                        key={font.id}
                        value={font.id}
                        onSelect={(value) => {
                          setSelectedFont(value as FontId)
                        }}
                      >
                        <TypeIcon className="size-4" />
                        {font.name}
                        <CheckIcon
                          className={cn(
                            "ml-auto",
                            selectedFont === font.id ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </TabsContent>
          </Tabs>
        </TooltipProvider>
      </PopoverContent>
    </Popover>
  )
}