import React from "react";
import { useProgress, Html } from "@react-three/drei";
import "./style.css";

export function Loading() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  console.log(loaded);
  return (
    <>
      <div className="loader">
        <span>{Math.floor(progress)}%</span>
      </div>
    </>
  );
}
