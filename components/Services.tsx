import { services } from "@/data/projects";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="services" className="bg-[#f5f2ea] px-5 py-28 text-[#071012] md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 md:grid-cols-[0.7fr_1fr] md:items-end">
          <h2 className="font-[var(--font-manrope)] text-[clamp(2.5rem,11vw,3.75rem)] font-extrabold uppercase leading-[0.9] md:text-[clamp(3.2rem,8vw,8rem)] md:leading-[0.86]">
            Όσα αξίζει να κρατήσεις
          </h2>
          <p className="max-w-xl text-base leading-7 text-[#071012]/68 md:text-lg md:leading-8">
            Μια ξεχωριστή στιγμή, ένα ταξίδι ή ένας τόπος που αγαπάς μπορεί να γίνει μια ιστορία που θα επιστρέφεις ξανά και ξανά.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden border border-[#071012]/15 bg-[#071012]/15 md:grid-cols-5">
          {services.map((service, index) => (
            <motion.article
              key={service}
              className="group min-h-64 bg-[#f5f2ea] p-6 transition hover:bg-[#071012] hover:text-[#f5f2ea]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
            >
              <span className="mb-12 block text-xs text-[#087c80] group-hover:text-[#17d7d0] md:text-sm">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="break-words text-xl font-semibold leading-tight md:text-2xl">{service}</h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
