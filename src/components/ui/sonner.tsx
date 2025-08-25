"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: "!bg-transparent !border-none !shadow-none !p-0 !m-0",
          description: "!text-transparent",
          actionButton: "!hidden",
          cancelButton: "!hidden",
          title: "!text-transparent",
          closeButton: "!hidden",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
