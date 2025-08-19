import LessonCard from 'components/LessonCard';
import { lessonsMeta } from 'data';
import './LessonsList.scss';

const LessonsList = () => {
  return (
    <div className="lessons-grid">
      {lessonsMeta.map((lesson) => (
        <LessonCard key={lesson.id} lesson={lesson} />
      ))}
    </div>
  );
};

export default LessonsList;
