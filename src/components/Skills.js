import React, { useEffect, useState } from 'react';
import { react, reactNative, java, node } from "../paths.ts"; // Ensure these paths are valid
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { getIndex, useFlubber } from "../use-flubber.ts";

const paths = [react, reactNative, java, node];
const colors = [
  "#00cc88",
  "#0099ff",
  "#8855ff",
  "#ff0055",
];

function Skills() {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  
  // Map progress to colors
  const fill = useTransform(progress, paths.map(getIndex), colors);
  const path = useFlubber(progress, paths);

  useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 0.8,
      ease: "easeInOut",
      onComplete: () => {
        // Cycle through paths
        setPathIndex((prev) => (prev + 1) % paths.length);
      }
    });

    return () => animation.stop();
  }, [pathIndex]);

  return (
    <div className='skills'>
      <h2>Skills</h2>
      <svg width="400" height="400">
        <g transform="translate(10 10) scale(17 17)">
          <motion.path fill={fill} d={path} />
        </g>
      </svg>
    </div>
  );
}

export default Skills;
