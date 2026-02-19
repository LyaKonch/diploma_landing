const Header = () => {
  return (
    <header className="header">
      <nav aria-label="Головна навігація" className="flex items-center justify-between">
        <h1 className="header__title">Лендінг Диплому</h1>
        <div className="header__nav flex gap-4">
          <a href="#features" className="nav-link">Можливості</a>
          <a href="#about" className="nav-link">Про проект</a>
        </div>
      </nav>
    </header>
  );
};
export default Header;