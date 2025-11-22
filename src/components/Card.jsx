import styles from "./Card.module.css";

const Card = ({
  image,
  title,
  description,
  buttonText,
  onButtonClick,
  size,
  imageHeight,
}) => {
  const cardSize = size || "medium";
  const finalImageHeight = imageHeight || "160px";

  return (
    <div
      className={`${styles.card} ${styles[cardSize]}`}
      style={{
        "--image-height": finalImageHeight,
      }}
    >
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>
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
