import Image from "next/image";

const Picture = () => {
  return (
    <div className="relative w-full h-[600px]">
      <Image
        src="/banner2.webp"
        alt="The Sweat-Proof Workout For Your Jaw"
        fill
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text */}
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <h2 className="text-white font-black uppercase italic text-4xl md:text-6xl tracking-tight leading-tight text-center">
          THE <span className="text-[#2dd4c8]">SWEAT-PROOF</span>
        </h2>
        <h2 className="text-white font-black uppercase italic text-4xl md:text-6xl tracking-tight leading-tight text-center">
          WORKOUT FOR YOUR JAW.
        </h2>
      </div>
    </div>
  );
};

export default Picture;
