const ContactsSection = ({ contacts }) => {
  return (
    <section id="contacts" className="contacts">
      <div className="container">
        <h2 className="contacts__title text-center mb-8">{contacts.title}</h2>
        <div className="contacts__grid">
          <div className="contact-card">
            <h3 className="contact-card__title">{contacts.emailLabel}</h3>
            <a href={`mailto:${contacts.email}`} className="contact-card__link">
              {contacts.email}
            </a>
          </div>
          <div className="contact-card">
            <h3 className="contact-card__title">{contacts.phoneLabel}</h3>
            <a href={`tel:${contacts.phone}`} className="contact-card__link">
              {contacts.phone}
            </a>
          </div>
          <div className="contact-card">
            <h3 className="contact-card__title">{contacts.githubLabel}</h3>
            <a href={contacts.github} target="_blank" rel="noopener noreferrer" className="contact-card__link">
              {contacts.githubText}
            </a>
          </div>
          <div className="contact-card">
            <h3 className="contact-card__title">{contacts.repositoryLabel}</h3>
            <a href={contacts.repository} target="_blank" rel="noopener noreferrer" className="contact-card__link">
              {contacts.repositoryText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactsSection;
