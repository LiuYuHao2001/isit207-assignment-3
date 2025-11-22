import { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import styles from "./Header.module.css";

const Header = ({ isLoggedIn, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <h2>
        <NavLink
          to="/"
          className={styles.navLink}
          end
          onClick={closeMobileMenu}
        >
          Pet Heaven
        </NavLink>
      </h2>

      {/* Mobile Menu Button */}
      <button
        className={styles.mobileMenuButton}
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation */}
      <nav
        className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ""}`}
      >
        <ul className={styles.navList}>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
              onClick={closeMobileMenu}
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
              onClick={closeMobileMenu}
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
              onClick={closeMobileMenu}
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
                onClick={closeMobileMenu}
              >
                Log In
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button
                onClick={() => {
                  onLogout();
                  closeMobileMenu();
                }}
                className={styles.logoutButton}
              >
                Logout
              </button>
            </li>
          )}
          <li className={styles.themeToggleMobile}>
            <ThemeToggle />
          </li>
        </ul>
      </nav>

      {/* Desktop Theme Toggle */}
      <div className={styles.themeToggleDesktop}>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
