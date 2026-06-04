"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  "10X STRONGER than regular gum",
  "40+ Facial muscles trained",
  "Sugar Free",
  "Vegan",
];

const AlwaysAtGym = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section className="w-full bg-[#1a1a1a] py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-5" ref={ref}>
          <h2 className="text-white font-bold uppercase tracking-widest text-lg">
            Always Be At The Gym
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            RZRJAW is designed to be just like a regular gum but 10x Tougher. So
            you can use it anywhere without being noticed unlike other jawline
            trainers.
          </p>

          {/* Feature list */}
          <ul className="flex flex-col gap-3">
            {features.map((feature, index) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                }
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                className="flex items-center gap-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="#2dd4c8"
                  className="w-5 h-5 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-white font-mono text-sm">{feature}</span>
              </motion.li>
            ))}
          </ul>

          {/* Button */}
          <Link href="/store">
            <button className="mt-4 border border-[#2dd4c8] text-[#2dd4c8] tracking-widest uppercase text-xs px-8 py-4 w-fit hover:bg-[#2dd4c8] hover:text-[#1f1f1f] transition-all duration-500 ease-in-out hover:scale-105">
              Try It Today
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full aspect-square bg-[#242424] border border-[#2f2f2f] relative">
          <Image
            src="/gym-section.png"
            alt="Always at the gym"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AlwaysAtGym;
