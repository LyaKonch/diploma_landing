import FeatureCard from './FeatureCard';

const FeaturesList = ({ features }) => {
  return (
    <section id="features" className="features" aria-labelledby="features-title">
      <div className="container">
        <h2 id="features-title" className="features__title text-center mb-8">Основні можливості (Goals)</h2>
        <div className="features__grid">
          {features.map((feature) => (
            <FeatureCard 
              key={feature.id} 
              title={feature.title} 
              description={feature.desc}
              icon={feature.icon}
              status={feature.status}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeaturesList;