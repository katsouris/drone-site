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
          <p className="mb-5 text-sm uppercase tracking-[0.36em] text-[#17d7d0]">Ασφάλεια</p>
          <h2 className="mb-8 font-[var(--font-manrope)] text-[clamp(3rem,8vw,8rem)] font-extrabold uppercase leading-[0.86]">
            Πτήση με ευθύνη
          </h2>
          <p className="max-w-3xl text-2xl leading-10 text-[#f5f2ea]/76">
            Οι πτήσεις πραγματοποιούνται με σεβασμό στην ασφάλεια, την ιδιωτικότητα και τους ισχύοντες κανονισμούς.
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
              <p className="text-xl text-[#f5f2ea]/82">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
