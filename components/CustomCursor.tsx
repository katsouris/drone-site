"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [isInteractive, setIsInteractive] = useState(false);
  const cursorX = useMotionValue(-80);
  const cursorY = useMotionValue(-80);
  const smoothX = useSpring(cursorX, { stiffness: 420, damping: 34 });
  const smoothY = useSpring(cursorY, { stiffness: 420, damping: 34 });

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      cursorX.set(event.clientX - 14);
      cursorY.set(event.clientY - 14);
      const target = event.target;

      if (target instanceof Element) {
        setIsInteractive(Boolean(target.closest("a, button, input, textarea")));
      }
    };

    window.addEventListener("pointermove", onPointerMove);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-7 w-7 rounded-full border border-[#17d7d0] mix-blend-difference md:block"
      style={{ x: smoothX, y: smoothY }}
      animate={{ scale: isInteractive ? 2.4 : 1, opacity: isInteractive ? 0.55 : 1 }}
      transition={{ duration: 0.2 }}
    />
  );
}
