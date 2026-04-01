import { NavLink } from 'react-router';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const Header = ({ projectTitle, completedFeaturesCount, totalFeaturesCount }) => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="header">
      <nav aria-label="Головна навігація" className="flex items-center justify-between">
        <div className="header__logo-section">
          <img src={`${import.meta.env.BASE_URL}android-chrome-192x192.png`} alt="Логотип університету" className="header__logo" />
          <h1 className="header__title">{projectTitle}</h1>
          <span className="header__counter">
            {t('ready')}: {completedFeaturesCount}/{totalFeaturesCount}
          </span>
        </div>
        <div className="header__right-panel flex gap-3">
          <div className="header__nav flex gap-4">
            <NavLink to="/" end className="nav-link">{t('home')}</NavLink>
            <NavLink to="/features" className="nav-link">{t('features')}</NavLink>
            <NavLink to="/about" className="nav-link">{t('about')}</NavLink>
          </div>
          <div className="header__controls flex gap-2">
            <button
              type="button"
              className="header__control-btn"
              onClick={toggleTheme}
              aria-label={theme === 'light' ? t('switchToDark') : t('switchToLight')}
            >
              {theme === 'light' ? `🌙 ${t('themeDark')}` : `☀️ ${t('themeLight')}`}
            </button>
            <button
              type="button"
              className="header__control-btn"
              onClick={toggleLanguage}
              aria-label={t('language')}
            >
              {language === 'uk' ? 'EN' : 'UA'}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;