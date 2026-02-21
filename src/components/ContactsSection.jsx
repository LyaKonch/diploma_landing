const ContactsSection = ({ contacts }) => {
  return (
    <section id="contacts" className="contacts">
      <div className="container">
        <h2 className="contacts__title text-center mb-8">Контакти та посилання</h2>
        <div className="contacts__grid">
          <div className="contact-card">
            <h3 className="contact-card__title">📧 Email</h3>
            <a href={`mailto:${contacts.email}`} className="contact-card__link">
              {contacts.email}
            </a>
          </div>
          <div className="contact-card">
            <h3 className="contact-card__title">📱 Телефон</h3>
            <a href={`tel:${contacts.phone}`} className="contact-card__link">
              {contacts.phone}
            </a>
          </div>
          <div className="contact-card">
            <h3 className="contact-card__title">🔗 GitHub</h3>
            <a href={contacts.github} target="_blank" rel="noopener noreferrer" className="contact-card__link">
              Див. профіль
            </a>
          </div>
          <div className="contact-card">
            <h3 className="contact-card__title">📚 Репозиторій</h3>
            <a href={contacts.repository} target="_blank" rel="noopener noreferrer" className="contact-card__link">
              Повний текст проекту
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactsSection;
