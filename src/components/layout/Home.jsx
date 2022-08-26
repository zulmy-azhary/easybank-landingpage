import styles from "../../styles/Home.module.css";
import { ReactComponent as BgDesktop } from "../../assets/bg-intro-desktop.svg";
// import { ReactComponent as BgMobile } from "../../assets/bg-intro-mobile.svg";
import logo from "../../assets/image-mockups.png";
import { Button } from "../utils";

const Home = () => {
  return (
    <section className={styles.homeContainer}>
      <div className={styles.homeContent}>
        <h1>Next generation digital banking</h1>
        <p style={{ marginBottom: "1.5rem" }}>Take your financial line online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
        <Button>Request Invite</Button>
      </div>
      <BgDesktop className={styles.homeBackground} />
      <img src={logo} alt="mockups" className={styles.imgMockups} />
    </section>
  )
}

export default Home