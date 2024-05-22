import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"

import Image from "next/image"
import { CreateOrganization } from "./create-organization"

export const EmptyOrg = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image
        src="/assets/images/user-flow.svg"
        alt="Empty"
        height={200}
        width={200}
      />
      <h2 className="mt-6 text-2xl font-semibold">Welcome to Printex</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Create an organization to get started
      </p>
      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">Create organization</Button>
          </DialogTrigger>
          <CreateOrganization />
        </Dialog>
      </div>
    </div>
  )
}
