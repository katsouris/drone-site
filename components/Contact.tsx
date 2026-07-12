import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#f5f2ea] px-5 py-28 text-[#071012] md:px-8">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[1fr_0.72fr]">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.24em] text-[#087c80] md:text-sm md:tracking-[0.36em]">Η δική σου στιγμή</p>
          <motion.h2
            className="mb-8 font-[var(--font-manrope)] text-[clamp(2.75rem,12vw,4rem)] font-extrabold uppercase leading-[0.86] md:text-[clamp(3.4rem,9vw,10rem)] md:leading-[0.82]"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8 }}
          >
            Πες μου την ιστορία σου
          </motion.h2>
          <div className="space-y-3 text-lg md:text-xl">
            <a className="block break-all transition hover:text-[#087c80]" href="mailto:katsourisdimi@gmail.com">
              katsourisdimi@gmail.com
            </a>
            <a className="block transition hover:text-[#087c80]" href="https://www.instagram.com/dimitriskatsouris/" target="_blank" rel="noreferrer">
              @dimitriskatsouris
            </a>
          </div>
        </div>

        <form className="space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#071012]/60">Όνομα</span>
            <input className="w-full border border-[#071012]/18 bg-transparent px-4 py-4 text-base outline-none transition focus:border-[#087c80]" name="name" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#071012]/60">Email</span>
            <input className="w-full border border-[#071012]/18 bg-transparent px-4 py-4 text-base outline-none transition focus:border-[#087c80]" type="email" name="email" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#071012]/60">Η ιστορία σου</span>
            <textarea className="min-h-36 w-full resize-y border border-[#071012]/18 bg-transparent px-4 py-4 text-base outline-none transition focus:border-[#087c80]" name="message" />
          </label>
          <button className="w-full bg-[#071012] px-6 py-4 font-semibold text-[#f5f2ea] transition hover:bg-[#087c80]" type="submit">
            Ας τη δημιουργήσουμε μαζί
          </button>
        </form>
      </div>
    </section>
  );
}
