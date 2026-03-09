import Hero from './Hero';
import FeatureForm from './FeatureForm';
import FeaturesList from './FeaturesList';
import ActualitySection from './ActualitySection';
import GoalsSection from './GoalsSection';
import MethodologySection from './MethodologySection';
import ResultsSection from './ResultsSection';
import ContactsSection from './ContactsSection';

function Main({
  subtitle,
  features,
  filterMode,
  onFilterModeChange,
  onToggleFeatureStatus,
  onAddFeature,
  actuality,
  goals,
  methodology,
  results,
  contacts,
}) {
  const filters = [
    { id: 'all', label: 'Усі' },
    { id: 'active', label: 'Активні' },
    { id: 'completed', label: 'Виконані' },
  ];

  return (
    <main className="main">
      <Hero subtitle={subtitle} />
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
      <ActualitySection actuality={actuality} />
      <GoalsSection goals={goals} />
      <MethodologySection methodology={methodology} />
      <ResultsSection results={results} />
      <ContactsSection contacts={contacts} />
    </main>
  );
}

export default Main;
