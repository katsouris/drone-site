import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="relative min-h-screen bg-[#f5f2ea] px-5 py-20 text-[#071012] md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[0.55fr_1fr] md:items-center">
        <motion.p
          className="text-xs uppercase tracking-[0.24em] text-[#087c80] md:text-sm md:tracking-[0.36em]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          Μια νέα οπτική
        </motion.p>
        <motion.h2
          className="max-w-full text-balance font-[var(--font-manrope)] text-[clamp(1.75rem,8vw,2.75rem)] font-extrabold leading-[1.02] tracking-normal md:text-[clamp(2.7rem,6vw,7rem)] md:leading-[0.96]"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          Κάθε στιγμή κρύβει μια ιστορία. Ας της δώσουμε χώρο να φανεί, μέσα από εικόνες αληθινές, προσωπικές και κινηματογραφικές.
        </motion.h2>
      </div>
    </section>
  );
}
