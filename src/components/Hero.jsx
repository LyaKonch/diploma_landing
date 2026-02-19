const Hero = () => {
  return (
    <section className="hero">
      <div className="container text-center">
        <div className="hero__content">
          <h1 className="hero__title">Розробка MCP сервера для моніторингу та управління інфраструктурою</h1>
          <h2 className="hero__subtitle">Development of a MCP Server for Infrastructure Management and Monitoring</h2>
          <p className="hero__description">
            Модульний та безпечний сервер для управління доступом до файлової системи, 
            аналізу безпеки та моніторингу системних ресурсів.
          </p>
          <div className="hero__cta flex gap-4 justify-center mt-8">
            <button className="btn btn-primary">Дізнатися більше</button>
            <button className="btn btn-secondary">Переглянути код</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;