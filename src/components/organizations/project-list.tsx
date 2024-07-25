import { NewProjectButton } from "./new-project-button"
import { ProjectCard } from "./project-card"

export const ProjectList = () => {
  return (
    <div className=" h-full p-6">
      <h2 className="text-3xl">Projects</h2>
      <div className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(272px,1fr))] gap-4">
        <NewProjectButton orgId={"1234567dfg"} />
        <ProjectCard
          id={"hello123"}
          title={"FlowSet "}
          authorName={"Nischal Timalsina"}
          authorId={"akfubwejew"}
          createdAt={1631983948638}
          imageUrl={"/assets/images/user-flow.svg"}
          orgId={"enqrbwemfweo"}
          isFavorite={false}
        />
        <ProjectCard
          id={"hello123"}
          title={"FlowSet "}
          authorName={"Nischal Timalsina"}
          authorId={"akfubwejew"}
          createdAt={1631983948638}
          imageUrl={"/assets/images/user-flow.svg"}
          orgId={"enqrbwemfweo"}
          isFavorite={false}
        />
        <ProjectCard
          id={"hello123"}
          title={"FlowSet "}
          authorName={"Nischal Timalsina"}
          authorId={"akfubwejew"}
          createdAt={1631983948638}
          imageUrl={"/assets/images/user-flow.svg"}
          orgId={"enqrbwemfweo"}
          isFavorite={false}
        />
        <ProjectCard
          id={"hello123"}
          title={"FlowSet "}
          authorName={"Nischal Timalsina"}
          authorId={"akfubwejew"}
          createdAt={1631983948638}
          imageUrl={"/assets/images/user-flow.svg"}
          orgId={"enqrbwemfweo"}
          isFavorite={false}
        />
        <ProjectCard
          id={"hello123"}
          title={"FlowSet "}
          authorName={"Nischal Timalsina"}
          authorId={"akfubwejew"}
          createdAt={1631983948638}
          imageUrl={"/assets/images/user-flow.svg"}
          orgId={"enqrbwemfweo"}
          isFavorite={false}
        />
        <ProjectCard
          id={"hello123"}
          title={"FlowSet "}
          authorName={"Nischal Timalsina"}
          authorId={"akfubwejew"}
          createdAt={1631983948638}
          imageUrl={"/assets/images/user-flow.svg"}
          orgId={"enqrbwemfweo"}
          isFavorite={false}
        />
        <ProjectCard
          id={"hello123"}
          title={"FlowSet "}
          authorName={"Nischal Timalsina"}
          authorId={"akfubwejew"}
          createdAt={1631983948638}
          imageUrl={"/assets/images/user-flow.svg"}
          orgId={"enqrbwemfweo"}
          isFavorite={false}
        />
      </div>
    </div>
  )
}
