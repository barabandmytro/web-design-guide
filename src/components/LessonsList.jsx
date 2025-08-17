import { useEffect, useState } from "react";
import lessonsData from "../data/lessons.json";

export default function LessonsList() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    setLessons(lessonsData);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Уроки</h1>
      <div className="grid gap-4">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="p-4 border rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{lesson.title}</h2>
            <p className="text-gray-600 mb-2">{lesson.description}</p>
            <a
              href={lesson.presentation}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Відкрити презентацію
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
