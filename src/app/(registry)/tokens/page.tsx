"use client";

import type React from "react";

import { FontBlock } from "@/app/(registry)/tokens/font-block";
import { RegistryHeader } from "@/components/registry/registry-header";
import { ColorBlock } from "./color-block";
import { TokenFormatSelector } from "./token-format-selector";

export default function TokensPage() {
  return (
    <div className="flex flex-col min-h-full w-full">
      <RegistryHeader componentTitle="Design Tokens" componentIcon="Palette" />

      <div className="container p-5 md:p-10 mt-10 md:mt-5">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-muted-foreground">
            A comprehensive overview of all color tokens used in the design system
          </p>
          <TokenFormatSelector className="ml-auto" />
        </div>

      {/* Fonts */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Fonts</h2>
        <p className="mb-6 text-muted-foreground">
          The core font families that define the primary typography.
        </p>
        <div className="grid grid-cols-1 gap-4">
          <FontBlock className="font-sans" />
          <FontBlock className="font-serif" />
          <FontBlock className="font-mono" />
        </div>
      </section>

      {/* Primary Theme */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Primary Theme</h2>
        <p className="mb-6 text-muted-foreground">
          The core colors that define the primary theme and overall look of the
          interface.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <ColorBlock name="Background" tokenName="background" className="bg-background" />
          <ColorBlock name="Foreground" tokenName="foreground" className="bg-foreground" />
          <ColorBlock name="Primary" tokenName="primary" className="bg-primary" />
          <ColorBlock
            name="Primary Foreground"
            tokenName="primary-foreground"
            className="bg-primary-foreground"
          />
        </div>
      </section>

      {/* Secondary & Accent */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Secondary & Accent</h2>
        <p className="mb-6 text-muted-foreground">
          Colors used for secondary elements and accents throughout the
          interface.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <ColorBlock name="Secondary" tokenName="secondary" className="bg-secondary" />
          <ColorBlock
            name="Secondary Foreground"
            tokenName="secondary-foreground"
            className="bg-secondary-foreground"
          />
          <ColorBlock name="Accent" tokenName="accent" className="bg-accent" />
          <ColorBlock
            name="Accent Foreground"
            tokenName="accent-foreground"
            className="bg-accent-foreground"
          />
        </div>
      </section>

      {/* UI Component */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">UI Component</h2>
        <p className="mb-6 text-muted-foreground">
          Colors used for specific UI components like cards, popovers, and muted
          elements.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <ColorBlock name="Card" tokenName="card" className="bg-card" />
          <ColorBlock name="Card Foreground" tokenName="card-foreground" className="bg-card-foreground" />
          <ColorBlock name="Popover" tokenName="popover" className="bg-popover" />
          <ColorBlock
            name="Popover Foreground"
            tokenName="popover-foreground"
            className="bg-popover-foreground"
          />
          <ColorBlock name="Muted" tokenName="muted" className="bg-muted" />
          <ColorBlock name="Muted Foreground" tokenName="muted-foreground" className="bg-muted-foreground" />
          <ColorBlock name="Muted Secondary" tokenName="muted-secondary" className="bg-muted-secondary" />
        </div>
      </section>

      {/* Utility & Form */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Utility & Form</h2>
        <p className="mb-6 text-muted-foreground">
          Colors used for borders, inputs, and other utility elements.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <ColorBlock name="Border" tokenName="border" className="bg-border" />
          <ColorBlock name="Input" tokenName="input" className="bg-input" />
          <ColorBlock name="Ring" tokenName="ring" className="bg-ring" />
        </div>
      </section>

      {/* Status & Feedback */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Status & Feedback</h2>
        <p className="mb-6 text-muted-foreground">
          Colors used to indicate different states and provide feedback to
          users.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <ColorBlock name="Destructive" tokenName="destructive" className="bg-destructive" />
          <ColorBlock
            name="Destructive Foreground"
            tokenName="destructive-foreground"
            className="bg-destructive-foreground"
          />
          <ColorBlock name="Success" tokenName="success" className="bg-success" />
          <ColorBlock
            name="Success Foreground"
            tokenName="success-foreground"
            className="bg-success-foreground"
          />
          <ColorBlock name="Warning" tokenName="warning" className="bg-warning" />
          <ColorBlock
            name="Warning Foreground"
            tokenName="warning-foreground"
            className="bg-warning-foreground"
          />
          <ColorBlock name="Info" tokenName="info" className="bg-info" />
          <ColorBlock name="Info Foreground" tokenName="info-foreground" className="bg-info-foreground" />
          <ColorBlock name="In Progress" tokenName="inProgress" className="bg-inProgress" />
          <ColorBlock
            name="In Progress Foreground"
            tokenName="inProgress-foreground"
            className="bg-inProgress-foreground"
          />
          <ColorBlock name="Link" tokenName="link" className="bg-link" />
          <ColorBlock name="Link Foreground" tokenName="link-foreground" className="bg-link-foreground" />
        </div>
      </section>

      {/* Selection & Interaction */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Selection & Interaction</h2>
        <p className="mb-6 text-muted-foreground">
          Colors used for selected states and interactive elements.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <ColorBlock name="Selection" tokenName="selection" className="bg-selection" />
          <ColorBlock name="Selection Foreground" tokenName="selection-foreground" className="bg-selection-foreground" />
          <ColorBlock name="Tooltip" tokenName="tooltip" className="bg-tooltip" />
          <ColorBlock name="Tooltip Foreground" tokenName="tooltip-foreground" className="bg-tooltip-foreground" />
        </div>
      </section>

      {/* Chart & Visualization */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Chart & Visualization</h2>
        <p className="mb-6 text-muted-foreground">
          Colors used for data visualization and charts.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <ColorBlock name="Chart 1" tokenName="chart-1" className="bg-chart-1" />
          <ColorBlock name="Chart 2" tokenName="chart-2" className="bg-chart-2" />
          <ColorBlock name="Chart 3" tokenName="chart-3" className="bg-chart-3" />
          <ColorBlock name="Chart 4" tokenName="chart-4" className="bg-chart-4" />
          <ColorBlock name="Chart 5" tokenName="chart-5" className="bg-chart-5" />
          <ColorBlock name="Chart 6" tokenName="chart-6" className="bg-chart-6" />
          <ColorBlock name="Chart 7" tokenName="chart-7" className="bg-chart-7" />
          <ColorBlock name="Chart 8" tokenName="chart-8" className="bg-chart-8" />
          <ColorBlock name="Chart 9" tokenName="chart-9" className="bg-chart-9" />
          <ColorBlock name="Chart 10" tokenName="chart-10" className="bg-chart-10" />
          <ColorBlock name="Chart 11" tokenName="chart-11" className="bg-chart-11" />
        </div>
      </section>

      {/* Sidebar & Navigation */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Sidebar & Navigation</h2>
        <p className="mb-6 text-muted-foreground">
          Colors specific to the sidebar and navigation components.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <ColorBlock name="Sidebar" tokenName="sidebar" className="bg-sidebar" />
          <ColorBlock
            name="Sidebar Foreground"
            tokenName="sidebar-foreground"
            className="bg-sidebar-foreground"
          />
          <ColorBlock name="Sidebar Primary" tokenName="sidebar-primary" className="bg-sidebar-primary" />
          <ColorBlock
            name="Sidebar Primary Foreground"
            tokenName="sidebar-primary-foreground"
            className="bg-sidebar-primary-foreground"
          />
          <ColorBlock name="Sidebar Accent" tokenName="sidebar-accent" className="bg-sidebar-accent" />
          <ColorBlock
            name="Sidebar Accent Foreground"
            tokenName="sidebar-accent-foreground"
            className="bg-sidebar-accent-foreground"
          />
          <ColorBlock name="Sidebar Border" tokenName="sidebar-border" className="bg-sidebar-border" />
          <ColorBlock name="Sidebar Ring" tokenName="sidebar-ring" className="bg-sidebar-ring" />
        </div>
      </section>
      </div>
    </div>
  );
}
