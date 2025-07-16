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
  const [state, dispatch] = useContext(GameContext);

  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(state.currentQuestionIndex || 0);
  const [score, setScore] = useState(state.score || 0);
  const [questions, setQuestions] = useState(state.questions || []);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [timerKey, setTimerKey] = useState(0); // Key to reset timer
  const MAX_QUESTIONS = 9;

  // Initialize questions based on selected character
  useEffect(() => {
    // If we already have questions in the state, use them
    if (state.questions && state.questions.length > 0) {
      setQuestions(state.questions);
      setCurrentQuestion(state.questions[currentQuestionIndex]);
      setTimerKey(prevKey => prevKey + 1); // Reset timer on initial load
      return;
    }

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

    // Update the context
    dispatch({ type: 'set_questions', payload: processedQuestions });

    setTimerKey(prevKey => prevKey + 1); // Reset timer on initial load
  }, [state.character_name, state.questions, currentQuestionIndex, dispatch]);

  // No need to check for checkpoint in useEffect anymore as we'll navigate directly

  // Handle answer selection
  const handleAnswerClick = (id, isCorrect) => {
    if (!isCorrect) {
      // If answer is incorrect, player loses
      // Reset game state before navigating
      dispatch({ type: 'reset_game' });
      navigate("/lose");
      return;
    }

    const newScore = score + 1;
    setScore(newScore);
    dispatch({ type: 'update_score', payload: newScore });

    // Check if all questions are answered
    if (currentQuestionIndex === questions.length - 1) {
      // Reset game state before navigating
      dispatch({ type: 'reset_game' });
      navigate("/win");
      return;
    }

    // Check if we need to navigate to checkpoint
    if ((currentQuestionIndex + 1) % 3 === 0) {
      // Update question index in context before navigating
      const newIndex = currentQuestionIndex + 1;
      dispatch({ type: 'update_question_index', payload: newIndex });
      navigate("/checkpoint");
    } else {
      // Move to next question
      const newIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(newIndex);
      setCurrentQuestion(questions[newIndex]);
      dispatch({ type: 'update_question_index', payload: newIndex });
      // Reset timer for the new question
      setTimerKey(prevKey => prevKey + 1);
    }
  };

  // Handle time up
  const handleTimeUp = () => {
    // If time is up, player loses
    // Reset game state before navigating

    dispatch({ type: 'reset_game' });
    navigate("/lose");
  };

  // If questions are not loaded yet
  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  // Render trivia screen
  return (
    <React.Fragment>
      <div className="tr_wrapper">
        <section className="tr_container">
          <div className="tr_content">
            <div className="tr_highlight">
              <Header />
            </div>
            <div className="tr_app_logo">
              <Display 
                key={timerKey} // Add key to reset timer
                onTimeUp={handleTimeUp} 
                videoLink={currentQuestion.video_link}
                fallbackImage={currentQuestion.fallback}
              />
            </div>
            <div className="tr_answers_description_container">
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
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export { Trivia };
