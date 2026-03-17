import { motion } from "framer-motion";
import ProfilePic from "../assets/My_pic.jpeg";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
  "Redux Toolkit",
  "React Query",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Firebase",
  "Git",
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 md:px-20 py-24"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={ProfilePic}
            alt="Ashik"
            className="w-80 rounded-2xl border border-gray-700 shadow-lg"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h2>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed mb-8 text-lg">
            I'm a <span className="text-cyan-400">MERN Stack Developer</span>{" "}
            passionate about building scalable and high-performance web
            applications. I specialize in creating modern user interfaces with
            React, Tailwind CSS, and Redux, and developing backend systems with
            Node.js and MongoDB. I enjoy writing clean, maintainable code and
            building efficient digital experiences. I'm currently open to
            freelance opportunities.
          </p>

          {/* Skills */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">
              Skills
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-[#111827] border border-gray-700 rounded-lg text-sm hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)] transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">
              Education
            </h3>

            <div className="space-y-4">

              <div className="border border-gray-700 rounded-lg p-4 bg-[#111827]/40">
                <h4 className="font-medium">
                  Bachelor of Computer Applications (BCA)
                </h4>
                <p className="text-gray-400 text-sm">
                  IGNOU • 2025 – Present
                </p>
              </div>

              <div className="border border-gray-700 rounded-lg p-4 bg-[#111827]/40">
                <h4 className="font-medium">
                  Diploma in Computer Engineering
                </h4>
                <p className="text-gray-400 text-sm">
                  Ilahia Polytechnic College • GPA 7.66
                </p>
              </div>

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;