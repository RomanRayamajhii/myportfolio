import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import Project from "./components/Projects/Project.jsx";
import About from "./components/About/About.jsx";
import Experience from "./components/Experience/Experience.jsx";



const projects = [
  {
    id: 1,
    image: './assets/ecommerce.png',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce website built with React and Node.js.',
    tech: "React, Node.js, Express, MongoDB",
    demo: '#',
    code: '#',
  },
  {
    id: 2,
    image: 'https://i.pravatar.cc/300?img=2',
    title: 'Food Delivery App',
    description: 'A mobile responsive food delivery website using React and Firebase.',
    tech: "React, Firebase, Tailwind",
    demo: '#',
    code: '#',
  },
    {
    id: 3,
    image: 'https://i.pravatar.cc/300?img=3',
    title: 'Social Media Dashboard',
    description: 'A dashboard for monitoring social media metrics built with React and Chart.js.',
    tech: "React, Chart.js, Tailwind",
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
