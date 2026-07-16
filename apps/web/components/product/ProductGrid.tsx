import Link from "next/link";

import ProductCard from "./ProductCard";
import { Product } from "@/types/product";

type Props = {
  title?: string;
  products: Product[];
  showViewAll?: boolean;
};

export default function ProductGrid({
  title,
  products,
  showViewAll = false,
}: Props) {
  return (
    <section className="mt-20">
      {title && (
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold">{title}</h2>

          {showViewAll && (
            <Link
              href="/products"
              className="font-medium text-amber-600 transition hover:text-amber-700"
            >
              Lihat Semua →
            </Link>
          )}
        </div>
      )}

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
