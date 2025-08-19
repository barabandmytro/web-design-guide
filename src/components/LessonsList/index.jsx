import LessonCard from "components/LessonCard";
import lessons from "data/lessons.json";
import "./LessonsList.scss";

const LessonsList = () => {
  return (
    <div className="lessons-grid">
      {lessons.map((lesson) => (
        <LessonCard
          key={lesson.id}
          lesson={lesson}
        />
      ))}
    </div>
  );
};

export default LessonsList;
