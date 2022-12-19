import React, { useEffect, useRef } from "react";
import { Mesh } from "three";
import { useGLTF } from "@react-three/drei";

export function Samurai() {
  const group = useRef();
  const { scene } = useGLTF("/samurai.glb", true);

  useEffect(() => {
    scene.scale.set(0.005, 0.005, 0.005);
    scene.position.set(0.33, 0.81, -0.29);
    scene.rotateY(1)
    scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 3;
      }
    });
  }, [scene]);

  return (
    <group ref={group} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}
useGLTF.preload("model.glb");
