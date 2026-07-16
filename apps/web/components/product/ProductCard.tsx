import Image from "next/image";
import Link from "next/link";

import { Product } from "@/types/product";
import Button from "@/components/ui/Button";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white transition hover:shadow-xl">
      <div className="relative aspect-square">
        <Image
          src={product.image}
          alt={product.title}
          fill
          loading="lazy"
          quality={80}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover"
        />
      </div>

      <div className="space-y-3 p-5">
        <span className="text-sm text-neutral-500">{product.category}</span>

        <h3 className="text-lg font-semibold">{product.title}</h3>

        <div className="flex items-center gap-2">
          {product.comparePrice && (
            <span className="text-sm text-neutral-400 line-through">
              Rp {product.comparePrice.toLocaleString("id-ID")}
            </span>
          )}

          <span className="font-bold text-yellow-700">
            Rp {product.price.toLocaleString("id-ID")}
          </span>
        </div>

        <div className="text-sm text-yellow-600">
          ⭐ {product.rating} ({product.reviewCount})
        </div>

        <Link
          href={`/products/${product.slug}`}
          className="block"
          aria-label={`Lihat detail ${product.title}`}
        >
          <Button className="w-full">Lihat Detail Produk</Button>
        </Link>
      </div>
    </div>
  );
}
