import { motion } from "framer-motion";

export default function PageTransition() {
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 z-50 bg-[#17d7d0]"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.25 }}
    />
  );
}
