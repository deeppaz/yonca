import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Lightformer
} from "@react-three/drei";
import { useControls } from "leva";
import { Model } from "./Model";

function Yonca() {


  return (
    <>
      <OrbitControls
        target={[0, 1, 0]}
        maxPolarAngle={1.7}
        maxAzimuthAngle={1}
        minAzimuthAngle={2}
        enableZoom={false}
        enablePan={false}
        // enableRotate={false}
      />

      <PerspectiveCamera makeDefault fov={20} position={[3.3, 4, 5]} />
      <Model />
      <spotLight
        color={[0, 3.3, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.9}
        position={[3, 3, 3]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[-0.4, 1.5, 0.9]}
        intensity={1.5}
        angle={0.1}
        penumbra={0.9}
        position={[12, 15, -1]}
        castShadow
        shadow-bias={-0.0001}
      />

      <Lightformer
        form="circle"
        color="white"
        intensity={1}
        scale={10}
        position={[-15, 21, 18]}
        target={[0, 0, 0]}
      />
      <Lightformer
        form="circle"
        color="white"
        intensity={1}
        scale={5}
        position={[0, 14.6, -18]}
        target={[0, 0, 0]}
      />
    </>
  );
}

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <Yonca />
      </Canvas>
    </Suspense>
  );
}

export default App;
