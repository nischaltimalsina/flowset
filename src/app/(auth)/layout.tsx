import React from "react"
import AuthLayout from "./_components/layout"
import flow from "public/assets/images/flow.svg"
import Image from "next/image"
import { Icons } from "@/components/shared/icons"
import Link from "next/link"
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6"
interface AuthLayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: AuthLayoutProps) {
  return (
    <AuthLayout>
      <React.Suspense
        fallback={
          <Icons.spinner className="size-12 animate-spin text-primary" />
        }
      >
        <div className="container grid h-full grow gap-6 pb-6 lg:grid-cols-2">
          <div className="hidden flex-col items-center justify-between gap-1 rounded-lg bg-primary px-6 pb-6 pt-8 text-background lg:flex">
            <div className="space-y-1">
              <h3 className="text-lg font-medium">
                printx: open collaborative platform
              </h3>
              <p className="text-sm font-light text-accent/80">
                the only tool you will need for your web to print demands with
                easy workflow, low to no code experience, hands on collaboration
                and many more features
              </p>
            </div>
            <Image src={flow as string} alt="" height={400} width={400} />
            <div className="flex w-full justify-between">
              <p className="text-sm font-light text-accent/80">
                copyright &copy; printx 2024. all rights reserved.
              </p>
              <div className="flex gap-2">
                <Link href="#">
                  <FaFacebook />
                </Link>
                <Link href="#">
                  <FaInstagram />
                </Link>
                <Link href="#">
                  <FaXTwitter />
                </Link>
                <Link href="#">
                  <FaYoutube />
                </Link>
                <Link href="#">
                  <FaDiscord />
                </Link>
              </div>
            </div>
          </div>
          {children}
        </div>
      </React.Suspense>
    </AuthLayout>
  )
}
