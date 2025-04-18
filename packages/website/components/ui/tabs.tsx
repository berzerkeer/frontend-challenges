"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "../../utils/helpers";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "text-muted-foreground bs-9 inline-flex w-full items-center justify-start gap-2 rounded-none  bg-transparent p-1",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "focus-visible:ring-ring bs-7 pli-2 relative inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-sm text-xs font-medium transition-colors hover:bg-[var(--color-bg-hover)] focus-visible:outline-none focus-visible:ring-1 active:bg-[var(--color-bg-active)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:h-4 [&_svg]:w-4",
      "data-[state=active]:before:absolute data-[state=active]:before:-bottom-[calc(4px)] data-[state=active]:before:h-[2px] data-[state=active]:before:w-[calc(100%+4px)] data-[state=active]:before:bg-[var(--color-bg-accent)] data-[state=active]:before:content-['']",
      "[[data-panel-size='0.0']_&:before]:hidden",

      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "focus-visible:ring-ring h-[calc(100%-theme(spacing.9))] border-t border-t-[var(--color-bd)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
