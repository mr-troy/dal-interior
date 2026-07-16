import Link from "next/link";

import Button from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}

      <section className="bg-neutral-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[6px] text-amber-500">
            KONTAK
          </p>

          <h1 className="mt-4 text-5xl font-bold text-white">Hubungi Kami</h1>

          <p className="mt-6 max-w-3xl text-lg text-neutral-300">
            Kami siap membantu kebutuhan gorden, roller blind, wallpaper,
            karpet, hospital curtain, hingga berbagai proyek interior lainnya.
          </p>
        </div>
      </section>

      {/* Content */}

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          {/* Left */}

          <div>
            <h2 className="text-3xl font-bold">Informasi Kontak</h2>

            <div className="mt-10 space-y-8">
              <div>
                <h3 className="font-semibold">📍 Alamat</h3>

                <p className="mt-2 text-neutral-600">
                  Jl. Contoh No.123
                  <br />
                  Bandung
                  <br />
                  Jawa Barat
                </p>
              </div>

              <div>
                <h3 className="font-semibold">📞 WhatsApp</h3>

                <Link
                  href="https://wa.me/628123456789"
                  target="_blank"
                  className="mt-2 block text-amber-600 hover:underline"
                >
                  +62 812-3456-789
                </Link>
              </div>

              <div>
                <h3 className="font-semibold">✉ Email</h3>

                <p className="mt-2 text-neutral-600">info@dalinterior.com</p>
              </div>

              <div>
                <h3 className="font-semibold">🕘 Jam Operasional</h3>

                <p className="mt-2 text-neutral-600">
                  Senin - Sabtu
                  <br />
                  08.00 - 17.00 WIB
                </p>
              </div>

              <Link href="https://wa.me/628123456789" target="_blank">
                <Button className="mt-6">Konsultasi via WhatsApp</Button>
              </Link>
            </div>
          </div>

          {/* Right */}

          <div className="overflow-hidden rounded-3xl border border-neutral-200">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps?q=Bandung&output=embed"
              className="h-[500px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
