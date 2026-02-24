"use client";

import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

export default function Background3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <ambientLight intensity={0.5} />
        <Float speed={2} rotationIntensity={2} floatIntensity={2}>
          <mesh>
            <torusKnotGeometry args={[1, 0.3, 100, 16]} />
            <meshStandardMaterial color="#7c3aed" wireframe />
          </mesh>
        </Float>
      </Canvas>
    </div>
  );
}
