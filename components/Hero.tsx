'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import heroImage from '@/homepage.JPG';

export default function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 900], [0, 180]);
  const titleY = useTransform(scrollY, [0, 700], [0, -120]);

  return (
    <section
      id='home'
      className='relative flex min-h-screen items-end overflow-hidden px-5 pb-12 pt-32 md:px-8 md:pb-16'
    >
      <motion.div
        className='absolute inset-0 bg-[#050607]'
        style={{ y: imageY }}
      >
        <Image
          src={heroImage}
          alt='Εναέρια λήψη ελληνικού τοπίου'
          fill
          priority
          className='object-fill'
          sizes='100vw'
        />
      </motion.div>
      <div className='absolute inset-0 bg-gradient-to-b from-[#050607]/45 via-[#050607]/25 to-[#050607]' />
      <div className='absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050607]/80 to-transparent' />

      <motion.div
        className='relative z-10 mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-[1fr_22rem] md:items-end'
        style={{ y: titleY }}
      >
        <div>
          <motion.p
            className='mb-5 text-sm uppercase tracking-[0.42em] text-[#17d7d0]'
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.05 }}
          >
            Εναέριο portfolio
          </motion.p>
          <motion.h1
            className='max-w-5xl text-balance font-[var(--font-manrope)] text-[clamp(4rem,13vw,13.5rem)] font-extrabold uppercase leading-[0.78] tracking-normal'
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
          >
            Εναέρια Οπτική
          </motion.h1>
        </div>

        <motion.div
          className='max-w-sm border-l border-[#17d7d0] pl-5'
          initial={{ y: 32, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className='mb-7 text-lg leading-7 text-[#f5f2ea]/82'>
            Drone φωτογραφία και cinematic βίντεο από την Ελλάδα
          </p>
          <a
            href='#projects'
            className='inline-flex items-center gap-3 rounded-full bg-[#f5f2ea] px-6 py-3 text-sm font-semibold text-[#061012] transition hover:bg-[#17d7d0]'
          >
            Δες τα έργα μου
            <span aria-hidden='true'>↓</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className='absolute bottom-6 left-1/2 z-10 h-12 w-px overflow-hidden bg-[#f5f2ea]/20'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.span
          className='block h-5 w-px bg-[#17d7d0]'
          animate={{ y: [0, 48] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
