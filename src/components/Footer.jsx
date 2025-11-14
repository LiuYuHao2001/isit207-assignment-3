import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div>
        <h3>Contact Us</h3>
        <a href="#">Tel: +65 87654321</a>
        <a href="#">Whatsapp</a>
        <a href="#">Telegram</a>
        <a href="#">Fax: +65 87654321</a>
        <a href="#">Open 24/7</a>
      </div>

      <div>
        <h3>Quick Links</h3>
        <a href="#">Reserve</a>
        <a href="#">Rent</a>
        <a href="#">Return</a>
        <a href="#">Contact</a>
        <a href="#">About Us</a>
      </div>

      <div>
        <h3>Follow Us</h3>
        <a href="#">Instagram</a>
        <a href="#">TikTok</a>
        <a href="#">YouTube</a>
        <a href="#">Facebook</a>
      </div>

      <div>
        <h3>Download our mobile app!</h3>
        <p>Available now on Android and iOS</p>
        <img class="qr-code" src="images/qrcode.png" alt="" />
        <p>
          Scan the QR code above, or look up the AZoom app in Play Store or
          Apple Store
        </p>
      </div>
    </footer>
  );
}

export default Footer;
