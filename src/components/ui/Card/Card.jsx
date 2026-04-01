import styles from './Card.module.css';

export default function Card({ hoverable = false, className, children, ...rest }) {
  const cardClass = `${styles.card} ${hoverable ? styles.hoverable : ''} ${className || ''}`.trim();
  return (
    <article className={cardClass} {...rest}>
      {children}
    </article>
  );
}

export function CardHeader({ className, children, ...rest }) {
  return (
    <div className={`${styles.header} ${className || ''}`.trim()} {...rest}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children, ...rest }) {
  return (
    <h3 className={`${styles.title} ${className || ''}`.trim()} {...rest}>
      {children}
    </h3>
  );
}

export function CardBody({ className, children, ...rest }) {
  return (
    <div className={`${styles.body} ${className || ''}`.trim()} {...rest}>
      {children}
    </div>
  );
}

export function CardFooter({ className, children, ...rest }) {
  return (
    <footer className={`${styles.footer} ${className || ''}`.trim()} {...rest}>
      {children}
    </footer>
  );
}

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Body = CardBody;
Card.Footer = CardFooter;
