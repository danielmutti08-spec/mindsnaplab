
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

    // Special handling for Dark Triad disclaimer
    if (quiz.id === 'dark-triad-index') {
      baseResult.description += "\n\nDISCLAIMER: Dark Triad traits exist on a spectrum in all humans. High scores do not indicate a disorder. This is for educational purposes only.";
    }
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

export function calcIQ(quiz: Quiz, session: QuizSession) {
  const totalPoints = quiz.questions.reduce((acc, q) => {
    const selectedAnsId = session.answers[q.id];
    const selectedAns = q.answers.find(a => a.id === selectedAnsId);
    if (selectedAns?.correct) {
      return acc + (q.points || 1);
    }
    return acc;
  }, 0);

  // Map points to IQ based on user instructions
  // Max points = 50
  let iq = 70;
  let percentile = "2%";
  let category = "Average";

  if (totalPoints >= 48) { iq = 145; percentile = "99.9%"; category = "Gifted"; }
  else if (totalPoints >= 45) { iq = 140; percentile = "99.6%"; category = "Very Superior"; }
  else if (totalPoints >= 40) { iq = 130; percentile = "98%";   category = "Superior"; }
  else if (totalPoints >= 35) { iq = 120; percentile = "91%";   category = "Above Average"; }
  else if (totalPoints >= 25) { iq = 110; percentile = "75%";   category = "High Average"; }
  else if (totalPoints >= 15) { iq = 100; percentile = "50%";   category = "Average"; }
  else if (totalPoints >= 10) { iq = 90;  percentile = "25%";   category = "Low Average"; }
  else if (totalPoints >= 5)  { iq = 80;  percentile = "9%";    category = "Borderline"; }

  // Calculate performance by category
  const categories = [
    { label: "Numerical", key: "num" },
    { label: "Verbal", key: "verbal" },
    { label: "Logic", key: "logic" },
    { label: "Visual", key: "visual" },
    { label: "Memory", key: "memory" }
  ];
  const stats = categories.map(cat => {
    const catQuestions = quiz.questions.filter(q => q.id.includes(cat.key));
    const catPoints = catQuestions.reduce((acc, q) => {
      const selectedAnsId = session.answers[q.id];
      const selectedAns = q.answers.find(a => a.id === selectedAnsId);
      return acc + (selectedAns?.correct ? (q.points || 1) : 0);
    }, 0);
    const maxCatPoints = catQuestions.reduce((acc, q) => acc + (q.points || 1), 0);
    return {
      label: cat.label,
      value: Math.round((catPoints / (maxCatPoints || 1)) * 100)
    };
  });

  return {
    title: `Estimated IQ: ${iq}`,
    subtitle: `Percentile: ${percentile} | Category: ${category}`,
    description: "This is an indicative test inspired by standardized assessments (Mensa, Wechsler, Raven). It is not a certified clinical evaluation.",
    stats
  };
}

export function calcPolitical(quiz: Quiz, session: QuizSession) {
  let eco = 0, soc = 0;

  // Weights based on Political Compass mapping
  const weights: Record<string, { eco: number; soc: number }> = {
    p1: { eco: -2, soc: 0 }, // Healthcare
    p2: { eco: 2, soc: 0 },  // Free markets
    p3: { eco: 0, soc: -2 }, // Individual freedom
    p4: { eco: 0, soc: 2 },  // Law and order
    p5: { eco: -2, soc: 0 }, // Wealthy taxes
    p6: { eco: 0, soc: 2 },  // Immigration
    p7: { eco: -2, soc: 0 }, // Climate change
    p8: { eco: 0, soc: -2 }, // Drug use
    p9: { eco: 0, soc: 2 },  // Death penalty
    p10: { eco: 0, soc: 2 }, // Military spending
  };

  quiz.questions.forEach(q => {
    const ansId = session.answers[q.id];
    const ans = q.answers.find(a => a.id === ansId);
    const val = (ans as any)?.value ?? 0; // Likert value -2 to +2
    const multiplier = val / 2; // -1.0 to 1.0

    const w = weights[q.id] || { eco: 0, soc: 0 };
    eco += w.eco * multiplier;
    soc += w.soc * multiplier;
  });

  // Normalization to -10/+10
  // Max Eco magnitude: |-2| + |2| + |-2| + |-2| = 8
  // Max Soc magnitude: |-2| + |2| + |2| + |-2| + |2| + |2| = 12
  const normalizedEco = (eco / 8) * 10;
  const normalizedSoc = (soc / 12) * 10;
  
  return { 
    economic: normalizedEco, 
    social: normalizedSoc, 
    label: getLabel(normalizedEco, normalizedSoc), 
    description: getDesc(normalizedEco, normalizedSoc) 
  };
}

export function calcTrivia(quiz: Quiz, session: QuizSession) {
  const correct = quiz.questions.filter(q =>
    q.answers.find(a => a.id === session.answers[q.id])?.correct
  ).length;
  return { correct, total: quiz.questions.length, score: Math.round((correct/quiz.questions.length)*100) };
}

function getLabel(e: number, s: number): string {
  if (Math.abs(e) <= 1 && Math.abs(s) <= 1) return 'Centrist';
  
  if (s > 3) {
    if (e > 3) return 'Authoritarian Right';
    if (e < -3) return 'Authoritarian Left';
    return 'Authoritarian Centre';
  }
  
  if (s < -3) {
    if (e > 3) return 'Libertarian Right';
    if (e < -3) return 'Libertarian Left';
    return 'Libertarian Centre';
  }
  
  if (e > 3) return s > 0 ? 'Authoritarian Right' : 'Libertarian Right';
  if (e < -3) return s > 0 ? 'Authoritarian Left' : 'Libertarian Left';
  
  if (s > 1) return 'Authoritarian Centre';
  if (s < -1) return 'Libertarian Centre';
  if (e > 1) return 'Right-Wing';
  if (e < -1) return 'Left-Wing';

  return 'Centrist';
}

function getDesc(e: number, s: number): string {
  const label = getLabel(e, s);
  const map: Record<string, string> = {
    'Authoritarian Right':  'You value tradition, national identity, and firm governance. You believe order and social cohesion require strong leadership and cultural continuity, combined with market-based economic principles.',
    'Libertarian Right':    'You believe in maximum individual freedom — both socially and economically. You support free markets, minimal government intervention, and strong civil liberties.',
    'Authoritarian Left':   'You believe collective welfare requires strong state direction of both economy and society. You prioritize equality and order over individual freedoms, supporting centralized resource allocation.',
    'Libertarian Left':     'Your profile indicates a strong preference for personal autonomy combined with a communal approach to economic resource allocation. You prioritize individual civil liberties and social freedom.',
    'Centrist':             'You sit near the center of the political spectrum, drawing pragmatically from multiple perspectives rather than any single ideology.',
    'Authoritarian Centre': 'You value stability and strong governance while remaining pragmatic and non-ideological on economic questions.',
    'Libertarian Centre':   'Personal freedom is your priority. You distrust authoritarian solutions from both left and right, preferring voluntary cooperation and individual autonomy.',
    'Left-Wing':            'You lean toward progressive economic policies and social programs, valuing collective welfare and equality.',
    'Right-Wing':           'You favor market-based solutions and individual responsibility, valuing economic freedom and traditional structures.',
  };
  return map[label] ?? 'Your position on the political compass reflects a nuanced combination of economic and social perspectives.';
}
