import React from "react";
import { useParams } from "react-router-dom";

const Video = () => {
  const { video } = useParams();
  return (
    <div className="visor-videos">
      <h1>Señas</h1>
      <video src={`/${video}.mp4`} controls />
      <h2>{video}</h2>
    </div>
  );
};

export default Video;
