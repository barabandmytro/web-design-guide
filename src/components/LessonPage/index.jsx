// src/components/LessonPage.jsx
import { useParams, Link } from "react-router-dom";
import lessons from "../../data/lessons.json"; // твій JSON
import Container from "../UI/Container";
import Button from "../UI/Button";
import "./LessonPage.scss";

function LessonPage() {
  const { slug } = useParams();
  const lesson = lessons.find((l) => l.slug === slug);

  if (!lesson) {
    return (
      <Container>
        <h2>Урок не знайдено</h2>
        <Link to="/">
          <Button variant="secondary">Повернутися</Button>
        </Link>
      </Container>
    );
  }

  const fallbackImage = "/images/fallback.svg";

  return (
    <Container>
      <div className="lesson-page">
        <h1>{lesson.title}</h1>
        <div className="lesson-page__image">
          <img src={lesson.image || fallbackImage} alt={lesson.title} />
        </div>
        <p className="lesson-page__description">{lesson.description}</p>

        {/* Пізніше тут можна буде додати iframe з презентацією */}
        <div className="lesson-page__content">
          <p>Тут буде контент уроку (презентація, відео, текст).</p>
        </div>

        <Link to="/">
          <Button variant="primary">⬅ Назад до уроків</Button>
        </Link>
      </div>
    </Container>
  );
}

export default LessonPage;
