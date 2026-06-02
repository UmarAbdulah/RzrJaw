"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[70vh] flex items-center justify-center "
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1f1f1f]/80" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center px-4"
      >
        <p className="text-white font-bold text-lg md:text-xl tracking-widest uppercase mb-1">
          Pakistan&apos;s 1st
        </p>
        <h1 className="text-[#2dd4c8] font-bold text-2xl md:text-4xl tracking-widest uppercase mb-6">
          Jawline Revolution
        </h1>
        <p className="text-gray-400 text-sm md:text-base max-w-lg mb-10">
          Ultra-tough, simple, effective, convenient, long-lasting jaw training
          hard gum.
        </p>
        <Link href="/store">
          <button className="bg-[#2dd4c8] text-[#1f1f1f] font-bold tracking-widest uppercase px-10 py-5 text-sm hover:bg-[#a6f8ea] hover:cursor-pointer transition-all duration-500 ease-in-out hover:scale-105">
            Order Yours Today
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;
