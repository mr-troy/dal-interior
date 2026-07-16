"use client";

import { useState } from "react";
import Image from "next/image";

import { Project } from "@/types/project";

type Props = {
  project: Project;
};

export default function ProjectGallery({ project }: Props) {
  const [selectedImage, setSelectedImage] = useState(project.images[0]);

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-3xl border border-neutral-200">
        <Image
          src={selectedImage}
          alt={project.title}
          fill
          priority
          quality={85}
          sizes="(max-width:768px) 100vw, 50vw"
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
              alt={`${project.title} thumbnail`}
              fill
              loading="lazy"
              quality={75}
              sizes="120px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
