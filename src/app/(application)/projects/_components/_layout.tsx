import React from "react"
import { type Children } from "@/types"
import { ProjectsNav } from "./nav-menu"
import { SideMenu } from "./side-menu"

export const ProjectsLayout = ({ children }: Children) => {
  return (
    <main className="flex h-screen w-full">
      <SideMenu />
      <div className=" grow">
        <ProjectsNav />
        {children}
      </div>
    </main>
  )
}
