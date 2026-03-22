
export const getQuizCompletions = (quizId: string): number => {
  const count = localStorage.getItem(`completions_${quizId}`);
  return count ? parseInt(count) : 0;
};

export const incrementQuizCompletions = (quizId: string) => {
  const current = getQuizCompletions(quizId);
  localStorage.setItem(`completions_${quizId}`, (current + 1).toString());
  
  // Trigger a storage event for real-time updates in the same window if needed, 
  // though React state will handle it better if we use a custom hook or just refresh state.
  window.dispatchEvent(new Event('storage_update'));
};

export const getTotalCompletions = (): number => {
  let total = 0;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('completions_')) {
      const val = localStorage.getItem(key);
      if (val) total += parseInt(val);
    }
  }
  return total;
};

export const formatParticipants = (count: number): string => {
  if (count === 0) return 'Be the first!';
  if (count === 1) return '1 completion';
  return `${count} completions`;
};
