import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import styles from "./Footer.module.css";
import { translate } from "../animations";

const socials = [
  { icon: <FaWhatsapp />, href: "#" },
  { icon: <FaFacebookF />, href: "#" },
  { icon: <FaXTwitter />, href: "#" },
  { icon: <FaYoutube />, href: "#" },
  { icon: <FaInstagram />, href: "#" },
  { icon: <FaLinkedinIn />, href: "#" },
];

const Footer: React.FC = () => (
  <motion.footer
    className={styles.footer}
    variants={translate}
    custom={[0.3, 0] as [number, number]}
    initial="initial"
    animate="enter"
    exit="exit"
  >
    <div className={styles.left}>
      <span className={styles.label}>Get in touch</span>

      <ul className={styles.social}>
        {socials.map(({ icon, href }, i) => (
          <li key={i}>
            <a href={href} target="_blank" rel="noreferrer">
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <span className={styles.copy}>© 2021 Future Earth Sustainable Living</span>
  </motion.footer>
);

export default Footer;
