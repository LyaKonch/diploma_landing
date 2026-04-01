import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const year = new Date().getFullYear();
  const { language } = useLanguage();

  return (
    <footer className="footer">
      <div className="container flex flex-col items-center justify-center py-4 gap-2">
        <img src={`${import.meta.env.BASE_URL}android-chrome-192x192.png`} alt="Логотип університету" className="footer__logo" />
        <small className="text-muted">© {year} {language === 'uk' ? 'Лендінг проєкту — Дипломна робота' : 'Project Landing — Diploma Project'}</small>
        <div className="footer__links flex gap-6">
          <a href="#" className="text-muted text-sm hover:text-primary-light">{language === 'uk' ? 'Конфіденційність' : 'Privacy'}</a>
          <a href="#" className="text-muted text-sm hover:text-primary-light">{language === 'uk' ? 'Умови' : 'Terms'}</a>
          <a href="#" className="text-muted text-sm hover:text-primary-light">GitHub</a>
        </div>
      </div>
    </footer>
  );
}