"use client"
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NewComponent from '@/component/newComponent';

export default function Home() {

  const [step, setStep] = useState(0);
  const [showNewComponent, setShowNewComponent] = useState(false);
  const steps = ["1", "2", "3", "4", "5"];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev === steps.length - 1) {
          clearInterval(interval);
          setShowNewComponent(true);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (showNewComponent) {
    return <NewComponent />;
  }

  return (
    <div className="container">
      <div className='flex flex-col items-center'>

      <motion.div
        className="box"
        animate={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        key={step}
        initial={{ rotate: 0 }}
      >
        <div className="inner-box">
          <AnimatePresence>
            <motion.div
              key={steps[step]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="step"
            >
              <h1 className='text-6xl text-white'>
              {steps[step]}
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
      <p className='text-xl mt-4'>Loading Boss</p>
      </div>
    </div>
  )
}