import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {

    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };

  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-cyan-400 pointer-events-none z-[999]"
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30
      }}
    />
  );
};

export default CustomCursor;