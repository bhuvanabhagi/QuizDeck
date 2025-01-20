import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import CreateQuiz from "./pages/CreateQuiz";
import TakeQuiz from "./pages/TakeQuiz";
import Leaderboard from "./pages/Leaderboard";
import Home from "./pages/Home"; // Import the new Home component
import "./App.css";

const App = () => {
  const [quizzes, setQuizzes] = useState([]); // State to store quizzes

  // Function to add a new quiz
  const addQuiz = (quiz) => {
    setQuizzes((prevQuizzes) => [...prevQuizzes, quiz]); // Add the new quiz to the list
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="navbar-title">QuizMaster</h1>
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/create-quiz" className="nav-link">Create Quiz</Link>
          <Link to="/take-quiz" className="nav-link">Take Quiz</Link>
          <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
        </div>
      </nav>

      {/* Main content */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home quizzes={quizzes} />} /> {/* Updated Home Route */}
          <Route path="/create-quiz" element={<CreateQuiz addQuiz={addQuiz} />} />
          <Route path="/take-quiz" element={<TakeQuiz quizzes={quizzes} />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
