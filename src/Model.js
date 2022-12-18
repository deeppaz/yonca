import React, { useEffect, useRef, useState } from "react";
import { Mesh } from "three";
import { useAnimations, useGLTF, Html } from "@react-three/drei";

export function Model() {
  const group = useRef();
  const { scene, animations } = useGLTF("model.glb", true);
  const { actions, mixer } = useAnimations(animations, group);
  const [playAnimate, setPlayAnimate] = useState(false);

  const onChange = () => {
    if (playAnimate === true) {
      actions.Animation.play();
    } else if (playAnimate === false) {
      actions.Animation.stop();
    }
  };

  useEffect(() => {
    onChange();
    scene.scale.set(1, 1, 1);
    scene.position.set(0, 0, 0);
    scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [scene, mixer, playAnimate]);

  return (
    <group ref={group} dispose={null}>
      <primitive object={scene} />
      <primitive
        object={
          scene.children[0].children[0].children[0].children[1].children[0]
            .children
        }
      >
        <Html
          distanceFactor={0.17}
          position={[0.075, 0.7, 0.47]}
          scale={[6, 6, 6]}
          transform
          occlude
          onOcclude={false}
          center
        >
          {playAnimate === false ? (
            <button
              onClick={() =>
                setPlayAnimate(playAnimate == false ? true : false)
              }
              className="play-button"
            >
              PLAY
            </button>
          ) : (
            <button
              onClick={() =>
                setPlayAnimate(playAnimate == false ? true : false)
              }
              className="play-button"
            >
              STOP
            </button>
          )}
        </Html>
      </primitive>
    </group>
  );
}
useGLTF.preload("model.glb");
