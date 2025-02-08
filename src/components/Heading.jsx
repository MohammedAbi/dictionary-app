import React, { useEffect, useRef } from "react";
import playImage from "../assets/play.png";

const Heading = ({ word, audioUrl, phonetic }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      if (audioUrl) {
        ref.current.src = audioUrl;
      } else {
        ref.current.removeAttribute("src");
      }
    }
  }, [audioUrl]);

  const playAudio = () => {
    if (ref.current && ref.current.src && audioUrl) {
      ref.current
        .play()
        .catch((err) => console.error("Audio play error:", err));
    }
  };

  return (
    <div className="flex flex-row justify-between my-5">
      <h3 className="font-bold text-3xl font-serif capitalize">
        {word}
        <span className="block font-normal text-sm text-indigo-600">
          {phonetic}
        </span>
      </h3>
      <button
        onClick={playAudio}
        className="bg-indigo-100 h-12 w-12 rounded-full items-center flex flex-row justify-center"
      >
        <img src={playImage} width={18} alt="" />
      </button>
      <audio className="hidden" ref={ref} src={audioUrl} />
    </div>
  );
};

export default Heading;
