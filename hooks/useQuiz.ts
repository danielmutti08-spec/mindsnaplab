
import { useState, useCallback } from 'react';
import { Quiz, QuizSession } from '../types';

export function useQuiz(quiz: Quiz) {
  const [index, setIndex]             = useState(0);
  const [selected, setSelected]       = useState<string | null>(null);
  const [confirmed, setConfirmed]     = useState(false);
  const [session, setSession]         = useState<QuizSession>({
    quizId: quiz.id, answers: {}, startedAt: Date.now(),
  });

  const question   = quiz.questions[index];
  const isLast     = index === quiz.questions.length - 1;
  const progress   = Math.round((index / quiz.questions.length) * 100);
  const qLabel     = `Q ${String(index + 1).padStart(2,'0')} / ${quiz.questions.length}`;

  const select = useCallback((id: string) => {
    if (confirmed) return;
    setSelected(id);
  }, [confirmed]);

  const commit = useCallback(() => {
    if (!selected) return;
    setConfirmed(true);
    setSession(s => ({ ...s, answers: { ...s.answers, [question.id]: selected } }));
  }, [selected, question]);

  const next = useCallback(() => {
    setSelected(null);
    setConfirmed(false);
    setIndex(i => i + 1);
  }, []);

  const answerState = useCallback((id: string): 'default'|'selected'|'correct'|'wrong'|'dimmed' => {
    if (!confirmed) return selected === id ? 'selected' : 'default';
    if (quiz.type === 'trivia') {
      const ans = question.answers.find(a => a.id === id);
      if (ans?.correct) return 'correct';
      if (id === selected) return 'wrong';
      return 'dimmed';
    }
    return id === selected ? 'selected' : 'dimmed';
  }, [confirmed, selected, question, quiz.type]);

  return { question, index, isLast, progress, qLabel, selected, confirmed, select, commit, next, answerState, session };
}
