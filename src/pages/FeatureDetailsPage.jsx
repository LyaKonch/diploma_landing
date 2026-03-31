import { Link, useParams } from 'react-router';

export default function FeatureDetailsPage({ features }) {
  const { id } = useParams();
  const feature = features.find((item) => String(item.id) === id);

  if (!feature) {
    return (
      <main className="main">
        <section className="container details-panel card">
          <h2>Feature не знайдено</h2>
          <p>Елемент з ID {id} відсутній у поточному списку.</p>
          <Link to="/features" className="btn btn-primary">Повернутися до списку</Link>
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
            {feature.status === 'done' ? '✅ Реалізовано' : '⏳ В планах'}
          </span>
        </div>
        <h2>{feature.title}</h2>
        <p>{feature.desc}</p>
        <p className="text-muted">ID: {feature.id}</p>
        <div className="details-panel__actions">
          <Link to="/features" className="btn btn-secondary">← Назад до списку</Link>
        </div>
      </section>
    </main>
  );
}
