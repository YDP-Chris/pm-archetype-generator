import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 'company-size',
    text: 'What size company do you thrive at?',
    options: [
      {
        id: 'startup',
        text: '🚀 Startup (0-50 employees) - "Move fast and break things"',
        weights: {
          'growth-guru': 3,
          'feature-factory-fighter': 2,
          'discovery-detective': 2,
          'agile-evangelist': 1
        }
      },
      {
        id: 'scaleup',
        text: '📈 Scale-up (50-500) - "Growth mode activated"',
        weights: {
          'growth-guru': 2,
          'roadmap-rockstar': 3,
          'stakeholder-shepherd': 2,
          'metrics-maximizer': 2
        }
      },
      {
        id: 'enterprise',
        text: '🏢 Enterprise (500+) - "Process and precision"',
        weights: {
          'okr-oracle': 3,
          'stakeholder-shepherd': 3,
          'strategic-synthesizer': 2,
          'technical-translator': 2
        }
      },
      {
        id: 'consulting',
        text: '💼 Consulting - "Every client is different"',
        weights: {
          'strategic-synthesizer': 3,
          'technical-translator': 2,
          'customer-champion': 2,
          'discovery-detective': 2
        }
      }
    ]
  },
  {
    id: 'experience-level',
    text: 'How many years have you been in the PM trenches?',
    options: [
      {
        id: 'junior',
        text: '🌱 0-2 years - "Learning the ropes"',
        weights: {
          'user-story-whisperer': 2,
          'agile-evangelist': 3,
          'discovery-detective': 2,
          'customer-champion': 2
        }
      },
      {
        id: 'mid',
        text: '🎯 3-5 years - "Finding my groove"',
        weights: {
          'metrics-maximizer': 3,
          'roadmap-rockstar': 2,
          'feature-factory-fighter': 2,
          'user-story-whisperer': 2
        }
      },
      {
        id: 'senior',
        text: '🎖️ 6-10 years - "Been there, done that"',
        weights: {
          'strategic-synthesizer': 3,
          'stakeholder-shepherd': 3,
          'technical-translator': 2,
          'okr-oracle': 2
        }
      },
      {
        id: 'veteran',
        text: '👑 10+ years - "I\'ve seen it all"',
        weights: {
          'okr-oracle': 3,
          'strategic-synthesizer': 3,
          'stakeholder-shepherd': 2,
          'growth-guru': 2
        }
      }
    ]
  },
  {
    id: 'management-philosophy',
    text: 'What\'s your PM philosophy?',
    options: [
      {
        id: 'data-driven',
        text: '📊 "In data we trust"',
        weights: {
          'metrics-maximizer': 3,
          'growth-guru': 2,
          'okr-oracle': 2,
          'discovery-detective': 1
        }
      },
      {
        id: 'user-centric',
        text: '❤️ "Users first, always"',
        weights: {
          'customer-champion': 3,
          'user-story-whisperer': 3,
          'discovery-detective': 2,
          'feature-factory-fighter': 1
        }
      },
      {
        id: 'business-first',
        text: '💰 "Revenue solves all problems"',
        weights: {
          'growth-guru': 3,
          'strategic-synthesizer': 2,
          'okr-oracle': 2,
          'roadmap-rockstar': 1
        }
      },
      {
        id: 'agile-focused',
        text: '🔄 "Iterate and improve"',
        weights: {
          'agile-evangelist': 3,
          'feature-factory-fighter': 2,
          'user-story-whisperer': 2,
          'discovery-detective': 2
        }
      }
    ]
  },
  {
    id: 'meeting-style',
    text: 'What\'s your meeting personality?',
    options: [
      {
        id: 'facilitator',
        text: '🎭 "Let me guide this conversation"',
        weights: {
          'stakeholder-shepherd': 3,
          'agile-evangelist': 2,
          'strategic-synthesizer': 2,
          'user-story-whisperer': 1
        }
      },
      {
        id: 'data-presenter',
        text: '📈 "Here\'s what the numbers say"',
        weights: {
          'metrics-maximizer': 3,
          'okr-oracle': 2,
          'growth-guru': 2,
          'technical-translator': 1
        }
      },
      {
        id: 'questioner',
        text: '❓ "But have we considered..."',
        weights: {
          'discovery-detective': 3,
          'customer-champion': 2,
          'feature-factory-fighter': 2,
          'strategic-synthesizer': 1
        }
      },
      {
        id: 'synthesizer',
        text: '🧩 "So what I\'m hearing is..."',
        weights: {
          'strategic-synthesizer': 3,
          'technical-translator': 2,
          'stakeholder-shepherd': 2,
          'okr-oracle': 1
        }
      }
    ]
  },
  {
    id: 'methodology',
    text: 'Pick your favorite PM methodology:',
    options: [
      {
        id: 'scrum',
        text: '🏃‍♂️ Scrum - "2-week sprints forever"',
        weights: {
          'agile-evangelist': 3,
          'user-story-whisperer': 2,
          'stakeholder-shepherd': 1,
          'feature-factory-fighter': 1
        }
      },
      {
        id: 'lean',
        text: '🔬 Lean Startup - "Build, measure, learn"',
        weights: {
          'discovery-detective': 3,
          'metrics-maximizer': 2,
          'customer-champion': 2,
          'growth-guru': 1
        }
      },
      {
        id: 'okrs',
        text: '🎯 OKRs - "Objectives and key results"',
        weights: {
          'okr-oracle': 3,
          'strategic-synthesizer': 2,
          'growth-guru': 2,
          'metrics-maximizer': 1
        }
      },
      {
        id: 'design-thinking',
        text: '🎨 Design Thinking - "Empathize and ideate"',
        weights: {
          'customer-champion': 3,
          'discovery-detective': 2,
          'user-story-whisperer': 2,
          'feature-factory-fighter': 1
        }
      }
    ]
  },
  {
    id: 'biggest-challenge',
    text: 'What\'s your biggest PM challenge?',
    options: [
      {
        id: 'stakeholder-alignment',
        text: '🤝 "Getting everyone on the same page"',
        weights: {
          'stakeholder-shepherd': 3,
          'strategic-synthesizer': 2,
          'okr-oracle': 2,
          'technical-translator': 1
        }
      },
      {
        id: 'prioritization',
        text: '⚖️ "Everything is urgent and important"',
        weights: {
          'roadmap-rockstar': 3,
          'feature-factory-fighter': 2,
          'strategic-synthesizer': 2,
          'metrics-maximizer': 1
        }
      },
      {
        id: 'user-research',
        text: '🔍 "What do users actually want?"',
        weights: {
          'discovery-detective': 3,
          'customer-champion': 3,
          'user-story-whisperer': 2,
          'agile-evangelist': 1
        }
      },
      {
        id: 'technical-debt',
        text: '⚙️ "Balancing features vs infrastructure"',
        weights: {
          'technical-translator': 3,
          'feature-factory-fighter': 2,
          'strategic-synthesizer': 1,
          'roadmap-rockstar': 1
        }
      }
    ]
  },
  {
    id: 'communication-style',
    text: 'How do you prefer to communicate?',
    options: [
      {
        id: 'storyteller',
        text: '📚 "Let me tell you about our users"',
        weights: {
          'customer-champion': 3,
          'user-story-whisperer': 3,
          'strategic-synthesizer': 1,
          'discovery-detective': 1
        }
      },
      {
        id: 'analyst',
        text: '📊 "The data shows us that..."',
        weights: {
          'metrics-maximizer': 3,
          'growth-guru': 2,
          'okr-oracle': 2,
          'technical-translator': 1
        }
      },
      {
        id: 'facilitator',
        text: '🎯 "What if we try this approach?"',
        weights: {
          'agile-evangelist': 3,
          'stakeholder-shepherd': 2,
          'discovery-detective': 2,
          'feature-factory-fighter': 1
        }
      },
      {
        id: 'strategist',
        text: '🧭 "Looking at the big picture..."',
        weights: {
          'strategic-synthesizer': 3,
          'okr-oracle': 2,
          'roadmap-rockstar': 2,
          'technical-translator': 1
        }
      }
    ]
  },
  {
    id: 'decision-making',
    text: 'How do you make tough product decisions?',
    options: [
      {
        id: 'data-analysis',
        text: '🔢 "Let me run the numbers"',
        weights: {
          'metrics-maximizer': 3,
          'growth-guru': 2,
          'okr-oracle': 1,
          'discovery-detective': 1
        }
      },
      {
        id: 'user-feedback',
        text: '🗣️ "What are customers saying?"',
        weights: {
          'customer-champion': 3,
          'discovery-detective': 2,
          'user-story-whisperer': 2,
          'feature-factory-fighter': 1
        }
      },
      {
        id: 'strategic-alignment',
        text: '🎯 "Does this fit our vision?"',
        weights: {
          'strategic-synthesizer': 3,
          'okr-oracle': 2,
          'roadmap-rockstar': 2,
          'stakeholder-shepherd': 1
        }
      },
      {
        id: 'rapid-testing',
        text: '🧪 "Let\'s test and learn quickly"',
        weights: {
          'agile-evangelist': 3,
          'discovery-detective': 2,
          'feature-factory-fighter': 2,
          'growth-guru': 1
        }
      }
    ]
  }
];