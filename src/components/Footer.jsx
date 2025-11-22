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
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerSection}>
          <h3>Contact Us</h3>
          <a href="tel:+6587654321" className={styles.footerLink}>
            <FaPhoneAlt /> Tel: +65 87654321
          </a>
          <a href="https://whatsapp.com" className={styles.footerLink}>
            <FaWhatsapp /> WhatsApp
          </a>
          <a href="https://telegram.com" className={styles.footerLink}>
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
          <a href="https://instagram.com" className={styles.footerLink}>
            <FaInstagram /> Instagram
          </a>
          <a href="https://tiktok.com" className={styles.footerLink}>
            <FaTiktok /> TikTok
          </a>
          <a href="https://youtube.com" className={styles.footerLink}>
            <FaYoutube /> YouTube
          </a>
          <a href="https://facebook.com" className={styles.footerLink}>
            <FaFacebook /> Facebook
          </a>
        </div>

        <div className={styles.donateSurrender}>
          <h3>Support Our Mission</h3>
          <button className={styles.donateButton}>Donate Now</button>
          <p>Pet Heaven is a 100% volunteer-run non-profit.</p>
          <p>
            Your donations go to food, shelter, and medicine for rescue animals.
          </p>
          <Link to="/surrender">
            <button className={styles.surrenderButton}>Surrender a Pet</button>
          </Link>
          <p>
            If you have a pet you can no longer care for, we will take them in.
          </p>
          <p>Surrendering a pet may affect future adoption eligibility.</p>
        </div>
      </footer>

      <div className={styles.footerBottom}>
        <div className={styles.footerBottomContent}>
          <p>&copy; {currentYear} Pet Heaven</p>
          <div className={styles.footerBottomLinks}>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
