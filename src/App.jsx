import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import Project from "./components/Projects/Project.jsx";
import About from "./components/About/About.jsx";
import Experience from "./components/Experience/Experience.jsx";
import ecommerceImg from "./assets/ecommerce.png";
import foodpreImg from "./assets/foodpre.png";
import rojgarlanceImg from "./assets/rojgarlance.png";



const projects = [
  {
    id: 1,
    image: ecommerceImg,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce website built with React and Node.js.',
    tech: "Bootstrap,Django",
    demo: '#',
    code: '#',
  },
  {
    id: 2,
    image: foodpreImg,
    title: 'Food Delivery App',
    description: 'A mobile responsive food delivery website using React and Firebase.',
    tech: "HTML,JavaScript,CSS,PHP",
    demo: '#',
    code: '#',
  },
    {
    id: 3,
    image: rojgarlanceImg,
    title: 'Rojgarlance',
    description: 'A Freelance Website',
    tech: "Next.js,Django, Tailwind css",
    demo: '#',
    code: '#',
  },
  // Add more projects
];

const App = () => {
  return (
    <div className=" min-h-screen w-full ">
      <Navbar />
      <Home />
      {/* projects */}
  <div
        id="projects"
        className=" min-h-screen bg-gray-100 scroll-mt-24 flex flex-col items-center justify-center gap-6 md:gap-20 px-6 md:px-20 py-10 md:py-20"
      >
  <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>

  {/* Centered grid container */}
  <div className="flex flex-wrap justify-center gap-10 md:gap-20 ">
    {projects.map((project) => (
      <Project
        key={project.id}
        title={project.title}
        description={project.description}
        image={project.image}
        tech={project.tech}
        demo={project.demo}
        code={project.code}
      />
    ))}
  </div>
</div>
      <Contacts />
      <About />
      <Experience />
    </div>
  );
};

export default App;
