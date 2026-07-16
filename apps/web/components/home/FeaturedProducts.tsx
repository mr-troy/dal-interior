import ProductCard from "@/components/product/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { featuredProducts } from "@/lib/data/products";

export default function FeaturedProducts() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          subtitle="PRODUK"
          title="Produk Unggulan"
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}