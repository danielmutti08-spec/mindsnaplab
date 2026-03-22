
import { Quiz, QuizSession, PersonalityResult } from '../types';

export function calcPersonality(quiz: Quiz, session: QuizSession): PersonalityResult & { stats: { label: string; value: number }[] } {
  const scores: Record<string, number> = {};
  const maxScores: Record<string, number> = {};

  // Calculate scores and max possible scores per trait
  quiz.questions.forEach(q => {
    const selectedAnsId = session.answers[q.id];
    const selectedAns = q.answers.find(a => a.id === selectedAnsId);
    
    // Track all traits present in this question
    const traitsInQ = new Set<string>();
    q.answers.forEach(a => {
      if (a.scores) Object.keys(a.scores).forEach(t => traitsInQ.add(t));
    });

    // Add selected points
    if (selectedAns?.scores) {
      Object.entries(selectedAns.scores).forEach(([trait, points]) => {
        scores[trait] = (scores[trait] || 0) + points;
      });
    }

    // Add max possible points for each trait in this question
    traitsInQ.forEach(trait => {
      let maxForTraitInQ = 0;
      q.answers.forEach(a => {
        if (a.scores && a.scores[trait] !== undefined) {
          maxForTraitInQ = Math.max(maxForTraitInQ, a.scores[trait]);
        }
      });
      maxScores[trait] = (maxScores[trait] || 0) + maxForTraitInQ;
    });
  });

  const isScoreBased = quiz.results?.some(r => r.minScore !== undefined);
  let baseResult: PersonalityResult;

  if (isScoreBased) {
    // For score-based quizzes, we usually sum a primary trait or all traits
    // If there's only one trait (like 'stress' or 'addiction'), we use that.
    // If there are multiple, we might sum them or use the first one.
    const traits = Object.keys(scores);
    const primaryTrait = traits.length === 1 ? traits[0] : (quiz.id.includes('addiction') ? 'addiction' : (quiz.id.includes('stress') ? 'stress' : traits[0]));
    
    const totalScore = Math.round((scores[primaryTrait] / (maxScores[primaryTrait] || 1)) * 100);
    
    baseResult = quiz.results!.find(r => 
      totalScore >= (r.minScore ?? 0) && totalScore <= (r.maxScore ?? 100)
    ) ?? quiz.results![0];
  } else {
    // Winner takes all
    const winner = Object.entries(scores).sort(([,a],[,b]) => b - a)[0]?.[0];
    baseResult = quiz.results!.find(r => r.type === winner) ?? quiz.results![0];
  }

  // Calculate stats for display
  const stats = Object.entries(scores)
    .sort(([,a],[,b]) => b - a)
    .slice(0, 8) // Show up to 8 traits (Gardner has 8)
    .map(([type, score]) => {
      const max = maxScores[type] || 1;
      const percentage = Math.round((score / max) * 100);
      return {
        label: type.charAt(0).toUpperCase() + type.slice(1),
        value: percentage,
      };
    });

  return { ...baseResult, stats };
}

export function calcPolitical(quiz: Quiz, session: QuizSession) {
  let eco = 0, soc = 0;
  let maxEco = 0, maxSoc = 0;

  quiz.questions.forEach(q => {
    const ans = q.answers.find(a => a.id === session.answers[q.id]);
    eco += ans?.economic ?? 0;
    soc += ans?.social   ?? 0;

    // Calculate max possible absolute values for normalization
    let qMaxEco = 0;
    let qMaxSoc = 0;
    q.answers.forEach(a => {
      if (a.economic !== undefined) qMaxEco = Math.max(qMaxEco, Math.abs(a.economic));
      if (a.social !== undefined) qMaxSoc = Math.max(qMaxSoc, Math.abs(a.social));
    });
    maxEco += qMaxEco;
    maxSoc += qMaxSoc;
  });

  // Normalize to -10 to +10 range
  const e = parseFloat(Math.max(-10, Math.min(10, (eco / (maxEco || 1)) * 10)).toFixed(1));
  const s = parseFloat(Math.max(-10, Math.min(10, (soc / (maxSoc || 1)) * 10)).toFixed(1));
  
  return { economic: e, social: s, label: getLabel(e, s), description: getDesc(e, s) };
}

export function calcTrivia(quiz: Quiz, session: QuizSession) {
  const correct = quiz.questions.filter(q =>
    q.answers.find(a => a.id === session.answers[q.id])?.correct
  ).length;
  return { correct, total: quiz.questions.length, score: Math.round((correct/quiz.questions.length)*100) };
}

function getLabel(e: number, s: number): string {
  const L = e < -2, R = e > 2, Li = s > 2, Au = s < -2;
  if (L && Li)  return 'Libertarian Left';
  if (R && Li)  return 'Libertarian Right';
  if (L && Au)  return 'Authoritarian Left';
  if (R && Au)  return 'Authoritarian Right';
  if (L)        return 'Center-Left';
  if (R)        return 'Center-Right';
  if (Li)       return 'Libertarian Center';
  if (Au)       return 'Authoritarian Center';
  return 'Centrist';
}

function getDesc(e: number, s: number): string {
  const map: Record<string, string> = {
    'Libertarian Left':     'Your profile indicates a strong preference for personal autonomy combined with a communal approach to economic resource allocation. You prioritize individual civil liberties and social freedom, while remaining skeptical of concentrated market power and centralized state control.',
    'Libertarian Right':    'You believe in maximum individual freedom — both socially and economically. You support free markets, minimal government intervention, and strong civil liberties.',
    'Authoritarian Left':   'You believe collective welfare requires strong state direction of both economy and society. You prioritize equality and order over individual freedoms.',
    'Authoritarian Right':  'You value tradition, national identity, and firm governance. You believe order and social cohesion require strong leadership and cultural continuity.',
    'Center-Left':          'You lean toward progressive economic policies and social programs, while valuing democratic institutions and pragmatic governance.',
    'Center-Right':         'You favor market-based solutions and individual responsibility, while supporting essential social programs and rule of law.',
    'Libertarian Center':   'Personal freedom is your priority. You distrust authoritarian solutions from both left and right, preferring voluntary cooperation.',
    'Authoritarian Center': 'You value stability and strong governance while remaining pragmatic and non-ideological on economic questions.',
    'Centrist':             'You sit near the center of the political spectrum, drawing pragmatically from multiple perspectives rather than any single ideology.',
  };
  return map[getLabel(e, s)] ?? '';
}
