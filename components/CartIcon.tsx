"use client";

import { useCart } from "@/context/CartContext";
import { useState, useEffect, useRef } from "react";

const CartIcon = () => {
  const { totalItems } = useCart();
  const [blink, setBlink] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setBlink(true);
    const timer = setTimeout(() => setBlink(false), 600);
    return () => clearTimeout(timer);
  }, [totalItems]);

  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
        strokeWidth={2}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h11a1 1 0 001-.9l.7-4.1M7 13H5.4M16 17a2 2 0 11-4 0 2 2 0 014 0zm-6 0a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>

      {totalItems > 0 && (
        <span
          className={`absolute -top-2 -right-2 bg-[#2dd4c8] text-[#1f1f1f] text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center transition-transform duration-150 ${
            blink ? "scale-150" : "scale-100"
          }`}
        >
          {totalItems}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
