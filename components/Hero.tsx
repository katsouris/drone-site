import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage800 from '@/images/optimized/homepage-800.webp';
import heroImage1280 from '@/images/optimized/homepage-1280.webp';
import heroImage1920 from '@/images/optimized/homepage-1920.webp';

export default function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 900], [0, 180]);
  const titleY = useTransform(scrollY, [0, 700], [0, -120]);

  return (
    <section
      id='home'
      className='relative flex min-h-screen items-end overflow-hidden bg-[#020405] px-5 pb-12 pt-32 md:px-8 md:pb-16'
    >
      <motion.div
        className='absolute inset-0 bg-[#050607]'
        style={{ y: imageY }}
      >
        <img
          src={heroImage1920}
          srcSet={`${heroImage800} 800w, ${heroImage1280} 1280w, ${heroImage1920} 1920w`}
          sizes='100vw'
          alt='Εναέρια λήψη τοπίου με κινηματογραφική αίσθηση'
          className='h-full w-full object-cover'
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
            className='mb-5 text-xs uppercase tracking-[0.28em] text-[#17d7d0] md:text-sm md:tracking-[0.42em]'
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.05 }}
          >
            Ιστορίες από ψηλά
          </motion.p>
          <motion.h1
            className='max-w-5xl text-balance font-[var(--font-manrope)] text-[clamp(2.75rem,12vw,4.25rem)] font-extrabold uppercase leading-[0.84] tracking-normal md:text-[clamp(3.2rem,9vw,9.8rem)] md:leading-[0.78]'
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
          >
            Φτιάξε τη δική σου ιστορία
          </motion.h1>
        </div>

        <motion.div
          className='max-w-sm border-l border-[#17d7d0] pl-5'
          initial={{ y: 32, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className='mb-7 text-base leading-7 text-[#f5f2ea]/82 md:text-lg'>
            Κράτησε τη στιγμή ζωντανή, μέσα από εικόνες που αφηγούνται όσα ένιωσες.
          </p>
          <a
            href='#projects'
            className='inline-flex items-center gap-3 rounded-full bg-[#d8d2c4] px-6 py-3 text-sm font-semibold text-[#061012] transition hover:bg-[#17d7d0]'
          >
            Ανακάλυψε τις ιστορίες
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
