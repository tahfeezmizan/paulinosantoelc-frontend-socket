import { cn } from "@/lib/utils"

interface DividerProps {
  text?: string
  className?: string
}

export function Divider({ text, className }: DividerProps) {
  if (!text) {
    return <hr className={cn("border-t border-gray-300", className)} />
  }

  return (
    <div className={cn("flex items-center justify-between", className)}>
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="mx-4 text-gray-500">{text}</span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  )
}
