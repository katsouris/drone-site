import { safetyItems } from "@/data/projects";
import { motion } from "framer-motion";

export default function Safety() {
  return (
    <section id="safety" className="min-h-screen bg-[#050607] px-5 py-28 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[1fr_0.8fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-5 text-xs uppercase tracking-[0.24em] text-[#17d7d0] md:text-sm md:tracking-[0.36em]">Πτήση με σεβασμό</p>
          <h2 className="mb-8 font-[var(--font-manrope)] text-[clamp(2.5rem,11vw,3.75rem)] font-extrabold uppercase leading-[0.9] md:text-[clamp(3rem,8vw,8rem)] md:leading-[0.86]">
            Ήρεμα. Καθαρά. Υπεύθυνα.
          </h2>
          <p className="max-w-3xl text-lg leading-8 text-[#f5f2ea]/76 md:text-2xl md:leading-10">
            Η εικόνα έχει αξία όταν δημιουργείται σωστά. Κάθε πτήση γίνεται με προσοχή στον χώρο, στους ανθρώπους και στη στιγμή.
          </p>
        </motion.div>

        <div className="space-y-3">
          {safetyItems.map((item, index) => (
            <motion.div
              key={item}
              className="flex items-center gap-5 border-t border-[#f5f2ea]/14 py-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <span className="text-[#17d7d0]">{String(index + 1).padStart(2, "0")}</span>
              <p className="text-base leading-7 text-[#f5f2ea]/82 md:text-xl">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
