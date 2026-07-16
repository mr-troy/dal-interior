import ProjectGrid from "@/components/project/ProjectGrid";
import { projects } from "@/lib/data/projects";

export default function ProjectsPage() {
  return (
    <main>
      <section className="bg-neutral-900 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[6px] text-amber-500">
            PROJECT
          </p>

          <h1 className="mt-4 text-5xl font-bold text-white">
            Hasil Pekerjaan Kami
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-neutral-300">
            D'AL Interior telah mengerjakan berbagai proyek rumah, hotel,
            kantor, rumah sakit, apartemen, masjid, hingga ruang komersial
            dengan kualitas pemasangan yang rapi dan material premium.
          </p>
        </div>
      </section>

      <ProjectGrid projects={projects} />
    </main>
  );
}
