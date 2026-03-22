
export const getQuizCompletions = (quizId: string): number => {
  const stats = localStorage.getItem('quiz_stats');
  if (!stats) return 0;
  try {
    const parsed = JSON.parse(stats);
    return parsed[quizId] || 0;
  } catch (e) {
    return 0;
  }
};

export const incrementQuizCompletions = (quizId: string) => {
  const stats = localStorage.getItem('quiz_stats');
  let parsed: Record<string, number> = {};
  if (stats) {
    try {
      parsed = JSON.parse(stats);
    } catch (e) {
      parsed = {};
    }
  }
  parsed[quizId] = (parsed[quizId] || 0) + 1;
  localStorage.setItem('quiz_stats', JSON.stringify(parsed));
  
  // Also increment total completions
  const total = parseInt(localStorage.getItem('total_completions') || '0');
  localStorage.setItem('total_completions', (total + 1).toString());
};

export const getTotalCompletions = (): number => {
  return parseInt(localStorage.getItem('total_completions') || '0');
};

export const formatParticipants = (count: number): string => {
  if (count === 0) return 'Be the first to try it';
  if (count === 1) return '1 completion';
  return `${count} completions`;
};
