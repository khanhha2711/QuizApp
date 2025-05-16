import React, { useState } from 'react';
import './QuestionCard.css';
const QuestionCard = ({ question, options, correctAnswer, onNext, currentIndex, total }) => {
  const [selected, setSelected] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleClick = (option) => {
    if (isAnswered) return;
    setSelected(option);
    setIsAnswered(true);
  };


  return (
    <div className="card-container">
       <div className="quiz-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontWeight: "bold" }}>
        {currentIndex} / {total}
        </span>
      </div>

      <div className="question-text">{question}</div>

      <div className="option-list">
        {options.map((option, idx) => {
          const isSelected = selected === option;
          const isCorrectOption = option === correctAnswer;
          const optionClass = isAnswered
            ? isSelected
              ? isCorrectOption
                ? 'option correct'
                : 'option wrong'
              : 'option disabled'
            : 'option';

          return (
            <label key={idx} className={optionClass}>
              <input
                type="radio"
                name="option"
                checked={isSelected}
                onChange={() => handleClick(option)}
                disabled={isAnswered}
              />
              <span className="option-text">{option}</span>
            </label>
          );
        })}
      </div>


      <div className="feedback" style={{ marginTop: 20 }}>
        <button
          
          className="next-button"
          onClick={() => {
            if (!isAnswered) return;
            setSelected(null);
            setIsAnswered(false);
            onNext(selected);
          }}
          disabled={!isAnswered}
           style={{
              padding: '8px 20px',
              backgroundColor: isAnswered ? '#2196f3' : '#bdbdbd', // xanh khi có thể bấm, xám khi chưa
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: isAnswered ? 'pointer' : 'not-allowed',
              opacity: isAnswered ? 1 : 0.6,
              transition: 'all 0.3s ease',
            }}
          
        >
          Next
        </button>
      </div>

    </div>
  );
};

export default QuestionCard;
