"use client";

import { motion } from "framer-motion";

const Cursor = ({
  position,
}: {
  position: { left: number; width: number; opacity: number };
}) => {
  return (
    <motion.li
      animate={position}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      style={{
        position: "absolute",
        zIndex: 0,
        top: "50%",
        translateY: "-50%",
        height: "28px",
        borderRadius: "9999px",
        backgroundColor: "#a6f8ea",
      }}
    />
  );
};

export default Cursor;
