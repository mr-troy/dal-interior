export default function Trust() {
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
      value: "4.9★",
      label: "Rating Pelanggan",
    },
  ];

  return (
    <section className="relative -mt-16 z-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="rounded-[32px] bg-white p-10 shadow-2xl">

          <div className="grid gap-10 md:grid-cols-4">

            {stats.map((item) => (

              <div
                key={item.label}
                className="text-center"
              >

                <h3 className="text-5xl font-bold text-amber-600">
                  {item.value}
                </h3>

                <p className="mt-3 text-neutral-600">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}