import { Link, useParams } from 'react-router';
import { useLanguage } from '../context/LanguageContext';

export default function FeatureDetailsPage({ features }) {
  const { id } = useParams();
  const { t, language } = useLanguage();
  const feature = features.find((item) => String(item.id) === id);

  if (!feature) {
    return (
      <main className="main">
        <section className="container details-panel card">
          <h2>{t('featureNotFoundTitle')}</h2>
          <p>{t('featureNotFoundDesc', { id })}</p>
          <Link to="/features" className="btn btn-primary">{t('backToList')}</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="main">
      <section className="container details-panel card">
        <div className="details-panel__top">
          <span className="feature-card__icon">{feature.icon}</span>
          <span className={`feature-card__badge feature-card__badge--${feature.status}`}>
            {feature.status === 'done' ? (language === 'uk' ? '✅ Реалізовано' : '✅ Completed') : (language === 'uk' ? '⏳ В планах' : '⏳ Planned')}
          </span>
        </div>
        <h2>{feature.title}</h2>
        <p>{feature.desc}</p>
        <p className="text-muted">ID: {feature.id}</p>
        <div className="details-panel__actions">
          <Link to="/features" className="btn btn-secondary">← {t('backToList')}</Link>
        </div>
      </section>
    </main>
  );
}
