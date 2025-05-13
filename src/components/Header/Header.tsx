import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { background } from "./animations";
import Nav from "./Nav/Nav";
import logo from "../../assets/logo.png";

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <header
      className={`${styles.header} ${isActive ? styles.dark : styles.glass}`}
    >
      <div className={styles.bar}>
        <Link to="/">
          <motion.img src={logo} alt="Company logo" className="w-40 h-auto" />
        </Link>

        <div className="flex items-center gap-4">
          <AnimatePresence mode="wait">
            {!isActive && (
              <motion.div /* animation stays */
                key="cta-group"
                className={`flex items-center gap-4 ${styles.ctas}`} 
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25, ease: [0.45, 0, 0.2, 1] }}
              >
                <Link
                  to="/irise-home"
                  className={`${styles.btn} ${styles.green}`}
                >
                  GET AN iRISE HOME
                </Link>
                <Link
                  to="/support"
                  className={`${styles.btn} ${styles.yellow}`}
                >
                  SUPPORT
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          <div
            className={styles.el}
            onClick={() => setIsActive(!isActive)}
            aria-label="Toggle menu"
          >
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}
            />
          </div>
        </div>
      </div>

      <motion.div
        className={styles.background}
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
      />

      <AnimatePresence mode="wait">
        {isActive && <Nav closeMenu={() => setIsActive(false)} />}
      </AnimatePresence>
    </header>
  );
};

export default Header;
