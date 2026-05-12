import { motion as Motion } from "framer-motion";
import { ArrowDown, FileText, Sparkles } from "lucide-react";
import GithubIcon from "../../assets/github.png";
import image from "../../assets/roman.jpeg";
import LinkedinIcon from "../../assets/linkedin2.png";

const roles = [
  "Full Stack Developer",
  "Next.js Developer",
  "Machine Learning Enthusiast",
  "AI & Python Learner"
];

const Home = () => {
  return (
    <section
      id="home"
      className="section-shell flex min-h-screen scroll-mt-24 flex-col items-center justify-center gap-12 pb-16 pt-32 md:grid md:grid-cols-[1.1fr_0.9fr] md:pt-28"
    >
      <Motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="text-center md:text-left"
      >
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-teal-100">
          <Sparkles size={16} className="text-teal-300" />
          Available for modern web projects
        </div>

        <h1 className="section-title text-5xl leading-tight md:text-7xl">
          Hi, I am Roman.
          <span className="block bg-linear-to-r from-teal-200 via-white to-rose-200 bg-clip-text text-transparent">
            I build polished web experiences.
          </span>
        </h1>

        <div className="mt-6 h-8 overflow-hidden text-lg font-semibold text-teal-200">
          <Motion.div
            animate={{ y: ["0%", "-25%", "-50%", "-75%", "0%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            {roles.map((role) => (
              <p key={role} className="h-8">
                {role}
              </p>
            ))}
          </Motion.div>
        </div>

        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
          Full stack developer focused on React, Next.js, Node.js, Django, and clean interfaces that feel fast,
          responsive, and useful.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-300 px-5 py-3 font-bold text-slate-950 shadow-lg shadow-teal-500/20 transition hover:-translate-y-0.5 hover:bg-teal-200"
          >
            Contact Me
            <ArrowDown size={18} />
          </a>
          <a
            href="#projects"
            className="rounded-xl border border-white/15 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            View Projects
          </a>
        </div>

        <div className="mt-7 flex justify-center gap-3 md:justify-start">
          <a
            href="https://www.linkedin.com/in/roman-rayamajhi-4a6986289/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 hover:text-teal-200"
            aria-label="LinkedIn"
          >
            <img src={LinkedinIcon} alt="" className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/RomanRayamajhii"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 hover:text-teal-200"
            aria-label="GitHub"
          >
            <img src={GithubIcon} alt="" className="h-5 w-5" />
          </a>
          <a
            href="#contact"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 hover:text-teal-200"
            aria-label="Resume"
          >
            <FileText size={20} />
          </a>
        </div>
      </Motion.div>

      <Motion.div
        initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="relative"
      >
        <div className="absolute -inset-6 rounded-full bg-linear-to-br from-teal-300/20 via-white/5 to-rose-300/20 blur-2xl" />
        <div className="glass-panel relative rounded-4xl p-4">
          <img
            src={image}
            alt="Roman Rayamajhi"
            className="h-72 w-72 rounded-3xl object-cover md:h-96 md:w-96"
          />
        </div>
      </Motion.div>
    </section>
  );
};

export default Home;
