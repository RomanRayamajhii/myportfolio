import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center bg-gray-800 text-white px-6 md:px-20 py-4 z-50">
      {/* Logo */} 
      <span className=" font-bold  text-xl tracking-wide">
        <a href="/" className="hover:text-gray-300 transition-all"> Roman Rayamajhi | Portfolio </a> </span>

      {/* Menu */}
<ul
  className={`
    absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center gap-4 py-4 z-40
    transition-all duration-300 ease-in-out
    ${menuOpen ? "flex" : "hidden"}
    
    md:flex md:flex-row md:items-center md:gap-6 
    md:static md:w-auto md:bg-transparent md:py-0 md:z-auto
  `}
>
     
  <li><a href="#home" className="hover:text-gray-300 transition-all" onClick={() => setMenuOpen(false)}>Home</a></li>
  <li><a href="#about" className="hover:text-gray-300 transition-all" onClick={() => setMenuOpen(false)}>About</a></li>
  <li><a href="#projects" className="hover:text-gray-300 transition-all" onClick={() => setMenuOpen(false)}>Projects</a></li>
  <li><a href="#experience" className="hover:text-gray-300 transition-all" onClick={() => setMenuOpen(false)}>Experience</a></li>
  <li><a href="#contact" className="hover:text-gray-300 transition-all" onClick={() => setMenuOpen(false)}>Contact</a></li>
</ul>

      {/* Mobile Toggle Button */}
      <div className="md:hidden z-50 mr-2">
        {menuOpen ? (
          <RiCloseLine
            size={30}
            className="cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <RiMenu2Line
            size={30}
            className="cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;