import { useState } from "react";
import { Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../../utils/constants";
import FadeIn from "../animations/FadeIn";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    setStatus({
      type: "success",
      message: "Message sent successfully! I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus({ type: "", message: "" }), 5000);
  };

  const socialIcons = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaTwitter,
  };

  return (
    <section id="contact" className="relative py-24 bg-[#f5f3f0] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7c5cbf]/05 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7c5cbf]/05 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <div className="section-badge mb-5 mx-auto w-fit">
              <MessageSquare className="w-3.5 h-3.5" />
              Get in Touch
            </div>

            <h2 className="text-heading mb-4">
              Let's Connect
            </h2>

            <p className="text-body max-w-2xl mx-auto">
              Open to internships, collaborative builds, hackathons, and
              opportunities to contribute to meaningful products.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <FadeIn delay={100}>
            <div className="card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#1a1628] mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#f5f3f0] border border-[#e2dcd5] rounded-xl text-[#1a1628] placeholder-[#9a9199] focus:outline-none focus:ring-2 focus:ring-[#7c5cbf]/30 focus:border-[#7c5cbf]/50 transition-all duration-300"
                    placeholder="Your Name"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#1a1628] mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#f5f3f0] border border-[#e2dcd5] rounded-xl text-[#1a1628] placeholder-[#9a9199] focus:outline-none focus:ring-2 focus:ring-[#7c5cbf]/30 focus:border-[#7c5cbf]/50 transition-all duration-300"
                    placeholder="Your Email"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#1a1628] mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#f5f3f0] border border-[#e2dcd5] rounded-xl text-[#1a1628] placeholder-[#9a9199] focus:outline-none focus:ring-2 focus:ring-[#7c5cbf]/30 focus:border-[#7c5cbf]/50 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center group"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                {status.message && (
                  <div
                    className={`p-4 rounded-xl text-sm font-medium ${
                      status.type === "success"
                        ? "bg-[#7c5cbf]/10 border border-[#7c5cbf]/25 text-[#7c5cbf]"
                        : "bg-red-50 border border-red-200 text-red-600"
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </FadeIn>

          {/* Contact info */}
          <FadeIn delay={200}>
            <div className="space-y-8">
              <div>
                <h3 className="text-subheading mb-3">Reach out directly</h3>
                <p className="text-body">
                  Phone: {PERSONAL_INFO.phone || "9893752225"}. I am always open to discussing projects,
                  technical collaboration, and growth opportunities.
                </p>
              </div>

              <div className="space-y-4">
                <div className="card p-5 flex items-start gap-4">
                  <div className="icon-badge">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[0.8rem] font-semibold text-[#6b6375] mb-0.5 uppercase tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>Email</p>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-[1.0625rem] font-semibold text-[#1a1628] hover:text-[#7c5cbf] transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="card p-5 flex items-start gap-4">
                  <div className="icon-badge">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[0.8rem] font-semibold text-[#6b6375] mb-0.5 uppercase tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>Location</p>
                    <p className="text-[1.0625rem] font-semibold text-[#1a1628]" style={{ fontFamily: "'Inter', sans-serif" }}>{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[0.8rem] font-semibold text-[#6b6375] mb-3 uppercase tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>Social Profiles</p>
                <div className="flex gap-3">
                  {Object.entries(SOCIAL_LINKS)
                    .slice(0, 3)
                    .map(([platform, url]) => {
                      const Icon = socialIcons[platform];
                      return Icon ? (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-12 h-12 bg-white border border-[#e2dcd5] rounded-xl hover:border-[#7c5cbf]/40 hover:text-[#7c5cbf] hover:-translate-y-1 transition-all duration-300 shadow-sm text-[#6b6375]"
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      ) : null;
                    })}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
