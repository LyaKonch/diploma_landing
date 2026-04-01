import { Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';

const FeatureCard = ({ id, title, description, icon, status, onToggleStatus }) => {
  const { t, language } = useLanguage();

  const getBadgeText = (status) => {
    if (status === 'done') return language === 'uk' ? '✅ Реалізовано' : '✅ Completed';
    if (status === 'planned') return language === 'uk' ? '⏳ В планах' : '⏳ Planned';
    return language === 'uk' ? '🔄 Активно' : '🔄 Active';
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
        <span>{isDone ? (language === 'uk' ? 'Позначено як виконано' : 'Marked as completed') : (language === 'uk' ? 'Позначити як виконано' : 'Mark as completed')}</span>
      </label>
      <Link to={`/feature/${id}`} className="feature-card__details-link">
        {t('details')} →
      </Link>
    </article>
  );
};
export default FeatureCard;