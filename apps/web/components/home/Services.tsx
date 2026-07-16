import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";

export default function Services() {
  return (
    <section className="bg-neutral-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="LAYANAN"
          title="Produk & Layanan Kami"
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          <ServiceCard
            title="Gorden Premium"
            desc="Custom gorden untuk rumah, hotel, apartemen, dan kantor."
          />

          <ServiceCard
            title="Blinds"
            desc="Roller Blind, Vertical Blind, Venetian Blind, Roman Shade."
          />

          <ServiceCard
            title="Wallpaper"
            desc="Wallpaper premium dengan berbagai motif modern."
          />

          <ServiceCard
            title="Karpet"
            desc="Karpet permadani dan karpet sejadah masjid."
          />

        </div>

      </div>

    </section>
  );
}