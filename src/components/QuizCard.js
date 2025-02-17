import React from "react";
import "./QuizCard.css"; // Optional: Add styles

const QuizCard = ({title, description, onClick }) => {
  return (
    <div className="quiz-card" onClick={onClick}>
      <div className="quiz-card-content">
        <h3 className="quiz-card-title">{title}</h3>
        <p className="quiz-card-description">{description}</p>
      </div>
    </div>
  );
};

export default QuizCard;
