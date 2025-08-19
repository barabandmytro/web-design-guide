import "./LessonCard.scss";

export default function LessonCard({ title, description }) {
  return (
    <div className="lesson-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="open-btn">Відкрити</button>
    </div>
  );
}
