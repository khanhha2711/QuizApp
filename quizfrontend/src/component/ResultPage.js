import React from 'react';
import './Result.css';
import { AiOutlineClose } from 'react-icons/ai';

const Result = ({ correctCount, total, timeSpent, onReplay, onExit, onCheck }) => {
  const pass = correctCount >= 5;  
  const title = pass ? "Congratulations" : "Completed";
  return (
    <div className="result-container">
      <button className="exit-icon" onClick={onExit}>
        <AiOutlineClose />
      </button>
      <h2 className="result-title">{title}</h2>
      <p
        className="result-message"
        style={{ fontWeight: 'bold', color: pass ? 'green' : 'red' }}
      >
        {pass
          ? "You are amazing!"
          : "Keep trying and you'll do better next time!"}
      </p>
      <p className="score-title">Your score</p>
      <p className="result-score">
        {correctCount} / {total}
      </p>
      <p className="time-title">Time</p>
      <p className="time-spent">{Math.round(timeSpent)} seconds</p>

      <div className="result-buttons">
        <button className="btn replay" onClick={onReplay}>Play Again</button>
        <button className="btn check" onClick={onCheck}>Check</button>
      </div>
    </div>
  );
};

export default Result;

