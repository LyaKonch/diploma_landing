import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <main className="main">
      <section className="container details-panel card text-center">
        <h2>404 — Сторінку не знайдено</h2>
        <p>Маршрут, який ви відкрили, не існує в цьому застосунку.</p>
        <Link to="/" className="btn btn-primary">На головну</Link>
      </section>
    </main>
  );
}
