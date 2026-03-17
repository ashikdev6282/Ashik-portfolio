import { useState } from "react";
import Streamify from "../assets/Streamify.png";
import Shopsphere from "../assets/Shopsphere.png";
import BloodBank from "../assets/BloodBank.png";
import HomeDeccor from "../assets/HomeDeccor.png";

const projects = [
  {
    title: "Streamify",
    desc: "Real-time video chat and communication platform",
    image: Streamify,
    link: "https://streamify-video-chat-app-42ml.onrender.com",
  },
  {
    title: "E-Commerce Store",
    desc: "Full-stack store with payments and admin dashboard",
    image: Shopsphere,
    link: "https://shopsphere-lime.vercel.app",
  },
  {
    title: "Blood Bank",
    desc: "Real-time donor request and alert platform",
    image: BloodBank,
    link: "https://blood-bank-seven-eta.vercel.app",
  },
  {
    title: "HomeDecor",
    desc: "Property listing and real estate platform",
    image: HomeDeccor,
    link: "https://home-deccor.vercel.app",
  },
];

const Projects = () => {
  const [image, setImage] = useState(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const moveImage = (e) => {
    setPos({
      x: e.clientX + 40,
      y: e.clientY + 40,
    });
  };

  return (
    <section id="projects"
      className="min-h-screen py-40 px-6 md:px-20 max-w-6xl mx-auto"
      onMouseMove={moveImage}
    >
      <h2 className="text-6xl mb-24 font-bold">Projects</h2>

      {projects.map((p, i) => (
        <div
          key={i}
          onMouseEnter={() => setImage(p.image)}
          onMouseLeave={() => setImage(null)}
          className="group mb-16 border-b border-gray-800 pb-10"
        >
          <div className="flex items-center justify-between">
            {/* Left Side */}
            <div className="flex items-start gap-6">
              <span className="text-gray-600 text-lg w-10">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div>
                <h3 className="text-4xl font-semibold group-hover:text-cyan-400 transition">
                  {p.title}
                </h3>

                <p className="text-gray-400 mt-2">{p.desc}</p>
              </div>
            </div>

            {/* Right Icon Link */}
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setImage(null)}
              className="text-2xl text-gray-400 hover:text-cyan-400 transition group-hover:translate-x-1"
            >
              ↗
            </a>
          </div>
        </div>
      ))}

      {/* Cursor Preview Image */}
      {image && (
        <img
          src={image}
          style={{
            position: "fixed",
            top: pos.y,
            left: pos.x,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
          className="w-[420px] rounded-xl shadow-[0_30px_80px_rgba(0,0,0,0.6)] transition duration-300"
        />
      )}
    </section>
  );
};

export default Projects;