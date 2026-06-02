"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Tab from "./Tab";
import Cursor from "./Cursor";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const router = useRouter();
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <div className="mt-3 absolute z-999 w-full flex justify-center">
      <ul
        onClick={() => setPosition((prev) => ({ ...prev, opacity: 1 }))}
        onMouseLeave={() => setPosition({ left: 0, width: 0, opacity: 0 })}
        className="relative mx-auto flex justify-center items-center w-fit rounded-full border-2 border-white bg-[#1f1f1f] p-1 md:px-5 md:py-3 md:text-base"
      >
        <Image
          src="/logo.avif"
          alt="RzrJaw logo"
          height={90}
          width={90}
          className="mt-2 cursor-pointer"
          onClick={() => router.push("/")}
        />
        <Tab to="/" setPosition={setPosition}>
          Home
        </Tab>
        <Tab to="/store" setPosition={setPosition}>
          Store
        </Tab>
        <Tab setPosition={setPosition}>
          <CartIcon />
        </Tab>
        <Cursor position={position} />
      </ul>
    </div>
  );
};

export default Navbar;
