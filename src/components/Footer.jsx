import styles from "./Footer.module.css";
import qrCodeImage from "../assets/qrCode.png";
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
        <a href="#" className={styles.footerLink}>
          <FaWhatsapp /> Whatsapp
        </a>
        <a href="#" className={styles.footerLink}>
          <FaTelegram /> Telegram
        </a>
      </div>

      <div className={styles.footerSection}>
        <h3>Quick Links</h3>
        <a href="#" className={styles.footerLink}>
          <FaBox /> Products
        </a>
        <a href="#" className={styles.footerLink}>
          <FaBell /> Services
        </a>
        <a href="#" className={styles.footerLink}>
          <FaCat /> Adopt Cats
        </a>
        <a href="#" className={styles.footerLink}>
          <FaDog /> Adopt Dogs
        </a>
        <a href="#" className={styles.footerLink}>
          <FaInfo /> About Us
        </a>
      </div>

      <div className={styles.footerSection}>
        <h3>Follow Us</h3>
        <a href="#" className={styles.footerLink}>
          <FaInstagram /> Instagram
        </a>
        <a href="#" className={styles.footerLink}>
          <FaTiktok /> Tiktok
        </a>
        <a href="#" className={styles.footerLink}>
          <FaYoutube /> YouTube
        </a>
        <a href="#" className={styles.footerLink}>
          <FaFacebook /> Facebook
        </a>
      </div>

      <div className={styles.footerSection}>
        <h3>Support our mission</h3>
        <img
          className={styles.qrCode}
          src={qrCodeImage}
          alt="QR Code for donation"
        />
        <p>Pet Heaven is a 100% volunteer-run non-profit.</p>
        <p>
          Your donations go to food, shelter, and medicine for rescue animals
        </p>
      </div>
    </footer>
  );
}

export default Footer;
