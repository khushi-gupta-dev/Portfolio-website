import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import FadeIn from "../animations/FadeIn";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const scrollToIndex = (index) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({ left: index * cardWidth, behavior: "smooth" });
    }
  };

  const next = () => scrollToIndex((currentIndex + 1) % testimonials.length);
  const prev = () => scrollToIndex((currentIndex - 1 + testimonials.length) % testimonials.length);

  const stats = [
    { value: "National", label: "Hackathon Exposure" },
    { value: "2",        label: "Scholarships" },
    { value: "Top 10",   label: "MP Merit (12th)" },
    { value: "1",        label: "NPM Package Published" },
  ];

  return (
    <section id="testimonials" className="relative py-24 bg-[#ede9e4] overflow-hidden">
      {/* bg blob */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7c5cbf]/06 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <FadeIn delay={0}>
          <div className="text-center mb-14">
            <div className="section-badge mb-5 mx-auto w-fit">
              <Quote className="w-3.5 h-3.5" />
              Testimonials
            </div>
            <h2 className="text-heading mb-4">Achievements &amp; Highlights</h2>
            <p className="text-body max-w-lg mx-auto">
              A snapshot of academics, hackathon participation, scholarships,
              and my leadership journey.
            </p>
          </div>
        </FadeIn>

        {/* Carousel */}
        <FadeIn delay={100}>
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="overflow-x-hidden scroll-smooth"
              style={{ scrollSnapType: "x mandatory" }}
            >
              <div className="flex">
                {testimonials.map((t, index) => (
                  <div
                    key={t.id}
                    className="w-full shrink-0"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="flex flex-col md:flex-row gap-6 items-stretch">

                      {/* ── Photo — NO overlay ── */}
                      <div className="w-full md:w-72 shrink-0">
                        <div className="relative rounded-2xl overflow-hidden h-72 md:h-full" style={{ minHeight: "260px" }}>
                          <img
                            src={t.image}
                            alt={t.name}
                            className="w-full h-full object-cover"
                          />
                          {/* Stat badge: plain white, solid — no blur/glass */}
                          <div
                            className="absolute bottom-4 left-4 right-4 rounded-xl p-4"
                            style={{
                              background: "#ffffff",
                              border: "1px solid #e2dcd5",
                              boxShadow: "0 2px 10px rgba(0,0,0,0.12)",
                            }}
                          >
                            <div
                              className="text-2xl font-bold mb-0.5"
                              style={{ fontFamily: "'Urbanist', sans-serif", color: "#7c5cbf", letterSpacing: "-0.03em" }}
                            >
                              {stats[index]?.value}
                            </div>
                            <div
                              className="text-xs font-semibold"
                              style={{ fontFamily: "'Inter', sans-serif", color: "#4a4358" }}
                            >
                              {stats[index]?.label}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* ── Quote card ── */}
                      <div className="flex-1 card p-8 flex flex-col justify-between" style={{ borderRadius: "1.25rem" }}>
                        <div className="mb-6">
                          <Quote className="w-8 h-8 text-[#7c5cbf] mb-5 opacity-30" />
                          <p
                            className="leading-relaxed text-[#1a1628]"
                            style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.0625rem", lineHeight: 1.75 }}
                          >
                            {t.quote}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-5 border-t border-[#e2dcd5]">
                          <div>
                            <p className="font-semibold text-[#1a1628] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                              {t.name}
                            </p>
                            <p className="text-xs text-[#6b6375] mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                              {t.role}, {t.company}
                            </p>
                          </div>
                          <div className="flex gap-0.5">
                            {[...Array(t.rating)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-[#7c5cbf] text-[#7c5cbf]" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === currentIndex ? "bg-[#7c5cbf] w-6 h-2" : "bg-[#cdc5bb] w-2 h-2 hover:bg-[#7c5cbf]/50"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Nav arrows */}
            <button
              onClick={prev}
              className="absolute top-[46%] -left-5 lg:-left-6 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full border border-[#e2dcd5] bg-white hover:border-[#7c5cbf]/35 hover:shadow-md transition-all duration-250 shadow-sm"
              aria-label="Prev testimonial"
            >
              <ChevronLeft className="w-4 h-4 text-[#4a4358]" />
            </button>
            <button
              onClick={next}
              className="absolute top-[46%] -right-5 lg:-right-6 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full border border-[#e2dcd5] bg-white hover:border-[#7c5cbf]/35 hover:shadow-md transition-all duration-250 shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4 text-[#4a4358]" />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Testimonials;
