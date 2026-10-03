import { ChevronDown, Star, MapPin } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
import { PERSONAL_INFO, STATS } from "../../utils/constants";
import { scrollToSection } from "../../hooks/useScrollSpy";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const TECH = [
  { Icon: SiReact,      label: "React",    color: "#61DAFB" },
  { Icon: SiNextdotjs,  label: "Next.js",  color: "#1a1628" },
  { Icon: SiNodedotjs,  label: "Node.js",  color: "#339933" },
  { Icon: SiTailwindcss,label: "Tailwind", color: "#06B6D4" },
  { Icon: SiMongodb,    label: "MongoDB",  color: "#47A248" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#f5f3f0]">
      <RadialGradientBackground variant="hero" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left — text content ── */}
          <div className="text-left max-w-xl">

            {/* Badge */}
            <FadeIn delay={0}>
              <div className="section-badge mb-8 w-fit">
                <Star className="w-3.5 h-3.5" />
                {PERSONAL_INFO.title}
                <span className="opacity-50">·</span>
                <MapPin className="w-3 h-3 opacity-70" />
                {PERSONAL_INFO.location}
              </div>
            </FadeIn>

            {/* Headline */}
            <FadeIn delay={80}>
              <h1 className="text-display mb-5">
                Building real products,{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #7c5cbf 0%, #a07dd4 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  one commit at a time.
                </span>
              </h1>
            </FadeIn>

            {/* Sub-text */}
            <FadeIn delay={160}>
              <p className="text-body text-[1.0625rem] mb-9 max-w-[480px]">
                Full-Stack developer crafting scalable web apps with React,
                Node.js, Express &amp; MongoDB — driven by clean code and
                continuous learning.
              </p>
            </FadeIn>

            {/* CTA */}
            <FadeIn delay={240}>
              <div className="flex items-center gap-4 mb-14">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="btn-primary"
                >
                  Get in Touch
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="inline-flex items-center gap-2 px-5 py-[0.6875rem] rounded-[0.75rem] border border-[#e2dcd5] text-[#4a4358] text-[0.9375rem] font-semibold hover:border-[#7c5cbf]/40 hover:text-[#7c5cbf] transition-all duration-200"
                >
                  View Projects
                </button>
              </div>
            </FadeIn>

            {/* Stats row */}
            <FadeIn delay={320}>
              <div className="flex flex-wrap gap-x-10 gap-y-4">
                {STATS.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span
                      className="text-2xl font-bold leading-none mb-1"
                      style={{ fontFamily: "'Urbanist', sans-serif", color: "#7c5cbf", letterSpacing: "-0.03em" }}
                    >
                      {stat.value}
                    </span>
                    <span className="text-xs font-medium text-[#6b6375] tracking-wide">{stat.label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* ── Right — photo card ── */}
          <FadeIn delay={200}>
            <div className="flex justify-center lg:justify-end lg:pr-8">
              <div className="relative animate-drift">

                {/* Soft purple glow behind */}
                <div
                  className="absolute -inset-8 rounded-[2.5rem] pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(124,92,191,0.10) 0%, transparent 70%)",
                    filter: "blur(24px)",
                  }}
                />

                {/* Photo card — plain white, no glass */}
                <div
                  className="relative w-[210px] sm:w-[230px] rounded-[1.75rem] overflow-hidden"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2dcd5",
                    boxShadow: "0 8px 40px rgba(124,92,191,0.12), 0 1px 4px rgba(0,0,0,0.05)",
                  }}
                >
                  {/* Photo — NO overlay, NO gradient */}
                  <div className="h-[255px] sm:h-[272px] overflow-hidden">
                    <img
                      src="/developer-portrait2.jpeg"
                      alt="Developer portrait"
                      className="w-full h-full object-cover object-top"
                      draggable={false}
                    />
                  </div>

                  {/* Tech strip */}
                  <div
                    className="px-4 py-3.5 border-t border-[#ede9e4]"
                    style={{ background: "#faf9f7" }}
                  >
                    <p className="text-label mb-2.5" style={{ fontSize: "0.65rem" }}>Stack</p>
                    <div className="flex items-center gap-3">
                      {TECH.map(({ Icon, label, color }) => (
                        <Icon
                          key={label}
                          className="w-[15px] h-[15px] transition-transform duration-200 hover:scale-125 cursor-default"
                          style={{ color }}
                          title={label}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* "Open to work" floating badge */}
                <div
                  className="absolute -bottom-3.5 -right-5 flex items-center gap-1.5 px-3 py-2 rounded-xl"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2dcd5",
                    boxShadow: "0 2px 12px rgba(124,92,191,0.10)",
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span
                    className="font-semibold text-[#1a1628]"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem" }}
                  >
                    Open to work
                  </span>
                </div>

                {/* "Full-Stack" floating badge */}
                <div
                  className="absolute -top-3.5 -left-5 px-3 py-2 rounded-xl"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2dcd5",
                    boxShadow: "0 2px 12px rgba(124,92,191,0.10)",
                  }}
                >
                  <span
                    className="font-bold text-[#7c5cbf]"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6875rem" }}
                  >
                    Full-Stack Dev
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-60 hover:opacity-100 transition-opacity"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-7 h-7 text-[#7c5cbf]" />
      </button>
    </section>
  );
};

export default Hero;
