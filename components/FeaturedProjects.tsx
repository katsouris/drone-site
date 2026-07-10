import type { PortfolioVideo } from "@/data/projects";
import { motion } from "framer-motion";

type FeaturedProjectsProps = {
  videos: PortfolioVideo[];
};

export default function FeaturedProjects({ videos }: FeaturedProjectsProps) {
  return (
    <section id="projects" className="bg-[#050607] px-5 py-28 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.36em] text-[#17d7d0]">Επιλεγμένες ιστορίες</p>
            <h2 className="font-[var(--font-manrope)] text-[clamp(3rem,8vw,8.5rem)] font-extrabold uppercase leading-[0.86]">
              Στιγμές από ψηλά
            </h2>
          </div>
          <p className="max-w-md text-lg leading-8 text-[#f5f2ea]/66">
            Κάθε πτήση είναι μια μικρή σκηνή: φως, κίνηση και απόσταση που δίνουν χώρο στην ιστορία σου.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {videos.map((video, index) => (
            <motion.article
              key={video.title}
              className="group relative min-h-[34rem] overflow-hidden bg-[#0f1719]"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.24 }}
              transition={{ duration: 0.7, delay: index * 0.06 }}
            >
              <video
                src={video.src}
                poster={video.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={`Εναέρια ιστορία ${video.title}`}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050607] via-[#050607]/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <div className="mb-5 flex items-center justify-between text-sm text-[#f5f2ea]/66">
                  <span>{video.number}</span>
                  <span>{video.location}</span>
                </div>
                <h3 className="mb-3 font-[var(--font-manrope)] text-4xl font-extrabold uppercase md:text-6xl">{video.title}</h3>
                <p className="max-w-xl text-base leading-7 text-[#f5f2ea]/74">{video.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
