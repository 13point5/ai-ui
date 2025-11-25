import * as React from "react";
import { CopyInstallCommand } from "@/components/copy-install-command";
import { GridToggle } from "@/components/grid-toggle";
import { BlueButton } from "@/registry/new-york/blocks/blue-button/blue-button";
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <>
      <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
        <header className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold tracking-tight">Custom Registry</h1>
          <p className="text-muted-foreground">
            A custom registry for distributing code using shadcn.
          </p>
        </header>
        <main className="flex flex-col flex-1 gap-8">
          <div className="flex flex-col border rounded-lg overflow-hidden">
            {/* Header Section */}
            <div className="px-6 py-4 border-b bg-muted/30">
              <h2 className="text-lg font-semibold">Blue Button</h2>
              <p className="text-sm text-muted-foreground">
                A dummy blue button component.
              </p>
            </div>

            {/* Preview Section */}
            <div className="flex items-center justify-center min-h-[300px] p-8">
              <BlueButton />
            </div>

            {/* Install Command Section */}
            <div className="px-6 py-4 bg-muted/20 border-t">
              <p className="text-xs font-medium text-muted-foreground mb-2">
                Installation
              </p>
              <CopyInstallCommand name="blue-button" />
            </div>
          </div>
        </main>
      </div>
      <GridToggle />
    </>
  );
}
