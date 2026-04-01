import styles from './Input.module.css';

export default function Input({
  label,
  placeholder,
  disabled = false,
  error = false,
  errorMessage,
  className,
  ...rest
}) {
  const inputClass = `${styles.input} ${error ? styles.error : ''} ${className || ''}`.trim();

  return (
    <div className={styles['input-wrapper']}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        className={inputClass}
        placeholder={placeholder}
        disabled={disabled}
        {...rest}
      />
      {error && errorMessage && (
        <p className={styles['error-message']}>{errorMessage}</p>
      )}
    </div>
  );
}
