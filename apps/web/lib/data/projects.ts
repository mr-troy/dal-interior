import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,

    slug: "rumah-minimalis-bandung",

    title: "Rumah Minimalis Modern",

    category: "Gorden",

    location: "Bandung",

    client: "Rumah Tinggal",

    completedAt: "Januari 2026",

    duration: "4 Hari",

    products: ["Gorden Blackout Premium", "Rel Premium", "Bracket Super Tebal"],

    thumbnail: "/images/projects/project01.jpg",

    images: [
      "/images/projects/project01.jpg",
      "/images/projects/project02.jpg",
      "/images/projects/project03.jpg",
    ],

    description:
      "Pemasangan gorden blackout premium pada rumah minimalis modern dengan desain elegan dan sistem rel premium.",
  },

  {
    id: 2,

    slug: "hotel-bandung",

    title: "Hotel Bandung",

    category: "Roller Blind",

    location: "Bandung",

    client: "Hotel",

    completedAt: "Februari 2026",

    duration: "7 Hari",

    products: ["Roller Blind Dimout", "Bracket Heavy Duty"],

    thumbnail: "/images/projects/hotel01.jpg",

    images: ["/images/projects/hotel01.jpg", "/images/projects/hotel02.jpg"],

    description:
      "Instalasi roller blind premium untuk meeting room dan kamar hotel dengan hasil rapi dan presisi.",
  },

  {
    id: 3,

    slug: "rumah-sakit-bandung",

    title: "Rumah Sakit",

    category: "Hospital Curtain",

    location: "Bandung",

    client: "Rumah Sakit",

    completedAt: "Maret 2026",

    duration: "5 Hari",

    products: ["Hospital Curtain", "Rel Aluminium"],

    thumbnail: "/images/projects/rs01.jpg",

    images: ["/images/projects/rs01.jpg", "/images/projects/rs02.jpg"],

    description:
      "Pemasangan hospital curtain antibakteri untuk ruang rawat inap dengan standar fasilitas kesehatan.",
  },
];
