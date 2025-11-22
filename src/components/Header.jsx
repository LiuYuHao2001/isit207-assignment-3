import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import styles from "./Header.module.css";

const Header = ({ isLoggedIn, onLogout }) => {
  return (
    <header className={styles.header}>
      <h2>
        <NavLink to="/" className={styles.navLink} end>
          Pet Heaven
        </NavLink>
      </h2>
      <nav>
        <ul className={styles.navList}>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              About Us
            </NavLink>
          </li>
          {!isLoggedIn && (
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
              >
                Log In
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={onLogout} className={styles.logoutButton}>
                Logout
              </button>
            </li>
          )}
          <ThemeToggle />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
