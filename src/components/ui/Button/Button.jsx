import styles from './Button.module.css';

export default function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  className,
  ...rest
}) {
  const buttonClass = `${styles.button} ${styles[variant]} ${size !== 'md' ? styles[size] : ''} ${className || ''}`.trim();

  return (
    <button
      className={buttonClass}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
