import { Mail, MapPin, Heart, Code2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";
import { PERSONAL_INFO, SOCIAL_LINKS, NAV_LINKS } from '../../utils/constants';
import { scrollToSection } from '../../hooks/useScrollSpy';
import FadeIn from '../animations/FadeIn';

const Footer = () => {
  const socialIcons = {
    github: FaGithub,
    linkedin: FaLinkedin,
    "twitter": FaTwitter,
    "dribbble": FaDribbble,
    leetcode: Code2,
  };

  return (
    <footer className="relative bg-[#1a1628] overflow-hidden border-t border-white/5">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7c5cbf]/30 to-transparent" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7c5cbf]/05 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7c5cbf]/03 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <FadeIn delay={0}>
            <div>
              <h3 
                className="text-2xl font-bold bg-gradient-to-r from-[#a07dd4] via-[#c4a8e8] to-[#a07dd4] bg-clip-text text-transparent mb-4"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                {PERSONAL_INFO.name.split(" ")[0]}
              </h3>

              <p className="text-white/60 text-sm mb-6 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                {PERSONAL_INFO.tagline}
              </p>

              <div className="space-y-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="group flex items-center gap-3 p-3 bg-white/05 border border-white/10 rounded-xl hover:bg-white/10 hover:border-[#7c5cbf]/40 transition-all duration-300"
                >
                  <div className="p-2 bg-[#7c5cbf]/20 rounded-lg">
                    <Mail className="w-4 h-4 text-[#a07dd4]" />
                  </div>
                  <span className="text-white/60 text-sm group-hover:text-white/90 transition-colors" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                    {PERSONAL_INFO.email}
                  </span>
                </a>

                <div className="flex items-center gap-3 p-3 bg-white/05 border border-white/10 rounded-xl">
                  <div className="p-2 bg-[#7c5cbf]/20 rounded-lg">
                    <MapPin className="w-4 h-4 text-[#a07dd4]" />
                  </div>
                  <span className="text-white/60 text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div>
              <h4 className="text-white font-semibold mb-6 text-[1.0625rem]" style={{ fontFamily: "'Urbanist', sans-serif" }}>Quick Links</h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="group flex items-center gap-2 text-white/50 hover:text-[#a07dd4] transition-all duration-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#a07dd4] transition-all duration-300" />
                      <span className="text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div>
              <h4 className="text-white font-semibold mb-6 text-[1.0625rem]" style={{ fontFamily: "'Urbanist', sans-serif" }}>Connect with me</h4>
              <p className="text-white/60 text-sm mb-6 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Let's connect and create something amazing together.
              </p>
              <div className="flex flex-wrap gap-3">
                {Object.entries(SOCIAL_LINKS).map(([platform, url]) => {
                  const Icon = socialIcons[platform];
                  return Icon ? (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex items-center justify-center w-11 h-11 bg-white/5 border border-white/10 rounded-xl hover:bg-[#7c5cbf]/20 hover:border-[#7c5cbf]/40 hover:-translate-y-1 transition-all duration-300 group"
                      aria-label={`Connect on ${platform}`}
                    >
                      <Icon className="w-4 h-4 text-white/50 group-hover:text-[#a07dd4] transition-colors duration-300" />
                    </a>
                  ) : null;
                })}
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={300}>
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-[0.8125rem] text-white/40" style={{ fontFamily: "'Inter', sans-serif" }}>
                &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
              </p>
              <p className="flex items-center gap-1.5 text-white/40 text-[0.8125rem]" style={{ fontFamily: "'Inter', sans-serif" }}>
                Built with <Heart className="w-3.5 h-3.5 text-[#a07dd4] fill-[#a07dd4] animate-pulse" /> using React &amp; Tailwind CSS.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;
