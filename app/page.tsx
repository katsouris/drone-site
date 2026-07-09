import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import FeaturedProjects from "@/components/FeaturedProjects";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HorizontalProjects from "@/components/HorizontalProjects";
import Intro from "@/components/Intro";
import PageTransition from "@/components/PageTransition";
import Safety from "@/components/Safety";
import Services from "@/components/Services";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <PageTransition />
      <Header />
      <main>
        <Hero />
        <Intro />
        <FeaturedProjects />
        <HorizontalProjects />
        <Services />
        <Safety />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
