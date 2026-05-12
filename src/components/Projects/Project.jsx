import { motion as Motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";

const Project = ({ image, title, description, tech, demo, code, index }) => {
  return (
    <Motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="glass-panel group overflow-hidden rounded-2xl"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="mt-3 min-h-16 text-sm leading-6 text-slate-300">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {tech.split(",").map((item) => (
            <span key={item} className="rounded-full border border-teal-300/20 bg-teal-300/10 px-3 py-1 text-xs font-semibold text-teal-100">
              {item.trim()}
            </span>
          ))}
        </div>
        <div className="mt-6 flex gap-3">
          <a
            href={demo}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-teal-100"
          >
            <ExternalLink size={16} />
            Demo
          </a>
          <a
            href={code}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/10"
          >
            <Code2 size={16} />
            Code
          </a>
        </div>
      </div>
    </Motion.article>
  );
};

export default Project;
