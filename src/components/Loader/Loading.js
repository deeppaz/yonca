import React, { useEffect, useState } from "react";
import { useProgress, Html } from "@react-three/drei";
import "./style.css";

const Loading = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();
  const [isLoaded, setIsLoaded] = useState(false);

  const isModelLoaded = () => {
    if (progress.length === 100) {
      setIsLoaded(false);
    } else {
      setIsLoaded(false);
    }
  };

  useEffect(() => {
    isModelLoaded();
  }, [progress]);

  return (
    <>
      <Html center>
        {progress === 100 ? (
          <button
            onClick={() => {
              setIsLoaded(isLoaded);
            }}
          >go</button>
        ) : (
          <span className="loading-progress">{progress} % loaded</span>
        )}
      </Html>
    </>
  );
};

export default Loading;
