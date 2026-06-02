"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const introRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      if (introRef.current) {
        introRef.current.style.top = "-100vh";
      }
      setVisible(false);
    }, 300);

    return () => clearTimeout(hideTimer);
  }, []);

  return (
    <div
      ref={introRef}
      className={`fixed top-0 left-0 w-full h-full bg-[#1f1f1f] flex items-center justify-center z-9999 transition-all duration-1000 ease-in-out ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <Image
        src="/logo.avif"
        alt="RzrJaw logo"
        width={120}
        height={120}
        className="absolute"
      />
    </div>
  );
}
