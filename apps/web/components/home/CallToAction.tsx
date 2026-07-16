import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Konsultasi Gratis",
  "Survey Lokasi",
  "Penawaran Harga Cepat",
  "Pemasangan Profesional",
];

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-neutral-900 py-24">

      {/* Background Glow */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        <div className="rounded-[40px] border border-white/10 bg-white/5 p-12 backdrop-blur">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[6px] text-amber-400">
                GRATIS KONSULTASI
              </p>

              <h2 className="mt-4 text-5xl font-bold text-white">
                Siap Mempercantik Interior Anda?
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-300">
                Tim D'AL Interior siap membantu Anda mulai dari
                konsultasi, pemilihan produk, survey lokasi,
                hingga pemasangan profesional.
              </p>

            </div>

            <div>

              <div className="space-y-5">

                {benefits.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-xl bg-white/5 p-4"
                  >

                    <CheckCircle2
                      className="text-amber-400"
                      size={24}
                    />

                    <span className="text-white">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

              <Link
                href="https://wa.me/628123456789"
                className="mt-10 inline-flex rounded-full bg-amber-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-amber-400"
              >
                Konsultasi via WhatsApp
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}