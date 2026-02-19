const FeatureCard = ({ title, description, icon }) => {
  return (
    <article className="card feature-card animate-fade">
      {icon && <div className="feature-card__icon">{icon}</div>}
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{description}</p>
    </article>
  );
};
export default FeatureCard;