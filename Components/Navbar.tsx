"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">

      <div className="container flex items-center justify-between h-20">

        <h1 className="text-3xl font-bold gold">
          BRAJONE
        </h1>

        <nav className="hidden lg:flex gap-10">

          <Link href="/">Home</Link>

          <Link href="/properties">
            Properties
          </Link>

          <Link href="/projects">
            Projects
          </Link>

          <Link href="/about">
            About
          </Link>

          <Link href="/contact">
            Contact
          </Link>

        </nav>

        <a
          href="https://wa.me/917900780022"
          className="bg-[#D4AF37] text-black px-5 py-3 rounded-full font-semibold"
        >
          WhatsApp
        </a>

      </div>

    </header>
  );
}
