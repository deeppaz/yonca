import React, { useEffect, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import { useAnimations, useGLTF } from "@react-three/drei";

export function Model() {
  const group = useRef();
  //   const gltf = useLoader(GLTFLoader, + "model.glb");
  const { scene, animations } = useGLTF("model.glb", true);
  const { actions, mixer } = useAnimations(animations, group);

  useEffect(() => {
    scene.scale.set(1, 1, 1);
    scene.position.set(0, 0, 0);
    actions.Animation.play();
    scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [scene, mixer]);

  return <primitive ref={group} object={scene} dispose={null} />;
}
useGLTF.preload("model.glb");
