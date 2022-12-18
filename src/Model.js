import React, { useEffect, useRef, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh, Scene } from "three";
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

  return <primitive ref={group} object={scene} dispose={null}  onClick={() => setPlayAnimate(playAnimate == false ? true : false)}/>;
}
useGLTF.preload("model.glb");
