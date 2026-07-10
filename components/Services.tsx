import { services } from "@/data/projects";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="services" className="bg-[#f5f2ea] px-5 py-28 text-[#071012] md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 md:grid-cols-[0.7fr_1fr] md:items-end">
          <h2 className="font-[var(--font-manrope)] text-[clamp(3.2rem,8vw,8rem)] font-extrabold uppercase leading-[0.86]">
            Υπηρεσίες
          </h2>
          <p className="max-w-xl text-lg leading-8 text-[#071012]/68">
            Από μεμονωμένες λήψεις μέχρι ολοκληρωμένα μικρά films, το υλικό οργανώνεται για χρήση σε web, social, τουριστική προβολή και παρουσίαση ακινήτων.
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
              <span className="mb-12 block text-sm text-[#087c80] group-hover:text-[#17d7d0]">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="text-2xl font-semibold leading-tight">{service}</h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
