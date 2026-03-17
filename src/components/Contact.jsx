import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7iqsxoh",
        "template_z5f4jpc",
        form.current,
        "EPUZ320yev4lq-V6y"
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        () => {
          alert("Failed to send message.");
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="min-h-screen py-32 px-6 md:px-20">

      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-20"
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Contact Info */}

          <div>

            <h3 className="text-2xl font-semibold mb-6">
              Let's work together
            </h3>

            <p className="text-gray-400 mb-10">
              I'm open to freelance projects, collaborations,
              or full-time opportunities.
            </p>

            <div className="space-y-4">

              <a
                href="mailto:your-email@gmail.com"
                className="flex items-center gap-3 hover:text-cyan-400"
              >
                <FaEnvelope />
                your-email@gmail.com
              </a>

              <a
                href="https://github.com/ashikdev6282"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-cyan-400"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-cyan-400"
              >
                <FaLinkedin />
                LinkedIn
              </a>

            </div>

          </div>

          {/* Contact Form */}

          <form ref={form} onSubmit={sendEmail} className="space-y-6">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 bg-[#111827] border border-gray-700 rounded-lg focus:border-cyan-400 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 bg-[#111827] border border-gray-700 rounded-lg focus:border-cyan-400 outline-none"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-4 bg-[#111827] border border-gray-700 rounded-lg focus:border-cyan-400 outline-none"
            />

            <button
              type="submit"
              className="px-8 py-4 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition font-semibold"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}