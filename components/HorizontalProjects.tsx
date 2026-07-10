import type { Project } from "@/data/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type HorizontalProjectsProps = {
  projects: Project[];
};

export default function HorizontalProjects({ projects }: HorizontalProjectsProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) {
      return;
    }

    const context = gsap.context(() => {
      const distance = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true
        }
      });
    }, section);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-[#071012] py-16">
      <div className="px-5 md:px-8">
        <p className="mb-4 text-sm uppercase tracking-[0.36em] text-[#17d7d0]">Διαδρομές</p>
        <h2 className="max-w-5xl font-[var(--font-manrope)] text-[clamp(2.4rem,8vw,10vh)] font-extrabold uppercase leading-[0.88]">
          Ο κόσμος σου από άλλη γωνία
        </h2>
      </div>

      <div ref={trackRef} className="project-track mt-14 flex w-max gap-6 px-5 md:px-8">
        {projects.map((project) => (
          <article key={`horizontal-${project.title}`} className="relative h-[62vh] w-[82vw] shrink-0 overflow-hidden bg-[#111] md:w-[58vw]">
            <img
              src={project.image}
              srcSet={project.imageSrcSet}
              sizes="(min-width: 768px) 58vw, 82vw"
              alt={`Εναέρια αφήγηση ${project.title}`}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050607]/92 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-2xl p-6 md:p-9">
              <span className="mb-6 block text-sm text-[#17d7d0]">{project.number}</span>
              <h3 className="font-[var(--font-manrope)] text-5xl font-extrabold uppercase md:text-7xl">{project.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
