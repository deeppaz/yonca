import { Html } from "@react-three/drei";
import React from "react";

const Player = () => {
  return (
    <>
      <Html
        distanceFactor={0.17}
        position={[-0.5, 0.7, 0.47]}
        scale={[6, 6, 6]}
        transform
        occlude
        onOcclude={false}
        center
      >
        <div>Hello its player</div>
      </Html>
    </>
  );
};

export default Player;
