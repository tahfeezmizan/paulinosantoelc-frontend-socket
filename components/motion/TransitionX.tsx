"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface TransitionXProps {
  children: ReactNode;
  className?: string; 
}

const TransitionX: React.FC<TransitionXProps> = ({ children, className }) => {
  return (
    <motion.div
      className={className ? className : ""}
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default TransitionX;
