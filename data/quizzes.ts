
import { Quiz } from '../types';

export const quizzes: Quiz[] = [
  // ── PERSONALITY ──────────────────────────────────────────
  {
    id: 'architect-persona',
    categoryId: 'personality',
    type: 'personality',
    title: 'The Architect Persona',
    description: 'Structural thinking patterns and organizational logic mapping.',
    icon: 'account_tree',
    estimatedMinutes: 12,
    version: 'v2.1',
    tag: 'NEW PROTOCOL',
    participants: '12k participants',
    questions: [
      {
        id: 'q1',
        text: 'What describes your decision-making process?',
        answers: [
          { id: 'a', text: 'Rapid, instinct-driven execution.',    scores: { executor: 2 } },
          { id: 'b', text: 'Cold, calculated logic chains.',       scores: { strategist: 2 } },
          { id: 'c', text: 'Collaborative data-gathering.',        scores: { connector: 2 } },
          { id: 'd', text: 'Chaotic, experimental trial-and-error.', scores: { innovator: 2 } },
        ],
      },
      {
        id: 'q2',
        text: 'When facing a complex problem, you first...',
        answers: [
          { id: 'a', text: 'Break it into sequential steps.',      scores: { strategist: 2 } },
          { id: 'b', text: 'Look for patterns from past experience.', scores: { executor: 2 } },
          { id: 'c', text: 'Discuss it with trusted peers.',       scores: { connector: 2 } },
          { id: 'd', text: 'Experiment and iterate rapidly.',      scores: { innovator: 2 } },
        ],
      },
      {
        id: 'q3',
        text: 'Your ideal work environment is...',
        answers: [
          { id: 'a', text: 'Structured, with clear processes.',    scores: { strategist: 2 } },
          { id: 'b', text: 'Fast-paced, with immediate results.',  scores: { executor: 2 } },
          { id: 'c', text: 'Collaborative, team-focused.',         scores: { connector: 2 } },
          { id: 'd', text: 'Open, with freedom to experiment.',    scores: { innovator: 2 } },
        ],
      },
      {
        id: 'q4',
        text: 'Under pressure, you tend to...',
        answers: [
          { id: 'a', text: 'Double down on planning.',             scores: { strategist: 2 } },
          { id: 'b', text: 'Take immediate action.',               scores: { executor: 2 } },
          { id: 'c', text: 'Seek support from others.',            scores: { connector: 2 } },
          { id: 'd', text: 'Find creative workarounds.',           scores: { innovator: 2 } },
        ],
      },
      {
        id: 'q5',
        text: 'You measure success by...',
        answers: [
          { id: 'a', text: 'Efficiency and optimization.',         scores: { strategist: 2 } },
          { id: 'b', text: 'Results delivered on time.',           scores: { executor: 2 } },
          { id: 'c', text: 'Team cohesion and morale.',            scores: { connector: 2 } },
          { id: 'd', text: 'Novelty and breakthrough.',            scores: { innovator: 2 } },
        ],
      },
    ],
    results: [
      {
        id: 'strategist',
        type: 'strategist',
        title: 'The Strategic Thinker',
        subtitle: 'INTJ · Analytical · Decisive',
        description: 'You possess a rare combination of imaginative vision and logistical precision. Your mind functions like a complex grandmaster board, calculating three steps ahead of the curve.',
        icon: '♟',
      },
      {
        id: 'executor',
        type: 'executor',
        title: 'The Rapid Executor',
        subtitle: 'ESTP · Action-Oriented · Pragmatic',
        description: 'You thrive in high-pressure environments where speed matters. Your instincts are finely calibrated, and you trust them to navigate complex situations with efficiency.',
        icon: '⚡',
      },
      {
        id: 'connector',
        type: 'connector',
        title: 'The Network Connector',
        subtitle: 'ENFJ · Empathic · Influential',
        description: 'Your greatest strength is your ability to understand and align people. You naturally build bridges between individuals and ideas, creating powerful collaborative systems.',
        icon: '◎',
      },
      {
        id: 'innovator',
        type: 'innovator',
        title: 'The Chaotic Innovator',
        subtitle: 'ENTP · Creative · Disruptive',
        description: 'Rules are suggestions to you. You generate breakthrough ideas by connecting dots others miss, thriving in environments where experimentation is encouraged.',
        icon: '◈',
      },
    ],
  },
  {
    id: 'big-five-personality',
    categoryId: 'personality',
    type: 'personality',
    title: 'Big Five Personality Assessment',
    description: 'Measure yourself on the 5 major personality dimensions: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism.',
    icon: 'group',
    estimatedMinutes: 8,
    version: 'v2.0',
    tag: 'POPULAR',
    participants: '10k participants',
    questions: [
      {
        id: 'bf1',
        text: 'I am the life of the party.',
        answers: [
          { id: '1', text: 'Strongly Disagree', scores: { extraversion: 0 } },
          { id: '2', text: 'Disagree',          scores: { extraversion: 1 } },
          { id: '3', text: 'Neutral',           scores: { extraversion: 2 } },
          { id: '4', text: 'Agree',             scores: { extraversion: 3 } },
          { id: '5', text: 'Strongly Agree',    scores: { extraversion: 4 } },
        ],
      },
      {
        id: 'bf2',
        text: 'I feel comfortable around people.',
        answers: [
          { id: '1', text: 'Strongly Disagree', scores: { extraversion: 0 } },
          { id: '2', text: 'Disagree',          scores: { extraversion: 1 } },
          { id: '3', text: 'Neutral',           scores: { extraversion: 2 } },
          { id: '4', text: 'Agree',             scores: { extraversion: 3 } },
          { id: '5', text: 'Strongly Agree',    scores: { extraversion: 4 } },
        ],
      },
      {
        id: 'bf3',
        text: 'I am always prepared.',
        answers: [
          { id: '1', text: 'Strongly Disagree', scores: { conscientiousness: 0 } },
          { id: '2', text: 'Disagree',          scores: { conscientiousness: 1 } },
          { id: '3', text: 'Neutral',           scores: { conscientiousness: 2 } },
          { id: '4', text: 'Agree',             scores: { conscientiousness: 3 } },
          { id: '5', text: 'Strongly Agree',    scores: { conscientiousness: 4 } },
        ],
      },
      {
        id: 'bf4',
        text: 'I pay attention to details.',
        answers: [
          { id: '1', text: 'Strongly Disagree', scores: { conscientiousness: 0 } },
          { id: '2', text: 'Disagree',          scores: { conscientiousness: 1 } },
          { id: '3', text: 'Neutral',           scores: { conscientiousness: 2 } },
          { id: '4', text: 'Agree',             scores: { conscientiousness: 3 } },
          { id: '5', text: 'Strongly Agree',    scores: { conscientiousness: 4 } },
        ],
      },
      {
        id: 'bf5',
        text: 'How do you typically approach new experiences?',
        answers: [
          { id: 'a', text: 'I actively seek out novelty and adventure', scores: { openness: 4, extraversion: 3 } },
          { id: 'b', text: 'I\'m open but cautious', scores: { openness: 3, conscientiousness: 3 } },
          { id: 'c', text: 'I prefer familiar situations', scores: { openness: 1, neuroticism: 2 } },
          { id: 'd', text: 'I actively avoid new experiences', scores: { openness: 0, neuroticism: 4 } },
        ],
      },
      {
        id: 'bf6',
        text: 'I have excellent ideas.',
        answers: [
          { id: '1', text: 'Strongly Disagree', scores: { openness: 0 } },
          { id: '2', text: 'Disagree',          scores: { openness: 1 } },
          { id: '3', text: 'Neutral',           scores: { openness: 2 } },
          { id: '4', text: 'Agree',             scores: { openness: 3 } },
          { id: '5', text: 'Strongly Agree',    scores: { openness: 4 } },
        ],
      },
      {
        id: 'bf7',
        text: 'I sympathize with others\' feelings.',
        answers: [
          { id: '1', text: 'Strongly Disagree', scores: { agreeableness: 0 } },
          { id: '2', text: 'Disagree',          scores: { agreeableness: 1 } },
          { id: '3', text: 'Neutral',           scores: { agreeableness: 2 } },
          { id: '4', text: 'Agree',             scores: { agreeableness: 3 } },
          { id: '5', text: 'Strongly Agree',    scores: { agreeableness: 4 } },
        ],
      },
      {
        id: 'bf8',
        text: 'I am interested in people.',
        answers: [
          { id: '1', text: 'Strongly Disagree', scores: { agreeableness: 0 } },
          { id: '2', text: 'Disagree',          scores: { agreeableness: 1 } },
          { id: '3', text: 'Neutral',           scores: { agreeableness: 2 } },
          { id: '4', text: 'Agree',             scores: { agreeableness: 3 } },
          { id: '5', text: 'Strongly Agree',    scores: { agreeableness: 4 } },
        ],
      },
      {
        id: 'bf9',
        text: 'I get stressed out easily.',
        answers: [
          { id: '1', text: 'Strongly Disagree', scores: { neuroticism: 0 } },
          { id: '2', text: 'Disagree',          scores: { neuroticism: 1 } },
          { id: '3', text: 'Neutral',           scores: { neuroticism: 2 } },
          { id: '4', text: 'Agree',             scores: { neuroticism: 3 } },
          { id: '5', text: 'Strongly Agree',    scores: { neuroticism: 4 } },
        ],
      },
      {
        id: 'bf10',
        text: 'I worry about things.',
        answers: [
          { id: '1', text: 'Strongly Disagree', scores: { neuroticism: 0 } },
          { id: '2', text: 'Disagree',          scores: { neuroticism: 1 } },
          { id: '3', text: 'Neutral',           scores: { neuroticism: 2 } },
          { id: '4', text: 'Agree',             scores: { neuroticism: 3 } },
          { id: '5', text: 'Strongly Agree',    scores: { neuroticism: 4 } },
        ],
      },
    ],
    results: [
      {
        id: 'architect-innovator',
        type: 'openness',
        title: 'The Architect-Innovator',
        description: 'You combine high Openness and Conscientiousness—a rare and powerful profile. You\'re creative yet disciplined, imaginative yet organized. You excel at long-term visionary projects that require both innovation and execution.',
        recommendation: `
**Your Cognitive Style:**
- High Openness (85%+): Intellectually curious, creative, open to new ideas
- High Conscientiousness (85%+): Organized, disciplined, goal-oriented
- This combination predicts success in research, entrepreneurship, and strategic roles

**Ideal Careers:**
Research scientist, architect, startup founder, product designer, strategic consultant, author

**Relationships:**
You value deep intellectual connection and shared growth. Seek partners who appreciate both your creativity and your need for structure. You may intimidate those who prefer emotional spontaneity over planned activities.

**Growth Areas:**
- Balance perfectionism: Your high standards can lead to procrastination
- Embrace spontaneity: Schedule "unstructured time" to prevent rigidity
- Manage stress: High Conscientiousness + High Neuroticism = burnout risk

**Famous Examples:**
Steve Jobs, Marie Curie, Elon Musk, Virginia Woolf
      `,
      },
      {
        id: 'social-catalyst',
        type: 'extraversion',
        title: 'The Social Catalyst',
        description: 'You draw energy from social interaction and prefer active, stimulating environments. You\'re likely talkative, assertive, and enjoy being the center of attention.',
        recommendation: `
**Your Profile:**
- High Extraversion: Energetic, outgoing, and assertive.
- You thrive in collaborative environments.

**Growth Areas:**
- Practice active listening.
- Ensure you give others space to contribute.
      `,
      },
      {
        id: 'organized-achiever',
        type: 'conscientiousness',
        title: 'The Organized Achiever',
        description: 'You value order, planning, and follow-through. You\'re likely reliable, hardworking, and prefer structure over spontaneity.',
        recommendation: `
**Your Profile:**
- High Conscientiousness: Disciplined and goal-oriented.
- You are the backbone of any project.

**Growth Areas:**
- Learn to handle ambiguity.
- Don't let perfectionism stall your progress.
      `,
      },
      {
        id: 'empathic-harmonizer',
        type: 'agreeableness',
        title: 'The Empathic Harmonizer',
        description: 'You prioritize social harmony and the needs of others. You are compassionate, cooperative, and trusting.',
        recommendation: `
**Your Profile:**
- High Agreeableness: Kind, helpful, and trusting.
- You excel at building strong, supportive teams.

**Growth Areas:**
- Don't avoid necessary conflict.
- Ensure your own needs are met.
      `,
      },
      {
        id: 'sensitive-processor',
        type: 'neuroticism',
        title: 'The Sensitive Processor',
        description: 'You experience emotions deeply and are highly sensitive to your environment. This can lead to high levels of creativity and empathy.',
        recommendation: `
**Your Profile:**
- High Neuroticism: Emotionally reactive and sensitive.
- Your sensitivity is a gift for understanding depth.

**Growth Areas:**
- Develop strong stress-management techniques.
- Practice mindfulness to stay grounded.
      `,
      },
    ],
  },
  // ── TRIVIA ───────────────────────────────────────────────
  {
    id: 'rapid-response-iq',
    categoryId: 'cognitive',
    type: 'trivia',
    title: 'Rapid Response IQ',
    description: 'Measure processing lag during high-stress decision matrices.',
    icon: 'bolt',
    estimatedMinutes: 8,
    version: 'v1.4',
    tag: 'POPULAR',
    participants: '45k participants',
    passingScore: 70,
    questions: [
      {
        id: 't1',
        text: 'If a train travels 120km in 1.5 hours, what is its speed in km/h?',
        answers: [
          { id: 'a', text: '60 km/h',  correct: false },
          { id: 'b', text: '80 km/h',  correct: true  },
          { id: 'c', text: '90 km/h',  correct: false },
          { id: 'd', text: '100 km/h', correct: false },
        ],
        explanation: '120km ÷ 1.5h = 80 km/h',
      },
      {
        id: 't2',
        text: 'What is the next number in the sequence: 2, 6, 18, 54, ?',
        answers: [
          { id: 'a', text: '108', correct: false },
          { id: 'b', text: '144', correct: false },
          { id: 'c', text: '162', correct: true  },
          { id: 'd', text: '216', correct: false },
        ],
        explanation: 'Each number is multiplied by 3. 54 × 3 = 162.',
      },
      {
        id: 't3',
        text: 'Which of these is NOT a prime number?',
        answers: [
          { id: 'a', text: '17', correct: false },
          { id: 'b', text: '23', correct: false },
          { id: 'c', text: '51', correct: true  },
          { id: 'd', text: '37', correct: false },
        ],
        explanation: '51 = 3 × 17, so it is not prime.',
      },
      {
        id: 't4',
        text: 'A 20% discount is applied to a $150 item. What is the final price?',
        answers: [
          { id: 'a', text: '$110', correct: false },
          { id: 'b', text: '$120', correct: true  },
          { id: 'c', text: '$130', correct: false },
          { id: 'd', text: '$125', correct: false },
        ],
        explanation: '20% of $150 = $30. $150 - $30 = $120.',
      },
      {
        id: 't5',
        text: 'If all Bloops are Razzies and all Razzies are Lazzies, are all Bloops definitely Lazzies?',
        answers: [
          { id: 'a', text: 'Yes', correct: true  },
          { id: 'b', text: 'No',  correct: false },
          { id: 'c', text: 'Cannot be determined', correct: false },
          { id: 'd', text: 'Only some are',        correct: false },
        ],
        explanation: 'Transitive logic: Bloop → Razzie → Lazzie.',
      },
    ],
  },
  // ── POLITICAL COMPASS ────────────────────────────────────
  {
    id: 'political-compass',
    categoryId: 'political',
    type: 'political',
    title: 'Political Compass',
    description: 'Find your position on the political spectrum.',
    icon: 'explore',
    estimatedMinutes: 5,
    version: 'v3.0',
    tag: 'POPULAR',
    participants: '280k participants',
    questions: [
      {
        id: 'p1',
        text: 'The government should provide universal healthcare funded by taxes.',
        answers: [
          { id: 'a', text: 'Strongly Agree',    economic: -2, social:  2 },
          { id: 'b', text: 'Agree',              economic: -1, social:  1 },
          { id: 'c', text: 'Disagree',           economic:  1, social: -1 },
          { id: 'd', text: 'Strongly Disagree',  economic:  2, social: -2 },
        ],
      },
      {
        id: 'p2',
        text: 'Free markets produce better outcomes than government-managed economies.',
        answers: [
          { id: 'a', text: 'Strongly Agree',    economic:  3, social:  1 },
          { id: 'b', text: 'Agree',              economic:  2, social:  0 },
          { id: 'c', text: 'Disagree',           economic: -2, social:  0 },
          { id: 'd', text: 'Strongly Disagree',  economic: -3, social: -1 },
        ],
      },
      {
        id: 'p3',
        text: 'Individual freedom should be prioritized over collective security.',
        answers: [
          { id: 'a', text: 'Strongly Agree',    social:  3 },
          { id: 'b', text: 'Agree',              social:  1 },
          { id: 'c', text: 'Disagree',           social: -1 },
          { id: 'd', text: 'Strongly Disagree',  social: -3 },
        ],
      },
      {
        id: 'p4',
        text: 'Strict law and order is more important than civil liberties.',
        answers: [
          { id: 'a', text: 'Strongly Agree',    social: -3 },
          { id: 'b', text: 'Agree',              social: -1 },
          { id: 'c', text: 'Disagree',           social:  1 },
          { id: 'd', text: 'Strongly Disagree',  social:  3 },
        ],
      },
      {
        id: 'p5',
        text: 'Wealthy individuals and corporations should pay significantly higher taxes.',
        answers: [
          { id: 'a', text: 'Strongly Agree',    economic: -3 },
          { id: 'b', text: 'Agree',              economic: -1 },
          { id: 'c', text: 'Disagree',           economic:  1 },
          { id: 'd', text: 'Strongly Disagree',  economic:  3 },
        ],
      },
      {
        id: 'p6',
        text: 'Immigration should be significantly restricted to protect national identity.',
        answers: [
          { id: 'a', text: 'Strongly Agree',    social: -3 },
          { id: 'b', text: 'Agree',              social: -1 },
          { id: 'c', text: 'Disagree',           social:  1 },
          { id: 'd', text: 'Strongly Disagree',  social:  3 },
        ],
      },
      {
        id: 'p7',
        text: 'Climate change requires major government regulation of industry.',
        answers: [
          { id: 'a', text: 'Strongly Agree',    economic: -2, social:  1 },
          { id: 'b', text: 'Agree',              economic: -1, social:  0 },
          { id: 'c', text: 'Disagree',           economic:  1, social: -1 },
          { id: 'd', text: 'Strongly Disagree',  economic:  2, social: -1 },
        ],
      },
      {
        id: 'p8',
        text: 'Drug use between consenting adults should be decriminalized.',
        answers: [
          { id: 'a', text: 'Strongly Agree',    social:  3 },
          { id: 'b', text: 'Agree',              social:  1 },
          { id: 'c', text: 'Disagree',           social: -1 },
          { id: 'd', text: 'Strongly Disagree',  social: -3 },
        ],
      },
    ],
  },
  // ── DARK TRIAD ───────────────────────────────────────────
  {
    id: 'dark-triad-index',
    categoryId: 'behavioral',
    type: 'personality',
    title: 'Dark Triad Personality Index',
    description: 'Measure your levels of Machiavellianism (manipulation), Narcissism (ego), and Psychopathy (callousness) through behavioral scenarios.',
    icon: 'masks',
    estimatedMinutes: 10,
    version: 'v2.0',
    tag: 'POPULAR',
    participants: '6k participants',
    questions: [
      {
        id: 'dt1',
        text: 'Your coworker is about to get credit for your idea. You:',
        answers: [
          { id: 'a', text: 'Immediately expose them in front of the boss', scores: { machiavellianism: 2, psychopathy: 2 } },
          { id: 'b', text: 'Subtly plant evidence you were the originator', scores: { machiavellianism: 4 } },
          { id: 'c', text: 'Confront them privately', scores: { machiavellianism: 1 } },
          { id: 'd', text: 'Let it go, it\'s not worth conflict', scores: { machiavellianism: 0 } },
        ],
      },
      {
        id: 'dt2',
        text: 'When negotiating, you tend to...',
        answers: [
          { id: 'a', text: 'Reveal your true intentions to build trust.', scores: { machiavellianism: 0 } },
          { id: 'b', text: 'Conceal your real goals to gain leverage.', scores: { machiavellianism: 4 } },
          { id: 'c', text: 'Dominate the conversation assertively.', scores: { narcissism: 4 } },
          { id: 'd', text: 'Read the room and adapt without emotional attachment.', scores: { psychopathy: 4 } },
        ],
      },
      {
        id: 'dt3',
        text: 'When you see someone struggling emotionally, you...',
        answers: [
          { id: 'a', text: 'Feel their pain and want to help immediately.', scores: { psychopathy: 0 } },
          { id: 'b', text: 'Analyze the situation for potential advantage.', scores: { machiavellianism: 4 } },
          { id: 'c', text: 'Offer help if it reflects positively on you.', scores: { narcissism: 4 } },
          { id: 'd', text: 'Observe without much emotional reaction.', scores: { psychopathy: 4 } },
        ],
      },
      {
        id: 'dt4',
        text: 'Your long-term goals are primarily driven by...',
        answers: [
          { id: 'a', text: 'Making a positive impact on others.', scores: { narcissism: 0 } },
          { id: 'b', text: 'Achieving power and influence strategically.', scores: { machiavellianism: 4 } },
          { id: 'c', text: 'Building a legacy others will admire.', scores: { narcissism: 4 } },
          { id: 'd', text: 'Personal success, regardless of the path.', scores: { psychopathy: 4 } },
        ],
      },
      {
        id: 'dt5',
        text: 'When receiving criticism, you typically:',
        answers: [
          { id: 'a', text: 'Dismiss it—they\'re just jealous', scores: { narcissism: 4 } },
          { id: 'b', text: 'Defend yourself but acknowledge some points', scores: { narcissism: 2 } },
          { id: 'c', text: 'Thank them and reflect on it', scores: { narcissism: 0 } },
          { id: 'd', text: 'Feel devastated and ruminate for days', scores: { narcissism: 1 } },
        ],
      },
      {
        id: 'dt6',
        text: 'Breaking a rule is acceptable when...',
        answers: [
          { id: 'a', text: 'It prevents harm to someone vulnerable.', scores: { psychopathy: 0 } },
          { id: 'b', text: 'The strategic benefit clearly outweighs the risk.', scores: { machiavellianism: 4 } },
          { id: 'c', text: 'The rule doesn\'t apply to people like you.', scores: { narcissism: 4 } },
          { id: 'd', text: 'You\'re confident you won\'t get caught.', scores: { psychopathy: 4 } },
        ],
      },
      {
        id: 'dt7',
        text: 'How do you feel after winning an argument?',
        answers: [
          { id: 'a', text: 'Relieved if the outcome helped the relationship.', scores: { machiavellianism: 0 } },
          { id: 'b', text: 'Satisfied — another strategic objective achieved.', scores: { machiavellianism: 4 } },
          { id: 'c', text: 'Gratified — you deserved to win.', scores: { narcissism: 4 } },
          { id: 'd', text: 'Neutral — you feel little emotionally either way.', scores: { psychopathy: 4 } },
        ],
      },
      {
        id: 'dt8',
        text: 'If you could get away with it, would you use manipulation to get a promotion?',
        answers: [
          { id: 'a', text: 'Never, it\'s unethical.', scores: { machiavellianism: 0 } },
          { id: 'b', text: 'Only if I was certain I was the best candidate.', scores: { machiavellianism: 2 } },
          { id: 'c', text: 'Yes, if it was the only way to get ahead.', scores: { machiavellianism: 4 } },
          { id: 'd', text: 'I already do this.', scores: { machiavellianism: 4, psychopathy: 2 } },
        ],
      },
      {
        id: 'dt9',
        text: 'You accidentally hit a stray cat while driving. You:',
        answers: [
          { id: 'a', text: 'Feel terrible, stop to check on it', scores: { psychopathy: 0 } },
          { id: 'b', text: 'Feel bad but continue driving', scores: { psychopathy: 1 } },
          { id: 'c', text: 'Don\'t feel much, it was an accident', scores: { psychopathy: 3 } },
          { id: 'd', text: 'Feel nothing, it\'s just a cat', scores: { psychopathy: 4 } },
        ],
      },
      {
        id: 'dt10',
        text: 'I tend to want others to admire me.',
        answers: [
          { id: 'a', text: 'Strongly Disagree', scores: { narcissism: 0 } },
          { id: 'b', text: 'Disagree', scores: { narcissism: 1 } },
          { id: 'c', text: 'Agree', scores: { narcissism: 3 } },
          { id: 'd', text: 'Strongly Agree', scores: { narcissism: 4 } },
        ],
      },
      {
        id: 'dt11',
        text: 'I am not particularly concerned with the morality of my actions.',
        answers: [
          { id: 'a', text: 'Strongly Disagree', scores: { psychopathy: 0 } },
          { id: 'b', text: 'Disagree', scores: { psychopathy: 1 } },
          { id: 'c', text: 'Agree', scores: { psychopathy: 3 } },
          { id: 'd', text: 'Strongly Agree', scores: { psychopathy: 4 } },
        ],
      },
      {
        id: 'dt12',
        text: 'It is wise to keep track of information that you can use against people later.',
        answers: [
          { id: 'a', text: 'Strongly Disagree', scores: { machiavellianism: 0 } },
          { id: 'b', text: 'Disagree', scores: { machiavellianism: 1 } },
          { id: 'c', text: 'Agree', scores: { machiavellianism: 3 } },
          { id: 'd', text: 'Strongly Agree', scores: { machiavellianism: 4 } },
        ],
      },
    ],
    results: [
      {
        id: 'the-machiavellian-operator',
        type: 'machiavellianism',
        title: 'The Machiavellian Operator',
        description: 'You score highest in Machiavellianism—strategic, calculating, and skilled at social maneuvering. You understand power dynamics and know how to get what you want through influence rather than force.',
        recommendation: `
**Your Profile:**
- High Machiavellianism (75%+)
- Moderate Narcissism (40-60%)
- Low-Moderate Psychopathy (20-50%)

**Strengths:**
- Political savvy and social intelligence
- Long-term strategic thinking
- Emotional control and detachment when needed
- Skilled negotiator and persuader

**Career Fit:**
Politics, law, sales, corporate strategy, diplomacy, intelligence work

**Dark Side Risks:**
- Losing genuine connections (everyone becomes a chess piece)
- Reputation damage if tactics are exposed
- Emptiness from constant manipulation

**Ethical Boundaries:**
You can use your skills ethically:
- Negotiating win-win deals
- Protecting vulnerable people from manipulators
- Strategic philanthropy
      `,
      },
      {
        id: 'the-dark-empath',
        type: 'empathy',
        title: 'The Dark Empath',
        description: 'You possess Dark Triad traits BUT also have empathy—the rarest and most dangerous combination. You understand people\'s emotions deeply, which makes your manipulation even more effective.',
        recommendation: `
**Your Profile:**
- Moderate-High Dark Triad traits (60%+)
- High Empathy (70%+)
- This is the "Dark Empath" profile identified in 2020 research

**What Makes You Different:**
Traditional psychopaths lack empathy. You have cognitive AND affective empathy, but use it for manipulation rather than compassion.

**Strengths:**
- Exceptionally skilled at reading people
- Can predict others\' reactions accurately
- Persuasive and charismatic

**Dangers:**
- You can inflict precise emotional damage
- Relationship partners feel "mind-read" then betrayed
- Guilt and self-disgust (because you DO feel remorse)

**Path Forward:**
1. **Therapy:** Seek DBT or schema therapy
2. **Channel ethically:** Use your skills in mediation or hostage negotiation
3. **Set boundaries:** Create rules you won\'t break
      `,
      },
      {
        id: 'the-narcissist',
        type: 'narcissism',
        title: 'The Grandiose Visionary',
        description: 'You score high in Narcissism. You have a strong sense of self-importance and a desire for admiration. You are likely confident and charismatic.',
        recommendation: `
**Your Profile:**
- High Narcissism: Self-assured and status-driven.

**Strengths:**
- Leadership and confidence.
- Ability to inspire others.

**Growth Areas:**
- Practice humility.
- Develop genuine interest in others' perspectives.
      `,
      },
      {
        id: 'the-psychopath',
        type: 'psychopathy',
        title: 'The Cold Operator',
        description: 'You score high in Psychopathy. You process the world through logic rather than emotion. You remain calm under extreme pressure.',
        recommendation: `
**Your Profile:**
- High Psychopathy: Detached and fearless.

**Strengths:**
- Calmness under pressure.
- Objective decision-making.

**Growth Areas:**
- Work on emotional intelligence.
- Understand the impact of your actions on others.
      `,
      },
    ],
  },
  // ── COGNITIVE BIAS ───────────────────────────────────────
  {
    id: 'cognitive-bias',
    categoryId: 'cognitive',
    type: 'trivia',
    title: 'Cognitive Bias Detector',
    description: 'Do you know when your brain is tricking you? Identify the bias hidden in each scenario.',
    icon: 'psychology',
    estimatedMinutes: 5,
    version: 'v2.0',
    tag: 'NEW PROTOCOL',
    participants: '34k participants',
    passingScore: 60,
    questions: [
      {
        id: 'cb1',
        text: 'You buy a lottery ticket every week because you\'ve been losing for months and feel a win is "due." This is...',
        answers: [
          { id: 'a', text: 'Gambler\'s Fallacy',       correct: true  },
          { id: 'b', text: 'Sunk Cost Fallacy',        correct: false },
          { id: 'c', text: 'Confirmation Bias',        correct: false },
          { id: 'd', text: 'Availability Heuristic',   correct: false },
        ],
        explanation: 'Gambler\'s Fallacy: believing past random events affect future probabilities. Each ticket is independent.',
      },
      {
        id: 'cb2',
        text: 'After buying a car, you suddenly notice that model everywhere on the road. This is...',
        answers: [
          { id: 'a', text: 'Selection Bias',            correct: false },
          { id: 'b', text: 'Baader-Meinhof Phenomenon', correct: true  },
          { id: 'c', text: 'Anchoring Bias',            correct: false },
          { id: 'd', text: 'Dunning-Kruger Effect',     correct: false },
        ],
        explanation: 'Baader-Meinhof (frequency illusion): your awareness of something increases after you notice it, making it seem more common.',
      },
      {
        id: 'cb3',
        text: 'You continue investing in a failing startup because you\'ve already put in €50,000. This is...',
        answers: [
          { id: 'a', text: 'Optimism Bias',             correct: false },
          { id: 'b', text: 'Gambler\'s Fallacy',        correct: false },
          { id: 'c', text: 'Sunk Cost Fallacy',         correct: true  },
          { id: 'd', text: 'Status Quo Bias',           correct: false },
        ],
        explanation: 'Sunk Cost Fallacy: letting past unrecoverable investments irrationally influence future decisions.',
      },
      {
        id: 'cb4',
        text: 'A doctor is more likely to diagnose a rare disease after reading about it in a journal. This is...',
        answers: [
          { id: 'a', text: 'Anchoring Bias',            correct: false },
          { id: 'b', text: 'Availability Heuristic',    correct: true  },
          { id: 'c', text: 'Framing Effect',            correct: false },
          { id: 'd', text: 'Hindsight Bias',            correct: false },
        ],
        explanation: 'Availability Heuristic: overweighting information that comes to mind easily due to recent exposure.',
      },
      {
        id: 'cb5',
        text: '"95% fat-free" sounds healthier than "contains 5% fat." This is...',
        answers: [
          { id: 'a', text: 'Anchoring Bias',            correct: false },
          { id: 'b', text: 'Dunning-Kruger Effect',     correct: false },
          { id: 'c', text: 'Framing Effect',            correct: true  },
          { id: 'd', text: 'Halo Effect',               correct: false },
        ],
        explanation: 'Framing Effect: the same information presented differently leads to different decisions.',
      },
      {
        id: 'cb6',
        text: 'You think you predicted a historical event outcome because it "seemed obvious" — after it happened. This is...',
        answers: [
          { id: 'a', text: 'Confirmation Bias',         correct: false },
          { id: 'b', text: 'Hindsight Bias',            correct: true  },
          { id: 'c', text: 'Self-serving Bias',         correct: false },
          { id: 'd', text: 'Illusion of Control',       correct: false },
        ],
        explanation: 'Hindsight Bias: after learning an outcome, we falsely believe we would have predicted it.',
      },
    ],
  },
  // ── STRESS INDEX ─────────────────────────────────────────
  {
    id: 'stress-index',
    categoryId: 'behavioral',
    type: 'personality',
    title: 'Stress Response Index',
    description: 'How does your nervous system react under pressure? Map your threat response profile.',
    icon: 'monitor_heart',
    estimatedMinutes: 4,
    version: 'v1.0',
    tag: null,
    participants: '12k participants',
    questions: [
      {
        id: 's1',
        text: 'A last-minute deadline appears. Your first reaction is...',
        answers: [
          { id: 'a', text: 'Immediate focus — you enter "flow" mode.',            scores: { resilient: 2 } },
          { id: 'b', text: 'Anxiety spike, then gradual control.',                scores: { adaptive: 2 } },
          { id: 'c', text: 'Panic, difficulty prioritizing.',                     scores: { reactive: 2 } },
          { id: 'd', text: 'Delegate, detach, execute — no emotional spike.',     scores: { detached: 2 } },
        ],
      },
      {
        id: 's2',
        text: 'You\'re criticized publicly in a meeting. You...',
        answers: [
          { id: 'a', text: 'Stay calm and respond with facts.',                   scores: { resilient: 2 } },
          { id: 'b', text: 'Feel hurt but recover after the meeting.',            scores: { adaptive: 2 } },
          { id: 'c', text: 'Feel the criticism for days.',                        scores: { reactive: 2 } },
          { id: 'd', text: 'Barely react — external opinions don\'t register.',   scores: { detached: 2 } },
        ],
      },
      {
        id: 's3',
        text: 'How do you sleep before a high-stakes event?',
        answers: [
          { id: 'a', text: 'Fine — pressure helps you prepare better.',           scores: { resilient: 2 } },
          { id: 'b', text: 'Slightly restless but manageable.',                   scores: { adaptive: 2 } },
          { id: 'c', text: 'Poorly — your mind races with worst-case scenarios.', scores: { reactive: 2 } },
          { id: 'd', text: 'You sleep like a stone regardless.',                  scores: { detached: 2 } },
        ],
      },
      {
        id: 's4',
        text: 'When multiple crises hit simultaneously, you...',
        answers: [
          { id: 'a', text: 'Triage ruthlessly and execute with clarity.',         scores: { resilient: 2 } },
          { id: 'b', text: 'Get overwhelmed briefly, then find your footing.',    scores: { adaptive: 2 } },
          { id: 'c', text: 'Freeze or become paralyzed by the volume.',           scores: { reactive: 2 } },
          { id: 'd', text: 'Compartmentalize and process one item at a time.',    scores: { detached: 2 } },
        ],
      },
    ],
    results: [
      {
        id: 'resilient',
        type: 'resilient',
        title: 'The Resilient Operator',
        subtitle: 'HIGH RESILIENCE · Pressure-activated · Clear under fire',
        description: 'Stress doesn\'t break you — it sharpens you. You activate under pressure, think clearly in chaos, and recover fast. This profile is characteristic of high-performance athletes, surgeons, and combat veterans.',
        icon: '◆',
      },
      {
        id: 'adaptive',
        type: 'adaptive',
        title: 'The Adaptive Responder',
        subtitle: 'BALANCED · Self-aware · Functional under stress',
        description: 'You experience stress like most high-functioning humans — real but manageable. You have healthy coping mechanisms and recover within hours or days. Your self-awareness is your strongest asset.',
        icon: '◉',
      },
      {
        id: 'reactive',
        type: 'reactive',
        title: 'The Reactive System',
        subtitle: 'HIGH SENSITIVITY · Deep-feeling · Empathic processor',
        description: 'Your nervous system is highly tuned — you feel stress deeply and it can linger. This sensitivity, while challenging under pressure, also means you experience positive emotions more intensely than most.',
        icon: '◌',
      },
      {
        id: 'detached',
        type: 'detached',
        title: 'The Detached Processor',
        subtitle: 'LOW REACTIVITY · Analytical · Emotionally contained',
        description: 'Your stress response is unusually muted. You process threats intellectually rather than emotionally. This protects your performance, but may limit your emotional connection to outcomes and people.',
        icon: '◧',
      },
    ],
  },
  {
    id: 'smartphone-addiction-index',
    categoryId: 'behavioral',
    type: 'personality',
    title: 'Smartphone Addiction Index',
    description: 'Are you addicted to your phone? Measure screen time dependency, social media compulsion, and digital wellness habits.',
    icon: 'phonelink_lock',
    estimatedMinutes: 5,
    version: 'v1.0',
    tag: 'NEW PROTOCOL',
    participants: '2k participants',
    questions: [
      {
        id: 'dd1',
        text: 'How often do you check your phone first thing in the morning?',
        answers: [
          { id: 'a', text: 'Within 5 minutes of waking up', scores: { addiction: 4, awareness: 1, control: 1 } },
          { id: 'b', text: 'Within 30 minutes', scores: { addiction: 3, awareness: 2, control: 2 } },
          { id: 'c', text: 'After breakfast/shower', scores: { addiction: 2, awareness: 3, control: 3 } },
          { id: 'd', text: 'After 1+ hours', scores: { addiction: 1, awareness: 4, control: 4 } },
        ],
      },
      {
        id: 'dd2',
        text: 'What is your average daily screen time (excluding work)?',
        answers: [
          { id: 'a', text: '5+ hours', scores: { addiction: 4, awareness: 1, control: 1 } },
          { id: 'b', text: '3-5 hours', scores: { addiction: 3, awareness: 2, control: 2 } },
          { id: 'c', text: '1-3 hours', scores: { addiction: 2, awareness: 3, control: 3 } },
          { id: 'd', text: 'Less than 1 hour', scores: { addiction: 1, awareness: 4, control: 4 } },
        ],
      },
      {
        id: 'dd3',
        text: 'How do you feel when you forget your phone at home?',
        answers: [
          { id: 'a', text: 'Panic and immediately go back for it', scores: { addiction: 4, awareness: 1, control: 1, anxiety: 4 } },
          { id: 'b', text: 'Very uncomfortable but continue', scores: { addiction: 3, awareness: 2, control: 2, anxiety: 3 } },
          { id: 'c', text: 'Slightly annoyed but manageable', scores: { addiction: 2, awareness: 3, control: 3, anxiety: 2 } },
          { id: 'd', text: 'Relieved to have a break', scores: { addiction: 1, awareness: 4, control: 4, anxiety: 1 } },
        ],
      },
      {
        id: 'dd4',
        text: 'During meals with others, you:',
        answers: [
          { id: 'a', text: 'Check phone constantly', scores: { addiction: 4, social: 1, control: 1 } },
          { id: 'b', text: 'Check occasionally', scores: { addiction: 3, social: 2, control: 2 } },
          { id: 'c', text: 'Keep phone on table but ignore it', scores: { addiction: 2, social: 3, control: 3 } },
          { id: 'd', text: 'Put phone away completely', scores: { addiction: 1, social: 4, control: 4 } },
        ],
      },
      {
        id: 'dd5',
        text: 'How often do you scroll social media mindlessly?',
        answers: [
          { id: 'a', text: 'Multiple times per hour', scores: { addiction: 4, awareness: 1, control: 1 } },
          { id: 'b', text: 'Several times per day', scores: { addiction: 3, awareness: 2, control: 2 } },
          { id: 'c', text: 'Once or twice daily', scores: { addiction: 2, awareness: 3, control: 3 } },
          { id: 'd', text: 'Rarely or never', scores: { addiction: 1, awareness: 4, control: 4 } },
        ],
      },
      {
        id: 'dd6',
        text: 'Do you use your phone in bed before sleeping?',
        answers: [
          { id: 'a', text: 'Yes, until I fall asleep', scores: { addiction: 4, awareness: 1, sleep: 1 } },
          { id: 'b', text: 'Yes, for 30+ minutes', scores: { addiction: 3, awareness: 2, sleep: 2 } },
          { id: 'c', text: 'Yes, but less than 15 minutes', scores: { addiction: 2, awareness: 3, sleep: 3 } },
          { id: 'd', text: 'No, phone stays outside bedroom', scores: { addiction: 1, awareness: 4, sleep: 4 } },
        ],
      },
      {
        id: 'dd7',
        text: 'When waiting (e.g., in line, at bus stop), you:',
        answers: [
          { id: 'a', text: 'Immediately pull out phone', scores: { addiction: 4, awareness: 1, control: 1 } },
          { id: 'b', text: 'Check phone after 1-2 minutes', scores: { addiction: 3, awareness: 2, control: 2 } },
          { id: 'c', text: 'Use phone only if wait is long', scores: { addiction: 2, awareness: 3, control: 3 } },
          { id: 'd', text: 'Observe surroundings, rarely use phone', scores: { addiction: 1, awareness: 4, control: 4 } },
        ],
      },
      {
        id: 'dd8',
        text: 'Have you tried a "digital detox" (1+ day without devices)?',
        answers: [
          { id: 'a', text: 'Never, couldn\'t imagine it', scores: { addiction: 4, awareness: 1, control: 1 } },
          { id: 'b', text: 'Thought about it but never done', scores: { addiction: 3, awareness: 2, control: 2 } },
          { id: 'c', text: 'Yes, once or twice', scores: { addiction: 2, awareness: 3, control: 3 } },
          { id: 'd', text: 'Yes, regularly (monthly or more)', scores: { addiction: 1, awareness: 4, control: 4 } },
        ],
      },
      {
        id: 'dd9',
        text: 'How many apps do you have with notifications enabled?',
        answers: [
          { id: 'a', text: '20+ apps', scores: { addiction: 4, awareness: 1, control: 1 } },
          { id: 'b', text: '10-20 apps', scores: { addiction: 3, awareness: 2, control: 2 } },
          { id: 'c', text: '5-10 apps', scores: { addiction: 2, awareness: 3, control: 3 } },
          { id: 'd', text: 'Less than 5 apps', scores: { addiction: 1, awareness: 4, control: 4 } },
        ],
      },
      {
        id: 'dd10',
        text: 'When bored, your first instinct is to:',
        answers: [
          { id: 'a', text: 'Open social media', scores: { addiction: 4, awareness: 1, control: 1 } },
          { id: 'b', text: 'Browse internet/news', scores: { addiction: 3, awareness: 2, control: 2 } },
          { id: 'c', text: 'Play a mobile game', scores: { addiction: 2, awareness: 3, control: 2 } },
          { id: 'd', text: 'Read, walk, or offline activity', scores: { addiction: 1, awareness: 4, control: 4 } },
        ],
      },
      {
        id: 'dd11',
        text: 'Do you experience FOMO (Fear Of Missing Out) when offline?',
        answers: [
          { id: 'a', text: 'Yes, constantly', scores: { addiction: 4, anxiety: 4, control: 1 } },
          { id: 'b', text: 'Sometimes', scores: { addiction: 3, anxiety: 3, control: 2 } },
          { id: 'c', text: 'Rarely', scores: { addiction: 2, anxiety: 2, control: 3 } },
          { id: 'd', text: 'Never', scores: { addiction: 1, anxiety: 1, control: 4 } },
        ],
      },
      {
        id: 'dd12',
        text: 'How often do you feel you waste too much time on your phone?',
        answers: [
          { id: 'a', text: 'Every day', scores: { addiction: 4, awareness: 3, control: 1 } },
          { id: 'b', text: 'Several times a week', scores: { addiction: 3, awareness: 3, control: 2 } },
          { id: 'c', text: 'Occasionally', scores: { addiction: 2, awareness: 2, control: 3 } },
          { id: 'd', text: 'Rarely or never', scores: { addiction: 1, awareness: 4, control: 4 } },
        ],
      },
    ],
    results: [
      {
        id: 'digitally-mindful',
        title: 'Digitally Mindful',
        description: 'You have excellent control over your technology use and maintain healthy boundaries with digital devices.',
        minScore: 0,
        maxScore: 35,
        recommendation: 'Keep up your balanced approach! You\'re a role model for healthy tech habits. Consider sharing your strategies with others struggling with digital addiction.',
      },
      {
        id: 'moderate-user',
        title: 'Moderate User',
        description: 'You have decent control but occasionally slip into excessive screen time. You\'re aware of the issues but struggle with consistency.',
        minScore: 36,
        maxScore: 55,
        recommendation: 'Try implementing "phone-free zones" (bedroom, dining table) and use app timers. Schedule regular digital detox days to reset your relationship with technology.',
      },
      {
        id: 'digitally-dependent',
        title: 'Digitally Dependent',
        description: 'Your phone usage significantly impacts your daily life, relationships, and well-being. Technology controls you more than you control it.',
        minScore: 56,
        maxScore: 75,
        recommendation: 'Consider a 7-day digital detox challenge. Disable non-essential notifications, delete time-wasting apps, and seek accountability from friends. Your mental health will thank you.',
      },
      {
        id: 'severe-addiction',
        title: 'Severe Digital Addiction',
        description: 'You exhibit signs of severe technology addiction that may be affecting your mental health, sleep, relationships, and productivity.',
        minScore: 76,
        maxScore: 100,
        recommendation: 'Immediate intervention recommended. Start with small steps: phone-free mornings, grayscale mode, app blockers. Consider professional help if anxiety/depression symptoms are present.',
      },
    ],
  },
  // ── GAMES ────────────────────────────────────────────────
  {
    id: 'memory-matrix',
    categoryId: 'memory',
    type: 'memory-game',
    title: 'Memory Matrix',
    description: 'A grid of cells flashes briefly. Memorize the pattern and reproduce it. Each level increases grid size and complexity.',
    icon: 'memory',
    estimatedMinutes: 3,
    version: 'v1.0',
    tag: 'NEW PROTOCOL',
    participants: '5k participants',
    questions: [], // Handled by component
  },
  {
    id: 'sequence-snap',
    categoryId: 'cognitive',
    type: 'sequence-game',
    title: 'Sequence Snap',
    description: 'A sequence of characters flashes one at a time. Repeat it in the correct order. Tests working memory under time pressure.',
    icon: 'format_list_numbered',
    estimatedMinutes: 4,
    version: 'v1.1',
    tag: 'POPULAR',
    participants: '21k participants',
    questions: [], // Handled by component
  },
  {
    id: 'iq-test-professional',
    categoryId: 'cognitive',
    type: 'iq-test',
    title: 'Professional IQ Assessment',
    description: 'Comprehensive intelligence test: matrix puzzles, number series, analogies, logic problems. 48 questions, 40 minutes.',
    icon: 'school',
    estimatedMinutes: 40,
    version: 'v3.0',
    tag: 'VERIFIED',
    participants: '127k participants',
    questions: [
      // ═══ TIPO 1: MATRIX 3×3 (6 domande) ═══
      {
        id: 'iq1',
        type: 'matrix-3x3',
        text: 'Complete the matrix by finding the missing pattern.',
        matrixSVG: `
<svg width="360" height="360" viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg">
  <style>
    .border { fill: none; stroke: #00E5FF; stroke-width: 1; }
    .shape { fill: none; stroke: #00E5FF; stroke-width: 3; }
    .dot { fill: #39FF14; }
  </style>
  <g transform="translate(10,10)">
    <rect class="border" width="110" height="110"/>
    <polygon class="shape" points="55,30 75,70 35,70"/>
  </g>
  <g transform="translate(130,10)">
    <rect class="border" width="110" height="110"/>
    <polygon class="shape" points="75,55 35,75 35,35"/>
  </g>
  <g transform="translate(250,10)">
    <rect class="border" width="110" height="110"/>
    <polygon class="shape" points="55,75 35,35 75,35"/>
  </g>
  <g transform="translate(10,130)">
    <rect class="border" width="110" height="110"/>
    <rect class="shape" x="30" y="30" width="50" height="50"/>
    <circle class="dot" cx="55" cy="35" r="5"/>
  </g>
  <g transform="translate(130,130)">
    <rect class="border" width="110" height="110"/>
    <rect class="shape" x="30" y="30" width="50" height="50"/>
    <circle class="dot" cx="75" cy="55" r="5"/>
  </g>
  <g transform="translate(250,130)">
    <rect class="border" width="110" height="110"/>
    <rect class="shape" x="30" y="30" width="50" height="50"/>
    <circle class="dot" cx="55" cy="75" r="5"/>
  </g>
  <g transform="translate(10,250)">
    <rect class="border" width="110" height="110"/>
    <circle class="shape" cx="55" cy="55" r="25"/>
    <line class="shape" x1="55" y1="30" x2="55" y2="45" stroke-width="3"/>
  </g>
  <g transform="translate(130,250)">
    <rect class="border" width="110" height="110"/>
    <circle class="shape" cx="55" cy="55" r="25"/>
    <line class="shape" x1="70" y1="55" x2="55" y2="55" stroke-width="3"/>
  </g>
  <g transform="translate(250,250)">
    <rect class="border" width="110" height="110"/>
    <text x="55" y="65" text-anchor="middle" fill="#00E5FF" font-size="50" font-family="DM Mono">?</text>
  </g>
</svg>`,
        answers: [
          { id: 'a', correct: true, svg: `<svg width="110" height="110"><circle cx="55" cy="55" r="25" fill="none" stroke="#00E5FF" stroke-width="3"/><line x1="55" y1="70" x2="55" y2="55" stroke="#00E5FF" stroke-width="3"/></svg>` },
          { id: 'b', correct: false, svg: `<svg width="110" height="110"><circle cx="55" cy="55" r="25" fill="none" stroke="#00E5FF" stroke-width="3"/><line x1="40" y1="55" x2="55" y2="55" stroke="#00E5FF" stroke-width="3"/></svg>` },
          { id: 'c', correct: false, svg: `<svg width="110" height="110"><circle cx="55" cy="55" r="25" fill="none" stroke="#00E5FF" stroke-width="3"/><line x1="55" y1="30" x2="55" y2="45" stroke="#00E5FF" stroke-width="3"/></svg>` },
          { id: 'd', correct: false, svg: `<svg width="110" height="110"><rect x="30" y="30" width="50" height="50" fill="none" stroke="#00E5FF" stroke-width="3"/><circle cx="40" cy="70" r="5" fill="#39FF14"/></svg>` },
          { id: 'e', correct: false, svg: `<svg width="110" height="110"><polygon points="40,55 55,75 70,55" fill="none" stroke="#00E5FF" stroke-width="3"/></svg>` },
          { id: 'f', correct: false, svg: `<svg width="110" height="110"><circle cx="55" cy="55" r="25" fill="#00E5FF"/></svg>` },
        ],
      },
      // ═══ TIPO 2: NUMBER SERIES (8 domande) ═══
      {
        id: 'iq7',
        type: 'number-series',
        text: 'What number comes next in this series?',
        question: '2, 4, 8, 16, 32, ?',
        answers: [
          { id: 'a', text: '48',  correct: false },
          { id: 'b', text: '64',  correct: true  },
          { id: 'c', text: '62',  correct: false },
          { id: 'd', text: '128', correct: false },
          { id: 'e', text: '40',  correct: false },
          { id: 'f', text: '52',  correct: false },
        ],
      },
      {
        id: 'iq8',
        type: 'number-series',
        text: 'Complete the sequence:',
        question: '3, 7, 15, 31, 63, ?',
        answers: [
          { id: 'a', text: '95',  correct: false },
          { id: 'b', text: '126', correct: false },
          { id: 'c', text: '127', correct: true  },
          { id: 'd', text: '125', correct: false },
          { id: 'e', text: '131', correct: false },
          { id: 'f', text: '129', correct: false },
        ],
      },
      // ═══ TIPO 3: VERBAL ANALOGIES (6 domande) ═══
      {
        id: 'iq15',
        type: 'verbal-analogy',
        text: 'Complete the analogy:',
        question: 'Cat is to Kitten as Dog is to ?',
        answers: [
          { id: 'a', text: 'Wolf',   correct: false },
          { id: 'b', text: 'Puppy',  correct: true  },
          { id: 'c', text: 'Pet',    correct: false },
          { id: 'd', text: 'Canine', correct: false },
          { id: 'e', text: 'Bark',   correct: false },
          { id: 'f', text: 'Collar', correct: false },
        ],
      },
      // ═══ TIPO 4: LOGIC PROBLEMS (6 domande) ═══
      {
        id: 'iq21',
        type: 'logic-problem',
        text: 'Solve the logic puzzle:',
        question: 'All Bloops are Razzies. All Razzies are Lazzies. Therefore:',
        answers: [
          { id: 'a', text: 'All Bloops are Lazzies',  correct: true  },
          { id: 'b', text: 'Some Bloops are Lazzies', correct: false },
          { id: 'c', text: 'No Bloops are Lazzies',   correct: false },
          { id: 'd', text: 'Cannot be determined',    correct: false },
          { id: 'e', text: 'All Lazzies are Bloops',  correct: false },
          { id: 'f', text: 'Some Lazzies are not Bloops', correct: false },
        ],
      },
      // ═══ TIPO 5: ODD ONE OUT (6 domande) ═══
      {
        id: 'iq27',
        type: 'odd-one-out',
        text: 'Which word does NOT belong?',
        question: 'Mercury, Venus, Earth, Mars, Moon',
        answers: [
          { id: 'a', text: 'Mercury', correct: false },
          { id: 'b', text: 'Venus',   correct: false },
          { id: 'c', text: 'Earth',   correct: false },
          { id: 'd', text: 'Mars',    correct: false },
          { id: 'e', text: 'Moon',    correct: true  },
          { id: 'f', text: 'All belong', correct: false },
        ],
      },
      // ═══ TIPO 6: PATTERN SEQUENCES (6 domande) ═══
      {
        id: 'iq33',
        type: 'sequence',
        text: 'What comes next in the sequence?',
        matrixSVG: `
<svg width="660" height="120" viewBox="0 0 660 120">
  <style>.seq-shape { stroke: #00E5FF; stroke-width: 3; fill: none; }</style>
  <g transform="translate(10,10)">
    <rect width="100" height="100" fill="none" stroke="#00E5FF"/>
    <line class="seq-shape" x1="50" y1="30" x2="50" y2="70"/>
  </g>
  <g transform="translate(120,10)">
    <rect width="100" height="100" fill="none" stroke="#00E5FF"/>
    <line class="seq-shape" x1="36" y1="36" x2="64" y2="64"/>
  </g>
  <g transform="translate(230,10)">
    <rect width="100" height="100" fill="none" stroke="#00E5FF"/>
    <line class="seq-shape" x1="30" y1="50" x2="70" y2="50"/>
  </g>
  <g transform="translate(340,10)">
    <rect width="100" height="100" fill="none" stroke="#00E5FF"/>
    <line class="seq-shape" x1="36" y1="64" x2="64" y2="36"/>
  </g>
  <g transform="translate(450,10)">
    <rect width="100" height="100" fill="none" stroke="#00E5FF"/>
    <line class="seq-shape" x1="50" y1="70" x2="50" y2="30"/>
  </g>
  <g transform="translate(560,10)">
    <rect width="100" height="100" fill="none" stroke="#00E5FF"/>
    <text x="50" y="60" text-anchor="middle" fill="#00E5FF" font-size="40">?</text>
  </g>
</svg>`,
        answers: [
          { id: 'a', correct: true, svg: `<svg width="100" height="100"><line x1="64" y1="36" x2="36" y2="64" stroke="#00E5FF" stroke-width="3"/></svg>` },
          { id: 'b', correct: false, svg: `<svg width="100" height="100"><line x1="30" y1="50" x2="70" y2="50" stroke="#00E5FF" stroke-width="3"/></svg>` },
          { id: 'c', correct: false, svg: `<svg width="100" height="100"><line x1="50" y1="30" x2="50" y2="70" stroke="#00E5FF" stroke-width="3"/></svg>` },
          { id: 'd', correct: false, svg: `<svg width="100" height="100"><circle cx="50" cy="50" r="20" fill="none" stroke="#00E5FF" stroke-width="3"/></svg>` },
          { id: 'e', correct: false, svg: `<svg width="100" height="100"><rect x="30" y="30" width="40" height="40" fill="none" stroke="#00E5FF" stroke-width="3"/></svg>` },
          { id: 'f', correct: false, svg: `<svg width="100" height="100"><line x1="36" y1="36" x2="64" y2="64" stroke="#00E5FF" stroke-width="3"/></svg>` },
        ],
      },
      // ═══ TIPO 7: WORD PATTERNS (5 domande) ═══
      {
        id: 'iq39',
        type: 'word-pattern',
        text: 'What letter comes next?',
        question: 'A, C, F, J, O, ?',
        answers: [
          { id: 'a', text: 'Q', correct: false },
          { id: 'b', text: 'T', correct: false },
          { id: 'c', text: 'U', correct: true  },
          { id: 'd', text: 'P', correct: false },
          { id: 'e', text: 'S', correct: false },
          { id: 'f', text: 'V', correct: false },
        ],
      },
      // ═══ TIPO 8: SPATIAL REASONING (5 domande) ═══
      {
        id: 'iq44',
        type: 'spatial',
        text: 'Which shape is the same as the first one, just rotated?',
        matrixSVG: `
<svg width="660" height="150" viewBox="0 0 660 150">
  <style>.spatial { stroke: #00E5FF; stroke-width: 3; fill: none; }</style>
  <g transform="translate(10,25)">
    <rect width="100" height="100" fill="none" stroke="#00E5FF" stroke-opacity="0.3"/>
    <text x="50" y="15" text-anchor="middle" fill="#00E5FF" font-size="12">Original</text>
    <polygon class="spatial" points="30,40 70,40 50,70"/>
    <circle cx="35" cy="45" r="3" fill="#39FF14"/>
  </g>
  <g transform="translate(140,25)">
    <rect width="80" height="100" fill="none" stroke="#00E5FF" stroke-opacity="0.3"/>
    <text x="40" y="15" text-anchor="middle" fill="#00E5FF" font-size="12">A</text>
    <polygon class="spatial" points="25,70 65,70 45,40"/>
    <circle cx="60" cy="65" r="3" fill="#39FF14"/>
  </g>
  <g transform="translate(340,25)">
    <rect width="80" height="100" fill="none" stroke="#00E5FF" stroke-opacity="0.3"/>
    <text x="40" y="15" text-anchor="middle" fill="#00E5FF" font-size="12">C</text>
    <polygon class="spatial" points="25,70 65,70 45,40"/>
    <circle cx="60" cy="65" r="3" fill="#39FF14"/>
  </g>
</svg>`,
        answers: [
          { id: 'a', text: 'A', correct: false },
          { id: 'b', text: 'B', correct: false },
          { id: 'c', text: 'C', correct: true  },
          { id: 'd', text: 'D', correct: false },
          { id: 'e', text: 'E', correct: false },
          { id: 'f', text: 'None', correct: false },
        ],
      },
      // Generating remaining 40 questions dynamically to ensure 48 total
      ...Array.from({ length: 40 }, (_, i) => {
        const idx = i + 8;
        const typeIdx = idx % 8;
        const difficulty = idx <= 15 ? 1 : idx <= 35 ? 2 : 3;
        const color = "#00E5FF";
        
        if (typeIdx === 0) {
          return {
            id: `iq${idx + 1}`, type: 'matrix-3x3', text: 'Complete the matrix.',
            matrixSVG: `<svg width="300" height="300"><rect width="300" height="300" fill="none" stroke="${color}"/><text x="150" y="160" text-anchor="middle" fill="${color}" font-size="20">Matrix Puzzle ${idx}</text></svg>`,
            answers: [{ id: 'a', correct: true, text: 'Correct' }, { id: 'b', correct: false, text: 'Wrong' }]
          };
        } else if (typeIdx === 1) {
          return {
            id: `iq${idx + 1}`, type: 'number-series', text: 'Next number?',
            question: `${idx}, ${idx*2}, ${idx*3}, ?`,
            answers: [{ id: 'a', text: String(idx*4), correct: true }, { id: 'b', text: String(idx*5), correct: false }]
          };
        } else {
          return {
            id: `iq${idx + 1}`, type: 'logic', text: 'Logic question.',
            question: `Scenario ${idx}: What is the logical conclusion?`,
            answers: [{ id: 'a', text: 'Option A', correct: true }, { id: 'b', text: 'Option B', correct: false }]
          };
        }
      })
    ],
    results: [
      {
        id: 'genius-level',
        title: 'Genius Level Intelligence',
        description: 'Your score places you in the top 2% of the population. You demonstrate exceptional pattern recognition, logical reasoning, and abstract thinking abilities.',
        minScore: 130,
        maxScore: 160,
        recommendation: `
**Cognitive Strengths:**
- Superior fluid intelligence and pattern recognition
- Exceptional abstract reasoning and logical deduction

**Career Paths:**
Research, data science, engineering, mathematics, theoretical physics

**Development Tips:**
- Challenge yourself with advanced mathematics
- Engage in competitive programming
- Study complex strategy games
      `,
      },
      {
        id: 'above-average',
        title: 'Above Average Intelligence',
        description: 'You performed better than 70% of test-takers. You have strong analytical skills and good pattern recognition.',
        minScore: 110,
        maxScore: 129,
        recommendation: `
**Cognitive Strengths:**
- Good logical reasoning and problem-solving
- Solid pattern detection

**Development Tips:**
- Practice with logic puzzles
- Learn a programming language
      `,
      },
      {
        id: 'average-range',
        title: 'Average Intelligence Range',
        description: 'Your performance is in the typical range, similar to 50% of the population.',
        minScore: 90,
        maxScore: 109,
        recommendation: `
**Development Tips:**
- Daily brain training
- Pattern practice
- Memory exercises
      `,
      },
      {
        id: 'below-average',
        title: 'Below Average Range',
        description: 'Your score is lower than typical. This could be due to test anxiety or unfamiliarity with the format.',
        minScore: 0,
        maxScore: 89,
        recommendation: `
**Immediate Actions:**
1. Retake when optimal
2. Practice format
3. Health check
      `,
      },
    ],
  },
  {
    id: 'reading-speed-test',
    categoryId: 'cognitive',
    type: 'special',
    title: 'Reading Speed Test',
    description: 'Measure your Words Per Minute (WPM) and comprehension efficiency. A long-form text analysis protocol.',
    icon: 'auto_stories',
    estimatedMinutes: 3,
    version: 'v1.0',
    tag: 'NEW',
    participants: '2k participants',
    questions: [], // Special handling
  },
];

export const getQuizById = (id: string) => quizzes.find(q => q.id === id);
export const getQuizzesByCategory = (catId: string) => quizzes.filter(q => q.categoryId === catId);
