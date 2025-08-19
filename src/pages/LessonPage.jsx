import { useParams } from "react-router-dom";
import lessonsData from "../data/lessons.json";

export default function LessonPage() {
  const { id } = useParams();
  const lesson = lessonsData.find((l) => l.id === Number(id));

  if (!lesson) {
    return <p className="p-6 text-red-500">Урок не знайдено</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
      <p className="text-gray-700 mb-6">{lesson.description}</p>

      <a
        href={lesson.presentation}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Завантажити презентацію
      </a>
    </div>
  );
}
