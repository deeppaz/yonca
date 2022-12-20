import React from "react";
import './style.css'

const Loading = () => {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
};

export default Loading;
