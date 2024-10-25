import React, { useEffect, useState } from 'react';
import { react, reactNative, java, node } from "../paths.ts"; // Ensure these paths are valid
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { getIndex, useFlubber } from "../use-flubber.ts";
import Marquee from './Marquee.js';

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
      <Marquee/>
    </div>
  );
}

export default Skills;
