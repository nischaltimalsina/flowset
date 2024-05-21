import React from "react"
import { HiChevronUpDown, HiMiniArrowsUpDown } from "react-icons/hi2"
import {
  Avatar,
  AvatarFallback,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Separator,
  buttonVariants,
} from "@/components/ui"
import { cn } from "@/lib/utils"
import { Settings2 } from "lucide-react"
import { PlusIcon } from "@radix-ui/react-icons"
import { CreateOrganization } from "./create-organization"
export const OrgSwitcher = () => {
  return (
    <Popover>
      <PopoverTrigger className="w-full">
        <div
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-fit w-full items-center justify-between gap-4 rounded-lg p-1 hover:bg-accent/50"
          )}
        >
          <Avatar className="rounded-md">
            <AvatarFallback className="rounded-md text-base text-background">
              D
            </AvatarFallback>
          </Avatar>
          <p className="w-[calc(100%-4rem)] truncate text-start font-medium">
            Doqett Labs Ecosystem Projects
          </p>

          <HiChevronUpDown size={18} />
        </div>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-full min-w-96 space-y-2">
        <div className="flex gap-4">
          <Avatar className="rounded-md">
            <AvatarFallback className="rounded-md text-base text-background">
              D
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-start text-sm font-medium">Doqett Labs</p>
            <p className="text-xs text-muted-foreground">Admin</p>
          </div>
        </div>
        <div
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "h-fit w-full items-center justify-start gap-6 rounded bg-accent/50 px-2 hover:bg-accent/70"
          )}
        >
          <Settings2 size={14} />
          <p className="text-xs text-muted-foreground">Manage Organization</p>
        </div>
        <Separator />
        <Button
          variant="ghost"
          className="flex h-fit w-full items-center justify-between gap-4 rounded-lg bg-accent/50 p-1 hover:bg-accent/90"
        >
          <Avatar className="h-8 w-8 rounded-md">
            <AvatarFallback className="rounded-md text-base text-background">
              D
            </AvatarFallback>
          </Avatar>
          <p className="mr-auto text-start text-sm font-medium">Doqett Labs</p>
          <HiMiniArrowsUpDown
            size={14}
            className="mr-3 text-muted-foreground"
          />
        </Button>
        <Button
          variant="ghost"
          className="flex h-fit w-full items-center justify-between gap-4 rounded-lg bg-accent/50 p-1 hover:bg-accent/90"
        >
          <Avatar className="h-8 w-8 rounded-md">
            <AvatarFallback className="rounded-md text-base text-background">
              A
            </AvatarFallback>
          </Avatar>
          <p className="mr-auto text-start text-sm font-medium">Asterisk</p>
          <HiMiniArrowsUpDown
            size={14}
            className="mr-3 text-muted-foreground"
          />
        </Button>
        <CreateOrganization />
      </PopoverContent>
    </Popover>
  )
}
