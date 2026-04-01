import { Link } from 'react-router';
import Hero from '../components/Hero';
import { useLanguage } from '../context/LanguageContext';

export default function HomePage({ subtitle }) {
  const { t } = useLanguage();

  return (
    <main className="main">
      <Hero subtitle={subtitle} />
      <section className="home-shortcuts">
        <div className="container">
          <h2 className="text-center mb-6">{t('homeNavTitle')}</h2>
          <div className="features__grid">
            <article className="card">
              <h3>{t('featuresCardTitle')}</h3>
              <p>{t('featuresCardDesc')}</p>
              <Link to="/features" className="btn btn-primary">{t('featuresCardAction')}</Link>
            </article>
            <article className="card">
              <h3>{t('aboutCardTitle')}</h3>
              <p>{t('aboutCardDesc')}</p>
              <Link to="/about" className="btn btn-secondary">{t('aboutCardAction')}</Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
