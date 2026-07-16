import Image from "next/image";
import Link from "next/link";

const stats = [
  {
    value: "20+",
    label: "Tahun Pengalaman",
  },
  {
    value: "5.000+",
    label: "Project Selesai",
  },
  {
    value: "50.000+",
    label: "Produk Terjual",
  },
  {
    value: "100%",
    label: "Garansi Kepuasan",
  },
];

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[850px] overflow-hidden">
      {/* Background */}
      <Image
        src="/images/hero/hero.jpg"
        alt="D'AL Interior"
        fill
        priority
        className="object-cover object-center scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 pt-20">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[6px] text-amber-400">
            Premium Interior Solution
          </p>

          <h1 className="text-5xl font-black leading-tight tracking-tight text-white md:text-6xl xl:text-7xl">
            Elegan
            <br />
            dalam Setiap
            <br />
            Lipatan
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-neutral-200">
            Solusi lengkap untuk gorden, roller blind, wallpaper, hospital
            curtain, rel gorden, serta berbagai kebutuhan interior premium untuk
            rumah, kantor, hotel, rumah sakit, dan berbagai proyek di Bandung.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              href="/products"
              className="rounded-full bg-amber-500 px-8 py-4 font-semibold text-black shadow-xl transition-all duration-300 hover:scale-105 hover:bg-amber-400"
            >
              Lihat Produk
            </Link>

            <Link
              href="https://wa.me/628123456789"
              className="rounded-full border border-white bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black"
            >
              Konsultasi WhatsApp
            </Link>
          </div>

          {/* Statistics */}

          <div className="mt-20 grid grid-cols-2 gap-5 md:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md"
              >
                <h3 className="text-3xl font-bold text-white">{item.value}</h3>

                <p className="mt-2 text-sm text-neutral-200">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce">
        <div className="flex h-12 w-7 items-start justify-center rounded-full border border-white">
          <div className="mt-2 h-3 w-1 rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
}
