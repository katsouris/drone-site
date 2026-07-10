import { motion } from "framer-motion";

const navItems = [
  { label: "Αρχική", href: "#home" },
  { label: "Έργα", href: "#projects" },
  { label: "Υπηρεσίες", href: "#services" },
  { label: "Ασφάλεια", href: "#safety" },
  { label: "Επικοινωνία", href: "#contact" }
];

export default function Header() {
  return (
    <motion.header
      className="fixed left-0 top-0 z-40 w-full px-5 py-5 text-sm text-[#f5f2ea] md:px-8"
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, delay: 1 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <a href="#home" className="font-semibold uppercase tracking-[0.28em]">
          Εναέρια Οπτική
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-[#f5f2ea]/72 transition hover:text-[#17d7d0]">
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full border border-[#f5f2ea]/20 px-4 py-2 text-xs uppercase tracking-[0.2em] transition hover:border-[#17d7d0] hover:text-[#17d7d0]"
        >
          Πτήση
        </a>
      </nav>
    </motion.header>
  );
}
