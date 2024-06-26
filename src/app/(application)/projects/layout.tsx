import { type Children } from "@/types"
import { ProjectsLayout } from "./_components/project-layout"

const layout = ({ children }: Children) => {
  return <ProjectsLayout>{children}</ProjectsLayout>
}

export default layout
