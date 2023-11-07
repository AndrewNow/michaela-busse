import React, { useEffect } from "react";
import { runTweenCycle } from "./reactUtils/script.jsx";

const Shape = ({ speed, radius, color, scaleRec, blobIndex }) => {

  // console.log(color, "----");

  useEffect(() => {
    runTweenCycle(speed, radius);
  }, []);

  let svgId = `loader_${blobIndex}`;
  
  return (
    <>
      <svg className="loader" id={svgId}>
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="10"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in2="goo" in="SourceGraphic" result="mix" />
          </filter>
          <linearGradient id="MyGradient">
            <stop offset="5%" stopColor={`${color}`} />
            <stop offset="40%" stopColor={`${color}`} />
            <stop offset="100%" stopColor={`${color}`} />
          </linearGradient>
        </defs>
        <mask id="maska">
          <g className="blobs">
            <circle
              className="blob"
              cx="440"
              cy="250"
              r="30"
              transform="rotate(0) translate(0, 0) rotate(0)"
            />
            <circle
              className="blob"
              cx="500"
              cy="320"
              r="70"
              transform="rotate(0) translate(0, 0) rotate(0)"
            />
            <circle
              className="blob"
              cx="300"
              cy="390"
              r="100"
              transform="rotate(0) translate(0, 0) rotate(0)"
            />
            <circle
              className="blob"
              cx="380"
              cy="390"
              r="80"
              transform="rotate(0) translate(0, 0) rotate(0)"
            />
            <circle
              className="blob"
              cx="470"
              cy="450"
              r="20"
              transform="rotate(0) translate(0, 0) rotate(0)"
            />
          </g>
        </mask>
        <rect
          style={{transform: `scale(${scaleRec})`}}
          x="0"
          y="100"
          mask="url(#maska)"
          fill="url(#MyGradient)"
          width="600"
          height="600"
        />
      </svg>
    </>
  );
};

export default Shape;
