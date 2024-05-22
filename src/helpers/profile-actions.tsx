import { toast } from "sonner"

async function createProfile(userId: string) {
  const response = await fetch(`/api/profile/${userId}`, {
    method: "POST",
  })

  if (!response?.ok) {
    toast.error("Your Profile was not created. Please try again.")
  }

  return true
}

async function updateProfile(userId: string) {
  const response = await fetch(`/api/profile/${userId}`, {
    method: "PATCH",
  })

  if (!response?.ok) {
    toast("Your Profile was not updated. Please try again.")
  }

  return true
}

export { createProfile, updateProfile }
