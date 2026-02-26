import { FC } from 'react';

interface QuizStartProps {
  onStart: () => void;
}

const QuizStart: FC<QuizStartProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-blue-50 flex items-center justify-center p-4">
      <div className="card max-w-2xl text-center">
        <div className="text-6xl mb-6">🎯</div>

        <h1 className="heading-hero mb-4">
          PM Archetype Generator
        </h1>

        <p className="text-hero mb-8">
          Discover your corporate Product Manager persona
        </p>

        <div className="bg-primary-50 rounded-lg p-6 mb-8 border border-primary-100">
          <h2 className="heading-large text-primary-800 mb-4">
            Which PM archetype are you?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div className="bg-white rounded-lg p-3 hover:shadow-sm transition-shadow">
              <div className="text-2xl mb-1">🎯</div>
              <div className="font-medium text-gray-700">The OKR Oracle</div>
            </div>
            <div className="bg-white rounded-lg p-3 hover:shadow-sm transition-shadow">
              <div className="text-2xl mb-1">📝</div>
              <div className="font-medium text-gray-700">Story Whisperer</div>
            </div>
            <div className="bg-white rounded-lg p-3 hover:shadow-sm transition-shadow">
              <div className="text-2xl mb-1">📊</div>
              <div className="font-medium text-gray-700">Metrics Maximizer</div>
            </div>
            <div className="bg-white rounded-lg p-3 hover:shadow-sm transition-shadow">
              <div className="text-2xl mb-1">❤️</div>
              <div className="font-medium text-gray-700">Customer Champion</div>
            </div>
          </div>
        </div>

        <div className="text-left bg-gray-50 rounded-lg p-6 mb-8 border border-gray-100">
          <h3 className="font-display font-semibold text-gray-800 mb-3">What you'll discover:</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="text-success-500 mr-2 font-semibold">✓</span>
              Your unique PM archetype with detailed personality profile
            </li>
            <li className="flex items-start">
              <span className="text-success-500 mr-2 font-semibold">✓</span>
              Your signature catchphrases and meeting style
            </li>
            <li className="flex items-start">
              <span className="text-success-500 mr-2 font-semibold">✓</span>
              Your superpowers and kryptonite as a PM
            </li>
            <li className="flex items-start">
              <span className="text-success-500 mr-2 font-semibold">✓</span>
              Shareable results perfect for LinkedIn or team Slack
            </li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="btn-gradient text-lg px-8 py-4 w-full md:w-auto font-display"
        >
          Start Quiz (2 minutes)
        </button>

        <p className="text-sm text-gray-500 mt-4">
          8 questions • No signup required • Perfect for workplace sharing
        </p>
      </div>
    </div>
  );
};

export default QuizStart;