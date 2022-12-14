import { Html } from "@react-three/drei";
import React from "react";
import "./style.css";
import PreviousIcon from "../../assets/icons/previous.png";
import NextIcon from "../../assets/icons/next.png";

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
          position={[0.62, 0.698, 0.47]}
          scale={[6, 6, 6]}
          transform
          occlude
          onOcclude={false}
          center
        >
          <button className="player-previous">
            <img className="previous-icon" src={PreviousIcon} alt="previous-icon" />
          </button>
          <button className="player-next">
            <img className="next-icon" src={NextIcon} alt="next-icon" />
          </button>
        </Html>
      </group>
    </>
  );
};

export default Player;
