import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import AboutPage from './pages/AboutPage';
import FeatureDetailsPage from './pages/FeatureDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import './styles/App.css'; 

function App() {
  
  const projectData = {
    title: 'Лендінг Диплому',
    subtitle: 'Розробка MCP сервера для моніторингу та управління інфраструктурою',
  };

  const [features, setFeatures] = useState(() => {
    const stored = localStorage.getItem('diploma-features-data');
    return stored ? JSON.parse(stored) : [
      { 
        id: 1, 
        title: 'Secure Filesystem Access', 
        desc: 'Читання, запис, видалення та пошук файлів з контролем прав.',
        icon: '🔒',
        status: 'done'
      },
      { 
        id: 2, 
        title: 'System Monitoring', 
        desc: 'Моніторинг CPU, RAM та використання дискового простору в реальному часі.',
        icon: '📊',
        status: 'done'
      },
      { 
        id: 3, 
        title: 'Flexible Deployment', 
        desc: 'Підтримка stdio, http та sse транспортів.',
        icon: '🚀',
        status: 'done'
      },
      { 
        id: 4, 
        title: 'Server Lifecycle Management', 
        desc: 'Безпечні інтерфейси запуску, зупинки та перезавантаження сервера.',
        icon: '⚙️',
        status: 'planned'
      },
      { 
        id: 5, 
        title: 'Authentication & Authorization', 
        desc: 'Механізми аутентифікації та авторизації з контролем доступу за ролями.',
        icon: '🔐',
        status: 'planned'
      },
      { 
        id: 6, 
        title: 'Security Analysis', 
        desc: 'Сканування директорій на вразливості та великі файли за допомогою ШІ.', 
        icon: '🔍',
        status: 'planned'
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem('diploma-features-data', JSON.stringify(features));
  }, [features]);

  const [filterMode, setFilterMode] = useState('all');

  const completedFeaturesCount = features.filter((feature) => feature.status === 'done').length;

  const handleToggleFeatureStatus = (featureId) => {
    setFeatures((previousFeatures) =>
      previousFeatures.map((feature) => {
        if (feature.id !== featureId) {
          return feature;
        }

        return {
          ...feature,
          status: feature.status === 'done' ? 'planned' : 'done',
        };
      })
    );
  };

  const handleAddFeature = (newFeature) => {
    setFeatures((prev) => [...prev, newFeature]);
  };

  const visibleFeatures = features.filter((feature) => {
    if (filterMode === 'completed') {
      return feature.status === 'done';
    }

    if (filterMode === 'active') {
      return feature.status !== 'done';
    }

    return true;
  });

  const actuality = {
    title: 'Актуальність теми',
    description: 'Сучасні системні адміністратори стикаються з викликом: складні інструменти моніторингу (Datadog, Grafana, Prometheus) мають крутий поріг входження, тоді як базові утиліти (top, logs) надають сирі дані без аналітики. Для новачка діагностика проблем продуктивності вимагає глибоких знань ОС та аналізу логів вручну. Великі мовні моделі розуміють природну мову, але генерація команд ними ненадійна і небезпечна. Вирішення: MCP (Model Context Protocol) виступає як безпечний шар абстракції між LLM та операційною системою, даючи користувачеві змогу просто запитати: «Сервер гальмує. Перевір навантаження та логи» — замість навручення з десятком команд. Це робить моніторинг інтуїтивним, безпечним і доступним для фахівців будь-якого рівня.',
  };

  const goals = [
    'Розробити модульний MCP сервер для управління доступом до файлової системи',
    'Реалізувати систему моніторингу CPU, RAM та дискового простору в реальному часі',
    'Забезпечити безпечну роботу з файловою системою через контроль прав доступу',
    'Реалізувати безпечні інтерфейси запуску, зупинки та перезавантаження сервера, виклики системних команд або взаємодії з командним рядком.',
    'Впровадити механізми аутентифікації та авторизації для захисту доступу до сервера та обмеження доступу до певних функцій або ресурсів на основі ролей користувачів.',
    'Реалізувати аналіз безпеки та сканування на вразливості',
    'Дослідити можливість впровадження такого рішення в реальних сценаріях та оцінити ціну використання, використання локальних моделей та потенційні ризики безпеки.',
  ];

  const methodology = {
    title: 'Методологія дослідження',
    approaches: [
      'Компонентний підхід: розділення функціональності на окремі модулі',
      'Тестування: юніт-тести та інтеграційне тестування',
      'Git Flow: контроль версій через gitmoji( ще ні) та семантичне версіонування',
      'Документування: API документація та README файли',
    ]
  };

  const results = [
    { label: 'Функцій можливостей', value: '4', icon: '✨' },
    { label: 'Ліній коду', value: '500+', icon: '💻' },
    { label: 'Покриття тестами', value: '80%', icon: '✅' },
  ];

  const contacts = {
    email: 'ievgeniiotroh@gmail.com',
    phone: '+380 50 628 65 42',
    github: 'https://github.com/LyaKonch',
    repository: 'https://github.com/LyaKonch/filesystem-mcp-server',
  };

  return (
    <div className="app">
      <Header
        projectTitle={projectData.title}
        completedFeaturesCount={completedFeaturesCount}
        totalFeaturesCount={features.length}
      />
      <Routes>
        <Route path="/" element={<HomePage subtitle={projectData.subtitle} />} />
        <Route
          path="/features"
          element={(
            <FeaturesPage
              features={visibleFeatures}
              filterMode={filterMode}
              onFilterModeChange={setFilterMode}
              onToggleFeatureStatus={handleToggleFeatureStatus}
              onAddFeature={handleAddFeature}
            />
          )}
        />
        <Route
          path="/about"
          element={(
            <AboutPage
              actuality={actuality}
              goals={goals}
              methodology={methodology}
              results={results}
              contacts={contacts}
            />
          )}
        />
        <Route path="/feature/:id" element={<FeatureDetailsPage features={features} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;