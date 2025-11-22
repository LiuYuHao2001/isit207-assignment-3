import styles from "./Grid.module.css";

const Grid = ({ children, minWidth = "350px", gap = "1.5rem" }) => {
  return (
    <section
      className={styles.grid}
      style={{
        gap: gap,
        gridTemplateColumns: `repeat(auto-fill, minmax(${minWidth}, 1fr))`,
      }}
    >
      {children}
    </section>
  );
};

export default Grid;
