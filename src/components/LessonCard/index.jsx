import { Link } from 'react-router-dom';
import Card from '../UI/Card';
import Button from '../UI/Button';
import './LessonCard.scss';

function LessonCard({ lesson }) {
  const fallbackImage = '/images/fallback.svg';

  return (
    <Card className="lesson-card">
      <div className="lesson-card__image">
        <img src={lesson.image || fallbackImage} alt={lesson.title} />
      </div>
      <div className="lesson-card__content">
        <h3>{lesson.title}</h3>
        <p>{lesson.description}</p>
        <Link to={`/lesson/${lesson.slug}`}>
          <Button variant="primary">Відкрити</Button>
        </Link>
      </div>
    </Card>
  );
}

export default LessonCard;
