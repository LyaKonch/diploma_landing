/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';

const STORAGE_KEY = 'diploma-language';

const dictionaries = {
  uk: {
    ready: 'Готово',
    home: 'Головна',
    features: 'Можливості',
    about: 'Про проєкт',
    themeLight: 'Світла тема',
    themeDark: 'Темна тема',
    switchToLight: 'Перемкнути на світлу тему',
    switchToDark: 'Перемкнути на темну тему',
    language: 'Мова',
    homeNavTitle: 'Навігація по застосунку',
    featuresCardTitle: 'Список можливостей',
    featuresCardDesc: 'Перегляд, фільтрація, перемикання статусу та перехід до детальної сторінки елемента.',
    featuresCardAction: 'Перейти до можливостей',
    aboutCardTitle: 'Про проєкт',
    aboutCardDesc: 'Актуальність, методологія, цілі, очікувані результати та контактна інформація.',
    aboutCardAction: 'Відкрити сторінку про проєкт',
    filterAll: 'Усі',
    filterActive: 'Активні',
    filterCompleted: 'Виконані',
    addFeatureTitle: 'Додати нову можливість проєкту',
    featureName: 'Назва можливості',
    featureDescription: 'Опис',
    featureIcon: 'Іконка',
    featureStatus: 'Статус',
    addFeatureAction: 'Додати можливість',
    statusPlanned: '⏳ В планах',
    statusDone: '✅ Реалізовано',
    featuresSectionTitle: 'Основні можливості проєкту',
    featuresEmpty: 'За даним фільтром немає features.',
    featureNotFoundTitle: 'Feature не знайдено',
    featureNotFoundDesc: 'Елемент з ID {id} відсутній у поточному списку.',
    backToList: 'Повернутися до списку',
    details: 'Детальніше',
    notFoundTitle: '404 — Сторінку не знайдено',
    notFoundDesc: 'Маршрут, який ви відкрили, не існує в цьому застосунку.',
    toHome: 'На головну',
  },
  en: {
    ready: 'Ready',
    home: 'Home',
    features: 'Features',
    about: 'About',
    themeLight: 'Light theme',
    themeDark: 'Dark theme',
    switchToLight: 'Switch to light theme',
    switchToDark: 'Switch to dark theme',
    language: 'Language',
    homeNavTitle: 'App navigation',
    featuresCardTitle: 'Features list',
    featuresCardDesc: 'Browse, filter, toggle status and open a details page for each item.',
    featuresCardAction: 'Open features',
    aboutCardTitle: 'About the project',
    aboutCardDesc: 'Relevance, methodology, goals, expected results and contacts.',
    aboutCardAction: 'Open about page',
    filterAll: 'All',
    filterActive: 'Active',
    filterCompleted: 'Completed',
    addFeatureTitle: 'Add a new project feature',
    featureName: 'Feature name',
    featureDescription: 'Description',
    featureIcon: 'Icon',
    featureStatus: 'Status',
    addFeatureAction: 'Add feature',
    statusPlanned: '⏳ Planned',
    statusDone: '✅ Completed',
    featuresSectionTitle: 'Core project features',
    featuresEmpty: 'No features match this filter.',
    featureNotFoundTitle: 'Feature not found',
    featureNotFoundDesc: 'Item with ID {id} is not available in the current list.',
    backToList: 'Back to list',
    details: 'Details',
    notFoundTitle: '404 — Page not found',
    notFoundDesc: 'The route you opened does not exist in this application.',
    toHome: 'Go home',
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'en' ? 'en' : 'uk';
  });

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === 'uk' ? 'en' : 'uk';
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  };

  const t = (key, vars = {}) => {
    const text = dictionaries[language][key] ?? key;

    return Object.entries(vars).reduce((acc, [token, value]) => {
      return acc.replace(`{${token}}`, String(value));
    }, text);
  };

  const value = { language, toggleLanguage, t };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return context;
}
