import { useLanguage } from '../context/LanguageContext';

const Hero = ({ subtitle }) => {
  const { language } = useLanguage();

  return (
    <section className="hero">
      <div className="container text-center">
        <div className="hero__content">
          <h1 className="hero__title">{language === 'uk' ? 'Розробка MCP сервера для моніторингу та управління інфраструктурою' : 'Development of an MCP Server for Infrastructure Management and Monitoring'}</h1>
          <h2 className="hero__subtitle">{language === 'uk' ? 'Клієнтські вебзастосунки на React.js' : 'Client-side web apps with React.js'}</h2>
          <p className="hero__description">
            {subtitle}
          </p>
          <div className="hero__cta flex gap-4 justify-center mt-8">
            <button className="btn btn-primary">{language === 'uk' ? 'Дізнатися більше' : 'Learn more'}</button>
            <button className="btn btn-secondary">{language === 'uk' ? 'Переглянути код' : 'View code'}</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;