"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/Home/HeroSection";
import Banner from "@/components/Home/Banner";
import FlavourSection from "@/components/Home/FlavourSection";
import AlwaysAtGym from "@/components/Home/AlwaysAtGym";
import Picture from "@/components/Home/Picture";
import HowToTrain from "@/components/Home/HowToTrain ";
import UpgradePro from "@/components/Home/UpgradePro";
import FAQSection from "@/components/Home/FAQSection";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <HeroSection />
      <FlavourSection />
      <Banner />
      <AlwaysAtGym />
      <Picture />
      <HowToTrain />
      <UpgradePro />
      <FAQSection />
    </motion.div>
  );
}
