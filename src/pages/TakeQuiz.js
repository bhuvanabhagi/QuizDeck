import React, { useState } from "react";

const TakeQuiz = ({ quizzes }) => {
  const [userName, setUserName] = useState("");
  const [isNameEntered, setIsNameEntered] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState(null); // Store the selected quiz
  const [userAnswers, setUserAnswers] = useState({}); // Store answers for the quiz

  // Handle name submission
  const handleNameSubmit = () => {
    if (userName.trim() === "") {
      alert("Please enter your name.");
      return;
    }
    setIsNameEntered(true); // Allow access to quizzes after name is entered
  };

  // Handle reset to allow name entry again
  const handleResetName = () => {
    setIsNameEntered(false); // Reset name entry state
    setUserName(""); // Clear the name input
    setSelectedQuiz(null); // Clear the selected quiz
    setUserAnswers({}); // Reset answers
  };

  // Handle selecting a quiz to take
  const handleStartQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setUserAnswers({}); // Reset answers when starting a new quiz
  };

  // Handle answer selection for each question
  const handleAnswerChange = (questionIndex, answer) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: answer,
    }));
  };

  // Calculate the score when the quiz is submitted
  const handleSubmitQuiz = () => {
    let score = 0;
    selectedQuiz.questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        score++;
      }
    });
    alert(`You scored ${score} out of ${selectedQuiz.questions.length}`);
    // Reset after quiz submission
    setSelectedQuiz(null);
    setUserAnswers({});
  };

  return (
    <div>
      <h2>Take a Quiz</h2>

      {/* Step 1: Ask for Name */}
      {!isNameEntered && (
        <div>
          <p>Please enter your name to continue:</p>
          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button onClick={handleNameSubmit}>Submit</button>
        </div>
      )}

      {/* Step 2: Display Quizzes */}
      {isNameEntered && !selectedQuiz && (
        <>
          <p>Welcome, {userName}!</p>
          <button onClick={handleResetName}>Change Name</button>
          {quizzes.length === 0 ? (
            <p>No quizzes available. Please create a quiz first!</p>
          ) : (
            <ul>
              {quizzes.map((quiz, index) => (
                <li key={index}>
                  <h3>{quiz.title}</h3>
                  <button onClick={() => handleStartQuiz(quiz)}>
                    Start Quiz
                  </button>
                </li>
              ))}
            </ul>
          )}
        </>
      )}

      {/* Step 3: Display the Selected Quiz */}
      {selectedQuiz && (
        <div>
          <h3>Quiz: {selectedQuiz.title}</h3>
          <ul>
            {selectedQuiz.questions.map((question, questionIndex) => (
              <li key={questionIndex}>
                <p>{question.question}</p>
                <div>
                  {question.options.map((option, optionIndex) => (
                    <div key={optionIndex}>
                      <input
                        type="radio"
                        name={`question-${questionIndex}`}
                        value={option}
                        checked={userAnswers[questionIndex] === option}
                        onChange={() => handleAnswerChange(questionIndex, option)}
                      />
                      <label>{option}</label>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <button onClick={handleSubmitQuiz}>Submit Quiz</button>
        </div>
      )}
    </div>
  );
};

export default TakeQuiz;
