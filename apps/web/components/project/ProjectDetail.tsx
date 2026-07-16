"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Button from "@/components/ui/Button";

import ProjectCard from "./ProjectCard";

import { Project } from "@/types/project";
import { projects } from "@/lib/data/projects";

type Props = {
  project: Project;
};

export default function ProjectDetail({ project }: Props) {
  const [selectedImage, setSelectedImage] = useState(project.images[0]);

  const relatedProjects = projects
    .filter((item) => item.id !== project.id)
    .slice(0, 3);

  return (
    <section>
      {/* Breadcrumb */}

      <nav className="mb-10 flex flex-wrap items-center gap-2 text-sm">
        <Link href="/" className="text-neutral-500 hover:text-black">
          Home
        </Link>

        <span>/</span>

        <Link href="/projects" className="text-neutral-500 hover:text-black">
          Project
        </Link>

        <span>/</span>

        <span className="font-medium">{project.title}</span>
      </nav>

      <div className="grid gap-16 lg:grid-cols-2">
        {/* LEFT */}

        <div>
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-neutral-200">
            <Image
              src={selectedImage}
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="mt-5 grid grid-cols-4 gap-3">
            {project.images.map((image) => (
              <button
                key={image}
                type="button"
                onClick={() => setSelectedImage(image)}
                className={`relative aspect-square overflow-hidden rounded-xl border transition ${
                  selectedImage === image
                    ? "border-amber-500 ring-2 ring-amber-300"
                    : "border-neutral-200 hover:border-amber-400"
                }`}
              >
                <Image
                  src={image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT */}

        <div>
          <p className="text-sm font-semibold uppercase tracking-[4px] text-amber-600">
            {project.category}
          </p>

          <h1 className="mt-4 text-5xl font-bold">{project.title}</h1>

          <div className="mt-8 space-y-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <p>
              <strong>📍 Lokasi:</strong> {project.location}
            </p>

            <p>
              <strong>👤 Klien:</strong> {project.client}
            </p>

            <p>
              <strong>📅 Selesai:</strong> {project.completedAt}
            </p>

            <p>
              <strong>⏱ Durasi:</strong> {project.duration}
            </p>
          </div>

          <section className="mt-10">
            <h2 className="text-2xl font-bold">Produk yang Digunakan</h2>

            <ul className="mt-5 space-y-3 text-neutral-700">
              {project.products.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold">Deskripsi Project</h2>

            <p className="mt-5 leading-8 text-neutral-600">
              {project.description}
            </p>
          </section>

          <Link href="https://wa.me/628123456789" target="_blank">
            <Button className="mt-10 w-full lg:w-auto">
              Konsultasikan Project Serupa
            </Button>
          </Link>
        </div>
      </div>

      {/* Project Lainnya */}

      <section className="mt-24">
        <h2 className="mb-10 text-3xl font-bold">Project Lainnya</h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {relatedProjects.map((item) => (
            <ProjectCard key={item.id} project={item} />
          ))}
        </div>
      </section>
    </section>
  );
}
