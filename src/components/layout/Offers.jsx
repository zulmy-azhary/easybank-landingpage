import styles from "../../styles/Offers.module.css";
import { ReactComponent as OnlineBanking } from "../../assets/icon-online.svg";
import { ReactComponent as SimpleBudgeting } from "../../assets/icon-budgeting.svg";
import { ReactComponent as FastOnboarding } from "../../assets/icon-onboarding.svg";
import { ReactComponent as OpenAPI } from "../../assets/icon-api.svg";
import { OffersItem } from "../utils";

const Offers = () => {
	return (
		<section id="offers" className={styles.offersContainer}>
			<div className={styles.offersDescription}>
				<h2>Why choose Easybank?</h2>
				<p>
					We leverage Open Banking to turn your bank account into your financial hub.
					Control your finances like never before.
				</p>
			</div>
			<div className={styles.offersList}>
				<OffersItem
					className={styles.offersItem}
					icon={<OnlineBanking className={styles.offersIcon} />}
					title={"Online Banking"}
					description={
						"Our modern web and mobile applications allow you to keep track of you finances wherever you are in the world."
					}
				/>
				<OffersItem
					className={styles.offersItem}
					icon={<SimpleBudgeting className={styles.offersIcon} />}
					title={"Simple Budgeting"}
					description={
						"See exactly where your money goes each month. receive notifications when you're close to your hitting limits."
					}
				/>
				<OffersItem
					className={styles.offersItem}
					icon={<FastOnboarding className={styles.offersIcon} />}
					title={"Fast Onboarding"}
					description={
						"We don't do branches. Open your account in minutes online and start taking control of your finances right away."
					}
				/>
				<OffersItem
					className={styles.offersItem}
					icon={<OpenAPI className={styles.offersIcon} />}
					title={"Open API"}
					description={
						"Manage your savings, investments, pension, and much more fron one account. Tracking your money has never been easier."
					}
				/>
			</div>
		</section>
	);
};

export default Offers;
