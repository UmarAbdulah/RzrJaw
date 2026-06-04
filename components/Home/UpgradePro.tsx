"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const UpgradePro = () => {
  return (
    <section className="w-full bg-[#111111] py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left — Image */}
        <div className="relative w-full aspect-square">
          {/* Animated corner — bottom left */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-[#2dd4c8] z-10"
            animate={{ width: ["0px", "100px", "0px"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[2px] bg-[#2dd4c8] z-10"
            animate={{ height: ["0px", "100px", "0px"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Animated corner — top right */}
          <motion.div
            className="absolute top-0 right-0 h-[2px] bg-[#2dd4c8] z-10"
            animate={{ width: ["0px", "100px", "0px"] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute top-0 right-0 w-[2px] bg-[#2dd4c8] z-10"
            animate={{ height: ["0px", "100px", "0px"] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          <Image
            src="/pro-product.webp"
            alt="RZRJAW Pro Mango"
            fill
            className="object-contain"
          />
        </div>

        {/* Right — Text + Button */}
        <div className="flex flex-col gap-4">
          <h2 className="text-white font-bold uppercase tracking-widest text-base">
            Upgrade to RZRJAW Pro!
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Take your facial aesthetics to the ultimate level with our
            ultra-hard formulations.
          </p>
          <Link href="/store">
            <button className="mt-4 bg-yellow-400 text-black font-bold tracking-widest uppercase px-10 py-4 w-fit hover:bg-yellow-300 hover:scale-105 transition-all duration-500 ease-in-out">
              Upgrade Today
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpgradePro;
