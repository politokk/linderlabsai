"use client";

import { HelpCircle, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

import { cn } from "@/lib/utils";
import { Logo } from "./logo";

export function BrandHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { state } = useSidebar();

  return (
    <header
      className={cn(
        "fixed top-0 z-50 border-border border-b bg-background/80 backdrop-blur-sm transition-[width,left] duration-200 ease-linear",
        state === "collapsed"
          ? "left-[var(--sidebar-width-icon)] w-[calc(100%-var(--sidebar-width-icon))]"
          : "left-[var(--sidebar-width)] w-[calc(100%-var(--sidebar-width))]",
        "max-md:left-0 max-md:w-full"
      )}
    >
      <div className="flex h-12 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />

          <Link href="/" className="flex items-center md:hidden">
            <Logo />
          </Link>
        </div>

        <div className="hidden items-center space-x-1 md:flex">
          {isSearchOpen ? (
            <div className="relative">
              <Input
                type="text"
                placeholder="Search"
                className="h-9 w-64 pl-9"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
              <Search className="absolute top-2.5 left-3 size-4 text-foreground" />
            </div>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              className="text-foreground"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="mr-2 size-4" />
              Search
            </Button>
          )}

          <Button variant="ghost" size="sm" className="text-foreground">
            <HelpCircle className="mr-2 size-4" />
            Support
          </Button>

          <Button variant="ghost" size="sm" className="text-foreground">
            Upgrade Trial
          </Button>

          <Avatar className="size-8">
            <AvatarFallback className="bg-primary text-primary-foreground">
              <span className="text-xs">ME</span>
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="flex gap-2 md:hidden">
          <Button variant="ghost" size="sm" className="text-foreground">
            <Search className="h-5 w-5" />
          </Button>
          <Avatar className="size-8">
            <AvatarFallback className="bg-primary text-primary-foreground">
              <span className="text-xs">ME</span>
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}