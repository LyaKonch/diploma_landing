import ActualitySection from '../components/ActualitySection';
import GoalsSection from '../components/GoalsSection';
import MethodologySection from '../components/MethodologySection';
import ResultsSection from '../components/ResultsSection';
import ContactsSection from '../components/ContactsSection';

export default function AboutPage({ actuality, goals, methodology, results, contacts }) {
  return (
    <main className="main">
      <ActualitySection actuality={actuality} />
      <GoalsSection goals={goals} />
      <MethodologySection methodology={methodology} />
      <ResultsSection results={results} />
      <ContactsSection contacts={contacts} />
    </main>
  );
}
