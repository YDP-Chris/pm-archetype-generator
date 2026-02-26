import { useState } from 'react';
import { QuizState } from './types';
import { questions } from './data/questions';
import { calculateArchetype } from './utils/scoring';
import QuizStart from './components/QuizStart';
import QuizQuestion from './components/QuizQuestion';
import QuizResults from './components/QuizResults';

const initialState: QuizState = {
  currentQuestionIndex: -1, // -1 means on start screen
  answers: {},
  isCompleted: false,
  result: null
};

function App() {
  const [quizState, setQuizState] = useState<QuizState>(initialState);

  const startQuiz = () => {
    setQuizState(prev => ({
      ...prev,
      currentQuestionIndex: 0
    }));
  };

  const answerQuestion = (questionId: string, answerId: string) => {
    const newAnswers = {
      ...quizState.answers,
      [questionId]: answerId
    };

    const isLastQuestion = quizState.currentQuestionIndex === questions.length - 1;

    if (isLastQuestion) {
      // Quiz completed - calculate result
      const archetype = calculateArchetype(newAnswers);
      setQuizState(prev => ({
        ...prev,
        answers: newAnswers,
        isCompleted: true,
        result: archetype
      }));
    } else {
      // Move to next question
      setQuizState(prev => ({
        ...prev,
        answers: newAnswers,
        currentQuestionIndex: prev.currentQuestionIndex + 1
      }));
    }
  };

  const goBack = () => {
    if (quizState.currentQuestionIndex > 0) {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1
      }));
    } else {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: -1
      }));
    }
  };

  const restartQuiz = () => {
    setQuizState(initialState);
  };

  // Show start screen
  if (quizState.currentQuestionIndex === -1) {
    return <QuizStart onStart={startQuiz} />;
  }

  // Show results screen
  if (quizState.isCompleted && quizState.result) {
    return <QuizResults archetype={quizState.result} onRestart={restartQuiz} />;
  }

  // Show current question
  const currentQuestion = questions[quizState.currentQuestionIndex];
  const selectedAnswer = quizState.answers[currentQuestion.id];

  return (
    <QuizQuestion
      question={currentQuestion}
      selectedAnswer={selectedAnswer}
      onAnswer={(answerId) => answerQuestion(currentQuestion.id, answerId)}
      onBack={goBack}
      currentIndex={quizState.currentQuestionIndex}
      totalQuestions={questions.length}
      canGoBack={quizState.currentQuestionIndex > 0}
    />
  );
}

export default App;