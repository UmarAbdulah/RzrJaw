import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full">
      <Image
        src="/banner.webp"
        alt="The Ultimate Jaw Training Hard Gum"
        width={1920}
        height={200}
        className="w-full object-cover"
      />
    </div>
  );
};

export default Banner;
