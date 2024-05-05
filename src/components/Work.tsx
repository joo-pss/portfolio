import { Title } from "./Title";
import { Project } from "./Project";
import { projects } from "../assets/content.json";

export function Work() {
  return (
    <>
      <Title text="Work" />
      {projects.map((project) => (
        <Project
          key={project.name}
          name={project.name}
          repository={project.repository}
          description={project.description}
          gifPath={project.gifPath}
          createdAt={project.createdAt}
        />
      ))}
    </>
  );
}
