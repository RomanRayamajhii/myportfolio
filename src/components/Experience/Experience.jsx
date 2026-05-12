import { motion as Motion } from "framer-motion";
import { BookOpen, BrainCircuit, Code, Layers } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer",
    period: "2024 - Present",
    icon: Layers,
    points: [
      "Built e-commerce, food delivery, and freelancing website projects.",
      "Used HTML, CSS, JavaScript, Bootstrap, PHP, Next.js, Django, and MySQL.",
      "Designed responsive user interfaces with Tailwind CSS.",
    ],
  },
  {
    title: "Ongoing Learning",
    period: "Current",
    icon: BookOpen,
    points: ["Studying Next.js deeply.", "Building backend confidence with Node.js and Express.js."],
  },
  {
    title: "Django Development",
    period: "Project Work",
    icon: Code,
    points: ["Built backend systems with Django.", "Worked with database integration and MVC architecture."],
  },
  {
    title: "Machine Learning Workshop",
    period: "Completed",
    icon: BrainCircuit,
    points: ["Completed a hands-on ML workshop.", "Learned data preprocessing and basic machine learning models."],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-24 py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-teal-200">Experience</p>
          <h2 className="section-title mt-3 text-4xl md:text-6xl">Learning by building real things.</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <Motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="glass-panel rounded-2xl p-6"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-teal-200">{item.period}</p>
                  </div>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-teal-200">
                    <Icon size={22} />
                  </span>
                </div>
                <ul className="space-y-3 text-sm leading-6 text-slate-300">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
