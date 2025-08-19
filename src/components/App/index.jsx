import React from "react";
import Header from "components/Header";
import LessonsList from "components/LessonsList";
import "./App.scss";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="main">
        <section className="hero">
          <h2>Вітаю у Web Design Guide 🚀</h2>
          <p>
            Тут ти знайдеш усі уроки по верстці та сучасному веб-дизайну.
            Почнемо навчання прямо зараз!
          </p>
        </section>
        <LessonsList />
      </main>
    </div>
  );
};

export default App;
