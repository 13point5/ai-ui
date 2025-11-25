"use client"

import * as React from "react"
import { Button } from "@/registry/new-york/ui/button"
import { cn } from "@/lib/utils"

export function CopyInstallCommand({
  name,
  baseUrl = "https://ai-ui-blush.vercel.app",
  className,
}: {
  name: string
  baseUrl?: string
  className?: string
}) {
  const [copied, setCopied] = React.useState(false)
  const command = `npx shadcn@latest add ${baseUrl}/r/${name}.json`

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <div className={cn("flex items-center gap-2 rounded-md border bg-background px-3 py-2", className)}>
      <code className="flex-1 text-xs font-mono overflow-x-auto">
        {command}
      </code>
      <Button
        size="sm"
        variant="ghost"
        onClick={copyToClipboard}
        className="shrink-0 h-8 w-8 p-0 hover:bg-muted"
        title={copied ? "Copied!" : "Copy to clipboard"}
      >
        {copied ? (
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
            className="text-green-600"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
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
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
        )}
      </Button>
    </div>
  )
}
