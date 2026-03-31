import { NavLink } from 'react-router';

const Header = ({ projectTitle, completedFeaturesCount, totalFeaturesCount }) => {
  return (
    <header className="header">
      <nav aria-label="Головна навігація" className="flex items-center justify-between">
        <div className="header__logo-section">
          <img src={`${import.meta.env.BASE_URL}android-chrome-192x192.png`} alt="Логотип університету" className="header__logo" />
          <h1 className="header__title">{projectTitle}</h1>
          <span className="header__counter">
            Готово: {completedFeaturesCount}/{totalFeaturesCount}
          </span>
        </div>
        <div className="header__nav flex gap-4">
          <NavLink to="/" end className="nav-link">Головна</NavLink>
          <NavLink to="/features" className="nav-link">Можливості</NavLink>
          <NavLink to="/about" className="nav-link">Про проєкт</NavLink>
        </div>
      </nav>
    </header>
  );
};
export default Header;