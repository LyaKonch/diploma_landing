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
                <h3>Проблема</h3>
                <p>Складні інструменти моніторингу мають крутий поріг входження, а базові утиліти надають тільки сирі дані. Діагностика вимагає глибоких знань ОС та часозатратного аналізу логів вручну.</p>
              </div>
            </div>
            
            <div className="actuality__highlight">
              <span className="highlight-badge">✨</span>
              <div>
                <h3>Рішення</h3>
                <p>MCP виступає як безпечна абстракція між LLM та ОС, дозволяючи користувачеві запитати природною мовою замість навчання  команд. Система автоматично викликає дозволені інструменти та предоставляє читабельні рекомендації.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ActualitySection;
