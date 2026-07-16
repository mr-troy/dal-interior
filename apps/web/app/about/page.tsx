export default function AboutPage() {
  return (
    <main>
      {/* Hero */}

      <section className="bg-neutral-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[6px] text-amber-500">
            TENTANG KAMI
          </p>

          <h1 className="mt-4 text-5xl font-bold text-white">D'AL Interior</h1>

          <p className="mt-6 max-w-3xl text-lg text-neutral-300">
            Solusi interior premium untuk hunian, hotel, rumah sakit, kantor,
            apartemen, dan berbagai proyek komersial.
          </p>
        </div>
      </section>

      {/* Content */}

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold">Siapa Kami</h2>

            <p className="mt-8 leading-9 text-neutral-600">
              D'AL Interior adalah perusahaan yang bergerak di bidang penyediaan
              gorden, roller blind, wallpaper, karpet, rel gorden, hingga
              berbagai kebutuhan interior untuk rumah maupun proyek komersial.
              Dengan pengalaman menangani berbagai proyek, kami selalu
              mengutamakan kualitas material, ketelitian pemasangan, serta
              pelayanan terbaik kepada pelanggan.
            </p>
          </div>

          <div className="rounded-3xl bg-neutral-100"></div>
        </div>
      </section>

      {/* Vision */}

      <section className="bg-neutral-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-10 shadow">
            <h3 className="text-3xl font-bold">Visi</h3>

            <p className="mt-6 leading-8 text-neutral-600">
              Menjadi perusahaan interior terpercaya yang memberikan solusi
              berkualitas dengan pelayanan profesional.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow">
            <h3 className="text-3xl font-bold">Misi</h3>

            <ul className="mt-6 space-y-4 text-neutral-600">
              <li>✓ Mengutamakan kualitas produk.</li>

              <li>✓ Memberikan pelayanan terbaik.</li>

              <li>✓ Menyelesaikan proyek tepat waktu.</li>

              <li>✓ Menjaga kepuasan pelanggan.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
