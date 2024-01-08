import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Phone = () => {
  const payphone = useGLTF("./payphone/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.5} />
      <spotLight position={[7, 4, 7]} intensity={0.12} />
      <spotLight position={[6, -4, 7]} intensity={0.12} />
      <primitive object={payphone.scene} scale={1.4} position={[3, -6.5, 3]} rotation={[0, -0.5, 0]} />
    </mesh>
  );
};

const PhoneCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Phone />
      </Suspense>

      <Preload all />

    </Canvas>
  );
};

export default PhoneCanvas;