import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button, Input } from './ui';

function FeatureForm({ onAddFeature }) {
  const { t } = useLanguage();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('✨');
  const [status, setStatus] = useState('planned');

  const iconOptions = [
    { value: '✨', label: '✨ Default' },
    { value: '🔒', label: '🔒 Security' },
    { value: '📊', label: '📊 Monitoring' },
    { value: '🚀', label: '🚀 Deployment' },
    { value: '⚙️', label: '⚙️ Management' },
    { value: '🔐', label: '🔐 Auth' },
    { value: '🔍', label: '🔍 Analysis' },
    { value: '💾', label: '💾 Storage' },
    { value: '🌐', label: '🌐 Network' },
    { value: '🛡️', label: '🛡️ Protection' },
  ];

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      return;
    }

    const newFeature = {
      id: Date.now(),
      title: title.trim(),
      desc: description.trim(),
      icon: icon,
      status: status,
    };

    onAddFeature(newFeature);

    setTitle('');
    setDescription('');
    setIcon('✨');
    setStatus('planned');
  }

  return (
    <section className="feature-form-section" aria-label="Додати нову можливість">
      <div className="container">
        <h2 className="feature-form__title">{t('addFeatureTitle')}</h2>
        <form onSubmit={handleSubmit} className="feature-form">
          <div className="feature-form__row">
            <div className="feature-form__field">
              <Input
                label={t('featureName')}
                id="feature-title"
                type="text"
                placeholder="Наприклад: Real-time Logging"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="feature-form__input"
              />
            </div>

            <div className="feature-form__field">
              <Input
                label={t('featureDescription')}
                id="feature-desc"
                type="text"
                placeholder="Короткий опис функціональності"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="feature-form__input"
              />
            </div>
          </div>

          <div className="feature-form__row">
            <div className="feature-form__field">
              <label htmlFor="feature-icon">{t('featureIcon')}</label>
              <select
                id="feature-icon"
                value={icon}
                onChange={(e) => setIcon(e.target.value)}
                className="feature-form__select"
              >
                {iconOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="feature-form__field">
              <label htmlFor="feature-status">{t('featureStatus')}</label>
              <select
                id="feature-status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="feature-form__select"
              >
                <option value="planned">{t('statusPlanned')}</option>
                <option value="done">{t('statusDone')}</option>
              </select>
            </div>

            <Button type="submit" variant="primary">
              {t('addFeatureAction')}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default FeatureForm;
