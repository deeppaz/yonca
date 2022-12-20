import React, { useEffect, useState } from "react";
import { useProgress, Html } from "@react-three/drei";
import "./style.css";

export function Loading({ modelLoaded }) {
  const { active, progress, errors, item, loaded, total } = useProgress();
  const [loadedModel, setloadedModel] = useState(false);

  useEffect(() => {
    setloadedModel(modelLoaded);
  });

  return (
    <>
      {loaded === modelLoaded ? (
        <button>hello</button>
      ) : (
        <div className="loader">
          <span>{Math.floor(progress)}%</span>
        </div>
      )}
    </>
  );
}
