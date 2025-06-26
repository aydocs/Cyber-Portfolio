"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Float } from "@react-three/drei"
import { motion } from "framer-motion"

function Avatar() {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh>
        <boxGeometry args={[2, 2.5, 1]} />
        <meshStandardMaterial color="#00ffcc" emissive="#00ffcc" emissiveIntensity={0.2} wireframe />
      </mesh>

      {/* Glowing particles around avatar */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Float key={i} speed={1 + Math.random()} rotationIntensity={0.2}>
          <mesh position={[(Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8]}>
            <sphereGeometry args={[0.05]} />
            <meshStandardMaterial
              color={Math.random() > 0.5 ? "#00ffcc" : "#00e0ff"}
              emissive={Math.random() > 0.5 ? "#00ffcc" : "#00e0ff"}
              emissiveIntensity={0.5}
            />
          </mesh>
        </Float>
      ))}
    </Float>
  )
}

export default function HackerAvatar() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="w-96 h-96 rounded-2xl overflow-hidden border border-cyan-500/30 bg-black/20 backdrop-blur-md"
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#00ffcc" intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#00e0ff" intensity={0.5} />
        <Avatar />
        <Environment preset="night" />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </motion.div>
  )
}
