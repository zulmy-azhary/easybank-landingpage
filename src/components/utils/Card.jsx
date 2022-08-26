import styles from "../../styles/Card.module.css";

const Card = ({ author, title, photoURL, description }) => {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImage} src={photoURL} alt="" />
      <div className={styles.cardContent}>
        <p className={styles.cardAuthor}>By {author}</p>
        <h4 className={styles.cardTitle}>{title}</h4>
        <p className={styles.cardDesc}>{description}</p>
      </div>
    </div>
  );
};

export default Card;