import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "@/public/Mesh";

function Render() {
  return (
    <div className="sm:w-4/5 w-full h-full drop-shadow-2xl">
      <Canvas className="w-full h-full">
        <OrbitControls 
        enableZoom={true} 
        enableDamping target={[0, 1, 0]}
        maxPolarAngle={Math.PI / 2}  // Restrict vertical rotation to top
        // minPolarAngle={Math.PI / 2}  // Restrict vertical rotation to bottom
        dampingFactor={0.1}
        maxAzimuthAngle={Infinity}  // No limit on rotation around the Y axis
        minAzimuthAngle={-Infinity} // No limit on rotation around the Y axis
        />
        <Model />
      </Canvas>
    </div>
  );
}

export default Render;
