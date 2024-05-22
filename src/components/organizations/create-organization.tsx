import { InfoCircledIcon, UploadIcon } from "@radix-ui/react-icons"
import {
  Button,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Input,
  Label,
} from "../ui"

export const CreateOrganization = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create Organization</DialogTitle>
        <DialogDescription>
          After creating an Organization, you can invite others to join.
        </DialogDescription>
        <div className="space-y-4 py-6">
          <div className="flex items-center gap-4">
            <div className="group grid size-12 place-content-center rounded-lg bg-accent">
              <UploadIcon className="duration-200 group-hover:scale-125" />
            </div>
            <div>
              <p className="text-start text-sm font-medium">Profile Image</p>
              <p className="text-xs text-primary">
                Upload an image ( less than 2mb )
              </p>
            </div>
          </div>
          <div className="space-y-1">
            <Label>Organization Name</Label>
            <Input />
          </div>
          <div className="space-y-1">
            <Label className="flex gap-1.5">
              Slug URL <InfoCircledIcon />
            </Label>
            <Input />
          </div>
        </div>
        <DialogFooter>
          <Button>Create Organization</Button>
        </DialogFooter>
      </DialogHeader>
    </DialogContent>
  )
}
