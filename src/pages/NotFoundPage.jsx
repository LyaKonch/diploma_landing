import { Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';

export default function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <main className="main">
      <section className="container details-panel card text-center">
        <h2>{t('notFoundTitle')}</h2>
        <p>{t('notFoundDesc')}</p>
        <Link to="/" className="btn btn-primary">{t('toHome')}</Link>
      </section>
    </main>
  );
}
