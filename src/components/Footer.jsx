import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import {
  FaPhoneAlt,
  FaTelegram,
  FaBox,
  FaBell,
  FaCat,
  FaDog,
  FaInfo,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSection}>
        <h3>Contact Us</h3>
        <a href="#" className={styles.footerLink}>
          <FaPhoneAlt /> Tel: +65 87654321
        </a>
        <a href="whatsapp.com" className={styles.footerLink}>
          <FaWhatsapp /> Whatsapp
        </a>
        <a href="telegram.com" className={styles.footerLink}>
          <FaTelegram /> Telegram
        </a>
      </div>

      <div className={styles.footerSection}>
        <h3>Quick Links</h3>
        <Link to="/products" className={styles.footerLink}>
          <FaBox /> Products
        </Link>
        <Link to="/services" className={styles.footerLink}>
          <FaBell /> Services
        </Link>
        <Link to="/cats" className={styles.footerLink}>
          <FaCat /> Adopt Cats
        </Link>
        <Link to="/dogs" className={styles.footerLink}>
          <FaDog /> Adopt Dogs
        </Link>
        <Link to="/aboutus" className={styles.footerLink}>
          <FaInfo /> About Us
        </Link>
      </div>

      <div className={styles.footerSection}>
        <h3>Follow Us</h3>
        <a href="instagram.com" className={styles.footerLink}>
          <FaInstagram /> Instagram
        </a>
        <a href="tiktok.com" className={styles.footerLink}>
          <FaTiktok /> Tiktok
        </a>
        <a href="youtube.com" className={styles.footerLink}>
          <FaYoutube /> YouTube
        </a>
        <a href="facebook.com" className={styles.footerLink}>
          <FaFacebook /> Facebook
        </a>
      </div>

      <div className={styles.footerSection}>
        <h3>Support our mission</h3>
        <button className={styles.donateButton}>Donate Now</button>
        <p>Pet Heaven is a 100% volunteer-run non-profit.</p>
        <p>
          Your donations go to food, shelter, and medicine for rescue animals
        </p>
      </div>
    </footer>
  );
}

export default Footer;
