
export const History = {
  save: (entry: { quizId: string; result: string; completedAt: number }) => {
    const h = History.load();
    localStorage.setItem('ms_history', JSON.stringify([entry, ...h].slice(0, 50)));
  },
  load: () => {
    try { 
      return JSON.parse(localStorage.getItem('ms_history') ?? '[]'); 
    } catch { 
      return []; 
    }
  },
};
