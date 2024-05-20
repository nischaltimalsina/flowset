import React from "react"
import { OrgSwitch } from "./org-switch"
import { accounts } from "@/assets/data/data"

export const SideMenu = () => {
  return (
    <div className="h-full w-64 border-r p-4">
      <div className="">
        <OrgSwitch isCollapsed={false} accounts={accounts} />
      </div>
    </div>
  )
}
