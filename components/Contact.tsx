"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#f5f2ea] px-5 py-28 text-[#071012] md:px-8">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[1fr_0.72fr]">
        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.36em] text-[#087c80]">Επικοινωνία</p>
          <motion.h2
            className="mb-8 font-[var(--font-manrope)] text-[clamp(3.4rem,9vw,10rem)] font-extrabold uppercase leading-[0.82]"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8 }}
          >
            Πάμε ψηλά;
          </motion.h2>
          <div className="space-y-3 text-xl">
            <a className="block transition hover:text-[#087c80]" href="mailto:hello@example.com">
              hello@example.com
            </a>
            <a className="block transition hover:text-[#087c80]" href="https://instagram.com/" target="_blank" rel="noreferrer">
              @aerial.optiki
            </a>
          </div>
        </div>

        <form className="space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#071012]/60">Όνομα</span>
            <input className="w-full border border-[#071012]/18 bg-transparent px-4 py-4 outline-none transition focus:border-[#087c80]" name="name" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#071012]/60">Email</span>
            <input className="w-full border border-[#071012]/18 bg-transparent px-4 py-4 outline-none transition focus:border-[#087c80]" type="email" name="email" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm uppercase tracking-[0.2em] text-[#071012]/60">Μήνυμα</span>
            <textarea className="min-h-36 w-full resize-y border border-[#071012]/18 bg-transparent px-4 py-4 outline-none transition focus:border-[#087c80]" name="message" />
          </label>
          <button className="w-full bg-[#071012] px-6 py-4 font-semibold text-[#f5f2ea] transition hover:bg-[#087c80]" type="submit">
            Στείλε μήνυμα
          </button>
        </form>
      </div>
    </section>
  );
}
