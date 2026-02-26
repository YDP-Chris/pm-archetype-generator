import { FC } from 'react';
import { Archetype } from '../types';
import { generateShareText, generateShareUrl } from '../utils/scoring';
import ShareButtons from './ShareButtons';

interface QuizResultsProps {
  archetype: Archetype;
  onRestart: () => void;
}

const QuizResults: FC<QuizResultsProps> = ({ archetype, onRestart }) => {
  const shareText = generateShareText(archetype);
  const shareUrl = generateShareUrl();

  return (
    <div className="min-h-screen bg-gradient-to-br from-corporate-50 to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Results Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{archetype.icon}</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            You are...
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-corporate-700 mb-4">
            {archetype.name}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 italic">
            "{archetype.tagline}"
          </p>
        </div>

        {/* Main Archetype Card */}
        <div className="archetype-card mb-8">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            {archetype.description}
          </p>

          {/* Traits */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="text-left">
              <h3 className="font-bold text-lg text-corporate-800 mb-3">
                🎯 Your Traits
              </h3>
              <ul className="space-y-2">
                {archetype.traits.map((trait, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-corporate-500 mr-2">•</span>
                    <span className="text-gray-700">{trait}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-left">
              <h3 className="font-bold text-lg text-corporate-800 mb-3">
                💬 Your Catchphrases
              </h3>
              <ul className="space-y-2">
                {archetype.catchphrases.map((phrase, index) => (
                  <li key={index} className="text-gray-700 italic">
                    "{phrase}"
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Detailed Breakdown */}
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-corporate-800 mb-2">
                  🏢 Meeting Style
                </h4>
                <p className="text-gray-700 text-sm">{archetype.meetingStyle}</p>
              </div>

              <div>
                <h4 className="font-semibold text-corporate-800 mb-2">
                  📅 Typical Day
                </h4>
                <p className="text-gray-700 text-sm">{archetype.typicalDay}</p>
              </div>

              <div>
                <h4 className="font-semibold text-corporate-800 mb-2">
                  📈 Career Progression
                </h4>
                <p className="text-gray-700 text-sm">{archetype.careerProgression}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">
                  ⚡ Superpower
                </h4>
                <p className="text-gray-700 text-sm">{archetype.superpower}</p>
              </div>

              <div>
                <h4 className="font-semibold text-red-700 mb-2">
                  💀 Kryptonite
                </h4>
                <p className="text-gray-700 text-sm">{archetype.kryptonite}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div className="card text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Share Your Result
          </h3>
          <p className="text-gray-600 mb-6">
            Let your colleagues discover their PM archetype too!
          </p>

          <ShareButtons shareText={shareText} shareUrl={shareUrl} />
        </div>

        {/* Actions */}
        <div className="text-center space-y-4">
          <button
            onClick={onRestart}
            className="btn-secondary mr-4"
          >
            Take Quiz Again
          </button>

          <div className="text-sm text-gray-500">
            <p>Made with ❤️ for Product Managers everywhere</p>
            <p className="mt-1">Share this tool and help others discover their PM archetype!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;