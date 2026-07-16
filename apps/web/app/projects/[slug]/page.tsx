import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProjectDetail from "@/components/project/ProjectDetail";
import { projects } from "@/lib/data/projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const description =
    project.description ??
    `${project.title} merupakan salah satu proyek D'AL Interior.`;

  return {
    title: project.title,
    description,

    alternates: {
      canonical: `/projects/${project.slug}`,
    },

    openGraph: {
      type: "article",

      title: project.title,

      description,

      url: `/projects/${project.slug}`,

      images: [
        {
          url: project.thumbnail,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: project.title,

      description,

      images: [project.thumbnail],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-24">
      <ProjectDetail project={project} />
    </main>
  );
}
