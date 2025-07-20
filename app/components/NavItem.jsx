import { motion } from "motion/react";
import { Star, Github, Linkedin, Mail, Download, User, MoveLeft } from "lucide-react";
import Link from "next/link";


const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    },
    display: 'flex'
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    },
    display: 'none'
  }
};

const links = [
    { id: 0, icon: <Star size={36} strokeWidth={1} color="#3f3f46" />, name: 'Projects', link: '/projects' },
    { id: 1, icon: <Github size={36} strokeWidth={1} color="#3f3f46" />, name: 'GitHub', link: 'https://github.com/jamesslinger' },
    { id: 2, icon: <Linkedin size={36} strokeWidth={1} color="#3f3f46" />, name: 'LinkedIn', link: 'https://www.linkedin.com/in/jamesslinger/' },
    { id: 3, icon: <Mail size={36} strokeWidth={1} color="#3f3f46" />, name: 'Email Me', link: 'mailto:jamesxslinger@gmail.com' },
    { id: 4, icon: <Download size={36} strokeWidth={1} color="#3f3f46" />, name: 'Get CV', link: '/contact' },
    { id: 5, icon: <User size={36} strokeWidth={1} color="#3f3f46" />, name: 'Contact Me', link: '/contact' },
    { id: 6, icon: <MoveLeft size={36} strokeWidth={1} color="#3f3f46" />, name: 'Back', link: '/' },
  ]


export const NavItem = ({ i, toggle }) => {
    const style = { border: '2px solid #3f3f46' };
    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            key={links[i].id}
        >
            <Link onClick={toggle} href={links[i].link} className="icon-holder" style={style}>{links[i].icon}</Link>
            <Link onClick={toggle} href={links[i].link} className="text-holder" style={style}>{links[i].name}</Link>
        </motion.li>
    );
};