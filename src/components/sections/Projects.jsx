import React, { useState, useRef } from "react";
import { projects, categories } from "../../data/projects";
import {
  Briefcase,
  Target,
  Globe,
  Palette,
  Zap,
  Server,
  Trophy,
  Package,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import FadeIn from "../animations/FadeIn";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentIndex(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const scrollToIndex = (index) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.offsetWidth / 3;
      container.scrollTo({ left: index * cardWidth, behavior: "smooth" });
    }
  };

  const nextSlide = () => {
    const maxIndex = Math.max(0, filteredProjects.length - 3);
    scrollToIndex(Math.min(currentIndex + 1, maxIndex));
  };

  const prevSlide = () => {
    scrollToIndex(Math.max(currentIndex - 1, 0));
  };

  const categoryIcons = {
    All: Target,
    "Web Apps": Globe,
    "UI Components": Palette,
    "Full Stack": Zap,
    Backend: Server,
    Hackathon: Trophy,
    Package: Package,
  };

  return (
    <section id="projects" className="relative py-24 bg-[#ede9e4] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#7c5cbf]/05 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-[#7c5cbf]/05 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center mb-14">
            <div className="section-badge mb-5 mx-auto w-fit">
              <Briefcase className="w-3.5 h-3.5" />
              My Work
            </div>

            <h2 className="text-heading mb-4">
              Featured Projects
            </h2>

            <p className="text-body max-w-2xl mx-auto">
              Showcasing my full-stack builds, hackathon solutions, and
              developer learning projects.
            </p>
          </div>
        </FadeIn>

        {/* Category filter */}
        <FadeIn delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`group relative px-5 py-2.5 rounded-[0.875rem] font-semibold transition-all duration-300 text-sm ${
                  activeCategory === category
                    ? "text-white bg-[#7c5cbf] shadow-md shadow-[#7c5cbf]/25 border border-[#7c5cbf]"
                    : "text-[#6b6375] bg-white border border-[#e2dcd5] hover:border-[#7c5cbf]/40 hover:text-[#7c5cbf]"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <div className="flex items-center gap-2">
                  {React.createElement(categoryIcons[category] || Target, {
                    className: "w-3.5 h-3.5",
                  })}
                  <span>{category}</span>
                </div>
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects carousel */}
        <FadeIn delay={200}>
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
            >
              <div className="flex gap-6 pb-4">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start"
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>

            {filteredProjects.length > 3 && (
              <>
                <button
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className="flex absolute left-0 top-[45%] -translate-y-1/2 -translate-x-3 lg:-translate-x-5 items-center justify-center w-10 h-10 lg:w-11 lg:h-11 bg-white border border-[#e2dcd5] rounded-full hover:border-[#7c5cbf]/40 hover:shadow-md transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed z-10 shadow-sm"
                  aria-label="Previous Projects"
                >
                  <ChevronLeft className="w-5 h-5 text-[#1a1628]" />
                </button>

                <button
                  onClick={nextSlide}
                  disabled={currentIndex >= filteredProjects.length - 3}
                  className="flex absolute right-0 top-[45%] -translate-y-1/2 translate-x-3 lg:translate-x-5 items-center justify-center w-10 h-10 lg:w-11 lg:h-11 bg-white border border-[#e2dcd5] rounded-full hover:border-[#7c5cbf]/40 hover:shadow-md transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed z-10 shadow-sm"
                  aria-label="Next Projects"
                >
                  <ChevronRight className="w-5 h-5 text-[#1a1628]" />
                </button>
              </>
            )}

            {filteredProjects.length > 3 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                {Array.from({ length: Math.max(0, filteredProjects.length - 2) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex
                        ? "bg-[#7c5cbf] w-6 h-2"
                        : "bg-[#cdc5bb] w-2 h-2 hover:bg-[#7c5cbf]/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Projects;
