import { services } from "../../data/services";
import * as Icons from "lucide-react";
import { Wrench } from "lucide-react";
import FadeIn from "../animations/FadeIn";

const Services = () => (
  <section id="services" className="relative py-24 bg-[#f5f3f0] overflow-hidden">
    {/* Dot grid texture */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.022]"
      style={{
        backgroundImage: "radial-gradient(circle, #7c5cbf 1px, transparent 1px)",
        backgroundSize: "26px 26px",
      }}
    />
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#7c5cbf]/05 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-[#7c5cbf]/05 rounded-full blur-3xl" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

      {/* Header */}
      <FadeIn delay={0}>
        <div className="text-center mb-14">
          <div className="section-badge mb-5 mx-auto w-fit">
            <Wrench className="w-3.5 h-3.5" />
            What I Offer
          </div>
          <h2 className="text-heading mb-4 max-w-2xl mx-auto">
            Building practical solutions with modern full-stack tools.
          </h2>
          <p className="text-body max-w-lg mx-auto">
            Focused capabilities across frontend, backend, authentication,
            APIs, and database-driven application development.
          </p>
        </div>
      </FadeIn>

      {/* Large cards — first 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
        {services.slice(0, 2).map((svc, i) => {
          const Ico = Icons[svc.icon] || Icons.Code2;
          return (
            <FadeIn key={svc.id} delay={80 + i * 80}>
              <div className="card group h-full p-8 flex flex-col" style={{ borderRadius: "1.25rem", minHeight: "260px" }}>
                <div className="icon-badge mb-6 group-hover:scale-110 transition-transform duration-250">
                  <Ico className="w-5 h-5" />
                </div>
                <h3
                  className="mb-3 group-hover:text-[#7c5cbf] transition-colors duration-200"
                  style={{ fontFamily: "'Urbanist', sans-serif", fontSize: "1.375rem", fontWeight: 700, color: "#1a1628", letterSpacing: "-0.025em", lineHeight: 1.2 }}
                >
                  {svc.title}
                </h3>
                <p
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: "#6b6375", lineHeight: 1.75 }}
                >
                  {svc.description}
                </p>
              </div>
            </FadeIn>
          );
        })}
      </div>

      {/* Small cards — rest */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.slice(2).map((svc, i) => {
          const Ico = Icons[svc.icon] || Icons.Code2;
          return (
            <FadeIn key={svc.id} delay={240 + i * 60}>
              <div className="card group h-full p-6 flex flex-col" style={{ borderRadius: "1rem" }}>
                <div className="icon-badge mb-4 w-10 h-10 group-hover:scale-110 transition-transform duration-250" style={{ width: "2.5rem", height: "2.5rem" }}>
                  <Ico className="w-4 h-4" />
                </div>
                <h3
                  className="mb-2 group-hover:text-[#7c5cbf] transition-colors duration-200"
                  style={{ fontFamily: "'Urbanist', sans-serif", fontSize: "1.0625rem", fontWeight: 700, color: "#1a1628", letterSpacing: "-0.02em" }}
                >
                  {svc.title}
                </h3>
                <p
                  className="line-clamp-3"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#6b6375", lineHeight: 1.7 }}
                >
                  {svc.description}
                </p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
