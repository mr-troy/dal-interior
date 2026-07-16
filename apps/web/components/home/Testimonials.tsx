"use client";

import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    company: "Hotel Bandung",
    message:
      "Pelayanan sangat profesional. Hasil pemasangan gorden hotel sangat rapi dan sesuai jadwal.",
  },
  {
    name: "Siti Rahma",
    company: "Rumah Tinggal",
    message:
      "Kualitas produknya premium. Tim pemasangan ramah dan hasilnya sangat memuaskan.",
  },
  {
    name: "Andi Wijaya",
    company: "Perkantoran",
    message:
      "Sudah beberapa kali bekerja sama dengan D'AL Interior. Selalu puas dengan kualitas dan pelayanannya.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const item = testimonials[active];

  return (
    <section className="bg-neutral-50 py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">

        <p className="text-sm font-semibold uppercase tracking-[6px] text-amber-600">
          TESTIMONI
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Apa Kata Pelanggan Kami
        </h2>

        <div className="mt-14 rounded-[36px] bg-white p-12 shadow-xl">

          <Quote
            size={48}
            className="mx-auto text-amber-500"
          />

          <div className="mt-6 flex justify-center gap-1">

            {[...Array(5)].map((_, index) => (

              <Star
                key={index}
                size={20}
                fill="#F59E0B"
                color="#F59E0B"
              />

            ))}

          </div>

          <p className="mt-8 text-xl leading-9 text-neutral-600 italic">
            "{item.message}"
          </p>

          <div className="mt-10">

            <h3 className="text-xl font-bold">
              {item.name}
            </h3>

            <p className="mt-2 text-neutral-500">
              {item.company}
            </p>

          </div>

          <div className="mt-10 flex justify-center gap-3">

            {testimonials.map((_, index) => (

              <button
                key={index}
                onClick={() => setActive(index)}
                className={`h-3 w-3 rounded-full transition ${
                  active === index
                    ? "bg-amber-500"
                    : "bg-neutral-300"
                }`}
              />

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}