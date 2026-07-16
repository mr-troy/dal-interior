import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  desc: string;
};

export default function ServiceCard({
  title,
  desc,
}: Props) {
  return (
    <div className="group rounded-3xl border bg-white p-8 transition hover:-translate-y-2 hover:shadow-2xl">

      <div className="mb-6 h-40 rounded-2xl bg-neutral-200" />

      <h3 className="text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 text-neutral-500">
        {desc}
      </p>

      <button className="mt-8 flex items-center gap-2 font-semibold text-yellow-600">

        Selengkapnya

        <ArrowRight
          size={18}
          className="transition group-hover:translate-x-1"
        />

      </button>

    </div>
  );
}