import Link from "next/link";

export default function FloatingWhatsApp() {
  return (
    <Link
      href="https://wa.me/628123456789"
      target="_blank"
      aria-label="Hubungi kami melalui WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        gap-3
        rounded-full
        bg-green-500
        px-6
        py-4
        text-white
        shadow-xl
        transition
        hover:bg-green-600
      "
    >
      <span className="text-2xl">💬</span>

      <span className="hidden font-semibold md:block">Konsultasi Gratis</span>
    </Link>
  );
}
