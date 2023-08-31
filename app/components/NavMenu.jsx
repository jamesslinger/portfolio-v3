import { motion } from "framer-motion";
import { NavItem } from "./NavItem";


const variants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  }
};

export const NavMenu = ({ toggle }) => (
  <motion.ul variants={variants}>
    {itemIds.map(i => (
      <NavItem i={i} key={i} toggle={toggle} />
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4, 5, 6];
