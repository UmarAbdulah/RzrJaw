"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

const parsePrice = (price: string): number => {
  return parseFloat(price.replace("Rs.", "").replace(/,/g, "").trim());
};

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, subtotal } = useCart();

  return (
    <main className="w-full min-h-screen bg-[#1f1f1f] pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-white font-black uppercase text-4xl tracking-tight">
            Your Cart
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Review your items before proceeding to checkout.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left — Cart Items */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {items.length === 0 ? (
              <div className="border border-[#2f2f2f] p-10 text-center">
                <p className="text-gray-400 text-sm mb-4">
                  Your cart is empty.
                </p>
                <Link href="/store">
                  <button className="border border-[#2dd4c8] text-[#2dd4c8] text-xs font-bold tracking-widest uppercase px-8 py-3 hover:bg-[#2dd4c8] hover:text-[#1f1f1f] transition-all duration-300">
                    Shop Now
                  </button>
                </Link>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center gap-4 bg-[#1a1a1a] border border-[#2f2f2f] p-4"
                >
                  {/* Image */}
                  <div className="relative w-20 h-20 shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-bold text-sm uppercase">
                        {item.product.name}
                      </h3>
                      {item.product.badge && (
                        <span className="bg-yellow-400 text-black text-[9px] font-bold px-2 py-0.5 uppercase">
                          {item.product.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 text-xs mt-1">
                      {item.product.subtitle}
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.product.id, -1)}
                        className="w-7 h-7 border border-[#2f2f2f] text-white text-sm hover:border-[#2dd4c8] hover:text-[#2dd4c8] transition-all duration-300"
                      >
                        −
                      </button>
                      <span className="text-white text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, 1)}
                        className="w-7 h-7 border border-[#2f2f2f] text-white text-sm hover:border-[#2dd4c8] hover:text-[#2dd4c8] transition-all duration-300"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Price + Delete */}
                  <div className="flex flex-col items-end gap-4">
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-gray-500 hover:text-red-400 transition-colors duration-300"
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
                    <span className="text-[#2dd4c8] font-bold text-sm">
                      Rs.{" "}
                      {(
                        parsePrice(item.product.price) * item.quantity
                      ).toLocaleString()}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right — Order Summary */}
          <div className="bg-[#1a1a1a] border border-[#2f2f2f] p-6 h-fit flex flex-col gap-4">
            <h2 className="text-white font-black uppercase tracking-widest text-base">
              Order Summary
            </h2>

            <div className="flex flex-col gap-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">
                  Subtotal ({items.length} items)
                </span>
                <span className="text-white">
                  Rs. {subtotal.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Shipping</span>
                <span className="text-gray-400">Calculated at checkout</span>
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
              <span className="text-[#2dd4c8] font-black text-xl">
                Rs. {subtotal.toLocaleString()}
              </span>
            </div>

            <Link href="/checkout">
              <button className="w-full bg-[#2dd4c8] text-[#1f1f1f] font-bold tracking-widest uppercase text-xs py-4 hover:bg-[#a6f8ea] transition-all duration-300">
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
    </main>
  );
}
