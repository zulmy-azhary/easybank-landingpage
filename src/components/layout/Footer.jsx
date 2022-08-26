import { Button } from '../utils'
import styles from "../../styles/Footer.module.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Facebook } from "../../assets/icon-facebook.svg";
import { ReactComponent as Youtube } from "../../assets/icon-youtube.svg";
import { ReactComponent as Twitter } from "../../assets/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../../assets/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../../assets/icon-instagram.svg";


const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contact}>
          <Logo />
          <div className={styles.socialMedia}>
            <Facebook />
            <Youtube />
            <Twitter />
            <Pinterest />
            <Instagram />
          </div>
        </div>
        <ul className={styles.link}>
          <li><a className={styles.item} href="#footerabout">About Us</a></li>
          <li><a className={styles.item} href="#footercontact">Contact</a></li>
          <li><a className={styles.item} href="#footerblog">Blog</a></li>
        </ul>
        <ul className={styles.link}>
          <li><a className={styles.item} href="#footercareers">Careers</a></li>
          <li><a className={styles.item} href="#footersupport">Support</a></li>
          <li><a className={styles.item} href="#footerprivacy">Privacy Policy</a></li>
        </ul>
      </div>
      <div className={styles.others}>
        <Button>Request Invite</Button>
        <p className={styles.copyright}>&copy; Easybank. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer