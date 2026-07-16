import Link from "next/link";

import Button from "@/components/ui/Button";
import ProductGallery from "@/components/product/ProductGallery";
import ProductGrid from "@/components/product/ProductGrid";
import ProductReview from "@/components/product/ProductReview";

import { Product } from "@/types/product";
import { featuredProducts } from "@/lib/data/products";

type Props = {
  product: Product;
};

export default function ProductDetail({ product }: Props) {
  const relatedProducts = featuredProducts
    .filter((item) => item.id !== product.id)
    .slice(0, 4);

  return (
    <section>
      {/* Breadcrumb */}
      <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm">
        <Link
          href="/"
          className="text-gray-500 transition-colors hover:text-black"
        >
          Beranda
        </Link>

        <span className="text-gray-400">/</span>

        <Link
          href="/products"
          className="text-gray-500 transition-colors hover:text-black"
        >
          Produk
        </Link>

        <span className="text-gray-400">/</span>

        <span className="font-medium text-gray-900">{product.title}</span>
      </nav>

      <div className="grid gap-16 lg:grid-cols-2">
        {/* Gallery */}
        <ProductGallery product={product} />

        {/* Product Info */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[4px] text-amber-600">
            {product.category}
          </p>

          <h1 className="mt-3 text-5xl font-bold">{product.title}</h1>

          <div className="mt-5 text-lg text-yellow-600">
            ⭐ {product.rating} ({product.reviewCount} Review)
          </div>

          <div className="mt-8 flex items-center gap-4">
            {product.comparePrice && (
              <span className="text-2xl text-neutral-400 line-through">
                Rp {product.comparePrice.toLocaleString("id-ID")}
              </span>
            )}

            <span className="text-4xl font-bold text-amber-700">
              Rp {product.price.toLocaleString("id-ID")}
            </span>
          </div>

          <div className="mt-8 inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            ✓ Stok Ready
          </div>

          <div className="mt-8 space-y-4 text-neutral-700">
            <p>✓ Garansi Produk</p>
            <p>✓ Pengiriman Seluruh Indonesia</p>
            <p>✓ Cocok untuk Rumah, Hotel & Kantor</p>
          </div>

          <Link href="https://wa.me/628123456789" target="_blank">
            <Button className="mt-10 w-full lg:w-auto">
              Konsultasi via WhatsApp
            </Button>
          </Link>

          {/* Description */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold">Deskripsi Produk</h2>

            <p className="mt-5 leading-8 text-neutral-600">
              {product.description}
            </p>
          </section>

          {/* Specification */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">Spesifikasi</h2>

            <div className="mt-6 overflow-hidden rounded-2xl border">
              <table className="w-full">
                <tbody>
                  <tr className="border-b">
                    <td className="bg-neutral-50 p-4 font-semibold">
                      Material
                    </td>

                    <td className="p-4">{product.specifications?.material}</td>
                  </tr>

                  <tr className="border-b">
                    <td className="bg-neutral-50 p-4 font-semibold">Warna</td>

                    <td className="p-4">{product.specifications?.color}</td>
                  </tr>

                  <tr className="border-b">
                    <td className="bg-neutral-50 p-4 font-semibold">
                      Ketebalan
                    </td>

                    <td className="p-4">{product.specifications?.thickness}</td>
                  </tr>

                  <tr>
                    <td className="bg-neutral-50 p-4 font-semibold">Garansi</td>

                    <td className="p-4">{product.specifications?.warranty}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>

      <ProductReview product={product} />

      <ProductGrid
        title="Produk Lainnya"
        products={relatedProducts}
        showViewAll
      />
    </section>
  );
}
