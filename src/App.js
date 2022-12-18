import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Lightformer,
  Environment
} from "@react-three/drei";
import { useControls } from "leva";
import { Model } from "./components/Model";
import Player from "./components/Player";


function Yonca() {
  const {
    intensity,
    intensity2,
    scale,
    scale2,
    position,
    position2,
    target,
    target2
  } = useControls({
    intensity: 1,
    intensity2: 1,
    scale: 10,
    scale2: 5,
    position: [-15, 21, 18],
    position2: [0, 14.6, -18],
    target: [0, 0, 0],
    target2: [0, 0, 0]
  });

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
      <Environment files={'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/roof_garden_2k.hdr'} ground={{ height: 7, radius: 40, scale: 10 }} />
      <Model />
      <Player />
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
        intensity={intensity}
        scale={scale}
        position={position}
        target={target}
      />
      <Lightformer
        form="circle"
        color="white"
        intensity={intensity2}
        scale={scale2}
        position={position2}
        target={target2}
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
