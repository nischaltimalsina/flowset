"use client"
import { Icons } from "@/components/shared/icons"
import { siteConfig } from "@/config/site"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import React from "react"

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const segment = useSelectedLayoutSegment()
  console.log(segment)
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex h-20 items-center py-6">
        <div className="container flex w-full justify-between gap-6 md:gap-10">
          <Link
            href="/"
            className="flex items-center justify-between space-x-2"
          >
            <Icons.logo className="[&>path]:fill-primary" />
            <span className="inline-block text-2xl font-bold lowercase text-primary">
              {siteConfig.name}
            </span>
          </Link>
          <Link
            href={segment === "login" ? "/register" : "/login"}
            className="ml-2 text-primary"
          >
            {segment === "login" ? "register" : "login"}
          </Link>
        </div>
      </div>
      {children}
    </div>
  )
}
