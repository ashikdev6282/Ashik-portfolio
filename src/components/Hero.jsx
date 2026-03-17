import { motion } from "framer-motion";
import Scene from "../three/Scene.jsx";
import MagneticButton from "../UI/Magneticbutton.jsx";
import Profile from "../assets/My_Profile.jpeg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center">

      {/* 3D Background */}
      <div className="absolute inset-0 ">
        <Scene />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">

        {/* Profile Image */}
        <img
          src={Profile}
          className="w-32 h-32 object-cover shadow shadow-gray-800 overflow-hidden p-1 bg-gray-800 aspect-square inline-block relative z-10  rounded-full mb-6 border border-gray-700"
        />

        {/* Greeting */}
        <motion.p
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:0.6}}
          className="text-white-400 mb-4 text-sm tracking-wider uppercase leading-relaxed"
        >
          Hi! I'm Ashik 👋
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.8}}
          className="font-heading text-6xl md:text-7xl font-bold leading-tight"
        >
          Full Stack Developer
          <br/>
          building modern web experiences
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:0.5}}
          className="mt-6 max-w-xl text-gray-400 font-body"
        >
          MERN Stack developer focused on scalable applications,
          real-time systems and modern interactive UI.
        </motion.p>

        {/* Buttons */}
        <div className="flex gap-6 mt-10">

          <MagneticButton>
            View Projects
          </MagneticButton>

          <a
            href="/Ashik_T_N_MERN.pdf" download
            className="px-6 py-3 border border-gray-500 rounded-lg hover:border-cyan-400 transition"
          >
            Download Resume
          </a>

        </div>

      </div>

    </section>
  );
};

export default Hero;