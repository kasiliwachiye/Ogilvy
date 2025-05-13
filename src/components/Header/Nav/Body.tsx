import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./Body.module.css";
import { blur, translate } from "../animations";

type SubLink = { title: string; href: string };
type Category = { title: string; links: SubLink[] };

interface Props {
  menu: Category[];
  hoveredIndex: number | null;
  setHoveredIndex: (i: number | null) => void;
  onNavigate: () => void /* NEW */;
}

const Body: React.FC<Props> = ({
  menu,
  hoveredIndex,
  setHoveredIndex,
  onNavigate,
}) => {
  const chars = (word: string) =>
    word.split("").map((c, i) => (
      <motion.span
        key={`${c}-${i}`}
        variants={translate}
        custom={[i * 0.015, (word.length - i) * 0.01] as [number, number]}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {c}
      </motion.span>
    ));

  return (
    <div className={styles.body}>
      {menu.map((cat, idx) => (
        <div
          key={cat.title}
          className={styles.column}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Link
            to={
              cat.title === "Home"
                ? "/" //
                : `/${cat.title.toLowerCase().replace(/\s+/g, "-")}`
            }
            onClick={onNavigate}
          >
            <motion.h3
              className={styles.heading}
              variants={blur}
              animate={
                hoveredIndex !== null && hoveredIndex !== idx
                  ? "open"
                  : "closed"
              }
            >
              {chars(cat.title)}
            </motion.h3>
          </Link>

          <ul className={styles.list}>
            {cat.links.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  onClick={onNavigate}
                  className="font-extralight"
                >
                  {l.title.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Body;
