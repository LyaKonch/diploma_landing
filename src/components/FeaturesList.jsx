import FeatureCard from './FeatureCard';

const FeaturesList = ({ features, onToggleFeatureStatus }) => {
  const isEmpty = features.length === 0;

  return (
    <section id="features" className="features" aria-labelledby="features-title">
      <div className="container">
        <h2 id="features-title" className="features__title text-center mb-8">Основні можливості проєкту</h2>
        {isEmpty ? (
          <div className="features__empty" role="status" aria-live="polite">
            За даним фільтром немає features.
          </div>
        ) : (
          <div className="features__grid">
            {features.map((feature) => (
              <FeatureCard 
                key={feature.id} 
                id={feature.id}
                title={feature.title} 
                description={feature.desc}
                icon={feature.icon}
                status={feature.status}
                onToggleStatus={onToggleFeatureStatus}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default FeaturesList;