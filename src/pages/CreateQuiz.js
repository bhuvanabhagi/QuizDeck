import React, { useState } from "react";

const CreateQuiz = ({ addQuiz }) => {
  const [quizTitle, setQuizTitle] = useState("");
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  // Handle adding a new question
  const handleAddQuestion = () => {
    if (!newQuestion.trim()) {
      alert("Please enter a question.");
      return;
    }

    if (options.some((option) => option.trim() === "")) {
      alert("Please provide all four options.");
      return;
    }

    if (!correctAnswer) {
      alert("Please select the correct answer.");
      return;
    }

    const question = {
      question: newQuestion,
      options: options,
      correctAnswer: correctAnswer,
    };

    setQuestions((prevQuestions) => [...prevQuestions, question]);
    setNewQuestion(""); // Reset question input
    setOptions(["", "", "", ""]); // Reset options
    setCorrectAnswer(""); // Reset correct answer selection
  };

  // Handle submitting the quiz and passing it back to App.js
  const handleQuizCreate = () => {
    if (!quizTitle || questions.length === 0) {
      alert("Please enter a title and add at least one question.");
      return;
    }

    const newQuiz = { title: quizTitle, questions };
    addQuiz(newQuiz); // Use the addQuiz function passed from App.js
    setQuizTitle(""); // Reset title input
    setQuestions([]); // Reset questions
    alert("Quiz successfully created!");
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  return (
    <div>
      <h2>Create a Quiz</h2>
      <input
        type="text"
        placeholder="Enter quiz title"
        value={quizTitle}
        onChange={(e) => setQuizTitle(e.target.value)}
      />
      <br />

      <h3>Add a Question</h3>
      <input
        type="text"
        placeholder="Enter your question"
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
      />
      <br />

      {/* Options */}
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder={`Option ${index + 1}`}
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
        </div>
      ))}

      {/* Correct Answer */}
      <div>
        <label>Select correct answer:</label>
        <select
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
        >
          <option value="">Select Answer</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleAddQuestion}>Add Question</button>

      {/* Display added questions */}
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <h4>{question.question}</h4>
            <ul>
              {question.options.map((option, idx) => (
                <li key={idx}>
                  {option} {question.correctAnswer === option && "(Correct)"}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <button onClick={handleQuizCreate}>Create Quiz</button>
    </div>
  );
};

export default CreateQuiz;
