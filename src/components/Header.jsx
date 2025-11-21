import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = ({ isLoggedIn, onLogout }) => {
  return (
    <header className={styles.header}>
      <h2>
        <Link to="/" className={styles.navLink}>
          Pet Heaven
        </Link>
      </h2>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link to="/products" className={styles.navLink}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/services" className={styles.navLink}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className={styles.navLink}>
              About Us
            </Link>
          </li>
          {!isLoggedIn && (
            <li>
              <Link to="/login" className={styles.navLink}>
                Log In
              </Link>
            </li>
          )}
          {/* {!isLoggedIn && (
            <li>
              <Link to="/signup" className={styles.navLink}>Sign Up</Link>
            </li>
          )} */}
          {isLoggedIn && (
            <li>
              <button onClick={onLogout} className={styles.logoutButton}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
