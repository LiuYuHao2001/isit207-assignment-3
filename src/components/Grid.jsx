import styles from "./Grid.module.css";

const Grid = ({
  children,
  minWidth = "350px",
  gap = "1.5rem",
  cardSize = "medium", // 'small' | 'medium' | 'large' | 'icon'
  imageHeight = "160px", // Custom image height
}) => {
  return (
    <section
      className={styles.grid}
      style={{
        gap: gap,
        gridTemplateColumns: `repeat(auto-fill, minmax(${minWidth}, 1fr))`,
        "--card-size": cardSize,
        "--image-height": imageHeight,
      }}
    >
      {children}
    </section>
  );
};

export default Grid;
