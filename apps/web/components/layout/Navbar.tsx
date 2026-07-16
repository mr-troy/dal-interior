"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const menus = [
  { title: "Home", href: "/" },
  { title: "Produk", href: "/products" },
  { title: "Project", href: "/projects" },
  { title: "Tentang", href: "/about" },
  { title: "Kontak", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link href="/" className="flex items-center">

          <Image
            src={scrolled ? "/images/logos/logo-dark.png" : "/images/logos/logo-light.jpg"}
            alt="D'AL Interior"
            width={400}
            height={120}
            className="h-20 w-auto"
/>

        </Link>

        {/* Menu */}

        <nav className="hidden gap-10 lg:flex">

          {menus.map((menu) => (

            <Link
              key={menu.title}
              href={menu.href}
              className={`font-medium transition duration-300 hover:text-amber-500 ${
                scrolled ? "text-neutral-800" : "text-white"
              }`}
            >
              {menu.title}
            </Link>

          ))}

        </nav>

        {/* CTA */}

        <Link
          href="https://wa.me/628123456789"
          className={`rounded-full px-6 py-3 font-semibold transition duration-300 ${
            scrolled
              ? "bg-black text-white hover:bg-neutral-800"
              : "bg-amber-500 text-black hover:bg-amber-400"
          }`}
        >
          WhatsApp
        </Link>

      </div>
    </header>
  );
}