const Header = ({ projectTitle }) => {
  return (
    <header className="header">
      <nav aria-label="Головна навігація" className="flex items-center justify-between">
        <div className="header__logo-section">
          <img src="/android-chrome-192x192.png" alt="Логотип університету" className="header__logo" />
          <h1 className="header__title">{projectTitle}</h1>
        </div>
        <div className="header__nav flex gap-4">
          <a href="#features" className="nav-link">Можливості</a>
          <a href="#about" className="nav-link">Про проект</a>
          <a href="#goals" className="nav-link">Мета</a>
          <a href="#contacts" className="nav-link">Контакти</a>
        </div>
      </nav>
    </header>
  );
};
export default Header;