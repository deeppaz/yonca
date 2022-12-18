import { Html } from "@react-three/drei";
import React from "react";
import "./style.css";

const Player = () => {
  return (
    <>
      <group>
        <Html
          distanceFactor={0.17}
          position={[-0.5, 0.7, 0.47]}
          scale={[6, 6, 6]}
          transform
          occlude
          onOcclude={false}
          center
        >
          <small className="player-song-title">Lo-fi hip hop now playing</small>
        </Html>
        <Html
          distanceFactor={0.17}
          position={[0.7, 0.7, 0.47]}
          scale={[6, 6, 6]}
          transform
          occlude
          onOcclude={false}
          center
        >
          <div className="player-buttons">
            <button className="player-previous">.</button>
            <button className="player-next">.</button>
          </div>
        </Html>
      </group>
    </>
  );
};

export default Player;
