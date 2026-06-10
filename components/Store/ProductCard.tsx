"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Product } from "@/types/products";
import { useCart } from "@/context/CartContext";

const ProductCard = ({
  product,
  index,
}: {
  product: Product;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const { addToCart } = useCart();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group relative bg-[#1a1a1a] border border-[#2f2f2f] hover:border-[#2dd4c8] hover:shadow-[0_0_20px_rgba(45,212,200,0.2)] flex flex-col transition-all duration-500"
    >
      {/* Badges */}
      <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
        {product.badge && (
          <span
            className={`${product.badgeColor} text-black text-[10px] font-bold px-2 py-0.5 uppercase`}
          >
            {product.badge}
          </span>
        )}
        {product.level && (
          <span className="bg-[#1a1a1a] border border-[#2f2f2f] text-[10px] font-bold px-2 py-0.5 uppercase text-gray-400">
            {product.level}
          </span>
        )}
      </div>

      {/* Image */}
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-white font-bold text-sm">{product.name}</h3>
        {product.subtitle && (
          <p className="text-gray-500 text-xs">{product.subtitle}</p>
        )}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[#2dd4c8] font-bold text-sm">
            {product.price}
          </span>
          <span className="text-gray-500 line-through text-xs">
            {product.originalPrice}
          </span>
        </div>

        {/* Button */}
        <button
          onClick={() => addToCart(product)}
          className="mt-3 w-full text-xs font-bold tracking-widest uppercase py-3 transition-all duration-300 border border-[#2dd4c8] text-[#2dd4c8] hover:bg-[#2dd4c8] hover:text-[#1f1f1f]"
        >
          ADD TO CART
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
