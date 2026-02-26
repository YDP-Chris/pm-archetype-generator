import { FC } from 'react';
import { Question } from '../types';

interface QuizQuestionProps {
  question: Question;
  selectedAnswer: string | undefined;
  onAnswer: (answerId: string) => void;
  onBack: () => void;
  currentIndex: number;
  totalQuestions: number;
  canGoBack: boolean;
}

const QuizQuestion: FC<QuizQuestionProps> = ({
  question,
  selectedAnswer,
  onAnswer,
  onBack,
  currentIndex,
  totalQuestions,
  canGoBack
}) => {
  const progressPercentage = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-corporate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Question {currentIndex + 1} of {totalQuestions}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {Math.round(progressPercentage)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-corporate-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="card">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            {question.text}
          </h2>

          <div className="space-y-4">
            {question.options.map((option) => (
              <button
                key={option.id}
                onClick={() => onAnswer(option.id)}
                className={`quiz-option ${selectedAnswer === option.id ? 'selected' : ''}`}
              >
                <div className="text-left">
                  <div className="text-lg font-medium mb-1">{option.text}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={onBack}
              className={`btn-secondary ${!canGoBack ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!canGoBack}
            >
              ← Back
            </button>

            <div className="text-sm text-gray-500">
              {selectedAnswer ? 'Click another option to change your answer' : 'Select an option to continue'}
            </div>

            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;