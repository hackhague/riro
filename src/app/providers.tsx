"use client";

import { ReactNode } from "react";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <TooltipProvider delayDuration={150}>{children}</TooltipProvider>
      <Toaster />
      <Sonner />
    </>
  );
}
