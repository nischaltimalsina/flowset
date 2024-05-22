"use client"

import { cn } from "@/lib/utils"
import { PlusIcon } from "@radix-ui/react-icons"
import { toast } from "sonner"
import { Button } from "../ui"

interface NewProjectButtonProps {
  orgId: string
  disabled?: boolean
}

export const NewProjectButton = ({
  orgId,
  disabled,
}: NewProjectButtonProps) => {
  const onClick = () => {
    toast(orgId)
  }
  return (
    <Button
      size="full"
      onClick={onClick}
      className={cn(
        "col-span-1 flex !aspect-[5/3] w-full flex-col items-center justify-center rounded-lg bg-primary py-6 transition-colors hover:bg-primary/80",
        disabled && "cursor-not-allowed opacity-75 hover:bg-primary"
      )}
    >
      <div />
      <PlusIcon className="h-12 w-12 stroke-1 text-white" />
      <p className="text-xs font-light text-white">New board</p>
    </Button>
  )
}
