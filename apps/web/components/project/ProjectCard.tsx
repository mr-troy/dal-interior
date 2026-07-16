import Image from "next/image";
import Link from "next/link";

import Button from "@/components/ui/Button";
import { Project } from "@/types/project";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="overflow-hidden rounded-3xl border border-neutral-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          loading="lazy"
          quality={80}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700">
            {project.category}
          </span>

          <span className="text-sm text-neutral-500">
            📍 {project.location}
          </span>
        </div>

        <h3 className="text-2xl font-bold">{project.title}</h3>

        <p className="line-clamp-3 text-neutral-600">{project.description}</p>

        <Link
          href={`/projects/${project.slug}`}
          className="block"
          aria-label={`Lihat project ${project.title}`}
        >
          <Button className="w-full">Lihat Project</Button>
        </Link>
      </div>
    </article>
  );
}
