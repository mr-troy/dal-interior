import ProductCatalog from "@/components/product/ProductCatalog";

export default function ProductsPage() {
  return (
    <main>
      {/* Hero */}

      <section className="bg-neutral-900 py-24">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="uppercase tracking-[6px] text-sm font-semibold text-amber-500">
            PRODUK
          </p>

          <h1 className="mt-4 text-5xl font-bold text-white">Semua Produk</h1>

          <p className="mt-6 max-w-2xl text-lg text-neutral-300">
            Temukan berbagai pilihan gorden, rel, bracket, roller blind,
            wallpaper dan aksesoris interior berkualitas premium.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <ProductCatalog />
      </section>
    </main>
  );
}
