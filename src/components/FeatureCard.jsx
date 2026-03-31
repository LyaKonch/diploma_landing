import { Link } from 'react-router';

const FeatureCard = ({ id, title, description, icon, status, onToggleStatus }) => {
  const getBadgeText = (status) => {
    if (status === 'done') return '✅ Реалізовано';
    if (status === 'planned') return '⏳ В планах';
    return '🔄 Активно';
  };

  const isDone = status === 'done';

  return (
    <article className="card feature-card animate-fade" data-status={status}>
      <div className="feature-card__header">
        {icon && <div className="feature-card__icon">{icon}</div>}
        {status && (
          <span className={`feature-card__badge feature-card__badge--${status}`}>
            {getBadgeText(status)}
          </span>
        )}
      </div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{description}</p>
      <label className="feature-card__toggle">
        <input
          type="checkbox"
          checked={isDone}
          onChange={() => onToggleStatus(id)}
        />
        <span>{isDone ? 'Позначено як виконано' : 'Позначити як виконано'}</span>
      </label>
      <Link to={`/feature/${id}`} className="feature-card__details-link">
        Детальніше →
      </Link>
    </article>
  );
};
export default FeatureCard;