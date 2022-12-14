import { Button, BrandLogo } from '../utils'
import styles from "../../styles/Footer.module.css";
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
          <BrandLogo fillPath="#fff" className={styles.logo} />
          <ul className={styles.socialMedia}>
            <li><a href="#facebook"><Facebook className={styles.socialMediaIcon} /></a></li>
            <li><a href="#youtube"><Youtube className={styles.socialMediaIcon} /></a></li>
            <li><a href="#twitter"><Twitter className={styles.socialMediaIcon} /></a></li>
            <li><a href="#pinterest"><Pinterest className={styles.socialMediaIcon} /></a></li>
            <li><a href="#instagram"><Instagram className={styles.socialMediaIcon} /></a></li>
          </ul>
        </div>
        <ul className={styles.list}>
          <li><a className={styles.item} href="#footerabout">About Us</a></li>
          <li><a className={styles.item} href="#footercontact">Contact</a></li>
          <li><a className={styles.item} href="#footerblog">Blog</a></li>
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