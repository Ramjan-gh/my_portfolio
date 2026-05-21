"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function ThreeScene() {
  return (
    <div className="h-[400px]">
      <Canvas>
        <ambientLight />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial color="royalblue" />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
