import React from "react"
import { OrgSwitch } from "./org-switch"
import { accounts } from "@/assets/data/data"
import { Icons } from "@/components/shared/icons"
import { siteConfig } from "@/config/site"
import { OrgSwitcher } from "@/components/organizations/org-switcher"

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
    </div>
  )
}
