import { questions } from '../data/questions';
import { archetypes } from '../data/archetypes';
import { Archetype } from '../types';

interface ArchetypeScores {
  [archetypeId: string]: number;
}

export function calculateArchetype(answers: { [questionId: string]: string }): Archetype {
  const scores: ArchetypeScores = {};

  // Initialize all archetype scores to 0
  archetypes.forEach(archetype => {
    scores[archetype.id] = 0;
  });

  // Calculate scores based on user answers
  questions.forEach(question => {
    const userAnswerId = answers[question.id];
    if (userAnswerId) {
      const selectedAnswer = question.options.find(option => option.id === userAnswerId);
      if (selectedAnswer) {
        // Add weights from this answer to corresponding archetypes
        Object.entries(selectedAnswer.weights).forEach(([archetypeId, weight]) => {
          scores[archetypeId] += weight;
        });
      }
    }
  });

  // Find the archetype with the highest score
  let highestScore = 0;
  let winningArchetypeId = archetypes[0].id;

  Object.entries(scores).forEach(([archetypeId, score]) => {
    if (score > highestScore) {
      highestScore = score;
      winningArchetypeId = archetypeId;
    }
  });

  // Return the winning archetype
  const winningArchetype = archetypes.find(archetype => archetype.id === winningArchetypeId);
  return winningArchetype || archetypes[0];
}

export function generateShareText(archetype: Archetype): string {
  return `I just discovered I'm "${archetype.name}" - ${archetype.tagline} 🎯 What's your PM archetype? Take the quiz!`;
}

export function generateShareUrl(): string {
  return typeof window !== 'undefined' ? window.location.href : 'https://pm-archetype-generator.vercel.app';
}