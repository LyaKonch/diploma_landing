import FeatureCard from './FeatureCard';

const FeaturesList = () => {
  const features = [
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
      title: 'Security Analysis', 
      desc: 'Сканування директорій на вразливості та великі файли за допомогою ШІ.', 
      icon: '🔍',
      status: 'planned'
    },
  ];

  return (
    <section id="features" className="features" aria-labelledby="features-title">
      <div className="container">
        <h2 id="features-title" className="features__title text-center mb-8">Основні можливості (Goals)</h2>
        <div className="features__grid">
          {features.map((feature) => (
            <FeatureCard 
              key={feature.id} 
              title={feature.title} 
              description={feature.desc}
              icon={feature.icon}
              status={feature.status}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeaturesList;