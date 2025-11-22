import styles from "./Card.module.css";

const Card = ({ image, title, description, buttonText, onButtonClick }) => {
  return (
    <div className={styles.card}>
      <img src={image} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{description}</p>
        {buttonText && (
          <button className={styles.button} onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
