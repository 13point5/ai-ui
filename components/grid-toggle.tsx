"use client"

import * as React from "react"
import { Button } from "@/registry/new-york/ui/button"

export function GridToggle() {
  const [showGrid, setShowGrid] = React.useState(false)

  React.useEffect(() => {
    if (showGrid) {
      // Add outline styles to all elements
      const style = document.createElement("style")
      style.id = "debug-grid-style"
      style.textContent = `
        * {
          outline: 1px dashed rgba(255, 105, 135, 0.8) !important;
        }
      `
      document.head.appendChild(style)
    } else {
      // Remove outline styles
      const style = document.getElementById("debug-grid-style")
      if (style) {
        style.remove()
      }
    }

    return () => {
      const style = document.getElementById("debug-grid-style")
      if (style) {
        style.remove()
      }
    }
  }, [showGrid])

  return (
    <Button
      onClick={() => setShowGrid(!showGrid)}
      className="fixed bottom-6 right-6 h-9 w-9 rounded-full z-50 p-0"
      variant={showGrid ? "default" : "outline"}
      title={showGrid ? "Hide outlines" : "Show outlines"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    </Button>
  )
}
