import React from "react";
import QuizCard from "../components/QuizCard";


// Update generalQuizzes with the imported images
const generalQuizzes = [
  {
    id: 1,
    title: "General Knowledge",
    description: "Test your knowledge of general facts and trivia.",
    image: "/assets/images/image1.jpg",
  },
  {
    id: 2,
    title: "Science Trivia",
    description: "Challenge yourself with fun and exciting science questions.",
    image: "/assets/images/image2.jpg",
  },
  {
    id: 3,
    title: "History Facts",
    description: "Explore intriguing facts about historical events and people.",
    image: "/assets/images/image3.jpg",
  },
];

const Home = () => {
  return (
    <div>
      <h2>Welcome to QuizMaster</h2>
      <p>Choose a quiz to get started:</p>
      <div className="quiz-list">
        {generalQuizzes.map((quiz) => (
          <QuizCard
            key={quiz.id}
            image={quiz.image}
            title={quiz.title}
            description={quiz.description}
            onClick={() => alert(`You selected: ${quiz.title}`)} // Replace with actual navigation logic
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
