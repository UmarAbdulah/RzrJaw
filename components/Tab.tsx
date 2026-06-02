"use client";

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface TabProps {
  children: React.ReactNode;
  setPosition: (pos: { left: number; width: number; opacity: number }) => void;
  to?: string;
}

const Tab = ({ children, setPosition, to }: TabProps) => {
  const ref = useRef<HTMLLIElement>(null);
  const pathname = usePathname();
  const isActive = to ? pathname === to : false;

  const updatePosition = () => {
    if (!ref.current) return;
    const { width } = ref.current.getBoundingClientRect();
    setPosition({
      left: ref.current.offsetLeft,
      width,
      opacity: 1,
    });
  };

  return (
    <li
      ref={ref}
      onClick={updatePosition}
      onMouseEnter={updatePosition}
      className={`relative z-10 block cursor-pointer px-3 py-2 ml-5 text-xs uppercase mix-blend-difference ${
        isActive ? "text-[#a6f8ea]" : "text-white"
      }`}
    >
      {to ? <Link href={to}>{children}</Link> : children}
    </li>
  );
};

export default Tab;
