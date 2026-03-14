
import { Quiz, QuizSession, PersonalityResult } from '../types';

export function calcPersonality(quiz: Quiz, session: QuizSession): PersonalityResult & { stats: { label: string; value: number }[] } {
  // Conta punteggi per ogni tipo
  const scores: Record<string, number> = {};
  const maxScores: Record<string, number> = {};

  quiz.questions.forEach(q => {
    const ans = q.answers.find(a => a.id === session.answers[q.id]);
    if (!ans?.scores) return;

    Object.entries(ans.scores).forEach(([type, points]) => {
      scores[type] = (scores[type] || 0) + points;
    });

    // Calcola punteggio massimo possibile per ogni tipo
    q.answers.forEach(a => {
      Object.entries(a.scores || {}).forEach(([type, points]) => {
        // We need to track the maximum possible points for each trait across all questions
        // But wait, the user's logic for maxScores in the prompt is slightly flawed if it just sums all points.
        // Usually max score for a trait is the sum of the highest possible points for that trait in each question.
      });
    });
  });

  // Corrected max score calculation: for each trait, sum the maximum points available in each question
  quiz.questions.forEach(q => {
    const traitsInQuestion = new Set<string>();
    q.answers.forEach(a => {
      if (a.scores) {
        Object.keys(a.scores).forEach(t => traitsInQuestion.add(t));
      }
    });

    traitsInQuestion.forEach(trait => {
      let maxForTraitInQ = 0;
      q.answers.forEach(a => {
        if (a.scores && a.scores[trait] !== undefined) {
          maxForTraitInQ = Math.max(maxForTraitInQ, a.scores[trait]);
        }
      });
      maxScores[trait] = (maxScores[trait] || 0) + maxForTraitInQ;
    });
  });

  // Trova tipo vincente o calcola punteggio totale se basato su score
  const isScoreBased = quiz.results?.some(r => r.minScore !== undefined);
  let baseResult: PersonalityResult;

  if (isScoreBased) {
    // Se è basato su score (come Smartphone Addiction), usiamo il tratto primario per il punteggio totale
    // Per Smartphone Addiction Index usiamo 'addiction'
    const primaryTrait = quiz.id === 'smartphone-addiction-index' ? 'addiction' : Object.keys(scores)[0];
    const totalScore = Math.round((scores[primaryTrait] / (maxScores[primaryTrait] || 1)) * 100);
    
    baseResult = quiz.results!.find(r => 
      totalScore >= (r.minScore ?? 0) && totalScore <= (r.maxScore ?? 100)
    ) ?? quiz.results![0];
  } else {
    const winner = Object.entries(scores).sort(([,a],[,b]) => b - a)[0]?.[0];
    baseResult = quiz.results!.find(r => r.type === winner) ?? quiz.results![0];
  }

  // ⚠️ CALCOLA STATS DINAMICAMENTE
  // Converti i punteggi in percentuali 0-100
  const stats = Object.entries(scores)
    .sort(([,a],[,b]) => b - a) // ordina per punteggio decrescente
    .slice(0, 4) // prendi i top 4 tratti
    .map(([type, score]) => {
      const max = maxScores[type] || 1;
      const percentage = Math.round((score / max) * 100);
      return {
        label: type.charAt(0).toUpperCase() + type.slice(1), // capitalizza
        value: percentage,
      };
    });

  return { ...baseResult, stats };
}

export function calcPolitical(quiz: Quiz, session: QuizSession) {
  let eco = 0, soc = 0;
  quiz.questions.forEach(q => {
    const ans = q.answers.find(a => a.id === session.answers[q.id]);
    eco += ans?.economic ?? 0;
    soc += ans?.social   ?? 0;
  });
  const maxPossible = quiz.questions.length * 3;
  const e = parseFloat(Math.max(-10, Math.min(10, (eco/maxPossible)*10)).toFixed(1));
  const s = parseFloat(Math.max(-10, Math.min(10, (soc/maxPossible)*10)).toFixed(1));
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
