import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Float, Sparkles } from "@react-three/drei";
import { useRef } from "react";

import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiRedux } from "react-icons/si";

/* ---------- ORBITING ICON ---------- */

function OrbitIcon({ icon, radius, speed }) {

  const ref = useRef();

  useFrame(({ clock }) => {

    const t = clock.getElapsedTime() * speed;

    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;

  });

  return (
    <group ref={ref}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Html center>
          {icon}
        </Html>
      </Float>
    </group>
  );
}

/* ---------- TECH SYSTEM ---------- */

function TechOrbitSystem() {
  return (
    <>

      <OrbitIcon
        radius={2.5}
        speed={0.6}
        icon={<FaReact size={42} color="#61DBFB" />}
      />

      <OrbitIcon
        radius={3}
        speed={0.4}
        icon={<FaNodeJs size={42} color="#3C873A" />}
      />

      <OrbitIcon
        radius={3.5}
        speed={0.3}
        icon={<SiMongodb size={42} color="#4DB33D" />}
      />

      <OrbitIcon
        radius={2.8}
        speed={0.5}
        icon={<SiTailwindcss size={42} color="#38BDF8" />}
      />

      <OrbitIcon
        radius={3.2}
        speed={0.45}
        icon={<SiRedux size={42} color="#764ABC" />}
      />

      <OrbitIcon
        radius={3.7}
        speed={0.35}
        icon={<FaGitAlt size={42} color="#F1502F" />}
      />

    </>
  );
}

/* ---------- SCENE ---------- */

const Scene = () => {
  return (

    <Canvas camera={{ position: [0, 0, 6] }}>

      {/* Lighting */}

      <ambientLight intensity={0.6} />

      <pointLight
        position={[3, 3, 3]}
        intensity={1.6}
        color="#22D3EE"
      />

      <pointLight
        position={[-3, -3, -3]}
        intensity={1.4}
        color="#8B5CF6"
      />

      {/* Particle Galaxy */}

      <Sparkles
        count={120}
        scale={8}
        size={2}
        speed={0.4}
        color="#22D3EE"
      />

      {/* Orbiting Tech Stack */}

      <TechOrbitSystem />

    </Canvas>

  );
};

export default Scene;