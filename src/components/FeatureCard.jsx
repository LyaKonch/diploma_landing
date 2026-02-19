const FeatureCard = ({ title, description, icon, status }) => {
  const getBadgeText = (status) => {
    if (status === 'done') return '✅ Реалізовано';
    if (status === 'planned') return '⏳ В планах';
    return '🔄 Активно';
  };

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
    </article>
  );
};
export default FeatureCard;