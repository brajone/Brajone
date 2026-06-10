"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/917900780022"
        target="_blank"
        className="fixed bottom-6 right-5 z-50 h-16 w-16 rounded-full bg-green-500 shadow-2xl flex items-center justify-center hover:scale-110 transition-all"
      >
        <MessageCircle size={30} color="white" />
      </a>

      {/* Call */}
      <a
        href="tel:+917900780022"
        className="fixed bottom-24 right-5 z-50 h-16 w-16 rounded-full bg-[#D4AF37] shadow-2xl flex items-center justify-center hover:scale-110 transition-all"
      >
        <Phone size={28} color="black" />
      </a>
    </>
  );
}
