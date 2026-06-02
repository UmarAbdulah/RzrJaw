"use client";
import { motion } from "framer-motion";

export default function Store() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      Store
    </motion.div>
  );
}
