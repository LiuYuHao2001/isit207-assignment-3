import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSection}>
        <h3>Contact Us</h3>
        <a href="#" className={styles.footerLink}>
          Tel: +65 87654321
        </a>
        <a href="#" className={styles.footerLink}>
          Whatsapp
        </a>
        <a href="#" className={styles.footerLink}>
          Telegram
        </a>
        <a href="#" className={styles.footerLink}>
          Fax: +65 87654321
        </a>
        <a href="#" className={styles.footerLink}>
          Open 24/7
        </a>
      </div>

      <div className={styles.footerSection}>
        <h3>Quick Links</h3>
        <a href="#" className={styles.footerLink}>
          Reserve
        </a>
        <a href="#" className={styles.footerLink}>
          Rent
        </a>
        <a href="#" className={styles.footerLink}>
          Return
        </a>
        <a href="#" className={styles.footerLink}>
          Contact
        </a>
        <a href="#" className={styles.footerLink}>
          About Us
        </a>
      </div>

      <div className={styles.footerSection}>
        <h3>Follow Us</h3>
        <a href="#" className={styles.footerLink}>
          Instagram
        </a>
        <a href="#" className={styles.footerLink}>
          TikTok
        </a>
        <a href="#" className={styles.footerLink}>
          YouTube
        </a>
        <a href="#" className={styles.footerLink}>
          Facebook
        </a>
      </div>

      <div className={styles.footerSection}>
        <h3>Download our mobile app!</h3>
        <p>Available now on Android and iOS</p>
        <img
          className={styles.qrCode}
          src="images/qrcode.png"
          alt="QR Code for mobile app download"
        />
        <p>
          Scan the QR code above, or look up the Pet Heaven app in Play Store or
          Apple Store
        </p>
      </div>
    </footer>
  );
}

export default Footer;
