import { NewProjectButton } from "./new-project-button"

export const ProjectList = () => {
  return (
    <div className=" h-full p-6">
      <h2 className="text-3xl">Projects</h2>
      <div className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(272px,1fr))]">
        <NewProjectButton orgId={"1234567dfg"} />
      </div>
    </div>
  )
}
