import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">🎨 Web Design Guide</h1>
      <nav className="nav">
        <a href="#">Головна</a>
        <a href="#">Уроки</a>
        <a href="#">Про нас</a>
      </nav>
    </header>
  );
};

export default Header;
