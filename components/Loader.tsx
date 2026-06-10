"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 1 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      <div className="text-center">

        <motion.h1
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-black tracking-widest text-[#D4AF37]"
        >
          BRAJONE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-5 text-gray-400 tracking-[8px]"
        >
          LUXURY REAL ESTATE
        </motion.p>

      </div>
    </motion.div>
  );
}
