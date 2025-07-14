import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Header, Display, AnswerButton } from "../../components";
import { data } from "../../database";
import { GameContext } from "../../context";

// Helper function to shuffle an array
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

function Trivia() {
  const { questionsMale, questionsFemale } = data;
  const [state] = useContext(GameContext);

  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showCheckpoint, setShowCheckpoint] = useState(false);
  const [timerKey, setTimerKey] = useState(0); // Key to reset timer
  const MAX_QUESTIONS = 9;

  // Initialize questions based on selected character
  useEffect(() => {
    let characterQuestions = [];

    if (state.character_name === "João" && 
        questionsMale && 
        questionsMale.character && 
        questionsMale.character.questions) {
      characterQuestions = questionsMale.character.questions;
    } else if (state.character_name === "Carla" && 
               questionsFemale && 
               questionsFemale.character && 
               questionsFemale.character.questions) {
      characterQuestions = questionsFemale.character.questions;
    } else {
      // Fallback to male questions if no character selected or questions not found
      characterQuestions = questionsMale.character.questions;
    }

    // Randomly select MAX_QUESTIONS questions
    const shuffledQuestions = shuffleArray(characterQuestions);
    const selectedQuestions = shuffledQuestions.slice(0, MAX_QUESTIONS);

    // Process each question to have shuffled answers
    const processedQuestions = selectedQuestions.map(question => {
      return {
        ...question,
        answers: shuffleArray(question.answers)
      };
    });

    setQuestions(processedQuestions);
    setCurrentQuestion(processedQuestions[0]);
    setTimerKey(prevKey => prevKey + 1); // Reset timer on initial load
  }, [state.character_name]);

  // Check if we should show checkpoint (after every 3 questions)
  useEffect(() => {
    if (currentQuestionIndex > 0 && currentQuestionIndex % 3 === 0) {
      setShowCheckpoint(true);
    }
  }, [currentQuestionIndex]);

  // Handle answer selection
  const handleAnswerClick = (id, isCorrect) => {
    if (!isCorrect) {
      // If answer is incorrect, player loses
      navigate("/lose");
      return;
    }

    setScore(score + 1);

    // Check if all questions are answered
    if (currentQuestionIndex === questions.length - 1) {
      navigate("/win");
      return;
    }

    // Check if we need to show checkpoint
    if ((currentQuestionIndex + 1) % 3 === 0) {
      setShowCheckpoint(true);
    } else {
      // Move to next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentQuestion(questions[currentQuestionIndex + 1]);
      // Reset timer for the new question
      setTimerKey(prevKey => prevKey + 1);
    }
  };

  // Handle time up
  const handleTimeUp = () => {
    // If time is up, player loses
    navigate("/lose");
  };

  // Handle continue from checkpoint
  const handleContinue = () => {
    setShowCheckpoint(false);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setCurrentQuestion(questions[currentQuestionIndex + 1]);
    // Reset timer for the new question after checkpoint
    setTimerKey(prevKey => prevKey + 1);
  };

  // Handle win from checkpoint
  const handleWin = () => {
    navigate("/win");
  };

  // If questions are not loaded yet
  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  // Render checkpoint screen
  if (showCheckpoint) {
    return (
      <React.Fragment>
        <div className="tr_wrapper">
          <section className="tr_container">
            <div className="tr_content">
              <div className="tr_highlight">
                <Header />
              </div>
              <div className="tr_description">
                <span>Parabéns! Você completou mais uma etapa.</span>
              </div>
              <div className="tr_checkpoint-container">
                <div className="tr_checkpoint-message">
                  <span>Deseja continuar o jogo ou vencer agora?</span>
                </div>
                <div className="tr_checkpoint-buttons">
                  <button className="tr_checkpoint-button" onClick={handleContinue}>
                    Continuar
                  </button>
                  <button className="tr_checkpoint-button" onClick={handleWin}>
                    Vencer
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }

  // Render trivia screen
  return (
    <React.Fragment>
      <div className="tr_wrapper">
        <section className="tr_container">
          <div className="tr_content">
            <div className="tr_highlight">
              {/*<Header />*/}
            </div>
            <div className="tr_app_logo">
              <Display 
                key={timerKey} // Add key to reset timer
                onTimeUp={handleTimeUp} 
                videoLink={currentQuestion.video_link}
                fallbackImage={currentQuestion.fallback}
              />
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
