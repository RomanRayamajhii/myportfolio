import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import Projects from "./components/Projects/Projects.jsx";
import About from "./components/About/About.jsx";
import Experience from "./components/Experience/Experience.jsx";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-80">
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-rose-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />
      </div>
      <Navbar />
      <main>
        <Home />
        <Projects />
      </main>
      <About />
      <Experience />
      <Contacts />
    </div>
  );
};

export default App;
