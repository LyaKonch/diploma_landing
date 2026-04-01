import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import AboutPage from './pages/AboutPage';
import FeatureDetailsPage from './pages/FeatureDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import { useLanguage } from './context/LanguageContext';
import './styles/App.css'; 

function App() {
  const { language } = useLanguage();
  
  const projectData = {
    title: language === 'uk' ? 'Лендінг Диплому' : 'Diploma Landing',
    subtitle: language === 'uk'
      ? 'Розробка MCP сервера для моніторингу та управління інфраструктурою'
      : 'Development of an MCP server for infrastructure management and monitoring',
  };

  const [features, setFeatures] = useState(() => {
    const stored = localStorage.getItem('diploma-features-data');
    const defaultFeatures = language === 'uk' ? [
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
    ] : [
      {
        id: 1,
        title: 'Secure Filesystem Access',
        desc: 'Read, write, delete, and search files with access control.',
        icon: '🔒',
        status: 'done'
      },
      {
        id: 2,
        title: 'System Monitoring',
        desc: 'Real-time monitoring of CPU, RAM, and disk usage.',
        icon: '📊',
        status: 'done'
      },
      {
        id: 3,
        title: 'Flexible Deployment',
        desc: 'Support for stdio, http, and sse transports.',
        icon: '🚀',
        status: 'done'
      },
      {
        id: 4,
        title: 'Server Lifecycle Management',
        desc: 'Safe interfaces for starting, stopping, and restarting the server.',
        icon: '⚙️',
        status: 'planned'
      },
      {
        id: 5,
        title: 'Authentication & Authorization',
        desc: 'Authentication and authorization mechanisms with role-based access control.',
        icon: '🔐',
        status: 'planned'
      },
      {
        id: 6,
        title: 'Security Analysis',
        desc: 'Directory vulnerability scanning and large-file analysis with AI support.',
        icon: '🔍',
        status: 'planned'
      },
    ];

    return stored ? JSON.parse(stored) : defaultFeatures;
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

  const actuality = language === 'uk'
    ? {
      title: 'Актуальність теми',
      description: 'Сучасні системні адміністратори стикаються з викликом: складні інструменти моніторингу (Datadog, Grafana, Prometheus) мають крутий поріг входження, тоді як базові утиліти (top, logs) надають сирі дані без аналітики. Для новачка діагностика проблем продуктивності вимагає глибоких знань ОС та аналізу логів вручну. Великі мовні моделі розуміють природну мову, але генерація команд ними ненадійна і небезпечна. Вирішення: MCP (Model Context Protocol) виступає як безпечний шар абстракції між LLM та операційною системою, даючи користувачеві змогу просто запитати: «Сервер гальмує. Перевір навантаження та логи» — замість навручення з десятком команд. Це робить моніторинг інтуїтивним, безпечним і доступним для фахівців будь-якого рівня.',
      problemTitle: 'Проблема',
      problemText: 'Складні інструменти моніторингу мають крутий поріг входження, а базові утиліти надають тільки сирі дані. Діагностика вимагає глибоких знань ОС та часозатратного аналізу логів вручну.',
      solutionTitle: 'Рішення',
      solutionText: 'MCP виступає як безпечна абстракція між LLM та ОС, дозволяючи користувачеві запитати природною мовою замість навчання команд. Система автоматично викликає дозволені інструменти та надає читабельні рекомендації.',
    }
    : {
      title: 'Topic Relevance',
      description: 'Modern system administrators face a challenge: advanced monitoring platforms (Datadog, Grafana, Prometheus) have a steep learning curve, while basic tools (top, logs) provide raw data without analytics. For beginners, diagnosing performance issues requires deep OS knowledge and time-consuming manual log analysis. Large language models understand natural language, but direct command generation can be unsafe and unreliable. MCP (Model Context Protocol) solves this by acting as a safe abstraction layer between LLMs and the operating system. Users can ask: “The server is slow. Check load and logs” instead of composing many commands manually. This makes monitoring intuitive, safe, and accessible for specialists of any level.',
      problemTitle: 'Problem',
      problemText: 'Complex monitoring tools are hard to master, while basic utilities expose only raw data. Troubleshooting requires strong OS expertise and manual log processing.',
      solutionTitle: 'Solution',
      solutionText: 'MCP provides a secure abstraction between LLMs and the OS, so users can rely on natural-language requests. The system invokes allowed tools automatically and returns readable recommendations.',
    };

  const goalsTitle = language === 'uk' ? 'Мета та завдання проекту' : 'Project Goals and Objectives';

  const goals = language === 'uk'
    ? [
      'Розробити модульний MCP сервер для управління доступом до файлової системи',
      'Реалізувати систему моніторингу CPU, RAM та дискового простору в реальному часі',
      'Забезпечити безпечну роботу з файловою системою через контроль прав доступу',
      'Реалізувати безпечні інтерфейси запуску, зупинки та перезавантаження сервера, виклики системних команд або взаємодії з командним рядком.',
      'Впровадити механізми аутентифікації та авторизації для захисту доступу до сервера та обмеження доступу до певних функцій або ресурсів на основі ролей користувачів.',
      'Реалізувати аналіз безпеки та сканування на вразливості',
      'Дослідити можливість впровадження такого рішення в реальних сценаріях та оцінити ціну використання, використання локальних моделей та потенційні ризики безпеки.',
    ]
    : [
      'Develop a modular MCP server for secure filesystem access management.',
      'Implement real-time monitoring for CPU, RAM, and disk usage.',
      'Ensure secure filesystem operations through permission control.',
      'Provide safe interfaces for start/stop/restart server lifecycle actions and command execution.',
      'Implement authentication and authorization with role-based access restrictions.',
      'Add security analysis and vulnerability scanning capabilities.',
      'Evaluate real-world adoption scenarios, cost of usage, local model options, and security risks.',
    ];

  const methodology = language === 'uk'
    ? {
      title: 'Методологія дослідження',
      approaches: [
        'Компонентний підхід: розділення функціональності на окремі модулі',
        'Тестування: юніт-тести та інтеграційне тестування',
        'Git Flow: контроль версій через gitmoji( ще ні) та семантичне версіонування',
        'Документування: API документація та README файли',
      ]
    }
    : {
      title: 'Research Methodology',
      approaches: [
        'Component-based approach: splitting functionality into independent modules',
        'Testing: unit and integration testing practices',
        'Git Flow: version control strategy and semantic versioning',
        'Documentation: API documentation and README files',
      ]
    };

  const resultsTitle = language === 'uk' ? 'Очікувані результати проекту' : 'Expected Project Results';
  const resultsSummary = language === 'uk'
    ? 'Проект демонструє повний цикл розробки: від проєктування компонентної архітектури до реалізації інтерактивного інтерфейсу з модульною структурою та чистим кодом.'
    : 'The project demonstrates a full development cycle: from component architecture design to a modular, interactive interface implementation with clean code practices.';

  const results = language === 'uk'
    ? [
      { label: 'Функцій можливостей', value: '4', icon: '✨' },
      { label: 'Ліній коду', value: '500+', icon: '💻' },
      { label: 'Покриття тестами', value: '80%', icon: '✅' },
    ]
    : [
      { label: 'Feature modules', value: '4', icon: '✨' },
      { label: 'Lines of code', value: '500+', icon: '💻' },
      { label: 'Test coverage', value: '80%', icon: '✅' },
    ];

  const contacts = {
    title: language === 'uk' ? 'Контакти та посилання' : 'Contacts and Links',
    emailLabel: language === 'uk' ? '📧 Email' : '📧 Email',
    phoneLabel: language === 'uk' ? '📱 Телефон' : '📱 Phone',
    githubLabel: language === 'uk' ? '🔗 GitHub' : '🔗 GitHub',
    githubText: language === 'uk' ? 'Див. профіль' : 'Open profile',
    repositoryLabel: language === 'uk' ? '📚 Репозиторій' : '📚 Repository',
    repositoryText: language === 'uk' ? 'Повний текст проекту' : 'Full project source',
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
              goalsTitle={goalsTitle}
              goals={goals}
              methodology={methodology}
              resultsTitle={resultsTitle}
              resultsSummary={resultsSummary}
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