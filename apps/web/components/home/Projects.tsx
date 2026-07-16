import Image from "next/image";

const projects = [
  {
    title: "Rumah Minimalis Modern",
    category: "Residential",
    image: "/images/projects/living-room.jpg",
  },
  {
    title: "Hotel Premium",
    category: "Hospitality",
    image: "/images/projects/hotel.jpg",
  },
  {
    title: "Perkantoran",
    category: "Office",
    image: "/images/projects/office.jpg",
  },
  {
    title: "Rumah Sakit",
    category: "Healthcare",
    image: "/images/projects/hospital.jpg",
  },
  {
    title: "Masjid",
    category: "Religious",
    image: "/images/projects/masjid.jpg",
  },
];

export default function Projects() {
  return (
    <section className="py-28 bg-neutral-50">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="tracking-[6px] uppercase text-amber-600 text-sm font-semibold">
            PORTFOLIO
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Project Kami
          </h2>

          <p className="mt-6 text-neutral-500 max-w-2xl mx-auto">
            Berbagai proyek interior yang telah kami kerjakan untuk
            rumah tinggal, hotel, kantor, rumah sakit hingga masjid.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (

            <div
              key={project.title}
              className="group overflow-hidden rounded-[28px] bg-white shadow-lg"
            >

              <div className="relative aspect-[4/3] overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-7">

                <p className="text-sm uppercase tracking-widest text-amber-600">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                  {project.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}