import lessons from "data/lessons.json";
import LessonCard from "components/LessonCard";
import "./LessonsList.scss";

export default function LessonsList() {
  return (
    <div className="lessons-list">
      {lessons.map((lesson) => (
        <LessonCard
          key={lesson.id}
          title={lesson.title}
          description={lesson.description}
        />
      ))}
    </div>
  );
}
