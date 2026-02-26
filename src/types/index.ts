export interface Question {
  id: string;
  text: string;
  options: Answer[];
}

export interface Answer {
  id: string;
  text: string;
  weights: ArchetypeWeights;
}

export interface ArchetypeWeights {
  [archetypeId: string]: number;
}

export interface Archetype {
  id: string;
  name: string;
  tagline: string;
  description: string;
  traits: string[];
  catchphrases: string[];
  meetingStyle: string;
  typicalDay: string;
  careerProgression: string;
  superpower: string;
  kryptonite: string;
  icon: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: { [questionId: string]: string };
  isCompleted: boolean;
  result: Archetype | null;
}

export interface ShareData {
  archetype: Archetype;
  shareableText: string;
  shareableUrl: string;
}