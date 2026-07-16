import { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";

type Props = {
  projects: Project[];
};

export default function ProjectGrid({ projects }: Props) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
