import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const { title, description, image, technologies, metrics, demoUrl, githubUrl } = project;

  return (
    <div className="card group flex flex-col h-full" style={{ borderRadius: "1.25rem", overflow: "hidden" }}>

      {/* ── Image — clean, no overlay ── */}
      <div className="relative h-48 overflow-hidden bg-[#ede9e4] shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category chip — sits at top-left, solid (no glass) */}
        <span
          className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[0.7rem] font-bold tracking-wide"
          style={{
            background: "#7c5cbf",
            color: "#ffffff",
            fontFamily: "'Inter', sans-serif",
            letterSpacing: "0.04em",
          }}
        >
          {project.category}
        </span>

        {/* Action buttons — solid white, no glass */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-lg bg-white border border-[#e2dcd5] hover:border-[#7c5cbf]/40 shadow-sm transition-all duration-200 hover:scale-110"
              title="View Demo"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#4a4358]" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-lg bg-white border border-[#e2dcd5] hover:border-[#7c5cbf]/40 shadow-sm transition-all duration-200 hover:scale-110"
              title="View Code"
            >
              <FaGithub className="w-3.5 h-3.5 text-[#4a4358]" />
            </a>
          )}
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div>
          <h3
            className="mb-1.5 group-hover:text-[#7c5cbf] transition-colors duration-200"
            style={{
              fontFamily: "'Urbanist', sans-serif",
              fontSize: "1.0625rem",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#1a1628",
              lineHeight: 1.3,
            }}
          >
            {title}
          </h3>
          <p
            className="line-clamp-2"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.85rem",
              color: "#6b6375",
              lineHeight: 1.65,
            }}
          >
            {description}
          </p>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-0.5 rounded-md text-[0.7rem] font-semibold"
              style={{
                fontFamily: "'Inter', sans-serif",
                background: "rgba(124, 92, 191, 0.08)",
                border: "1px solid rgba(124, 92, 191, 0.18)",
                color: "#7c5cbf",
                letterSpacing: "0.01em",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Metrics */}
        {metrics && (
          <div
            className="flex items-center gap-2 pt-3 mt-1 border-t border-[#ede9e4]"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#7c5cbf]" />
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "#7c5cbf",
              }}
            >
              {metrics}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
