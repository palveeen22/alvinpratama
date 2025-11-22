"use client";

import { motion } from "framer-motion";

const MotionDiv = motion.div;
const MotionArticle = motion.article;
const MotionSection = motion.section;
const MotionP = motion.p;
const MotionSpan = motion.span;
const MotionUl = motion.ul;
const MotionSvg = motion.svg;
const MotionButton = motion.button;



const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 300, damping: 24 }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 }
  }
};


export {
  MotionDiv,
  MotionArticle,
  MotionSection,
  MotionP,
  MotionSpan,
  MotionUl,
  MotionSvg,
  sectionVariants,
  cardVariants,
  containerVariants,
  itemVariants,
  fadeIn,
  MotionButton
}