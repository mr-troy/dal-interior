import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProductDetail from "@/components/product/ProductDetail";
import { featuredProducts } from "@/lib/data/products";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const product = featuredProducts.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const description =
    product.description ??
    `${product.title} premium dari D'AL Interior. Solusi interior berkualitas untuk rumah, kantor, hotel, dan rumah sakit.`;

  return {
    title: product.title,
    description,

    alternates: {
      canonical: `/products/${product.slug}`,
    },

    openGraph: {
      title: product.title,
      description,
      url: `/products/${product.slug}`,
      type: "website",

      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: product.title,
      description,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;

  const product = featuredProducts.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <ProductDetail product={product} />
    </main>
  );
}
