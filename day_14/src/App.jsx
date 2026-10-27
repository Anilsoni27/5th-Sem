import React, { useState } from 'react';
import './App.css';
import questions from "../public/questions.json";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const checkAnswer = (option) => {
    if(option === questions[currentIndex].correct_answer) {
      setScore(score + 1);
    }


    if(currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }else{
      alert("Your Score :"+ 
        (score + (option === questions[currentIndex].correct_answer ? 1 : 0)));
    }
  }
  console.log(questions);
  return (
    <div className="quiz-container">
      <h1>Quiz App</h1>
      <p>Question{currentIndex + 1} of {questions.length}</p>
      <p>Questions: {questions[currentIndex].question}</p>
      {questions[currentIndex].options.map((option, index) => (
        <button key={index}
        onClick={() => checkAnswer(option)}> {}
          {option}
        </button>
      ))}
    </div>
    
  )
}

export default App