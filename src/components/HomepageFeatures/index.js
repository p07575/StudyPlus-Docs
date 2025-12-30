import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'eClass Integration',
    icon: '🔗',
    iconClass: 'feature-icon--primary',
    description: (
      <>
        Connect your school eClass account to automatically sync homework assignments, 
        deadlines, and calendar events. Read-only access means your data stays safe.
      </>
    ),
  },
  {
    title: 'Smart Task Management',
    icon: '✅',
    iconClass: 'feature-icon--secondary',
    description: (
      <>
        AI-powered to-do list generation breaks down assignments into manageable tasks. 
        Never miss a deadline with smart reminders and priority sorting.
      </>
    ),
  },
  {
    title: 'Study Materials',
    icon: '📚',
    iconClass: 'feature-icon--accent',
    description: (
      <>
        Generate study materials, flashcards, and summaries using AI. 
        Upload your notes and let StudyPlus help you prepare for exams.
      </>
    ),
  },
];

function Feature({icon, iconClass, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="feature-card">
        <div className={clsx('feature-icon', iconClass)}>
          <span style={{ fontSize: '24px' }}>{icon}</span>
        </div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
