import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { motion as Motion } from "framer-motion";

const links = ["Home", "About", "Projects", "Experience", "Contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8"
    >
      <div className="glass-panel mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-3 md:px-5">
        <a href="#home" className="group flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-sm font-black text-slate-950 shadow-lg shadow-teal-500/20">
            RR
          </span>
          <span className="hidden text-sm font-semibold tracking-wide text-white sm:block">
            Roman Rayamajhi
          </span>
        </a>

        <ul
          className={`
            absolute left-4 right-4 top-[4.75rem] rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl
            ${menuOpen ? "block" : "hidden"}
            md:static md:flex md:w-auto md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none
          `}
        >
          {links.map((link) => {
            const target = link.toLowerCase();

            return (
              <li key={link}>
                <a
                  href={`#${target}`}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white md:py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-white transition hover:bg-white/10 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <RiCloseLine size={24} /> : <RiMenu2Line size={24} />}
        </button>
      </div>
    </Motion.nav>
  );
};

export default Navbar;
