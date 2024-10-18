import React from "react";
import { motion } from "framer-motion";
import { Container } from './BurgerMenu.styles';

const MenuButton = ({ isOpen = false, width = 28, height = 28, transition = null, color='#0f324c', strokeWidth = 1, lineProps = {}, ...props }) => {
  const variant = isOpen ? "opened" : "closed";

  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 1, // Adjusted for alignment
    },
  };

  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -1, // Adjusted for alignment
    },
  };

  lineProps = {
    stroke: color,
    strokeWidth: strokeWidth,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition,
    ...lineProps,
  };

  const unitHeight = 3; // Reduced total height
  const unitWidth = (unitHeight * width) / (height);

  return (
    <Container>
      <motion.svg
        viewBox={`0 0 ${unitWidth} ${unitHeight}`}
        overflow="visible"
        preserveAspectRatio="none"
        width={width}
        height={height}
        {...props}
      >
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="0.5" // Adjusted for less space
          y2="0.5" // Adjusted for less space
          variants={top}
          {...lineProps}
        />
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="1.5" // Adjusted for less space
          y2="1.5" // Adjusted for less space
          variants={center}
          {...lineProps}
        />
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="2.5" // Adjusted for less space
          y2="2.5" // Adjusted for less space
          variants={bottom}
          {...lineProps}
        />
      </motion.svg>
    </Container>
  );
};

export default MenuButton;
