"use client";

import { useState } from "react";
import Image from "next/image";

import { Product } from "@/types/product";

type Props = {
  product: Product;
};

export default function ProductGallery({ product }: Props) {
  const images = product.gallery?.length ? product.gallery : [product.image];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-3xl border border-neutral-200 bg-white">
        <Image
          src={selectedImage}
          alt={product.title}
          fill
          priority
          quality={85}
          sizes="(max-width:768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Thumbnail Gallery */}
      <div className="mt-4 grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            aria-label={`Thumbnail ${index + 1} ${product.title}`}
            onClick={() => setSelectedImage(image)}
            className={`relative aspect-square overflow-hidden rounded-xl border transition ${
              selectedImage === image
                ? "border-amber-500 ring-2 ring-amber-300"
                : "border-neutral-200 hover:border-amber-400"
            }`}
          >
            <Image
              src={image}
              alt={`${product.title} thumbnail ${index + 1}`}
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
