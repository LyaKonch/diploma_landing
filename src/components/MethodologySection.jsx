const MethodologySection = ({ methodology }) => {
  return (
    <section className="methodology">
      <div className="container">
        <h2 className="methodology__title text-center mb-8">{methodology.title}</h2>
        <div className="methodology__grid">
          {methodology.approaches.map((approach, index) => (
            <div key={index} className="methodology-card">
              <div className="methodology-card__icon">
                {index === 0 && '🧩'}
                {index === 1 && '🧪'}
                {index === 2 && '🔗'}
                {index === 3 && '📚'}
              </div>
              <p className="methodology-card__text">{approach}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default MethodologySection;
