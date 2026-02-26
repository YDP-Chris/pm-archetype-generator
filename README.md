# PM Archetype Generator

> Discover your corporate Product Manager persona! 🎯

A fun, shareable web tool that generates personalized PM archetypes based on your management style, experience, and preferences. From "The OKR Oracle" to "The User Story Whisperer" - find out which PM personality you embody.

## ✨ Features

- **12+ Detailed Archetypes**: Each with unique personality traits, catchphrases, and characteristics
- **Smart Quiz Engine**: 8 engaging questions that accurately map to your PM style
- **Shareable Results**: Perfect for LinkedIn, Twitter, or team Slack channels
- **Mobile-First Design**: Optimized for touch-friendly mobile experience
- **Zero Setup**: No accounts, APIs, or backend required
- **Professional Humor**: Workplace-appropriate content that PMs actually relate to

## 🎭 PM Archetypes Included

- 🎯 **The OKR Oracle** - Objectives and Key Results are my religion
- 📝 **The User Story Whisperer** - As a user, I want perfectly written stories
- 📊 **The Metrics Maximizer** - If you can't measure it, it doesn't exist
- ❤️ **The Customer Champion** - Voice of the customer, defender of users
- 🔄 **The Agile Evangelist** - Scrum master, sprint hero, retrospective rockstar
- 🧩 **The Strategic Synthesizer** - Big picture thinker, roadmap architect
- 🤝 **The Stakeholder Shepherd** - Herding cats, managing expectations
- ⚔️ **The Feature Factory Fighter** - Quality over quantity, outcomes over outputs
- 🔧 **The Technical Translator** - Bridging business and engineering
- 🔍 **The Discovery Detective** - Always asking why, always digging deeper
- 🗺️ **The Roadmap Rockstar** - Master of prioritization, timeline wizard
- 📈 **The Growth Guru** - AARRR metrics and growth loops

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YDP-Chris/pm-archetype-generator.git

# Navigate to project directory
cd pm-archetype-generator

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app in development mode.

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 🏗️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Architecture**: Client-side only (no backend required)
- **Deployment**: Vercel-ready with static export

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── QuizStart.tsx   # Landing page
│   ├── QuizQuestion.tsx # Individual question screens
│   ├── QuizResults.tsx  # Results display
│   └── ShareButtons.tsx # Social sharing functionality
├── data/               # Static data
│   ├── questions.ts    # Quiz questions and answer options
│   └── archetypes.ts   # Complete archetype definitions
├── types/              # TypeScript interfaces
│   └── index.ts        # Type definitions
├── utils/              # Utility functions
│   └── scoring.ts      # Archetype calculation logic
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## 🎯 How It Works

1. **Quiz Flow**: Users answer 8 questions about their PM style and preferences
2. **Weighted Scoring**: Each answer contributes weighted points to different archetypes
3. **Result Calculation**: The archetype with the highest total score is selected
4. **Personalized Results**: Detailed personality breakdown with traits, catchphrases, and characteristics
5. **Social Sharing**: One-click sharing to Twitter, LinkedIn, or copy-paste for Slack

## 🎨 Customization

### Adding New Archetypes

1. Add archetype definition to `src/data/archetypes.ts`:

```typescript
{
  id: 'new-archetype',
  name: 'The New Archetype',
  tagline: 'Your unique PM style',
  description: 'Detailed description...',
  traits: ['Trait 1', 'Trait 2'],
  catchphrases: ['"Catchphrase 1"', '"Catchphrase 2"'],
  // ... other properties
}
```

2. Add scoring weights to questions in `src/data/questions.ts`

### Modifying Questions

Edit `src/data/questions.ts` to:
- Change question text
- Add/remove answer options
- Adjust archetype scoring weights
- Add new question categories

## 🔧 Development

### Code Quality
```bash
# Run linting
npm run lint

# Type checking
npx tsc --noEmit
```

### Testing Locally
- Test quiz flow from start to finish
- Verify all archetypes can be reached with different answer combinations
- Test social sharing functionality
- Confirm mobile responsiveness

## 📱 Mobile Optimization

- Touch-friendly interface with large tap targets
- Responsive design that works on all screen sizes
- Mobile-first CSS approach
- Optimized for mobile sharing workflows

## 🎪 Social Sharing

The tool generates engaging, shareable content:
- **Pre-written social copy** optimized for each platform
- **Open Graph meta tags** for rich link previews
- **Multiple sharing options**: Twitter/X, LinkedIn, native share API, copy-paste
- **Workplace-appropriate humor** perfect for professional networks

## 🚢 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically with each push to main branch
3. No additional configuration required

### Manual Deployment
```bash
# Build for production
npm run build

# Deploy the dist/ folder to your hosting provider
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

Ideas for contributions:
- Additional PM archetypes
- More engaging questions
- Enhanced sharing features
- Accessibility improvements
- Animation and micro-interactions

## 📄 License

MIT License - feel free to use this project for your own PM community!

## 🎉 Credits

Created with ❤️ for Product Managers everywhere. Made by the team at YDP.

**Built using Foundry** - The autonomous AI product builder that ships functional products nightly.

---

*Know a PM who would love to discover their archetype? Share this tool and help them find their corporate persona!* 🚀