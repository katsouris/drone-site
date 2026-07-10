import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="relative min-h-screen bg-[#f5f2ea] px-5 py-28 text-[#071012] md:px-8">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[0.55fr_1fr] md:items-center">
        <motion.p
          className="text-sm uppercase tracking-[0.36em] text-[#087c80]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          Από άλλη γωνία
        </motion.p>
        <motion.h2
          className="text-balance font-[var(--font-manrope)] text-[clamp(2.7rem,6vw,7rem)] font-extrabold leading-[0.96] tracking-normal"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          Κάθε τοπίο έχει μια ιστορία. Ας τη φτιάξουμε από ψηλά, με εικόνες καθαρές, προσωπικές και κινηματογραφικές.
        </motion.h2>
      </div>
    </section>
  );
}
