import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

const FlavourSection = () => {
  return (
    <section className="w-full bg-[#1a1a1a] py-16 px-6">
      {/* Heading */}
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-white font-bold tracking-widest uppercase text-lg mb-3">
          Choose Your Flavour
        </h2>
        <div className="w-16 h-[3px] bg-[#2dd4c8]" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-[#242424] border border-[#2f2f2f] p-6 flex flex-col"
          >
            {/* Sale badge */}
            <span className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 uppercase z-10">
              Sale
            </span>

            {/* Image */}
            <div className="relative w-full aspect-square mb-6">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Level */}
            <p className="text-[#2dd4c8] text-xs font-mono mb-1">
              {product.level}
            </p>

            {/* Name */}
            <h3 className="text-white font-bold text-lg mb-3">
              {product.name}
            </h3>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[#2dd4c8] font-bold text-sm">
                {product.prefix}
                {product.price}
              </span>
              <span className="text-gray-500 line-through text-sm">
                {product.originalPrice}
              </span>
            </div>

            {/* Button */}
            <Link href="/store">
              <button className="w-full border border-[#2dd4c8] text-[#2dd4c8] tracking-widest uppercase text-xs py-4 hover:bg-[#2dd4c8] hover:text-[#1f1f1f] transition-all duration-500 ease-in-out hover:scale-[1.02]">
                Choose Options
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlavourSection;
