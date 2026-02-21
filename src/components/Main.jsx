import Hero from './Hero';
import FeaturesList from './FeaturesList';
import ActualitySection from './ActualitySection';
import GoalsSection from './GoalsSection';
import MethodologySection from './MethodologySection';
import ResultsSection from './ResultsSection';
import ContactsSection from './ContactsSection';

function Main({ subtitle, features, actuality, goals, methodology, results, contacts }) {
  return (
    <main className="main">
      <Hero subtitle={subtitle} />
      <FeaturesList features={features} />
      <ActualitySection actuality={actuality} />
      <GoalsSection goals={goals} />
      <MethodologySection methodology={methodology} />
      <ResultsSection results={results} />
      <ContactsSection contacts={contacts} />
    </main>
  );
}

export default Main;
