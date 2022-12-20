import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment
} from "@react-three/drei";
import { Model } from "./components/Model";
// import { Samurai } from "./components/Samurai/Samurai";
import Player from "./components/Player/Player";
import PureSky from "./assets/kloppenheim_01_puresky_2k.hdr";

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
      <Environment
        files={PureSky}
        ground={{ height: 7, radius: 40, scale: 20 }}
      />
      <Model />
      {/* <Samurai /> */}
      <Player />
      <spotLight
        color={[0, 3.3, 0.7]}
        intensity={0.2}
        angle={0.6}
        penumbra={0.9}
        position={[3, 3, 3]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[-0.4, 1.5, 0.9]}
        intensity={0.2}
        angle={0.1}
        penumbra={0.9}
        position={[12, 15, -1]}
        castShadow
        shadow-bias={-0.0001}
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
