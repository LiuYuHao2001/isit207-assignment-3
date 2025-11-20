import styles from "./Card.module.css";

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className={styles.card}>
      {imageUrl && <img src={imageUrl} alt={title} className={styles.image} />}
      <div className={styles.content}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
};

export default Card;
