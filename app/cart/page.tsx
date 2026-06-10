"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const parsePrice = (price: string): number => {
  return parseFloat(price.replace("Rs.", "").replace(/,/g, "").trim());
};

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, subtotal } = useCart();

  return (
    <main className="w-full min-h-screen bg-[#1f1f1f] pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-10 border-b border-[#2f2f2f] pb-6">
          <h1 className="text-white font-black uppercase text-5xl tracking-tight">
            Your Cart
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Review your items before proceeding to checkout.
          </p>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="#2f2f2f"
              className="w-24 h-24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h11a1 1 0 001-.9l.7-4.1M7 13H5.4M16 17a2 2 0 11-4 0 2 2 0 014 0zm-6 0a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <p className="text-gray-500 text-sm uppercase tracking-widest">
              Your cart is empty
            </p>
            <Link href="/store">
              <button className="border border-[#2dd4c8] text-[#2dd4c8] text-xs font-bold tracking-widest uppercase px-10 py-4 hover:bg-[#2dd4c8] hover:text-[#1f1f1f] transition-all duration-300">
                Shop Now
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left — Cart Items */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {/* Column headers */}
              <div className="hidden md:grid grid-cols-12 text-gray-500 text-xs uppercase tracking-widest pb-2 border-b border-[#2f2f2f]">
                <span className="col-span-6">Product</span>
                <span className="col-span-3 text-center">Quantity</span>
                <span className="col-span-3 text-right">Total</span>
              </div>

              {items.map((item, index) => (
                <motion.div
                  key={item.product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="grid grid-cols-12 items-center gap-4 bg-[#1a1a1a] border border-[#2f2f2f] hover:border-[#2dd4c8]/40 p-4 transition-all duration-300"
                >
                  {/* Product — col 6 */}
                  <div className="col-span-12 md:col-span-6 flex items-center gap-4">
                    <div className="relative w-20 h-20 shrink-0 border border-[#2f2f2f]">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-white font-bold text-sm uppercase">
                          {item.product.name}
                        </h3>
                        {item.product.badge && (
                          <span className="bg-yellow-400 text-black text-[9px] font-bold px-2 py-0.5 uppercase">
                            {item.product.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-500 text-xs">
                        {item.product.subtitle}
                      </p>
                      <p className="text-[#2dd4c8] text-xs font-bold">
                        {item.product.price}
                      </p>
                    </div>
                  </div>

                  {/* Quantity — col 3 */}
                  <div className="col-span-8 md:col-span-3 flex items-center justify-start md:justify-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.product.id, -1)}
                      className="w-8 h-8 border border-[#2f2f2f] text-white text-sm hover:border-[#2dd4c8] hover:text-[#2dd4c8] transition-all duration-300 flex items-center justify-center"
                    >
                      −
                    </button>
                    <span className="text-white text-sm w-4 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product.id, 1)}
                      className="w-8 h-8 border border-[#2f2f2f] text-white text-sm hover:border-[#2dd4c8] hover:text-[#2dd4c8] transition-all duration-300 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>

                  {/* Total + Delete — col 3 */}
                  <div className="col-span-4 md:col-span-3 flex items-center justify-end gap-4">
                    <span className="text-[#2dd4c8] font-black text-sm">
                      Rs.{" "}
                      {(
                        parsePrice(item.product.price) * item.quantity
                      ).toLocaleString()}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-gray-600 hover:text-red-400 transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              ))}

              {/* Continue shopping */}
              <Link href="/store" className="w-fit">
                <button className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-widest hover:text-[#2dd4c8] transition-colors duration-300 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    />
                  </svg>
                  Continue Shopping
                </button>
              </Link>
            </div>

            {/* Right — Order Summary */}
            <div className="flex flex-col gap-4 h-fit sticky top-28">
              <div className="bg-[#1a1a1a] border border-[#2f2f2f] p-6 flex flex-col gap-5">
                <h2 className="text-white font-black uppercase tracking-widest text-base border-b border-[#2f2f2f] pb-4">
                  Order Summary
                </h2>

                {/* Item breakdown */}
                <div className="flex flex-col gap-2">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex justify-between text-xs"
                    >
                      <span className="text-gray-400">
                        {item.product.name} × {item.quantity}
                      </span>
                      <span className="text-white">
                        Rs.{" "}
                        {(
                          parsePrice(item.product.price) * item.quantity
                        ).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3 text-sm border-t border-[#2f2f2f] pt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="text-white">
                      Rs. {subtotal.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Shipping</span>
                    <span className="text-[#2dd4c8] text-xs">
                      Calculated at checkout
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Taxes</span>
                    <span className="text-white">Rs. 0</span>
                  </div>
                </div>

                <div className="border-t border-[#2f2f2f] pt-4 flex justify-between items-center">
                  <span className="text-white font-bold uppercase tracking-widest text-sm">
                    Total
                  </span>
                  <span className="text-[#2dd4c8] font-black text-2xl">
                    Rs. {subtotal.toLocaleString()}
                  </span>
                </div>

                <Link href="/checkout">
                  <button className="w-full bg-[#2dd4c8] text-[#1f1f1f] font-black tracking-widest uppercase text-xs py-4 hover:bg-[#a6f8ea] hover:scale-[1.02] transition-all duration-500 ease-in-out">
                    Proceed to Checkout →
                  </button>
                </Link>

                <div className="flex items-center justify-center gap-2 text-gray-500 text-xs">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>
                  Secure Checkout
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
