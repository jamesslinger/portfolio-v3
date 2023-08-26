'use client';

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { NavToggle } from "./NavToggle";
import { NavMenu } from "./NavMenu";


const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 400,
      damping: 40
    },
  }
};

const navVar = {
  open: {
    zIndex: 22
  },
  close: {
    zIndex: 1
  }
}

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
      variants={navVar}
    >
      <motion.div className="background backdrop-blur-md my-0" variants={sidebar} />
      <NavMenu toggle={() => setIsOpen(isOpen => !isOpen)} />
      <NavToggle toggle={() => setIsOpen(isOpen => !isOpen)} />
    </motion.nav>
  );
};