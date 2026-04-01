import FeatureCard from './FeatureCard';
import { useLanguage } from '../context/LanguageContext';

const FeaturesList = ({ features, onToggleFeatureStatus }) => {
  const { t } = useLanguage();
  const isEmpty = features.length === 0;

  return (
    <section id="features" className="features" aria-labelledby="features-title">
      <div className="container">
        <h2 id="features-title" className="features__title text-center mb-8">{t('featuresSectionTitle')}</h2>
        {isEmpty ? (
          <div className="features__empty" role="status" aria-live="polite">
            {t('featuresEmpty')}
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