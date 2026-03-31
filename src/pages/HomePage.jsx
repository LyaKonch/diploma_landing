import { Link } from 'react-router';
import Hero from '../components/Hero';

export default function HomePage({ subtitle }) {
  return (
    <main className="main">
      <Hero subtitle={subtitle} />
      <section className="home-shortcuts">
        <div className="container">
          <h2 className="text-center mb-6">Навігація по застосунку</h2>
          <div className="features__grid">
            <article className="card">
              <h3>Список можливостей</h3>
              <p>Перегляд, фільтрація, перемикання статусу та перехід до детальної сторінки елемента.</p>
              <Link to="/features" className="btn btn-primary">Перейти до можливостей</Link>
            </article>
            <article className="card">
              <h3>Про проєкт</h3>
              <p>Актуальність, методологія, цілі, очікувані результати та контактна інформація.</p>
              <Link to="/about" className="btn btn-secondary">Відкрити сторінку про проєкт</Link>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
