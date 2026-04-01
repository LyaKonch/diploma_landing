import ActualitySection from '../components/ActualitySection';
import GoalsSection from '../components/GoalsSection';
import MethodologySection from '../components/MethodologySection';
import ResultsSection from '../components/ResultsSection';
import ContactsSection from '../components/ContactsSection';

export default function AboutPage({
  actuality,
  goalsTitle,
  goals,
  methodology,
  resultsTitle,
  resultsSummary,
  results,
  contacts,
}) {
  return (
    <main className="main">
      <ActualitySection actuality={actuality} />
      <GoalsSection title={goalsTitle} goals={goals} />
      <MethodologySection methodology={methodology} />
      <ResultsSection title={resultsTitle} summary={resultsSummary} results={results} />
      <ContactsSection contacts={contacts} />
    </main>
  );
}
