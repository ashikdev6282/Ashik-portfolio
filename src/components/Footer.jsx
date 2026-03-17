import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="border-t border-gray-800 py-10 px-6 md:px-20">

        <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">

          {/* Social Links */}

          <div className="flex gap-6 text-xl text-gray-400">

            <a
              href="https://github.com/ashikdev6282"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:your-email@gmail.com"
              className="hover:text-cyan-400 transition"
            >
              <FaEnvelope />
            </a>

          </div>

          {/* Copyright */}

          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Ashik T N. All rights reserved.
          </p>

        </div>

      </footer>

      {/* Back To Top Button */}

      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 rounded-full
          bg-cyan-400 text-black
          hover:bg-cyan-300
          shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]
          transition"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}