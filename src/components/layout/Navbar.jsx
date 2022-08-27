import { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import styles from "../../styles/Navbar.module.css";
import { Button } from "../utils";
import { ReactComponent as HamburgerMenu } from "../../assets/icon-hamburger.svg";
import { ReactComponent as CloseMenu } from "../../assets/icon-close.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const isMobile = useMediaQuery("(max-width: 375px)");
  console.log(isMobile);

  useEffect(() => {
    if (isMobile) return setToggle(false);
    setToggle(true);
  }, [isMobile]);

  return (
    <nav className={styles.nav}>
      <img src={logo} alt="brand" />
      {toggle && <ul className={styles.item}>
        <li><a className={styles.link} href="#home">Home</a></li>
        <li><a className={styles.link} href="#about">About</a></li>
        <li><a className={styles.link} href="#contact">Contact</a></li>
        <li><a className={styles.link} href="#blog">Blog</a></li>
        <li><a className={styles.link} href="#careers">Careers</a></li>
      </ul>}
      {!isMobile ? (
        <Button>Request Invite</Button>
      ) : (
        !toggle ? (
          <HamburgerMenu onClick={() => setToggle(prev => !prev)} />
        ) : (
          <CloseMenu onClick={() => setToggle(prev => !prev)} />
        )
      )}
    </nav>
  );
};

export default Navbar;