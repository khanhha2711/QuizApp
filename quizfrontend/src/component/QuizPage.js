import React, { useEffect, useState, useRef } from 'react';
import WelcomePage from './WelcomePage';
import QuestionCard from './QuestionCard';
import ResultPage from './ResultPage';
import ReviewPage from './ReviewPage';

const QuizPage = () => {
  const [step, setStep] = useState("welcome"); // welcome | question | result | review
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const startTimeRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch('http://localhost:5192/api/quiz/questions')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        if (!Array.isArray(data) || data.length === 0) {
          throw new Error('No questions received from API');
        }
        // Shuffle array
        const shuffleArray = (arr) => {
          for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
          }
          return arr;
        };
        const shuffled = shuffleArray(data);
        setQuestions(shuffled.slice(0, 10));
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching questions:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);


  const handleStart = () => {
    setStep("question");
    setIndex(0);
    setUserAnswers([]);
    setResult(null);
    startTimeRef.current = Date.now();
  };
  const submitAnswer = (questionId, answerId) => {
    return fetch('http://localhost:5192/api/useranswer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        AnswerId: answerId,
        QuestionId: questionId,
        AnswerAt: new Date().toISOString(),
      }),
    }).catch(err => console.error('Error saving user answer:', err));
  };

  const handleAnswer = async (selectedAnswerText) => {
    const current = questions[index];
    const answerObj = current.answers.find(ans => ans.text === selectedAnswerText);
    if (!answerObj) return;

    // Gửi lên backend
    await submitAnswer(current.id, answerObj.id);

    const correctAnswer = current.answers.find(ans => ans.isCorrect)?.text;

    const newAnswer = {
      questionId: current.id,
      questionText: current.text,
      selectedAnswer: selectedAnswerText,
      correctAnswer: correctAnswer,
    };

    // ✅ Tạo mảng mới đã có câu trả lời hiện tại
    const updatedAnswers = [...userAnswers, newAnswer];

    // ✅ Lưu lại vào state
    setUserAnswers(updatedAnswers);

    if (index + 1 < questions.length) {
      setIndex(index + 1); // sang câu tiếp theo
    } else {
      // ✅ Tính số câu đúng từ updatedAnswers (đã đầy đủ)
      const correctCount = updatedAnswers.filter(
        ua => ua.selectedAnswer === ua.correctAnswer
      ).length;

      const timeSpent = (Date.now() - startTimeRef.current) / 1000;
      const pass = correctCount / questions.length >= 0.7;

      setResult({ correctCount, totalQuestions: questions.length, timeSpent, pass });
      setStep("result"); // sang kết quả
    }
  };

  const handleReplay = () => {
    setIndex(0);
    setStep("question");
    setUserAnswers([]);
    setResult(null);
    startTimeRef.current = Date.now();
  };

  const handleExit = () => {
    setStep("welcome");
    setIndex(0);
    setUserAnswers([]);
    setResult(null);
  };

  const handleCheck = () => {
    setStep("review");
  };

  if (loading) return <div>Loading questions...</div>;

  if (error) return (
    <div>
      <p>Error loading questions: {error}</p>
      <button onClick={() => window.location.reload()}>Try again</button>
    </div>
  );

  if (questions.length === 0) return (
    <div>
      <p>No questions available. Please try later.</p>
      <button onClick={() => window.location.reload()}>Reload</button>
    </div>
  );

  if (step === "welcome") {
    return <WelcomePage onStart={handleStart} />;
  }

  if (step === "question") {
    const current = questions[index];
    const correctAnswer = current.answers.find(ans => ans.isCorrect)?.text;

    return (
      <QuestionCard
        question={current.text}
        options={current.answers.map(ans => ans.text)}
        correctAnswer={correctAnswer}             // ✅ truyền đáp án đúng
        currentIndex={index + 1}
        total={questions.length}
        onNext={handleAnswer}
      />
    );
  }


  if (step === "result") {
    return (
      <ResultPage
        onReplay={handleReplay}
        onExit={handleExit}
        onCheck={handleCheck}
        correctCount={result.correctCount}
        total={result.totalQuestions}
        timeSpent={result.timeSpent}
        pass={result.pass}
      />
    );
  }

  if (step === "review") {
    return (
      <ReviewPage
        userAnswers={userAnswers}
        onExit={handleExit}
        onReplay={handleReplay}
      />
    );
  }

  return null;
};

export default QuizPage;
