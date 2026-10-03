import { skills } from '../../data/skills';
import * as Icons from "lucide-react";
import FadeIn from '../animations/FadeIn';

const LEVEL_STYLE = {
  Expert:       "text-[#7c5cbf] bg-[#7c5cbf]/10 border-[#7c5cbf]/22",
  Advanced:     "text-[#5a3fa0] bg-[#7c5cbf]/08 border-[#7c5cbf]/18",
  Intermediate: "text-[#4a4358] bg-[#e2dcd5]    border-[#cdc5bb]",
  Beginner:     "text-[#6b6375] bg-[#ede9e4]    border-[#e2dcd5]",
};
const LEVEL_PCT = { Expert: 95, Advanced: 80, Intermediate: 65, Beginner: 25 };

const CATEGORIES = {
  "Frontend": [
    "React.js", "JavaScript",
    "HTML, CSS, Tailwind, Bootstrap, EJS", "C++",
  ],
  "Backend & APIs": [
    "Node.js", "REST APIs", "Express.js",
    "MongoDB, MySQL, Mongoose, Sequelize",
    "JWT, Passport.js, Socket.IO",
  ],
  "Tools & CS": [
    "Git & GitHub",
    "Postman, VS Code, Linux (Basic), Vim (Basic), NPM",
    "Python (Basic)", "Java (Basic)",
    "DSA, DBMS, OOP, OS, CN, Software Engineering",
  ],
};

const Skills = () => (
  <section id="skills" className="relative py-24 bg-[#f5f3f0] overflow-hidden">
    {/* bg blobs */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#7c5cbf]/05 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#7c5cbf]/05 rounded-full blur-3xl" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

      {/* Header */}
      <FadeIn delay={0}>
        <div className="text-center mb-14">
          <div className="section-badge mb-5 mx-auto w-fit">
            <Icons.Sparkles className="w-3.5 h-3.5" />
            My Expertise
          </div>
          <h2 className="text-heading mb-4">Skills &amp; Technologies</h2>
          <p className="text-body max-w-xl mx-auto">
            A comprehensive overview of my technical skills, core subjects, and project-ready strengths
          </p>
        </div>
      </FadeIn>

      {/* Category cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {Object.entries(CATEGORIES).map(([cat, names], ci) => {
          const catSkills = names.map(n => skills.find(s => s.name === n)).filter(Boolean);
          return (
            <FadeIn key={cat} delay={ci * 80}>
              <div className="card h-full p-6" style={{ borderRadius: "1.125rem" }}>
                {/* Card header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#e2dcd5]">
                  <div className="w-1 h-7 rounded-full bg-gradient-to-b from-[#7c5cbf] to-[#7c5cbf]/20" />
                  <h3
                    style={{ fontFamily: "'Urbanist', sans-serif", fontSize: "1.0625rem", fontWeight: 700, color: "#1a1628", letterSpacing: "-0.02em" }}
                  >
                    {cat}
                  </h3>
                </div>

                {/* Skill rows */}
                <div className="space-y-4">
                  {catSkills.map(skill => {
                    const Ico = Icons[skill.icon] || Icons.Code2;
                    const pct = LEVEL_PCT[skill.level] ?? 50;
                    return (
                      <div key={skill.id}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2.5">
                            <div
                              className="flex items-center justify-center w-7 h-7 rounded-lg"
                              style={{ background: "#f5f3f0", border: "1px solid #e2dcd5" }}
                            >
                              <Ico className="w-3.5 h-3.5 text-[#7c5cbf]" />
                            </div>
                            <div>
                              <p
                                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 600, color: "#1a1628" }}
                              >
                                {skill.name}
                              </p>
                              <p
                                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "#9a9199" }}
                              >
                                {skill.experience}
                              </p>
                            </div>
                          </div>
                          <span
                            className={`text-[0.65rem] font-bold px-2 py-0.5 rounded-full border ${LEVEL_STYLE[skill.level] ?? "text-[#6b6375] bg-[#ede9e4] border-[#e2dcd5]"}`}
                            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.03em" }}
                          >
                            {skill.level}
                          </span>
                        </div>

                        {/* Progress bar */}
                        <div className="h-1 rounded-full bg-[#e2dcd5] overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-[#a07dd4] to-[#7c5cbf] transition-all duration-700"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
