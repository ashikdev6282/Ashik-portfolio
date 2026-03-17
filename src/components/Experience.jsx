import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-20"
        >
          Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-8 bg-[#111827] border border-gray-700 rounded-xl"
        >
          <h3 className="text-xl font-semibold">React.js Developer Intern</h3>

          <p className="text-cyan-400 mt-1">ATEES Industrial Training Center</p>

          <p className="text-gray-400 text-sm mt-1">Sept 2024 – Sept 2025</p>

          <ul className="mt-6 text-gray-400 space-y-2 list-disc pl-5">
            <li>Built real-world React applications integrating REST APIs</li>

            <li>Improved UI responsiveness and component performance</li>

            <li>Worked with Git and collaborative development workflows</li>
          </ul>
        </motion.div>
      </div>
      <div className="flex justify-center mt-14">
        <a
          href="https://github.com/ashikdev6282"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-5 border border-gray-500 rounded-full
    text-lg text-gray-300
    hover:border-cyan-400 hover:text-cyan-400
    transition duration-300 flex items-center gap-2"
        >
          View personal projects on GitHub
          <span className="text-xl">→</span>
        </a>
      </div>
    </section>
  );
}
