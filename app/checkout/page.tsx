"use client";

import { useState } from "react";
import Image from "next/image";

type PaymentMethod = "credit-card" | "easypaisa" | "jazzcash" | "bank";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("credit-card");
  const [emailUpdates, setEmailUpdates] = useState(false);

  return (
    <main className="w-full min-h-screen bg-[#1f1f1f] pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left — Forms */}
        <div className="flex flex-col gap-6">
          {/* Contact */}
          <div className="bg-[#1a1a1a] border border-[#2f2f2f] p-6">
            <h2 className="text-white font-bold text-lg mb-4">Contact</h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-gray-500 text-xs uppercase tracking-widest">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-[#242424] border border-[#2f2f2f] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#2dd4c8] transition-colors duration-300 placeholder:text-gray-600"
                />
              </div>
              <label className="flex items-center gap-2 text-gray-400 text-xs cursor-pointer">
                <input
                  type="checkbox"
                  checked={emailUpdates}
                  onChange={() => setEmailUpdates(!emailUpdates)}
                  className="accent-[#2dd4c8]"
                />
                Email me with news and offers
              </label>
            </div>
          </div>

          {/* Delivery */}
          <div className="bg-[#1a1a1a] border border-[#2f2f2f] p-6">
            <h2 className="text-white font-bold text-lg mb-4">Delivery</h2>
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-gray-500 text-xs uppercase tracking-widest">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="bg-[#242424] border border-[#2f2f2f] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#2dd4c8] transition-colors duration-300"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-gray-500 text-xs uppercase tracking-widest">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="bg-[#242424] border border-[#2f2f2f] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#2dd4c8] transition-colors duration-300"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-gray-500 text-xs uppercase tracking-widest">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Street address"
                  className="bg-[#242424] border border-[#2f2f2f] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#2dd4c8] transition-colors duration-300 placeholder:text-gray-600"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-gray-500 text-xs uppercase tracking-widest">
                  Apartment, Suite, Etc. (Optional)
                </label>
                <input
                  type="text"
                  className="bg-[#242424] border border-[#2f2f2f] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#2dd4c8] transition-colors duration-300"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-gray-500 text-xs uppercase tracking-widest">
                    City
                  </label>
                  <input
                    type="text"
                    className="bg-[#242424] border border-[#2f2f2f] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#2dd4c8] transition-colors duration-300"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-gray-500 text-xs uppercase tracking-widest">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    className="bg-[#242424] border border-[#2f2f2f] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#2dd4c8] transition-colors duration-300"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-gray-500 text-xs uppercase tracking-widest">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="03XX-XXXXXXX"
                  className="bg-[#242424] border border-[#2f2f2f] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#2dd4c8] transition-colors duration-300 placeholder:text-gray-600"
                />
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="bg-[#1a1a1a] border border-[#2f2f2f] p-6">
            <h2 className="text-white font-bold text-lg mb-1">Payment</h2>
            <p className="text-gray-500 text-xs mb-4">
              All transactions are secure and encrypted.
            </p>

            <div className="flex flex-col gap-3">
              {/* Credit Card */}
              <div
                className={`border p-4 cursor-pointer transition-all duration-300 ${
                  paymentMethod === "credit-card"
                    ? "border-[#2dd4c8] bg-[#242424]"
                    : "border-[#2f2f2f] hover:border-[#2dd4c8]/50"
                }`}
                onClick={() => setPaymentMethod("credit-card")}
              >
                <label className="flex items-center gap-3 cursor-pointer">
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      paymentMethod === "credit-card"
                        ? "border-[#2dd4c8]"
                        : "border-gray-500"
                    }`}
                  >
                    {paymentMethod === "credit-card" && (
                      <div className="w-2 h-2 rounded-full bg-[#2dd4c8]" />
                    )}
                  </div>
                  <span className="text-white text-sm font-bold">
                    Credit Card
                  </span>
                  <span className="ml-auto text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                      />
                    </svg>
                  </span>
                </label>
                {paymentMethod === "credit-card" && (
                  <div className="flex flex-col gap-3 mt-4">
                    <input
                      type="text"
                      placeholder="Card number"
                      className="bg-[#1a1a1a] border border-[#2f2f2f] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#2dd4c8] transition-colors duration-300 placeholder:text-gray-600 w-full"
                    />
                    <input
                      type="text"
                      placeholder="Name on card"
                      className="bg-[#1a1a1a] border border-[#2f2f2f] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#2dd4c8] transition-colors duration-300 placeholder:text-gray-600 w-full"
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Expiration (MM/YY)"
                        className="bg-[#1a1a1a] border border-[#2f2f2f] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#2dd4c8] transition-colors duration-300 placeholder:text-gray-600"
                      />
                      <input
                        type="text"
                        placeholder="Security code"
                        className="bg-[#1a1a1a] border border-[#2f2f2f] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#2dd4c8] transition-colors duration-300 placeholder:text-gray-600"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* EasyPaisa */}
              <div
                className={`border p-4 cursor-pointer transition-all duration-300 ${
                  paymentMethod === "easypaisa"
                    ? "border-[#2dd4c8] bg-[#242424]"
                    : "border-[#2f2f2f] hover:border-[#2dd4c8]/50"
                }`}
                onClick={() => setPaymentMethod("easypaisa")}
              >
                <label className="flex items-center gap-3 cursor-pointer">
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      paymentMethod === "easypaisa"
                        ? "border-[#2dd4c8]"
                        : "border-gray-500"
                    }`}
                  >
                    {paymentMethod === "easypaisa" && (
                      <div className="w-2 h-2 rounded-full bg-[#2dd4c8]" />
                    )}
                  </div>
                  <span className="text-white text-sm font-bold">
                    EasyPaisa
                  </span>
                  <span className="ml-auto text-green-400 text-xs font-bold tracking-widest uppercase">
                    EP
                  </span>
                </label>
                {paymentMethod === "easypaisa" && (
                  <div className="mt-4">
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Send payment to{" "}
                      <span className="text-[#2dd4c8] font-bold">
                        03XX-XXXXXXX
                      </span>{" "}
                      and enter your transaction ID below.
                    </p>
                    <input
                      type="text"
                      placeholder="Transaction ID"
                      className="mt-3 bg-[#1a1a1a] border border-[#2f2f2f] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#2dd4c8] transition-colors duration-300 placeholder:text-gray-600 w-full"
                    />
                  </div>
                )}
              </div>

              {/* JazzCash */}
              <div
                className={`border p-4 cursor-pointer transition-all duration-300 ${
                  paymentMethod === "jazzcash"
                    ? "border-[#2dd4c8] bg-[#242424]"
                    : "border-[#2f2f2f] hover:border-[#2dd4c8]/50"
                }`}
                onClick={() => setPaymentMethod("jazzcash")}
              >
                <label className="flex items-center gap-3 cursor-pointer">
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      paymentMethod === "jazzcash"
                        ? "border-[#2dd4c8]"
                        : "border-gray-500"
                    }`}
                  >
                    {paymentMethod === "jazzcash" && (
                      <div className="w-2 h-2 rounded-full bg-[#2dd4c8]" />
                    )}
                  </div>
                  <span className="text-white text-sm font-bold">JazzCash</span>
                  <span className="ml-auto text-red-400 text-xs font-bold tracking-widest uppercase">
                    JC
                  </span>
                </label>
                {paymentMethod === "jazzcash" && (
                  <div className="mt-4">
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Send payment to{" "}
                      <span className="text-[#2dd4c8] font-bold">
                        03XX-XXXXXXX
                      </span>{" "}
                      and enter your transaction ID below.
                    </p>
                    <input
                      type="text"
                      placeholder="Transaction ID"
                      className="mt-3 bg-[#1a1a1a] border border-[#2f2f2f] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#2dd4c8] transition-colors duration-300 placeholder:text-gray-600 w-full"
                    />
                  </div>
                )}
              </div>

              {/* Bank Deposit */}
              <div
                className={`border p-4 cursor-pointer transition-all duration-300 ${
                  paymentMethod === "bank"
                    ? "border-[#2dd4c8] bg-[#242424]"
                    : "border-[#2f2f2f] hover:border-[#2dd4c8]/50"
                }`}
                onClick={() => setPaymentMethod("bank")}
              >
                <label className="flex items-center gap-3 cursor-pointer">
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      paymentMethod === "bank"
                        ? "border-[#2dd4c8]"
                        : "border-gray-500"
                    }`}
                  >
                    {paymentMethod === "bank" && (
                      <div className="w-2 h-2 rounded-full bg-[#2dd4c8]" />
                    )}
                  </div>
                  <span className="text-white text-sm font-bold">
                    Bank Deposit
                  </span>
                </label>
                {paymentMethod === "bank" && (
                  <p className="text-gray-400 text-xs leading-relaxed mt-3">
                    Use code{" "}
                    <span className="text-[#2dd4c8] font-bold">
                      &apos;Bank&apos;
                    </span>{" "}
                    for a discount. Instructions will be provided after
                    checkout.
                  </p>
                )}
              </div>
            </div>

            {/* Pay Now */}
            <button className="w-full mt-6 bg-[#2dd4c8] text-[#1f1f1f] font-black tracking-widest uppercase py-4 text-sm hover:bg-[#a6f8ea] hover:scale-[1.02] transition-all duration-500 ease-in-out">
              Pay Now
            </button>
          </div>
        </div>

        {/* Right — Order Summary */}
        <div className="flex flex-col gap-4 h-fit">
          <div className="bg-[#1a1a1a] border border-[#2f2f2f] p-6">
            <h2 className="text-white font-bold text-lg mb-4">Order Summary</h2>

            {/* Product */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 shrink-0 border border-[#2f2f2f]">
                <Image
                  src="/mango.png"
                  alt="Product"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-white text-sm font-bold">
                  Mango Ultra Hard 30 Days Pack
                </h3>
                <p className="text-gray-500 text-xs mt-1">Level: Ultra Hard</p>
              </div>
              <span className="text-[#2dd4c8] font-bold text-sm">
                Rs. 5,500
              </span>
            </div>

            {/* Discount code */}
            <div className="flex gap-2 mb-6">
              <input
                type="text"
                placeholder="Discount code (e.g., Bank)"
                className="flex-1 bg-[#242424] border border-[#2f2f2f] text-white text-sm px-4 py-3 focus:outline-none focus:border-[#2dd4c8] transition-colors duration-300 placeholder:text-gray-600"
              />
              <button className="bg-[#2dd4c8] text-[#1f1f1f] font-bold text-xs tracking-widest uppercase px-4 hover:bg-[#a6f8ea] transition-all duration-300">
                Apply
              </button>
            </div>

            {/* Totals */}
            <div className="flex flex-col gap-3 text-sm border-t border-[#2f2f2f] pt-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Subtotal</span>
                <span className="text-white line-through text-gray-500">
                  Rs. 5,500
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Shipping</span>
                <span className="text-[#2dd4c8] text-xs font-bold uppercase tracking-widest">
                  Calculated at next step
                </span>
              </div>
              <div className="flex justify-between items-center border-t border-[#2f2f2f] pt-3 mt-1">
                <span className="text-white font-bold uppercase tracking-widest text-sm">
                  Total
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-xs">PKR</span>
                  <span className="text-white font-black text-xl">
                    Rs. 5,500
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
