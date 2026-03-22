
export type CategoryId = 'personality' | 'cognitive' | 'political' | 'trivia' | 'reaction' | 'psychology' | 'behavioral' | 'memory' | 'game';

export type QuizType = 'personality' | 'trivia' | 'political' | 'reaction' | 'cognitive' | 'memory-game' | 'sequence-game' | 'iq-test' | 'special';

export interface Answer {
  id: string;
  text?: string;
  scores?: Record<string, number>;   // personality
  correct?: boolean;                  // trivia
  economic?: number;                  // political (-10 to +10)
  social?: number;                    // political (-10 to +10)
  svg?: string;                       // iq-test
}

export interface Question {
  id: string;
  text: string;
  answers: Answer[];
  explanation?: string;
  difficulty?: number;
  matrixSVG?: string;
  type?: string;
  question?: string;
  readingPassage?: string;
}

export interface PersonalityResult {
  id: string;
  type?: string;
  title: string;
  subtitle?: string;
  description: string;
  icon?: string;
  stats?: { label: string; value: number }[];
  minScore?: number;
  maxScore?: number;
  recommendation?: string;
}

export interface Quiz {
  id: string;
  categoryId: CategoryId;
  type: QuizType;
  title: string;
  description: string;
  estimatedMinutes: number;
  version: string;
  tag?: string | null;         // "NEW PROTOCOL" | "POPULAR" | "DIFFICULT"
  questions: Question[];
  results?: PersonalityResult[];
  passingScore?: number;
  icon: string;
}

export interface QuizSession {
  quizId: string;
  answers: Record<string, string>;
  startedAt: number;
}

// Page navigation — SPA without React Router
export type Page =
  | { name: 'home' }
  | { name: 'quiz-list'; categoryId?: string }
  | { name: 'quiz-player'; quizId: string }
  | { name: 'result'; quizId: string; resultData: any }
  | { name: 'political-result'; economic: number; social: number; label: string; description: string }
  | { name: 'reaction-test' }
  | { name: 'memory-game' }
  | { name: 'sequence-game' }
  | { name: 'iq-test' }
  | { name: 'reading-speed' };
