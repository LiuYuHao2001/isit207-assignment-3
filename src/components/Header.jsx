import "./Header.css";

function Header() {
  return (
    <header>
      <h1 className="logo">Pet Heaven</h1>
      <nav>
        <a href="#">Adopt</a>
        <a href="#">Gallery</a>
        <a href="#">Service</a>
        <a href="#">Release</a>
        <a href="#">Contact</a>
        <a href="#">About Us</a>
        <a href="#">Log In</a>
      </nav>
    </header>
  );
}

export default Header;
