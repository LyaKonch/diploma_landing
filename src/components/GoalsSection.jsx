const GoalsSection = ({ goals }) => {
  return (
    <section id="goals" className="goals">
      <div className="container">
        <h2 className="goals__title text-center mb-8">Мета та завдання проекту</h2>
        <div className="goals__list">
          {goals.map((goal, index) => (
            <div key={index} className="goal-item">
              <div className="goal-item__number">{index + 1}</div>
              <div className="goal-item__content">
                <p className="goal-item__text">{goal}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default GoalsSection;
