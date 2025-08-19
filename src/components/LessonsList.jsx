import { Link } from "react-router-dom";
import lessonsData from "../data/lessons.json";

export default function LessonsList() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Уроки</h1>
      <div className="grid gap-4">
        {lessonsData.map((lesson) => (
          <div
            key={lesson.id}
            className="p-4 border rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{lesson.title}</h2>
            <p className="text-gray-600 mb-2">{lesson.description}</p>
            <Link
              to={`/lesson/${lesson.id}`}
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Перейти до уроку
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
