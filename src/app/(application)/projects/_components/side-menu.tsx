import { OrgSwitcher } from "@/components/organizations/org-switcher"
import { Icons } from "@/components/shared/icons"
import { buttonVariants } from "@/components/ui"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { GridIcon, StarIcon } from "@radix-ui/react-icons"
import { File } from "lucide-react"

export const SideMenu = () => {
  return (
    <div className="h-full w-64 border-r">
      <div className="flex h-16 items-center space-x-2 px-4">
        <Icons.logo className="[&>path]:fill-primary" />
        <span className="hidden text-2xl font-bold lowercase text-primary sm:inline-block">
          {siteConfig.name}
        </span>
      </div>
      <div className="p-4">
        <OrgSwitcher />
      </div>
      <div className="space-y-1 px-4">
        <div
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "h-10 w-full items-center justify-start gap-2 rounded-lg bg-accent/70 px-3 py-2"
          )}
        >
          <File className="size-4" />
          <p className="text-sm text-muted-foreground">Drafts</p>
        </div>
        <div
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "h-10 w-full items-center justify-start gap-2 rounded-lg px-3 py-2"
          )}
        >
          <GridIcon className="size-4" />
          <p className="text-sm text-muted-foreground">Projects</p>
        </div>
        <div
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "h-10 w-full items-center justify-start gap-2 rounded-lg px-3 py-2"
          )}
        >
          <StarIcon className="size-4" />
          <p className="text-sm text-muted-foreground">Favourites</p>
        </div>
      </div>
    </div>
  )
}
