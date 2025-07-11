import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Header, Display, AnswerButton } from "../../components";
import { questionsMale } from "../../database";

function Trivia() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  // Initialize questions
  useEffect(() => {
    if (questionsMale && questionsMale.character && questionsMale.character.questions) {
      setQuestions(questionsMale.character.questions);
      setCurrentQuestion(questionsMale.character.questions[0]);
    }
  }, []);

  // Handle answer selection
  const handleAnswerClick = (id, isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    // Move to next question or end game
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentQuestion(questions[currentQuestionIndex + 1]);
    } else {
      // Game over - navigate to win or lose screen
      if (score + (isCorrect ? 1 : 0) >= Math.ceil(questions.length / 2)) {
        navigate("/win");
      } else {
        navigate("/lose");
      }
    }
  };

  // Handle time up
  const handleTimeUp = () => {
    // Move to next question or end game
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentQuestion(questions[currentQuestionIndex + 1]);
    } else {
      // Game over - navigate to win or lose screen
      if (score >= Math.ceil(questions.length / 2)) {
        navigate("/win");
      } else {
        navigate("/lose");
      }
    }
  };

  // If questions are not loaded yet
  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <div className="tr_wrapper">
        <section className="tr_container">
          <div className="tr_content">
            <div className="tr_highlight">
              <Header />
            </div>
            <div className="tr_app_logo">
              <Display onTimeUp={handleTimeUp} />
            </div>
            <div className="tr_description">
              <span>{currentQuestion.question}</span>
            </div>
            <div className="tr_answers-container">
              {currentQuestion.answers.map((answer) => (
                <AnswerButton 
                  key={answer.id}
                  id={answer.id}
                  text={answer.text}
                  isCorrect={answer.isCorrect}
                  onClick={handleAnswerClick}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export { Trivia };
