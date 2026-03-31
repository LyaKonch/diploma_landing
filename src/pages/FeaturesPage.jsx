import FeatureForm from '../components/FeatureForm';
import FeaturesList from '../components/FeaturesList';

export default function FeaturesPage({
  features,
  filterMode,
  onFilterModeChange,
  onToggleFeatureStatus,
  onAddFeature,
}) {
  const filters = [
    { id: 'all', label: 'Усі' },
    { id: 'active', label: 'Активні' },
    { id: 'completed', label: 'Виконані' },
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
