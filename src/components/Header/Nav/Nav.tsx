import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Nav.module.css";
import { height } from "../animations";
import Body from "./Body";
import Footer from "./Footer";

interface NavProps {
  closeMenu: () => void;
}

type SubLink = { title: string; href: string };
type Category = { title: string; links: SubLink[] };

const menu: Category[] = [
  {
    title: "Home",
    links: [
      { title: "Our Vision / Promise", href: "/vision" },
      { title: "Benefits", href: "/benefits" },
      { title: "Pathway", href: "/pathway" },
      { title: "Ongoing Projects", href: "/projects" },
      { title: "Partners", href: "/partners" },
    ],
  },
  {
    title: "Sustainable Living",
    links: [
      { title: "About Sustainable Living", href: "/sustainable-living/about" },
      { title: "Product Introduction", href: "/sustainable-living/products" },
    ],
  },
  {
    title: "Our Story",
    links: [
      { title: "What We Do", href: "/story/what-we-do" },
      { title: "Who We Are", href: "/story/who-we-are" },
      { title: "Our Team", href: "/story/team" },
      { title: "Advisory Board", href: "/story/advisory-board" },
      { title: "Our Partners", href: "/story/partners" },
      { title: "News Updates", href: "/story/news" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { title: "Regional Contact Us", href: "/contact/regions" },
      { title: "Contact Us Form", href: "/contact/form" },
    ],
  },
];

const Nav: React.FC<NavProps> = ({ closeMenu }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.nav
      className={styles.nav}
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className={styles.wrapper}>
        <Body
          menu={menu}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
          onNavigate={closeMenu}
        />
        <Footer />
      </div>
    </motion.nav>
  );
};

export default Nav;
