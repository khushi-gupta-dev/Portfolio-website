import { Download, Code2, Sparkles, Zap } from "lucide-react";
import {
  SiReact, SiNextdotjs, SiTypescript,
  SiTailwindcss, SiNodedotjs, SiMongodb,
} from "react-icons/si";
import { PERSONAL_INFO, ABOUT_STATS } from "../../utils/constants";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const FEATURE_CARDS = [
  {
    icon: Code2,
    title: "Expertise",
    body: "Full-stack application development, backend architecture, and secure authentication workflows.",
    span: 2,
  },
  {
    icon: Sparkles,
    title: "Clean Code",
    body: "Maintainable, modular code with clear structure and reusable logic.",
    span: 1,
  },
  {
    icon: Zap,
    title: "Performance",
    body: "Responsive interfaces and efficient API flows for a smooth user experience.",
    span: 1,
  },
];

const SKILLS = [
  { name: "React.js",     Icon: SiReact      },
  { name: "Next.js",      Icon: SiNextdotjs  },
  { name: "TypeScript",   Icon: SiTypescript },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Node.js",      Icon: SiNodedotjs  },
  { name: "MongoDB",      Icon: SiMongodb    },
];

const About = () => (
  <section id="about" className="relative py-24 bg-[#ede9e4] overflow-hidden">
    <RadialGradientBackground variant="about" />

    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

      {/* ── Top grid: bio + cards ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">

        {/* Left — bio */}
        <div className="flex flex-col gap-8">
          <FadeIn delay={0}>
            <div className="section-badge w-fit">
              <Code2 className="w-3.5 h-3.5" />
              Full-Stack Developer
              <Sparkles className="w-3.5 h-3.5 opacity-70" />
            </div>
          </FadeIn>

          <FadeIn delay={60}>
            <h2 className="text-heading">
              Learning fast,<br />building real products.
            </h2>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="flex flex-col gap-4">
              {PERSONAL_INFO.bio.map((p, i) => (
                <p key={i} className="text-body">{p}</p>
              ))}
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={180}>
            <div className="grid grid-cols-3 gap-6 pt-2">
              {ABOUT_STATS.map((stat, i) => (
                <div key={i} className="relative pl-4">
                  <div className="absolute left-0 top-0 h-full w-[3px] rounded-full bg-gradient-to-b from-[#7c5cbf] to-[#7c5cbf]/15" />
                  <div
                    className="text-[1.875rem] font-bold leading-none mb-1"
                    style={{ fontFamily: "'Urbanist', sans-serif", color: "#1a1628", letterSpacing: "-0.04em" }}
                  >
                    {stat.value}
                  </div>
                  <p
                    className="text-xs font-medium leading-snug"
                    style={{ fontFamily: "'Inter', sans-serif", color: "#6b6375" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={240}>
            <button
              onClick={() => window.open(PERSONAL_INFO.resume, "_blank")}
              className="btn-primary w-fit"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          </FadeIn>
        </div>

        {/* Right — feature cards */}
        <FadeIn delay={160}>
          <div className="grid grid-cols-2 gap-4">
            {FEATURE_CARDS.map(({ icon: Icon, title, body, span }) => (
              <div
                key={title}
                className="card p-6"
                style={{ gridColumn: span === 2 ? "span 2" : undefined, borderRadius: "1rem" }}
              >
                <div className="icon-badge mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-card-title mb-2">{title}</h3>
                <p
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "#6b6375", lineHeight: 1.7 }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* ── Tech stack grid ── */}
      <FadeIn delay={300}>
        <div className="text-center mb-8">
          <h3 className="text-subheading mb-2">Tech Stack &amp; Expertise</h3>
          <p className="text-body text-sm">
            Tools and technologies I use to build practical full-stack projects
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 max-w-3xl mx-auto">
          {SKILLS.map(({ name, Icon }) => (
            <div
              key={name}
              className="card flex flex-col items-center justify-center gap-2.5 py-5 px-3 cursor-default hover:scale-105 transition-transform duration-200"
              style={{ borderRadius: "0.875rem" }}
            >
              <Icon className="text-[1.625rem] text-[#7c5cbf]" />
              <span
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 600, color: "#4a4358" }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  </section>
);

export default About;
