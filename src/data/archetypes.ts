import { Archetype } from '../types';

export const archetypes: Archetype[] = [
  {
    id: 'okr-oracle',
    name: 'The OKR Oracle',
    tagline: 'Objectives and Key Results are my religion',
    description: 'You see the world through the lens of measurable outcomes and cascading goals. Every conversation somehow leads back to OKRs, and you can spot misaligned objectives from across the office.',
    traits: [
      'Speaks fluent OKR-ese',
      'Has strong opinions about scoring methodology',
      'Believes everything can be measured',
      'Quarterly planning is your Super Bowl'
    ],
    catchphrases: [
      '"What\'s our key result here?"',
      '"That doesn\'t ladder up to our objective"',
      '"We need to score that at 0.7"',
      '"Let\'s cascade this down"'
    ],
    meetingStyle: 'Facilitates with flip chart markers and colored sticky notes. Always asks "How does this map to our OKRs?" at least three times per meeting.',
    typicalDay: 'Morning: Review OKR dashboard. Mid-morning: Align stakeholders on objectives. Afternoon: Update key results. Evening: Plan next quarter\'s goals.',
    careerProgression: 'Started as an analyst, fell in love with goal frameworks, now evangelizes OKRs company-wide. Probably has "Measure What Matters" highlighted in 47 places.',
    superpower: 'Can turn any vague business goal into a perfectly measurable key result',
    kryptonite: 'Ambiguous success metrics and teams who "just wing it"',
    icon: '🎯'
  },
  {
    id: 'user-story-whisperer',
    name: 'The User Story Whisperer',
    tagline: 'As a user, I want perfectly written stories',
    description: 'You have an almost mystical ability to write user stories that actually make sense. Your acceptance criteria are poetry, and you dream in "Given/When/Then" format.',
    traits: [
      'Writes user stories like Shakespeare wrote sonnets',
      'Has strong opinions about story point estimation',
      'Can spot a poorly written acceptance criteria from space',
      'Backlog grooming is your meditation'
    ],
    catchphrases: [
      '"As a user, I want..."',
      '"What\'s the acceptance criteria here?"',
      '"This story is too big - let\'s break it down"',
      '"We need to groom the backlog"'
    ],
    meetingStyle: 'Always has the backlog open, constantly refining stories mid-conversation. Asks clarifying questions until everyone\'s eyes glaze over.',
    typicalDay: 'Morning: Review and refine user stories. Mid-day: Sprint planning and estimation. Afternoon: Write detailed acceptance criteria. Evening: Prep stories for tomorrow.',
    careerProgression: 'Started in QA, learned to think like users, became the team\'s story-writing guru. Can write a epic that would make Tolstoy weep.',
    superpower: 'Transforms vague requirements into crystal-clear, actionable user stories',
    kryptonite: 'Technical stories without clear user value and developers who skip acceptance criteria',
    icon: '📝'
  },
  {
    id: 'metrics-maximizer',
    name: 'The Metrics Maximizer',
    tagline: 'If you can\'t measure it, it doesn\'t exist',
    description: 'You live and breathe analytics. Your dashboard has more charts than a maritime museum, and you can spot a vanity metric from a mile away.',
    traits: [
      'Has Google Analytics bookmarked on speed dial',
      'Speaks in conversion rates and cohort analyses',
      'Can identify correlation vs causation in your sleep',
      'North star metrics are actually your religion'
    ],
    catchphrases: [
      '"What\'s our conversion rate?"',
      '"Let\'s look at the funnel"',
      '"Correlation doesn\'t equal causation"',
      '"We need to segment this data"'
    ],
    meetingStyle: 'Brings printed charts to every meeting. Screen shares dashboards at the drop of a hat. Always has "one more chart" to show.',
    typicalDay: 'Morning: Analyze overnight metrics. Mid-day: Deep dive into user behavior data. Afternoon: Build new dashboards. Evening: Set up automated alerts.',
    careerProgression: 'Started as a business analyst, discovered the joy of product metrics, now drowns everyone in beautiful, actionable data insights.',
    superpower: 'Can find the one metric that actually predicts business success',
    kryptonite: 'Vanity metrics, gut-feeling decisions, and products without proper analytics tracking',
    icon: '📊'
  },
  {
    id: 'customer-champion',
    name: 'The Customer Champion',
    tagline: 'Voice of the customer, defender of users',
    description: 'You are the user\'s greatest advocate. You have their quotes memorized, their pain points catalogued, and you will fight anyone who suggests building something users don\'t actually want.',
    traits: [
      'Has customer quotes for every occasion',
      'Regularly uses phrases like "our users are telling us"',
      'Gets genuinely upset about poor user experiences',
      'User research is your love language'
    ],
    catchphrases: [
      '"But what do our users actually want?"',
      '"I talked to 12 customers last week and..."',
      '"This creates friction in the user journey"',
      '"Let\'s validate this with users first"'
    ],
    meetingStyle: 'Starts every proposal with customer insights. Shows user interview clips. Always brings up the user perspective when discussions get too internal.',
    typicalDay: 'Morning: Review user feedback from support. Mid-day: Conduct user interviews. Afternoon: Synthesize customer insights. Evening: Share learnings with team.',
    careerProgression: 'Started in customer success, fell in love with user research, now ensures the customer voice is heard in every product decision.',
    superpower: 'Can predict user behavior with scary accuracy based on deep customer empathy',
    kryptonite: 'Feature factories that build without user input and teams who think they know better than customers',
    icon: '❤️'
  },
  {
    id: 'agile-evangelist',
    name: 'The Agile Evangelist',
    tagline: 'Scrum master, sprint hero, retrospective rockstar',
    description: 'You believe agile methodology can solve any problem. Your calendar is perfectly blocked into two-week sprints, and you have strong opinions about standup formats.',
    traits: [
      'Can recite the Agile Manifesto by heart',
      'Has attended at least 3 Scrum Alliance conferences',
      'Genuinely excited about retrospectives',
      'Uses "sprint" as a verb in everyday conversation'
    ],
    catchphrases: [
      '"Let\'s take this to the retro"',
      '"What\'s blocking you?"',
      '"Individuals over processes"',
      '"Working software over comprehensive documentation"'
    ],
    meetingStyle: 'Facilitates like a zen master. Uses timeboxes religiously. Always suggests breaking things into smaller chunks or moving to the "parking lot."',
    typicalDay: 'Morning: Standup facilitation. Mid-day: Remove blockers and support the team. Afternoon: Sprint planning prep. Evening: Continuous improvement research.',
    careerProgression: 'Started as a project manager, discovered agile, got certified in everything, now spreads the agile gospel throughout the organization.',
    superpower: 'Can take any chaotic process and make it smooth, predictable, and team-friendly',
    kryptonite: 'Waterfall processes, micromanagers, and anyone who schedules meetings during sprint ceremonies',
    icon: '🔄'
  },
  {
    id: 'strategic-synthesizer',
    name: 'The Strategic Synthesizer',
    tagline: 'Big picture thinker, roadmap architect',
    description: 'You see connections others miss and can synthesize complex information into clear strategic direction. You think in quarters and years, not days and weeks.',
    traits: [
      'Thinks three moves ahead like a chess grandmaster',
      'Can connect seemingly unrelated market trends',
      'Loves a good SWOT analysis',
      'Strategy presentations are your art form'
    ],
    catchphrases: [
      '"Looking at this strategically..."',
      '"What\'s our competitive differentiation?"',
      '"This aligns with our long-term vision"',
      '"Let\'s zoom out and see the bigger picture"'
    ],
    meetingStyle: 'Asks the tough strategic questions others avoid. Draws frameworks on whiteboards. Always brings the conversation back to long-term implications.',
    typicalDay: 'Morning: Market research and competitive analysis. Mid-day: Strategic planning sessions. Afternoon: Roadmap alignment. Evening: Industry trend analysis.',
    careerProgression: 'Started in consulting or business development, learned to think strategically, now shapes product direction at the highest level.',
    superpower: 'Can synthesize complex market dynamics into clear, actionable product strategy',
    kryptonite: 'Short-term thinking, tactical execution without strategic context, and teams that can\'t see the forest for the trees',
    icon: '🧩'
  },
  {
    id: 'stakeholder-shepherd',
    name: 'The Stakeholder Shepherd',
    tagline: 'Herding cats, managing expectations, keeping everyone happy',
    description: 'You have the diplomatic skills of a UN ambassador. Your superpower is getting people who disagree to somehow find common ground and move forward together.',
    traits: [
      'Can manage up, down, and sideways simultaneously',
      'Has mastered the art of the "pre-meeting"',
      'Speaks everyone\'s language: dev, design, business, legal',
      'RACI charts are your best friend'
    ],
    catchphrases: [
      '"Let me align with stakeholders"',
      '"What I\'m hearing from everyone is..."',
      '"Can we find a path forward that works for all teams?"',
      '"Let\'s get everyone in the same room"'
    ],
    meetingStyle: 'Masterful meeting facilitator who keeps discussions on track. Always does stakeholder prep beforehand. Somehow gets decisions from groups that never agree.',
    typicalDay: 'Morning: Stakeholder alignment calls. Mid-day: Cross-functional collaboration. Afternoon: Expectation management. Evening: Political navigation planning.',
    careerProgression: 'Started in business operations or project management, learned the art of stakeholder management, now keeps complex organizations moving forward.',
    superpower: 'Can align conflicting stakeholders and get decisions made in complex organizations',
    kryptonite: 'Decision paralysis, competing priorities without clear resolution, and stakeholders who won\'t compromise',
    icon: '🤝'
  },
  {
    id: 'feature-factory-fighter',
    name: 'The Feature Factory Fighter',
    tagline: 'Quality over quantity, outcomes over outputs',
    description: 'You are the sworn enemy of feature factories. You would rather ship one thing that works perfectly than ten things that kind of work.',
    traits: [
      'Has "outcomes over outputs" tattooed somewhere',
      'Physically cringes at feature-driven roadmaps',
      'Can smell a vanity feature from three cubicles away',
      'User value is your north star'
    ],
    catchphrases: [
      '"But what problem does this actually solve?"',
      '"We\'re not a feature factory"',
      '"Outcomes over outputs"',
      '"Less features, more value"'
    ],
    meetingStyle: 'Challenges every feature request with "why?" Pushes back on scope creep. Always brings the conversation back to user problems and business value.',
    typicalDay: 'Morning: Prioritization and scope discussions. Mid-day: Pushback on unnecessary features. Afternoon: Focus on high-impact improvements. Evening: Outcome measurement.',
    careerProgression: 'Survived at least one feature factory, learned the hard way that shipping != success, now fights the good fight against meaningless busy work.',
    superpower: 'Can identify which features will actually drive user and business value',
    kryptonite: 'Feature-driven roadmaps, vanity metrics, and leadership who measures success by output volume',
    icon: '⚔️'
  },
  {
    id: 'technical-translator',
    name: 'The Technical Translator',
    tagline: 'Bridging the gap between business and engineering',
    description: 'You speak both business and engineering fluently. You can explain technical concepts to executives and business requirements to developers without losing anyone.',
    traits: [
      'Has a technical background but chose the business side',
      'Can read code and understand architecture',
      'Mediates between engineering and business like a UN peacekeeper',
      'Technical debt is a real, tangible thing to you'
    ],
    catchphrases: [
      '"Let me translate that for the business team"',
      '"The technical complexity here is..."',
      '"We need to consider the engineering effort"',
      '"This creates technical debt we\'ll pay later"'
    ],
    meetingStyle: 'Explains technical concepts with analogies everyone understands. Asks engineers clarifying questions that business people wouldn\'t think to ask.',
    typicalDay: 'Morning: Technical feasibility discussions. Mid-day: Architecture and design reviews. Afternoon: Translate requirements between teams. Evening: Technical research.',
    careerProgression: 'Started as an engineer or technical analyst, moved into product, now serves as the crucial bridge between technical and business teams.',
    superpower: 'Can make complex technical concepts understandable and actionable for non-technical stakeholders',
    kryptonite: 'Non-technical teams who ignore technical constraints and engineers who can\'t explain business impact',
    icon: '🔧'
  },
  {
    id: 'discovery-detective',
    name: 'The Discovery Detective',
    tagline: 'Always asking why, always digging deeper',
    description: 'You are driven by curiosity and refuse to accept surface-level answers. You dig into problems until you find the root cause and real user needs.',
    traits: [
      'Asks "why" at least five times before accepting an answer',
      'Has a natural skepticism about assumed solutions',
      'Loves user research more than most people love Netflix',
      'Can spot a symptom vs root cause instantly'
    ],
    catchphrases: [
      '"But why is that a problem?"',
      '"What\'s the real underlying need here?"',
      '"Have we validated this assumption?"',
      '"Let\'s dig deeper into the user research"'
    ],
    meetingStyle: 'Asks probing questions that make everyone think harder. Challenges assumptions with data and user insights. Always wants more research before decisions.',
    typicalDay: 'Morning: User interview analysis. Mid-day: Hypothesis formation and testing. Afternoon: Problem definition and validation. Evening: Research synthesis.',
    careerProgression: 'Started in research or consulting, fell in love with problem-solving, now ensures teams solve the right problems the right way.',
    superpower: 'Can uncover the real problems hiding behind surface-level requests and symptoms',
    kryptonite: 'Solution-first thinking, rushed decisions without proper discovery, and teams who "already know" what users want',
    icon: '🔍'
  },
  {
    id: 'roadmap-rockstar',
    name: 'The Roadmap Rockstar',
    tagline: 'Master of prioritization, timeline wizard',
    description: 'You create roadmaps that are both ambitious and achievable. You understand the delicate art of prioritization and can communicate timelines that actually make sense.',
    traits: [
      'Has strong opinions about roadmap tools and formats',
      'Can estimate project timelines with supernatural accuracy',
      'Prioritization frameworks are your specialty',
      'Thinks in themes, epics, and quarterly milestones'
    ],
    catchphrases: [
      '"Where does this fit on the roadmap?"',
      '"What\'s our prioritization framework?"',
      '"We need to sequence this properly"',
      '"That\'s a great idea for Q3"'
    ],
    meetingStyle: 'Always has the roadmap pulled up. Asks tough prioritization questions. Helps teams understand trade-offs and timeline implications.',
    typicalDay: 'Morning: Roadmap review and updates. Mid-day: Prioritization discussions. Afternoon: Timeline planning and stakeholder alignment. Evening: Capacity planning.',
    careerProgression: 'Started in project management or operations, learned product planning, now creates roadmaps that teams actually follow and achieve.',
    superpower: 'Can create roadmaps that balance ambitious goals with realistic timelines and resources',
    kryptonite: 'Scope creep, constantly changing priorities, and leadership who want everything done yesterday',
    icon: '🗺️'
  },
  {
    id: 'growth-guru',
    name: 'The Growth Guru',
    tagline: 'Acquisition, activation, retention, revenue, referral',
    description: 'You think in funnels, cohorts, and growth loops. You can spot a growth opportunity in any user behavior pattern and love running experiments to optimize everything.',
    traits: [
      'Speaks in AARRR metrics (Acquisition, Activation, Retention, Referral, Revenue)',
      'Has run more A/B tests than anyone should',
      'Can calculate LTV/CAC in your sleep',
      'Growth hacking is a science, not luck'
    ],
    catchphrases: [
      '"What\'s our growth loop here?"',
      '"Let\'s run an experiment"',
      '"How does this impact our funnel?"',
      '"What\'s the LTV/CAC ratio?"'
    ],
    meetingStyle: 'Always brings growth metrics to discussions. Proposes experiments for every hypothesis. Thinks about scalability and viral loops in every feature.',
    typicalDay: 'Morning: Growth metrics analysis. Mid-day: Experiment design and results review. Afternoon: Growth strategy planning. Evening: Competitive growth research.',
    careerProgression: 'Started in marketing or analytics, discovered growth product management, now drives sustainable user and revenue growth through product.',
    superpower: 'Can identify and build sustainable growth engines that scale with the product',
    kryptonite: 'Vanity metrics, growth tactics without sustainable foundations, and teams who optimize for short-term gains',
    icon: '📈'
  }
];