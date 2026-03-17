import { motion } from "framer-motion";
import { FaServer, FaDatabase, FaBolt } from "react-icons/fa";
import { SiMongodb, SiReact } from "react-icons/si";
import { MdSpeed } from "react-icons/md";

const services = [
  {
    title: "MERN Stack Development",
    desc: "Building scalable full-stack applications using MongoDB, Express, React and Node.js.",
    icon: <SiReact className="text-cyan-400 text-3xl" />,
  },
  {
    title: "REST API Integration",
    desc: "Designing and integrating secure RESTful APIs for seamless communication between services.",
    icon: <FaServer className="text-cyan-400 text-3xl" />,
  },
  {
    title: "Real-time Systems",
    desc: "Developing real-time features such as chat, notifications and live updates using modern tools.",
    icon: <FaBolt className="text-cyan-400 text-3xl" />,
  },
  {
    title: "Scalable UI Development",
    desc: "Creating responsive and scalable frontend interfaces with React, Tailwind CSS and Redux.",
    icon: <SiReact className="text-cyan-400 text-3xl" />,
  },
  {
    title: "Performance Optimization",
    desc: "Improving application speed and efficiency through code splitting, caching and optimization.",
    icon: <MdSpeed className="text-cyan-400 text-3xl" />,
  },
  {
    title: "Production-Level Projects",
    desc: "Delivering complete production-ready applications with authentication, APIs and deployment.",
    icon: <FaDatabase className="text-cyan-400 text-3xl" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="min-h-screen py-32 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-20"
        >
          My Services
        </motion.h2>
        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-gray-400 text-center mb-20"
        >
            Delivering tailored, scalable, and user-focused digital solutions that help businesses grow and stand out online.
        </motion.p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 bg-[#111827] border border-gray-700 rounded-xl
              hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
              transition duration-300"
            >

              {/* Icon */}
              <div className="mb-6">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}