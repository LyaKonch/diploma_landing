const ActualitySection = ({ actuality }) => {
  return (
    <section id="about" className="actuality">
      <div className="container">
        <div className="actuality__content">
          <h2 className="actuality__title">{actuality.title}</h2>
          <p className="actuality__description">
            {actuality.description}
          </p>
          
          <div className="actuality__highlights">
            <div className="actuality__highlight">
              <span className="highlight-badge">⚠️</span>
              <div>
                <h3>{actuality.problemTitle}</h3>
                <p>{actuality.problemText}</p>
              </div>
            </div>
            
            <div className="actuality__highlight">
              <span className="highlight-badge">✨</span>
              <div>
                <h3>{actuality.solutionTitle}</h3>
                <p>{actuality.solutionText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ActualitySection;
