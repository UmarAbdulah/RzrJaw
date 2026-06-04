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
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FadeIn>
        <FlavourSection />
      </FadeIn>
      <FadeIn>
        <Banner />
      </FadeIn>
      <FadeIn>
        <AlwaysAtGym />
      </FadeIn>
      <FadeIn>
        <Picture />
      </FadeIn>
      <FadeIn>
        <HowToTrain />
      </FadeIn>
      <FadeIn>
        <UpgradePro />
      </FadeIn>
      <FadeIn>
        <FAQSection />
      </FadeIn>
    </main>
  );
}
