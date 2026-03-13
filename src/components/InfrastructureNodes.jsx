import { useEffect, useState } from 'react';

function InfrastructureNodes() {
  const [nodes, setNodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    async function fetchNodes() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
          throw new Error(`Помилка запиту: ${response.status}`);
        }

        const data = await response.json();

        if (!isCancelled) {
          setNodes(data);
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err.message || 'Невідома помилка при завантаженні вузлів.');
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    }

    fetchNodes();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <section className="nodes" aria-labelledby="nodes-title">
      <div className="container">
        <div className="nodes__head">
          <h2 id="nodes-title" className="nodes__title">Підключені вузли інфраструктури</h2>
          <p className="nodes__description">
            Секція імітує отримання клієнтських вузлів через API-шар MCP сервера.
          </p>
        </div>

        {loading && (
          <div className="nodes__state" role="status" aria-live="polite">
            ⏳ Завантаження вузлів...
          </div>
        )}

        {error && (
          <div className="nodes__state nodes__state--error" role="alert">
            ⚠️ Не вдалося отримати дані: {error}
          </div>
        )}

        {!loading && !error && (
          <div className="nodes__grid">
            {nodes.map((node) => (
              <article key={node.id} className="nodes-card">
                <div className="nodes-card__header">
                  <h3 className="nodes-card__title">🖥️ {node.username}</h3>
                  <span className="nodes-card__status">● Connected</span>
                </div>
                <p className="nodes-card__line">
                  <strong>Host:</strong> {node.name}
                </p>
                <p className="nodes-card__line">
                  <strong>Endpoint:</strong> {node.website}
                </p>
                <p className="nodes-card__line">
                  <strong>Contact:</strong> {node.email}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default InfrastructureNodes;
