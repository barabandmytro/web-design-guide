import { Link, useParams } from 'react-router-dom';
import lessonsMeta from 'data/lessonsMeta.json';
import lessonsContent from 'data/lessonsContent';
import Button from 'components/UI/Button';
import Presentation from 'components/Presentation';

import './LessonPage.scss';

function LessonPage() {
  const { slug } = useParams();

  // шукаємо мета та контент
  const meta = lessonsMeta.find((l) => l.slug === slug);
  const content = lessonsContent.find((l) => l.slug === slug);

  if (!meta) {
    return <p>Урок не знайдено 😢</p>;
  }

  const currentIndex = lessonsMeta.findIndex((l) => l.slug === slug);
  const prevLesson = lessonsMeta[currentIndex - 1];
  const nextLesson = lessonsMeta[currentIndex + 1];

  return (
    <div className="lesson-page">
      <h1>{meta.title}</h1>
      <p className="subtitle">{meta.description}</p>

      {content?.sections?.map((section, i) => (
        <div key={i} className="lesson-section">
          {section.heading && <h2>{section.heading}</h2>}

          {section.text && <p>{section.text}</p>}

          {section.list && (
            <ul>
              {section.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}

          {section.code && (
            <pre>
              <code>{section.code}</code>
            </pre>
          )}

          {/* 👉 презентація (pdf) */}
          {section.presentation && <Presentation src={section.presentation.src} />}
        </div>
      ))}

      {content?.callouts?.map((callout, i) => (
        <div key={i} className={`callout ${callout.type}`}>
          {callout.text}
        </div>
      ))}

      {/* 👉 Навігація */}
      <div className="lesson-navigation">
        {prevLesson ? (
          <Button as={Link} variant="secondary" to={`/lesson/${prevLesson.slug}`}>
            ← {prevLesson.title}
          </Button>
        ) : (
          <div />
        )}

        <Button as={Link} variant="primary" to="/">
          ⬅ Назад до списку
        </Button>

        {nextLesson ? (
          <Button as={Link} variant="secondary" to={`/lesson/${nextLesson.slug}`}>
            {nextLesson.title} →
          </Button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

export default LessonPage;
