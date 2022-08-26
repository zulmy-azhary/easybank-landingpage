import logo from "../../assets/logo.svg";
import styles from "../../styles/Navbar.module.css";
import { Button } from "../utils";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <img src={logo} alt="brand" />
      </div>
      <ul className={styles.navItem}>
        <li><a className={styles.navLink} href="#home">Home</a></li>
        <li><a className={styles.navLink} href="#about">About</a></li>
        <li><a className={styles.navLink} href="#contact">Contact</a></li>
        <li><a className={styles.navLink} href="#blog">Blog</a></li>
        <li><a className={styles.navLink} href="#careers">Careers</a></li>
      </ul>
      <Button>Request Invite</Button>
    </nav>
  );
};

export default Navbar;