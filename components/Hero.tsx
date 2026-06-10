"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">

        <div className="container">

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[#D4AF37] uppercase tracking-[6px] mb-5"
          >
            Luxury Real Estate
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl"
          >
            Luxury Living
            <br />
            Smart Investment
            <br />
            <span className="text-[#D4AF37]">
              Divine Vrindavan
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .8 }}
            className="mt-8 max-w-2xl text-lg text-gray-300"
          >
            Premium Plots • Luxury Villas • Apartments •
            Commercial Properties • Investment Opportunities
          </motion.p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/properties"
              className="rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-black hover:scale-105 transition"
            >
              Explore Properties
            </Link>

            <a
              href="https://wa.me/917900780022"
              className="rounded-full border border-white px-8 py-4 hover:bg-white hover:text-black transition"
            >
              WhatsApp
            </a>

            <a
              href="tel:+917900780022"
              className="rounded-full border border-[#D4AF37] px-8 py-4 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition"
            >
              Call Now
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}
