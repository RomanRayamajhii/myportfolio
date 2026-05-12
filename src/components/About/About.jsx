import { motion as Motion } from "framer-motion";

const skills = ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "RESTful APIs", "Git & GitHub"];

const highlights = [
  {
    title: "Education",
    copy: "Bachelor of Computer Application at Tribhuvan University, Nepal. Ongoing.",
  },
  {
    title: "Currently Learning",
    copy: "Deepening Next.js, Tailwind CSS, Node.js, Express, and modern backend patterns.",
  },
  {
    title: "Interests",
    copy: "Web development, open-source contribution, AI, machine learning, hiking, photography, and travel.",
  },
];

const About = () => {
  return (
    <section className="scroll-mt-24 py-20 md:py-28" id="about">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-teal-200">About me</p>
          <h2 className="section-title mt-3 text-4xl md:text-6xl">Curious builder, practical developer.</h2>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="glass-panel rounded-2xl p-6 md:p-8"
        >
          <p className="text-lg leading-8 text-slate-300">
            I am Roman Rayamajhi, a full stack developer who enjoys building dynamic, responsive web applications with
            React, Node.js, Django, and PHP. I like turning real problems into simple interfaces and dependable backend
            systems.
          </p>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-white">Core Skills</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full bg-white/10 px-3 py-2 text-sm font-semibold text-slate-100">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="font-bold text-teal-100">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.copy}</p>
              </div>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default About;
