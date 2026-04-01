import FeatureForm from '../components/FeatureForm';
import FeaturesList from '../components/FeaturesList';
import { useLanguage } from '../context/LanguageContext';

export default function FeaturesPage({
  features,
  filterMode,
  onFilterModeChange,
  onToggleFeatureStatus,
  onAddFeature,
}) {
  const { t } = useLanguage();

  const filters = [
    { id: 'all', label: t('filterAll') },
    { id: 'active', label: t('filterActive') },
    { id: 'completed', label: t('filterCompleted') },
  ];

  return (
    <main className="main">
      <FeatureForm onAddFeature={onAddFeature} />
      <section className="feature-filters" aria-label="Фільтри можливостей">
        <div className="container">
          <div className="feature-filters__group" role="group" aria-label="Режим відображення">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={`feature-filters__button ${filterMode === filter.id ? 'is-active' : ''}`}
                onClick={() => onFilterModeChange(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      <FeaturesList features={features} onToggleFeatureStatus={onToggleFeatureStatus} />
    </main>
  );
}
