const ResultsSection = ({ title, summary, results }) => {
  return (
    <section className="results">
      <div className="container">
        <h2 className="results__title text-center mb-8">{title}</h2>
        <div className="results__grid">
          {results.map((result, index) => (
            <div key={index} className="result-card">
              <div className="result-card__icon">{result.icon}</div>
              <h3 className="result-card__label">{result.label}</h3>
              <p className="result-card__value">{result.value}</p>
            </div>
          ))}
        </div>
        <div className="results__summary">
          <p>{summary}</p>
        </div>
      </div>
    </section>
  );
};
export default ResultsSection;
