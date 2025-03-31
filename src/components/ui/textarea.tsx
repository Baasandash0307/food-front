import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full border-gray-500 rounded-md border-0 bg-transparent px-3 py-2 text-base shadow-xs ",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
