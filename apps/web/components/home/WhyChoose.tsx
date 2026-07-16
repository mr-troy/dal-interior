import {
  ShieldCheck,
  Hammer,
  Truck,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Material Berkualitas",
    desc: "Menggunakan bahan pilihan dengan kualitas premium untuk hasil yang awet.",
  },
  {
    icon: Hammer,
    title: "Pemasangan Profesional",
    desc: "Dikerjakan oleh tim berpengalaman dengan hasil rapi dan presisi.",
  },
  {
    icon: Truck,
    title: "Pengiriman Seluruh Indonesia",
    desc: "Retail maupun proyek besar dapat kami layani ke berbagai daerah.",
  },
  {
    icon: BadgeCheck,
    title: "Garansi Produk",
    desc: "Memberikan garansi sesuai jenis produk dan layanan pemasangan.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-16">

          <p className="text-sm font-semibold uppercase tracking-[6px] text-amber-600">
            KEUNGGULAN
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Mengapa Memilih D'AL Interior?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-500">
            Kami menghadirkan produk premium, pelayanan profesional,
            serta pengalaman lebih dari 20 tahun di bidang interior.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-3xl border border-neutral-200 p-8 transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="mb-6 inline-flex rounded-2xl bg-amber-100 p-4">

                  <Icon
                    size={34}
                    className="text-amber-600"
                  />

                </div>

                <h3 className="mb-4 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="leading-7 text-neutral-500">
                  {item.desc}
                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}