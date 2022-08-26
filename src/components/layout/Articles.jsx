import styles from "../../styles/Articles.module.css";
import { Card } from "../utils";
import imgCurrency from "../../assets/image-currency.jpg";
import imgRestaurant from "../../assets/image-restaurant.jpg";
import imgPlane from "../../assets/image-plane.jpg";
import imgConfetti from "../../assets/image-confetti.jpg";

const Articles = () => {
	return (
		<section className={styles.container}>
			<h2 className={styles.title}>Latest Articles</h2>
			<div className={styles.list}>
				<Card
					author={"Claire Robinson"}
					title={"Receive money in any currency with no fees"}
					photoURL={imgCurrency}
					description={
						"The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single..."
					}
				/>
				<Card
					author={"Wilson Hutton"}
					title={"Treat yourself without worrying about money"}
					photoURL={imgRestaurant}
					description={
						"Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you..."
					}
				/>
				<Card
					author={"Wilson Hutton"}
					title={"Take your Easybank card wherever you go"}
					photoURL={imgPlane}
					description={
						"We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you..."
					}
				/>
				<Card
					author={"Claire Robinson"}
					title={"Our invite-only Beta accounts are now live!"}
					photoURL={imgConfetti}
					description={
						"After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site..."
					}
				/>
			</div>
		</section>
	);
};

export default Articles;
