import React from 'react';
import './Review.css'; 

const ReviewPage = ({ userAnswers, onExit, onReplay }) => {
  return (
    <div className="review-container">
      <h2 className="review-title">Review Your Answers</h2>
      {userAnswers.map((answer, index) => {
        const isCorrect = answer.selectedAnswer === answer.correctAnswer;

        return (
          <div
            key={index}
            className={`review-question ${isCorrect ? 'correct' : 'incorrect'}`}
          >
            <p className="question-text">
              <strong>{index + 1}:</strong> {answer.questionText}
            </p>
            <p>
              <strong>Your answer:</strong> {answer.selectedAnswer}
            </p>
            {!isCorrect && (
              <p>
                <strong>Correct answer:</strong> {answer.correctAnswer}
              </p>
            )}
          </div>
        );
      })}

      <div className="review-buttons">
        <button className="btn replay" onClick={onReplay}>Play Again</button>
        <button className="btn exit" onClick={onExit}>Exit</button>
      </div>
    </div>
  );
};

export default ReviewPage;
