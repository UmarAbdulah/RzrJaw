import { products } from "@/data/products";
import ProductCard from "@/components/Store/ProductCard";

export default function Store() {
  return (
    <main className="w-full min-h-screen bg-[#1f1f1f] pt-24 pb-16 px-6">
      {/* Heading */}
      <div className="relative w-full flex flex-col items-center justify-center py-20 mb-10 overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#1f1f1f]">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#1f1f1f]/80" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <h1 className="text-white font-black uppercase italic text-5xl md:text-7xl tracking-tight mb-3">
            RZRJAW PAKISTAN
          </h1>
          <p className="text-gray-400 text-sm text-center max-w-md">
            The ultimate collection for facial fitness. Choose your level,
            upgrade your aesthetic.
          </p>
        </div>
      </div>

      {/* Product count + filters */}
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-6">
        <p className="text-gray-500 text-xs uppercase tracking-widest">
          {products.length} Products
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <ProductCard index={product.id} key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
