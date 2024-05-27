"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Leaderboard = () => {
  const [scores, setScores] = useState([
    { id: 1, name: 'Player 1', score: 100 },
    { id: 2, name: 'Player 2', score: 80 },
    { id: 3, name: 'Player 3', score: 60 },
  ]);

  useEffect(() => {
    const updateScore = () => {
      const randomScore = Math.floor(Math.random() * 100) + 1;
      const randomPlayerIndex = Math.floor(Math.random() * scores.length);
      const updatedScores = [...scores];
      updatedScores[randomPlayerIndex].score = randomScore;
      updatedScores.sort((a, b) => b.score - a.score); // Sort scores in descending order
      setScores(updatedScores);
    };

    const interval = setInterval(updateScore, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, [scores]);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        <AnimatePresence>
          {scores.map(({ id, name, score }) => (
            <motion.li
              key={id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              layout // Enable layout animations
            >
              {name}: {score}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default Leaderboard;