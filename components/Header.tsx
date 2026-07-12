import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Αρχική", href: "#home" },
  { label: "Ιστορίες", href: "#projects" },
  { label: "Αφήγηση", href: "#services" },
  { label: "Πτήση", href: "#safety" },
  { label: "Επικοινωνία", href: "#contact" }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOverLightSection, setIsOverLightSection] = useState(false);

  useEffect(() => {
    const updateHeaderColor = () => {
      const headerPosition = 32;
      const sections = document.querySelectorAll<HTMLElement>("main > section");
      const currentSection = Array.from(sections).find((section) => {
        const bounds = section.getBoundingClientRect();

        return bounds.top <= headerPosition && bounds.bottom > headerPosition;
      });

      setIsOverLightSection(
        currentSection !== undefined && getComputedStyle(currentSection).backgroundColor === "rgb(245, 242, 234)"
      );
    };

    updateHeaderColor();
    window.addEventListener("scroll", updateHeaderColor, { passive: true });
    window.addEventListener("resize", updateHeaderColor);

    return () => {
      window.removeEventListener("scroll", updateHeaderColor);
      window.removeEventListener("resize", updateHeaderColor);
    };
  }, []);

  return (
    <motion.header
      className={`fixed left-0 top-0 z-40 w-full px-5 py-5 text-sm transition-colors md:px-8 ${isOverLightSection ? "text-[#050607]" : "text-[#f5f2ea]"}`}
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, delay: 1 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <a href="#home" className="font-semibold uppercase tracking-[0.28em]">
          Drone Stories
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${isOverLightSection ? "text-[#050607]/72" : "text-[#f5f2ea]/72"} transition hover:text-[#17d7d0]`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className={`hidden rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition hover:border-[#17d7d0] hover:text-[#17d7d0] md:inline-flex ${isOverLightSection ? "border-[#050607]/20" : "border-[#f5f2ea]/20"}`}
        >
          Ιστορία
        </a>
        <button
          className={`mr-3 rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition hover:border-[#17d7d0] hover:text-[#17d7d0] md:hidden ${isOverLightSection ? "border-[#050607]/20" : "border-[#f5f2ea]/20"}`}
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          Μενού
        </button>
      </nav>
      <div
        id="mobile-navigation"
        className={`mx-auto mt-3 max-w-7xl border border-[#f5f2ea]/15 bg-[#050607]/95 p-5 backdrop-blur md:hidden ${isMenuOpen ? "block" : "hidden"}`}
      >
        <div className="grid gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-b border-[#f5f2ea]/10 py-3 text-base text-[#f5f2ea]/82 transition hover:text-[#17d7d0]"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </motion.header>
  );
}
