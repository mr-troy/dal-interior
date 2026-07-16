export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "Organization",

        "@id": "https://dalinterior.com/#organization",

        name: "D'AL Interior",

        url: "https://dalinterior.com",

        logo: {
          "@type": "ImageObject",
          url: "https://dalinterior.com/images/logo.png",
        },
      },

      {
        "@type": "LocalBusiness",

        "@id": "https://dalinterior.com/#business",

        name: "D'AL Interior",

        image: "https://dalinterior.com/images/og-image.jpg",

        url: "https://dalinterior.com",

        description:
          "D'AL Interior menyediakan gorden premium, blinds, wallpaper, karpet, serta layanan interior untuk rumah, hotel, kantor, dan rumah sakit.",

        priceRange: "$$",

        areaServed: "Bandung dan sekitarnya",

        serviceType: [
          "Gorden Premium",
          "Roller Blind",
          "Vertical Blind",
          "Wallpaper",
          "Karpet",
          "Hospital Curtain",
        ],
      },

      {
        "@type": "WebSite",

        "@id": "https://dalinterior.com/#website",

        url: "https://dalinterior.com",

        name: "D'AL Interior",

        publisher: {
          "@id": "https://dalinterior.com/#organization",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
