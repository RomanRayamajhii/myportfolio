import { motion as Motion } from "framer-motion";
import ecommerceImg from "../../assets/ecommerce.png";
import foodpreImg from "../../assets/foodpre.png";
import rojgarlanceImg from "../../assets/rojgarlance.png";
import Project from "./Project.jsx";

const projects = [
  {
    id: 1,
    image: ecommerceImg,
    title: "E-commerce Platform",
    description: "A full-stack commerce experience built with Django, Bootstrap, product flows, and responsive pages.",
    tech: "Bootstrap, Django",
    demo: "#",
    code: "#",
  },
  {
    id: 2,
    image: foodpreImg,
    title: "Food Delivery App",
    description: "A mobile responsive delivery website with clear menus, ordering screens, and practical customer flows.",
    tech: "HTML, JavaScript, CSS, PHP",
    demo: "#",
    code: "#",
  },
  {
    id: 3,
    image: rojgarlanceImg,
    title: "Rojgarlance",
    description: "A freelancing platform concept combining Next.js, Django, and Tailwind CSS for fast project discovery.",
    tech: "Next.js, Django, Tailwind CSS",
    demo: "#",
    code: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-24 py-20 md:py-28">
      <div className="section-shell">
        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-teal-200">Selected work</p>
          <h2 className="section-title mt-3 text-4xl md:text-6xl">Projects with product thinking</h2>
          <p className="mt-5 text-slate-300">
            A focused set of full-stack builds that combine interface polish with practical backend foundations.
          </p>
        </Motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <Project key={project.id} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
