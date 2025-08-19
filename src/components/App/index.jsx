import { Routes, Route } from 'react-router-dom';
import LessonsList from '../LessonsList';
import LessonPage from '../LessonPage';
import Header from '../Header';
import Container from '../UI/Container';
import Footer from '../Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<LessonsList />} />
            <Route path="/lesson/:slug" element={<LessonPage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
