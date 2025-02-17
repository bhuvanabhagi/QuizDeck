import React from "react";
import QuizCard from "../components/QuizCard";

const generalQuizzes = [
  {
    id: 1,
    title: "General Knowledge",
    description: "Test your knowledge of general facts and trivia.",
  },
  {
    id: 2,
    title: "Science Trivia",
    description: "Challenge yourself with fun and exciting science questions.",
  },
  {
    id: 3,
    title: "History Facts",
    description: "Explore intriguing facts about historical events and people.",
  },
];

const Home = () => {
  return (
    <div className="centered-container">
      <h2>Welcome to QuizMaster</h2>
      <p>Choose a quiz to get started:</p>
      <div className="quiz-list">
        {generalQuizzes.map((quiz) => (
          <QuizCard
            key={quiz.id}
            title={quiz.title}
            description={quiz.description}
            onClick={() => alert(`You selected: ${quiz.title}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
