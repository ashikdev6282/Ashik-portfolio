import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../UI/Logo";

const navLinks = [
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Services", id: "services" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

const menuVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: { duration: 0.3 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Smooth scroll function with navbar offset
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const yOffset = -80; // navbar height
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }

    setOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#0B0F19]/60 border-b border-white/10"
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          
          {/* Logo */}
          <Logo />

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 text-gray-300 font-medium">
            {navLinks.map((item, i) => (
              <li
                key={i}
                onClick={() => scrollToSection(item.id)}
                className="group relative cursor-pointer hover:text-white transition"
              >
                {item.name}

                {/* Hover underline */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div
            onClick={() => setOpen(!open)}
            className="md:hidden text-3xl text-white cursor-pointer z-[60]"
          >
            {open ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}

      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-[#0B0F19]/95 backdrop-blur-xl flex items-center justify-center"
          >
            <ul className="flex flex-col gap-12 text-3xl font-semibold text-white text-center">
              {navLinks.map((item, i) => (
                <motion.li
                  key={i}
                  variants={linkVariants}
                  onClick={() => scrollToSection(item.id)}
                  className="cursor-pointer hover:text-cyan-400 transition"
                >
                  {item.name}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;