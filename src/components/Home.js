import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'react-typewriter-effect';
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h1>Welcome to My Portfolio</h1>
      <p>
        <Typewriter
          text="my name is karthik"
          cursorColor="#000"
          typeSpeed={200}
          startDelay={1000}
          deleteSpeed={50}
          loop={true}

        />
      </p>

    </motion.div>
  );
};

export default Home;
