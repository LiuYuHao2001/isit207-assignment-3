import { useState, useEffect } from "react";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = saved ? JSON.parse(saved) : prefersDark;

    setIsDark(initialTheme);
    document.documentElement.classList.toggle("dark-mode", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("darkMode", JSON.stringify(newTheme));
    document.documentElement.classList.toggle("dark-mode", newTheme);
  };

  return (
    <button onClick={toggleTheme} className={styles.themeToggle}>
      <div className={styles.toggleTrack}>
        <div className={`${styles.toggleThumb} ${isDark ? styles.dark : ""}`}>
          {isDark ? "🌙" : "☀️"}
        </div>
      </div>
      <span className={styles.toggleLabel}>{isDark ? "Dark" : "Light"}</span>
    </button>
  );
};

export default ThemeToggle;
