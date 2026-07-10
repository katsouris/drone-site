import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="bg-[#050607] px-5 py-28 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.36em] text-[#17d7d0]">Επιλεγμένα έργα</p>
            <h2 className="font-[var(--font-manrope)] text-[clamp(3rem,8vw,8.5rem)] font-extrabold uppercase leading-[0.86]">
              Τοπία με ρυθμό
            </h2>
          </div>
          <p className="max-w-md text-lg leading-8 text-[#f5f2ea]/66">
            Κάθε πτήση σχεδιάζεται σαν μικρή σκηνή: κίνηση, φως, απόσταση και αφήγηση σε μία καθαρή εναέρια εικόνα.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group relative min-h-[34rem] overflow-hidden bg-[#0f1719]"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.24 }}
              transition={{ duration: 0.7, delay: index * 0.06 }}
            >
              <img
                src={project.image}
                alt={`Drone έργο ${project.title}`}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050607] via-[#050607]/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <div className="mb-5 flex items-center justify-between text-sm text-[#f5f2ea]/66">
                  <span>{project.number}</span>
                  <span>{project.location}</span>
                </div>
                <h3 className="mb-3 font-[var(--font-manrope)] text-4xl font-extrabold uppercase md:text-6xl">{project.title}</h3>
                <p className="max-w-xl text-base leading-7 text-[#f5f2ea]/74">{project.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
