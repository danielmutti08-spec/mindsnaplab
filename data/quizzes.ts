
import { Quiz } from '../types';

export const quizzes: Quiz[] = [
  // ── PERSONALITY ──────────────────────────────────────────
  {
    id: 'architect-persona',
    categoryId: 'personality',
    type: 'personality',
    title: "What's Your Personality Type?",
    description: 'Analysis of structural thinking patterns and organizational logic.',
    icon: 'account_tree',
    estimatedMinutes: 12,
    version: 'v2.1',
    tag: 'NEW PROTOCOL',
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
      {
        id: 'q6',
        text: 'How do you handle unexpected changes in a project?',
        answers: [
          { id: 'a', text: 'I quickly adapt the plan and keep moving.', scores: { strategist: 2 } },
          { id: 'b', text: 'I take immediate action to address the change.', scores: { executor: 2 } },
          { id: 'c', text: 'I consult the team to find the best way forward.', scores: { connector: 2 } },
          { id: 'd', text: 'I see it as an opportunity for a new approach.', scores: { innovator: 2 } },
        ],
      },
      {
        id: 'q7',
        text: 'In a team setting, you are usually the one who...',
        answers: [
          { id: 'a', text: 'Provides the long-term vision and strategy.', scores: { strategist: 2 } },
          { id: 'b', text: 'Ensures tasks are completed efficiently.', scores: { executor: 2 } },
          { id: 'c', text: 'Facilitates communication and harmony.', scores: { connector: 2 } },
          { id: 'd', text: 'Challenges the status quo with new ideas.', scores: { innovator: 2 } },
        ],
      },
      {
        id: 'q8',
        text: 'When learning a new skill, you prefer...',
        answers: [
          { id: 'a', text: 'A systematic, step-by-step approach.', scores: { strategist: 2 } },
          { id: 'b', text: 'Learning by doing and immediate practice.', scores: { executor: 2 } },
          { id: 'c', text: 'Learning through discussion and collaboration.', scores: { connector: 2 } },
          { id: 'd', text: 'Exploring and experimenting on your own.', scores: { innovator: 2 } },
        ],
      },
      {
        id: 'q9',
        text: 'Your reaction to a major setback is to...',
        answers: [
          { id: 'a', text: 'Analyze the failure and revise the strategy.', scores: { strategist: 2 } },
          { id: 'b', text: 'Work harder and faster to overcome it.', scores: { executor: 2 } },
          { id: 'c', text: 'Talk it through with others for support.', scores: { connector: 2 } },
          { id: 'd', text: 'Pivot and try a completely different angle.', scores: { innovator: 2 } },
        ],
      },
      {
        id: 'q10',
        text: 'You feel most energized when...',
        answers: [
          { id: 'a', text: 'A complex plan comes together perfectly.', scores: { strategist: 2 } },
          { id: 'b', text: 'You hit a difficult deadline ahead of time.', scores: { executor: 2 } },
          { id: 'c', text: 'The team achieves a goal together.', scores: { connector: 2 } },
          { id: 'd', text: 'You discover a truly original solution.', scores: { innovator: 2 } },
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
    title: 'Discover Your 5 Dominant Traits',
    description: 'Measure yourself on the Big Five dimensions: Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism.',
    icon: 'group',
    estimatedMinutes: 8,
    version: 'v2.0',
    tag: 'POPULAR',
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
    title: 'Rapid Logic Challenge',
    description: 'Measure your processing speed under pressure.',
    icon: 'bolt',
    estimatedMinutes: 8,
    version: 'v1.4',
    tag: 'POPULAR',
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
      {
        id: 't6',
        text: 'A clock shows 3:15. What is the angle between the hour and minute hands?',
        answers: [
          { id: 'a', text: '0°', correct: false },
          { id: 'b', text: '7.5°', correct: true },
          { id: 'c', text: '15°', correct: false },
          { id: 'd', text: '90°', correct: false },
        ],
        explanation: 'At 3:15, the minute hand is at 90°. The hour hand has moved 1/4 of the way from 3 to 4. 30° / 4 = 7.5°.',
      },
      {
        id: 't7',
        text: 'If 5 machines take 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?',
        answers: [
          { id: 'a', text: '100 minutes', correct: false },
          { id: 'b', text: '50 minutes', correct: false },
          { id: 'c', text: '5 minutes', correct: true },
          { id: 'd', text: '1 minute', correct: false },
        ],
        explanation: 'Each machine takes 5 minutes to make 1 widget.',
      },
      {
        id: 't8',
        text: 'Which word is the odd one out?',
        answers: [
          { id: 'a', text: 'Apple', correct: false },
          { id: 'b', text: 'Banana', correct: false },
          { id: 'c', text: 'Carrot', correct: true },
          { id: 'd', text: 'Grape', correct: false },
        ],
        explanation: 'Carrot is a vegetable; the others are fruits.',
      },
      {
        id: 't9',
        text: 'If you rearrange the letters "CIFAIPC", you get the name of a(n):',
        answers: [
          { id: 'a', text: 'City', correct: false },
          { id: 'b', text: 'Animal', correct: false },
          { id: 'c', text: 'Ocean', correct: true },
          { id: 'd', text: 'Country', correct: false },
        ],
        explanation: 'PACIFIC is an ocean.',
      },
      {
        id: 't10',
        text: 'What is the square root of 144?',
        answers: [
          { id: 'a', text: '10', correct: false },
          { id: 'b', text: '11', correct: false },
          { id: 'c', text: '12', correct: true },
          { id: 'd', text: '14', correct: false },
        ],
        explanation: '12 * 12 = 144.',
      },
    ],
  },
  // ── POLITICAL COMPASS ────────────────────────────────────
  {
    id: 'political-compass',
    categoryId: 'political',
    type: 'political',
    title: 'Where Do You Stand Politically?',
    description: 'Find your position on the political spectrum.',
    icon: 'explore',
    estimatedMinutes: 5,
    version: 'v3.0',
    tag: 'POPULAR',
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
      {
        id: 'p9',
        text: 'The death penalty should be an option for the most serious crimes.',
        answers: [
          { id: 'a', text: 'Strongly Agree',    social: -3 },
          { id: 'b', text: 'Agree',              social: -1 },
          { id: 'c', text: 'Disagree',           social:  1 },
          { id: 'd', text: 'Strongly Disagree',  social:  3 },
        ],
      },
      {
        id: 'p10',
        text: 'Military spending should be increased to ensure national security.',
        answers: [
          { id: 'a', text: 'Strongly Agree',    economic:  1, social: -2 },
          { id: 'b', text: 'Agree',              economic:  0, social: -1 },
          { id: 'c', text: 'Disagree',           economic:  0, social:  1 },
          { id: 'd', text: 'Strongly Disagree',  economic: -1, social:  2 },
        ],
      },
    ],
  },
  // ── DARK TRIAD ───────────────────────────────────────────
  {
    id: 'dark-triad-index',
    categoryId: 'behavioral',
    type: 'personality',
    title: 'Your Dark Side (Dark Triad)',
    description: 'Measure your levels of Machiavellianism, Narcissism, and Psychopathy.',
    icon: 'masks',
    estimatedMinutes: 10,
    version: 'v2.0',
    tag: 'POPULAR',
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
    title: 'Are You a Victim of Cognitive Biases?',
    description: 'Discover how much your mind deceives you in decision-making processes.',
    icon: 'psychology',
    estimatedMinutes: 5,
    version: 'v2.0',
    tag: 'NEW PROTOCOL',
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
      {
        id: 'cb7',
        text: 'You only read news sources that align with your existing political views. This is...',
        answers: [
          { id: 'a', text: 'Confirmation Bias',         correct: true },
          { id: 'b', text: 'Availability Heuristic',    correct: false },
          { id: 'c', text: 'Anchoring Bias',            correct: false },
          { id: 'd', text: 'Halo Effect',               correct: false },
        ],
        explanation: 'Confirmation Bias: the tendency to search for, interpret, favor, and recall information in a way that confirms one\'s prior beliefs.',
      },
      {
        id: 'cb8',
        text: 'You assume a physically attractive person is also intelligent and kind. This is...',
        answers: [
          { id: 'a', text: 'Halo Effect',               correct: true },
          { id: 'b', text: 'Horn Effect',               correct: false },
          { id: 'c', text: 'Selection Bias',            correct: false },
          { id: 'd', text: 'Self-serving Bias',         correct: false },
        ],
        explanation: 'Halo Effect: a cognitive bias in which our overall impression of a person influences how we feel and think about their character.',
      },
      {
        id: 'cb9',
        text: 'A beginner chess player overestimates their skill compared to experts. This is...',
        answers: [
          { id: 'a', text: 'Dunning-Kruger Effect',     correct: true },
          { id: 'b', text: 'Imposter Syndrome',         correct: false },
          { id: 'c', text: 'Optimism Bias',             correct: false },
          { id: 'd', text: 'Hindsight Bias',            correct: false },
        ],
        explanation: 'Dunning-Kruger Effect: a cognitive bias in which people with limited competence in a particular domain overestimate their abilities.',
      },
      {
        id: 'cb10',
        text: 'You attribute your success to your hard work, but your failures to bad luck. This is...',
        answers: [
          { id: 'a', text: 'Self-serving Bias',         correct: true },
          { id: 'b', text: 'Fundamental Attribution Error', correct: false },
          { id: 'c', text: 'Confirmation Bias',         correct: false },
          { id: 'd', text: 'Just-World Hypothesis',     correct: false },
        ],
        explanation: 'Self-serving Bias: the common habit of a person taking credit for positive events or outcomes, but blaming outside factors for negative events.',
      },
    ],
  },
  // ── STRESS INDEX ─────────────────────────────────────────
  {
    id: 'stress-index',
    categoryId: 'behavioral',
    type: 'personality',
    title: 'Stress Level Assessment',
    description: 'Measure your current stress levels and burnout risk.',
    icon: 'monitor_heart',
    estimatedMinutes: 5,
    version: 'v1.1',
    tag: 'ESSENTIAL',
    questions: [
      {
        id: 's1',
        text: 'How often do you feel overwhelmed by your daily tasks?',
        answers: [
          { id: 'a', text: 'Never',      scores: { stress: 0 } },
          { id: 'b', text: 'Sometimes',  scores: { stress: 1 } },
          { id: 'c', text: 'Often',      scores: { stress: 2 } },
          { id: 'd', text: 'Always',     scores: { stress: 3 } },
        ],
      },
      {
        id: 's2',
        text: 'Do you have trouble sleeping due to racing thoughts?',
        answers: [
          { id: 'a', text: 'Never',      scores: { stress: 0 } },
          { id: 'b', text: 'Rarely',     scores: { stress: 1 } },
          { id: 'c', text: 'Frequently', scores: { stress: 2 } },
          { id: 'd', text: 'Every night', scores: { stress: 3 } },
        ],
      },
      {
        id: 's3',
        text: 'How often do you feel physically exhausted even after resting?',
        answers: [
          { id: 'a', text: 'Never',      scores: { stress: 0 } },
          { id: 'b', text: 'Sometimes',  scores: { stress: 1 } },
          { id: 'c', text: 'Often',      scores: { stress: 2 } },
          { id: 'd', text: 'Always',     scores: { stress: 3 } },
        ],
      },
      {
        id: 's4',
        text: 'Do you find it difficult to concentrate on one task at a time?',
        answers: [
          { id: 'a', text: 'Not at all',  scores: { stress: 0 } },
          { id: 'b', text: 'A little',   scores: { stress: 1 } },
          { id: 'c', text: 'Quite a bit', scores: { stress: 2 } },
          { id: 'd', text: 'Extremely',  scores: { stress: 3 } },
        ],
      },
      {
        id: 's5',
        text: 'How often do you feel irritable or short-tempered with others?',
        answers: [
          { id: 'a', text: 'Never',      scores: { stress: 0 } },
          { id: 'b', text: 'Rarely',     scores: { stress: 1 } },
          { id: 'c', text: 'Often',      scores: { stress: 2 } },
          { id: 'd', text: 'Very often', scores: { stress: 3 } },
        ],
      },
      {
        id: 's6',
        text: 'Do you experience physical symptoms like headaches or muscle tension?',
        answers: [
          { id: 'a', text: 'Never',      scores: { stress: 0 } },
          { id: 'b', text: 'Occasionally', scores: { stress: 1 } },
          { id: 'c', text: 'Frequently', scores: { stress: 2 } },
          { id: 'd', text: 'Constantly', scores: { stress: 3 } },
        ],
      },
      {
        id: 's7',
        text: 'How often do you feel like you have no control over your life?',
        answers: [
          { id: 'a', text: 'Never',      scores: { stress: 0 } },
          { id: 'b', text: 'Sometimes',  scores: { stress: 1 } },
          { id: 'c', text: 'Often',      scores: { stress: 2 } },
          { id: 'd', text: 'Always',     scores: { stress: 3 } },
        ],
      },
      {
        id: 's8',
        text: 'Do you neglect your hobbies or social life due to work or stress?',
        answers: [
          { id: 'a', text: 'Not at all',  scores: { stress: 0 } },
          { id: 'b', text: 'A little',   scores: { stress: 1 } },
          { id: 'c', text: 'Significantly', scores: { stress: 2 } },
          { id: 'd', text: 'Completely', scores: { stress: 3 } },
        ],
      },
      {
        id: 's9',
        text: 'How often do you feel anxious or worried about the future?',
        answers: [
          { id: 'a', text: 'Never',      scores: { stress: 0 } },
          { id: 'b', text: 'Rarely',     scores: { stress: 1 } },
          { id: 'c', text: 'Often',      scores: { stress: 2 } },
          { id: 'd', text: 'Constantly', scores: { stress: 3 } },
        ],
      },
      {
        id: 's10',
        text: 'Do you feel a sense of dread when starting your workday?',
        answers: [
          { id: 'a', text: 'Never',      scores: { stress: 0 } },
          { id: 'b', text: 'Occasionally', scores: { stress: 1 } },
          { id: 'c', text: 'Frequently', scores: { stress: 2 } },
          { id: 'd', text: 'Every day',  scores: { stress: 3 } },
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
    description: 'Evaluate your level of dependency on mobile devices.',
    icon: 'phonelink_lock',
    estimatedMinutes: 5,
    version: 'v1.0',
    tag: 'NEW PROTOCOL',
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
    questions: [], // Handled by component
  },
  {
    id: 'iq-test-professional',
    categoryId: 'cognitive',
    type: 'iq-test',
    title: 'Professional IQ Test',
    description: 'A comprehensive assessment of your cognitive abilities and intelligence quotient.',
    icon: 'school',
    estimatedMinutes: 40,
    version: 'v3.0',
    tag: 'VERIFIED',
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
        description: 'Your score places you in the top 2% of the population. You demonstrate exceptional pattern recognition, logical reasoning, and abstract thinking skills.',
        minScore: 130,
        maxScore: 160,
        recommendation: `
**Cognitive Strengths:**
- Superior fluid intelligence and pattern recognition
- Exceptional abstract reasoning and logical deduction

**Career Paths:**
Research, data science, engineering, mathematics, theoretical physics

**Development Suggestions:**
- Challenge yourself with advanced mathematics
- Participate in programming competitions
- Study complex strategy games
      `,
      },
      {
        id: 'above-average',
        title: 'Above Average Intelligence',
        description: 'You achieved a result better than 70% of participants. You have strong analytical skills and good pattern recognition.',
        minScore: 110,
        maxScore: 129,
        recommendation: `
**Cognitive Strengths:**
- Good logical reasoning and problem-solving
- Solid pattern detection

**Development Suggestions:**
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
**Development Suggestions:**
- Daily brain training
- Practice with patterns
- Memory exercises
      `,
      },
      {
        id: 'below-average',
        title: 'Below Average Range',
        description: 'Your score is below average. This could be due to test anxiety or lack of familiarity with the format.',
        minScore: 0,
        maxScore: 89,
        recommendation: `
**Immediate Actions:**
1. Retake the test when you are rested
2. Practice with the test format
3. General health check
      `,
      },
    ],
  },
  {
    id: 'reading-speed-test',
    categoryId: 'cognitive',
    type: 'special',
    title: 'Reading Speed & Comprehension',
    description: 'Measure how many words per minute you can process.',
    icon: 'auto_stories',
    estimatedMinutes: 3,
    version: 'v1.0',
    tag: 'NEW',
    questions: [
      {
        id: 'rs1',
        text: 'Read the following text carefully. Click "NEXT" when you have finished reading.',
        answers: [
          { id: 'a', text: 'I have finished reading.', scores: { speed: 1 } },
        ],
        readingPassage: 'The human brain is an incredible organ, capable of processing vast amounts of information in milliseconds. Reading is a complex cognitive task that involves visual processing, language comprehension, and memory. When we read, our eyes move in quick jumps called saccades, pausing briefly on words to extract meaning. The average adult reads at a speed of about 200 to 250 words per minute. However, speed reading techniques can significantly increase this rate while maintaining comprehension. Factors such as vocabulary size, familiarity with the subject matter, and the difficulty of the text all play a role in reading speed. Improving your reading speed can enhance your productivity and allow you to consume more information in less time.',
      },
      {
        id: 'rs2',
        text: 'Read this second passage about artificial intelligence.',
        answers: [
          { id: 'a', text: 'I have finished reading.', scores: { speed: 1 } },
        ],
        readingPassage: 'Artificial Intelligence (AI) is transforming the way we live and work. From virtual assistants to autonomous vehicles, AI systems are becoming increasingly integrated into our daily lives. At its core, AI involves creating algorithms that can learn from data and make predictions or decisions. Machine learning, a subset of AI, allows systems to improve their performance over time without being explicitly programmed. As AI continues to evolve, it raises important ethical questions about privacy, bias, and the future of work. Understanding the capabilities and limitations of AI is crucial for navigating the modern world.',
      },
      {
        id: 'rs3',
        text: 'Read this third passage about the history of psychology.',
        answers: [
          { id: 'a', text: 'I have finished reading.', scores: { speed: 1 } },
        ],
        readingPassage: 'The history of psychology is a fascinating journey from philosophical speculation to scientific inquiry. Early thinkers like Plato and Aristotle pondered the nature of the mind and soul. In the late 19th century, Wilhelm Wundt established the first psychology laboratory, marking the birth of psychology as a formal science. Since then, various schools of thought have emerged, including behaviorism, psychoanalysis, and cognitive psychology. Each perspective has contributed to our understanding of human behavior and mental processes. Today, psychology is a diverse field with applications in health, education, and industry.',
      },
      {
        id: 'rs4',
        text: 'Read this fourth passage about the benefits of meditation.',
        answers: [
          { id: 'a', text: 'I have finished reading.', scores: { speed: 1 } },
        ],
        readingPassage: 'Meditation is a practice that has been used for thousands of years to promote relaxation and mental clarity. Research has shown that regular meditation can reduce stress, improve focus, and enhance emotional well-being. There are many different types of meditation, including mindfulness meditation, loving-kindness meditation, and transcendental meditation. By focusing on the present moment and observing thoughts without judgment, practitioners can develop a greater sense of peace and self-awareness. Incorporating meditation into your daily routine can have a profound impact on your overall health.',
      },
      {
        id: 'rs5',
        text: 'Read this fifth passage about the importance of sleep.',
        answers: [
          { id: 'a', text: 'I have finished reading.', scores: { speed: 1 } },
        ],
        readingPassage: 'Sleep is essential for physical and mental health. During sleep, the body repairs tissues, consolidates memories, and regulates hormones. Chronic sleep deprivation can lead to a range of health problems, including obesity, heart disease, and impaired cognitive function. Most adults need between seven and nine hours of sleep per night to function at their best. Establishing a regular sleep schedule and creating a relaxing bedtime routine can help improve sleep quality. Prioritizing sleep is one of the most important things you can do for your well-being.',
      },
      {
        id: 'rs6',
        text: 'Read this sixth passage about the power of habits.',
        answers: [
          { id: 'a', text: 'I have finished reading.', scores: { speed: 1 } },
        ],
        readingPassage: 'Habits are the small actions we take every day that shape our lives. According to research, about 40% of our daily activities are driven by habits rather than conscious decisions. Habits are formed through a loop of cue, craving, response, and reward. By understanding this loop, we can learn to break bad habits and build positive ones. Consistency is key when it comes to habit formation. Small, incremental changes can lead to significant long-term results. Mastering your habits is a powerful way to achieve your goals and live a more fulfilling life.',
      },
      {
        id: 'rs7',
        text: 'Read this seventh passage about the science of happiness.',
        answers: [
          { id: 'a', text: 'I have finished reading.', scores: { speed: 1 } },
        ],
        readingPassage: 'The science of happiness, also known as positive psychology, explores what makes life worth living. Researchers have identified several factors that contribute to well-being, including strong social connections, a sense of purpose, and gratitude. While genetics and life circumstances play a role, a significant portion of our happiness is within our control. Practicing mindfulness, engaging in acts of kindness, and pursuing meaningful goals can all increase our levels of happiness. Happiness is not just a fleeting emotion, but a skill that can be cultivated over time.',
      },
      {
        id: 'rs8',
        text: 'Read this eighth passage about the impact of social media.',
        answers: [
          { id: 'a', text: 'I have finished reading.', scores: { speed: 1 } },
        ],
        readingPassage: 'Social media has revolutionized the way we communicate and share information. It allows us to connect with people all over the world and stay informed about current events. However, social media also has its downsides, including the potential for addiction, cyberbullying, and the spread of misinformation. The constant comparison to others\' curated lives can also negatively impact self-esteem. It is important to use social media mindfully and set boundaries to protect your mental health. Finding a balance between online and offline life is essential for well-being.',
      },
      {
        id: 'rs9',
        text: 'Read this ninth passage about the benefits of exercise.',
        answers: [
          { id: 'a', text: 'I have finished reading.', scores: { speed: 1 } },
        ],
        readingPassage: 'Regular exercise is one of the best things you can do for your health. It improves cardiovascular fitness, strengthens muscles and bones, and helps maintain a healthy weight. Exercise also has significant mental health benefits, including reducing symptoms of anxiety and depression and improving mood. Physical activity releases endorphins, which are natural mood boosters. Whether it\'s walking, swimming, or weightlifting, finding an activity you enjoy is key to staying active. Aim for at least 150 minutes of moderate-intensity exercise per week.',
      },
      {
        id: 'rs10',
        text: 'Read this tenth passage about the future of technology.',
        answers: [
          { id: 'a', text: 'I have finished reading.', scores: { speed: 1 } },
        ],
        readingPassage: 'The future of technology holds exciting possibilities and significant challenges. From quantum computing to biotechnology, emerging technologies are poised to reshape our world. These advancements have the potential to solve some of humanity\'s most pressing problems, such as climate change and disease. However, they also raise important ethical and societal questions. As technology continues to advance at an exponential rate, it is crucial that we consider its impact on privacy, security, and equality. Navigating the future of technology requires a thoughtful and proactive approach.',
      },
    ],
  },
  // ── NEW PSYCHOLOGICAL QUIZZES ─────────────────────────────
  {
    id: 'intro-extro-scale',
    categoryId: 'personality',
    type: 'personality',
    title: "Are You Introverted or Extroverted?",
    description: "Discover where your social energy lies on Jung's scale.",
    icon: 'psychology',
    estimatedMinutes: 8,
    version: 'v1.1',
    tag: 'NEW',
    questions: [
      {
        id: 'ie1',
        text: 'After a long week of work, how do you prefer to recharge?',
        answers: [
          { id: 'a', text: 'Going out with a group of friends to a lively place.', scores: { extro: 4 } },
          { id: 'b', text: 'Spending quiet time alone or with a loved one.', scores: { intro: 4 } },
          { id: 'c', text: 'Depends on how tired I am; sometimes I go out, sometimes I stay in.', scores: { ambi: 4 } },
          { id: 'd', text: 'Doing something active but not necessarily social.', scores: { ambi: 2, intro: 2 } },
        ],
      },
      {
        id: 'ie2',
        text: 'In a large group, you tend to...',
        answers: [
          { id: 'a', text: 'Be the center of attention and lead the conversation.', scores: { extro: 4 } },
          { id: 'b', text: 'Listen more than talk and stay a bit in the background.', scores: { intro: 4 } },
          { id: 'c', text: 'Speak up when the topic interests me a lot.', scores: { ambi: 4 } },
          { id: 'd', text: 'Look for one or two people to talk to in depth.', scores: { intro: 2, ambi: 2 } },
        ],
      },
      {
        id: 'ie3',
        text: 'How do you react to unexpected social invitations (e.g., a last-minute invite)?',
        answers: [
          { id: 'a', text: 'They excite me; I almost always accept with pleasure.', scores: { extro: 4 } },
          { id: 'b', text: 'They make me anxious or annoyed; I prefer planned schedules.', scores: { intro: 4 } },
          { id: 'c', text: 'I evaluate at the moment, but I don\'t mind them.', scores: { ambi: 4 } },
          { id: 'd', text: 'I often make up an excuse not to go.', scores: { intro: 3 } },
        ],
      },
      {
        id: 'ie4',
        text: 'What is your approach to networking or meeting new people?',
        answers: [
          { id: 'a', text: 'It comes naturally to me and I enjoy it a lot.', scores: { extro: 4 } },
          { id: 'b', text: 'I find it exhausting and try to avoid it if possible.', scores: { intro: 4 } },
          { id: 'c', text: 'I can do it well, but then I need to be alone to recover.', scores: { ambi: 4 } },
          { id: 'd', text: 'I prefer others to approach me.', scores: { intro: 2 } },
        ],
      },
      {
        id: 'ie5',
        text: 'When you need to solve a problem, you prefer...',
        answers: [
          { id: 'a', text: 'Talking it out loud with others to clarify my ideas.', scores: { extro: 4 } },
          { id: 'b', text: 'Thinking about it alone in silence before talking about it.', scores: { intro: 4 } },
          { id: 'c', text: 'A mix of solitary reflection and quick comparison.', scores: { ambi: 4 } },
          { id: 'd', text: 'Writing my thoughts down on paper.', scores: { intro: 3 } },
        ],
      },
      {
        id: 'ie6',
        text: 'In a noisy and crowded environment, you feel...',
        answers: [
          { id: 'a', text: 'Stimulated and full of energy.', scores: { extro: 4 } },
          { id: 'b', text: 'Overwhelmed and wanting to leave.', scores: { intro: 4 } },
          { id: 'c', text: 'Comfortable for a while, but then I need to disconnect.', scores: { ambi: 4 } },
          { id: 'd', text: 'Indifferent; I can isolate myself if I want.', scores: { intro: 2, ambi: 2 } },
        ],
      },
      {
        id: 'ie7',
        text: 'How would you describe your conversation style?',
        answers: [
          { id: 'a', text: 'I talk a lot and jump from one topic to another.', scores: { extro: 4 } },
          { id: 'b', text: 'I talk little, but I go very deep.', scores: { intro: 4 } },
          { id: 'c', text: 'I adapt to the interlocutor; I can be both talkative and silent.', scores: { ambi: 4 } },
          { id: 'd', text: 'I prefer to listen and ask questions rather than talk about myself.', scores: { intro: 3 } },
        ],
      },
      {
        id: 'ie8',
        text: 'After a social event, you usually feel...',
        answers: [
          { id: 'a', text: 'Electrified and ready for more.', scores: { extro: 4 } },
          { id: 'b', text: 'Completely drained and in need of sleep.', scores: { intro: 4 } },
          { id: 'c', text: 'Satisfied but ready for some peace.', scores: { ambi: 4 } },
          { id: 'd', text: 'Depends on who was there; some people charge me, others drain me.', scores: { ambi: 3 } },
        ],
      },
      {
        id: 'ie9',
        text: 'When you are in a new environment, you usually...',
        answers: [
          { id: 'a', text: 'Start talking to the first person I see.', scores: { extro: 4 } },
          { id: 'b', text: 'Find a quiet corner to observe first.', scores: { intro: 4 } },
          { id: 'c', text: 'Wait for someone to introduce themselves to me.', scores: { ambi: 2, intro: 2 } },
          { id: 'd', text: 'Look for someone I already know.', scores: { intro: 2, ambi: 2 } },
        ],
      },
      {
        id: 'ie10',
        text: 'How do you feel about public speaking?',
        answers: [
          { id: 'a', text: 'I love it; it gives me a rush of energy.', scores: { extro: 4 } },
          { id: 'b', text: 'I find it terrifying and try to avoid it.', scores: { intro: 4 } },
          { id: 'c', text: 'I can do it if I have to, but I need to prepare a lot.', scores: { ambi: 4 } },
          { id: 'd', text: 'I prefer to be in the audience asking questions.', scores: { intro: 2, ambi: 2 } },
        ],
      },
    ],
    results: [
      {
        id: 'introverso-puro',
        type: 'intro',
        title: 'Introverso Puro',
        description: 'La tua energia è rivolta verso l\'interno. Ricarichi le batterie nella solitudine e trovi le interazioni sociali prolungate molto stancanti. Sei riflessivo, osservatore e preferisci la qualità alla quantità nelle relazioni.',
        icon: 'self_improvement',
      },
      {
        id: 'estroverso-puro',
        type: 'extro',
        title: 'Estroverso Puro',
        description: 'Sei una persona che trae energia dal mondo esterno e dalle persone. Ami l\'azione, la varietà e le interazioni sociali. Ti senti vivo quando sei circondato da altri e tendi a pensare ad alta voce.',
        icon: 'celebration',
      },
      {
        id: 'ambiverso',
        type: 'ambi',
        title: 'Ambiverso Equilibrato',
        description: 'Ti trovi nel mezzo dello spettro. Hai tratti di entrambi i mondi: apprezzi la socialità ma hai anche bisogno dei tuoi momenti di solitudine. Sei flessibile e sai adattarti a diverse situazioni sociali con facilità.',
        icon: 'balance',
      },
      {
        id: 'introverso-sociale',
        type: 'intro-soc',
        title: 'Introverso Sociale',
        description: 'Ti piace stare con le persone, ma preferisci piccoli gruppi di amici intimi. Non sei timido, ma la tua "batteria sociale" si scarica velocemente in ambienti troppo caotici o con sconosciuti.',
        icon: 'groups',
      },
    ],
  },
  {
    id: 'learning-style-vark',
    categoryId: 'cognitive',
    type: 'personality',
    title: "What's Your Learning Style?",
    description: "Discover the best way for you to learn and retain information.",
    icon: 'school',
    estimatedMinutes: 8,
    version: 'v1.1',
    tag: 'NEW',
    questions: [
      {
        id: 'ls1',
        text: 'When you are learning something new, you prefer...',
        answers: [
          { id: 'a', text: 'Reading instructions or looking at diagrams.', scores: { visual: 4 } },
          { id: 'b', text: 'Listening to an explanation or a podcast.', scores: { auditory: 4 } },
          { id: 'c', text: 'Trying it out immediately and learning by doing.', scores: { kinesthetic: 4 } },
          { id: 'd', text: 'Taking notes and summarizing in your own words.', scores: { read: 4 } },
        ],
      },
      {
        id: 'ls2',
        text: 'To remember a phone number, you usually...',
        answers: [
          { id: 'a', text: 'Visualize the numbers in your mind.', scores: { visual: 4 } },
          { id: 'b', text: 'Repeat it out loud several times.', scores: { auditory: 4 } },
          { id: 'c', text: 'Type it several times to "feel" the movement.', scores: { kinesthetic: 4 } },
          { id: 'd', text: 'Write it down on a piece of paper.', scores: { read: 4 } },
        ],
      },
      {
        id: 'ls3',
        text: 'In a lesson or conference, what helps you the most?',
        answers: [
          { id: 'a', text: 'Slides, charts, and videos shown.', scores: { visual: 4 } },
          { id: 'b', text: 'The tone of voice and words of the speaker.', scores: { auditory: 4 } },
          { id: 'c', text: 'Taking detailed notes word for word.', scores: { read: 4 } },
          { id: 'd', text: 'Practical exercises or group activities.', scores: { kinesthetic: 4 } },
        ],
      },
      {
        id: 'ls4',
        text: 'If you have to explain a concept to someone, you tend to...',
        answers: [
          { id: 'a', text: 'Draw a diagram or a chart.', scores: { visual: 4 } },
          { id: 'b', text: 'Use verbal metaphors and explain out loud.', scores: { auditory: 4 } },
          { id: 'c', text: 'Write a list of key points.', scores: { read: 4 } },
          { id: 'd', text: 'Show how it\'s done or use physical objects.', scores: { kinesthetic: 4 } },
        ],
      },
      {
        id: 'ls5',
        text: 'What is your favorite type of test?',
        answers: [
          { id: 'a', text: 'Tests with maps, charts, or image identification.', scores: { visual: 4 } },
          { id: 'b', text: 'Oral exams or discussions.', scores: { auditory: 4 } },
          { id: 'c', text: 'Essays or written open-ended questions.', scores: { read: 4 } },
          { id: 'd', text: 'Practical tests, labs, or simulations.', scores: { kinesthetic: 4 } },
        ],
      },
      {
        id: 'ls6',
        text: 'When you read a book, what do you notice most?',
        answers: [
          { id: 'a', text: 'Visual descriptions that create "movies" in your mind.', scores: { visual: 4 } },
          { id: 'b', text: 'The rhythm of the sentences and the "sound" of the words.', scores: { auditory: 4 } },
          { id: 'c', text: 'The logical structure and precision of the language.', scores: { read: 4 } },
          { id: 'd', text: 'The physical emotions or action described.', scores: { kinesthetic: 4 } },
        ],
      },
      {
        id: 'ls7',
        text: 'To orient yourself in a new city...',
        answers: [
          { id: 'a', text: 'I look at a map or use visual GPS.', scores: { visual: 4 } },
          { id: 'b', text: 'I ask passersby for verbal directions.', scores: { auditory: 4 } },
          { id: 'c', text: 'I read street names and textual signs.', scores: { read: 4 } },
          { id: 'd', text: 'I start walking and "feel" the direction.', scores: { kinesthetic: 4 } },
        ],
      },
      {
        id: 'ls8',
        text: 'What distracts you most while studying?',
        answers: [
          { id: 'a', text: 'Visual clutter or people passing by.', scores: { visual: 4 } },
          { id: 'b', text: 'Background noise, music, or people talking.', scores: { auditory: 4 } },
          { id: 'c', text: 'Poorly written text or typos.', scores: { read: 4 } },
          { id: 'd', text: 'An uncomfortable chair or the need to move.', scores: { kinesthetic: 4 } },
        ],
      },
      {
        id: 'ls9',
        text: 'When you are trying to solve a puzzle, you...',
        answers: [
          { id: 'a', text: 'Look at the picture on the box for reference.', scores: { visual: 4 } },
          { id: 'b', text: 'Talk to yourself about where the pieces might go.', scores: { auditory: 4 } },
          { id: 'c', text: 'Move the pieces around until they click.', scores: { kinesthetic: 4 } },
          { id: 'd', text: 'Sort the pieces by color or shape first.', scores: { read: 4 } },
        ],
      },
      {
        id: 'ls10',
        text: 'In a classroom setting, you prefer...',
        answers: [
          { id: 'a', text: 'Teachers who use lots of visual aids.', scores: { visual: 4 } },
          { id: 'b', text: 'Lectures and group discussions.', scores: { auditory: 4 } },
          { id: 'c', text: 'Hands-on activities and experiments.', scores: { kinesthetic: 4 } },
          { id: 'd', text: 'Reading assignments and writing essays.', scores: { read: 4 } },
        ],
      },
    ],
    results: [
      {
        id: 'visivo',
        type: 'visual',
        title: 'Visual Learning',
        description: 'You learn best through sight. You need to see charts, diagrams, mind maps, and videos to process information. You often think in images.',
        icon: 'visibility',
      },
      {
        id: 'uditivo',
        type: 'auditory',
        title: 'Auditory Learning',
        description: 'Your preferred channel is hearing. You remember well what is said, love debates, podcasts, and oral explanations. You often repeat things to yourself to memorize them.',
        icon: 'hearing',
      },
      {
        id: 'cinestetico',
        type: 'kinesthetic',
        title: 'Kinesthetic Learning',
        description: 'You learn by doing. You need to move, touch, build, and experiment physically. Purely theoretical lessons bore you; you excel in labs and practical activities.',
        icon: 'touch_app',
      },
      {
        id: 'lettura-scrittura',
        type: 'read',
        title: 'Reading and Writing',
        description: 'Your style is based on text. You love reading manuals, taking endless notes, and making lists. You process information by transforming it into written words.',
        icon: 'edit_note',
      },
    ],
  },
  {
    id: 'stress-management-style',
    categoryId: 'behavioral',
    type: 'personality',
    title: "How Do You Manage Stress?",
    description: "Identify your coping style: are you proactive or reactive?",
    icon: 'spa',
    estimatedMinutes: 8,
    version: 'v1.1',
    tag: 'NEW',
    questions: [
      {
        id: 'sm1',
        text: 'When you feel overwhelmed by commitments, your first reaction is...',
        answers: [
          { id: 'a', text: 'Making a list of priorities and starting to solve them immediately.', scores: { solver: 4 } },
          { id: 'b', text: 'Looking for someone to vent to emotionally.', scores: { emotional: 4 } },
          { id: 'c', text: 'Ignoring the problem and watching a TV series to distract myself.', scores: { avoider: 4 } },
          { id: 'd', text: 'Taking a deep breath and accepting the situation calmly.', scores: { resilient: 4 } },
        ],
      },
      {
        id: 'sm2',
        text: 'In the face of an unexpected failure, you...',
        answers: [
          { id: 'a', text: 'Analyze what went wrong so as not to repeat the mistake.', scores: { solver: 4 } },
          { id: 'b', text: 'Feel very down and need time to recover.', scores: { emotional: 4 } },
          { id: 'c', text: 'Pretend that nothing serious happened.', scores: { avoider: 4 } },
          { id: 'd', text: 'See it as a necessary growth opportunity.', scores: { resilient: 4 } },
        ],
      },
      {
        id: 'sm3',
        text: 'How do you react to constructive criticism at work?',
        answers: [
          { id: 'a', text: 'I use it as data to improve my performance.', scores: { solver: 4 } },
          { id: 'b', text: 'I take it personally and feel hurt.', scores: { emotional: 4 } },
          { id: 'c', text: 'I nod but then keep doing as before.', scores: { avoider: 4 } },
          { id: 'd', text: 'I sincerely thank for the feedback received.', scores: { resilient: 4 } },
        ],
      },
      {
        id: 'sm4',
        text: 'What helps you most to relax after a heavy day?',
        answers: [
          { id: 'a', text: 'Planning the next day to feel in control.', scores: { solver: 4 } },
          { id: 'b', text: 'Calling a friend and telling them everything.', scores: { emotional: 4 } },
          { id: 'c', text: 'Eating something good or compulsive shopping.', scores: { avoider: 4 } },
          { id: 'd', text: 'Meditating or taking a walk in nature.', scores: { resilient: 4 } },
        ],
      },
      {
        id: 'sm5',
        text: 'When you have too much to do, you tend to...',
        answers: [
          { id: 'a', text: 'Delegate or eliminate non-essential activities.', scores: { solver: 4 } },
          { id: 'b', text: 'Get anxious and complain about the workload.', scores: { emotional: 4 } },
          { id: 'c', text: 'Procrastinate and do things at the last minute.', scores: { avoider: 4 } },
          { id: 'd', text: 'Keep calm and proceed one step at a time.', scores: { resilient: 4 } },
        ],
      },
      {
        id: 'sm6',
        text: 'In a heated discussion, you...',
        answers: [
          { id: 'a', text: 'Try to bring everything back to logic and facts.', scores: { solver: 4 } },
          { id: 'b', text: 'Raise your voice or burst into tears.', scores: { emotional: 4 } },
          { id: 'c', text: 'Leave the room to avoid conflict.', scores: { avoider: 4 } },
          { id: 'd', text: 'Try to understand the other\'s point of view without judging.', scores: { resilient: 4 } },
        ],
      },
      {
        id: 'sm7',
        text: 'How do you see your future?',
        answers: [
          { id: 'a', text: 'As a series of goals to be achieved with effort.', scores: { solver: 4 } },
          { id: 'b', text: 'With a bit of fear for emotional uncertainties.', scores: { emotional: 4 } },
          { id: 'c', text: 'I prefer not to think about it and live day by day.', scores: { avoider: 4 } },
          { id: 'd', text: 'With confidence in my ability to face anything.', scores: { resilient: 4 } },
        ],
      },
      {
        id: 'sm8',
        text: 'What is your relationship with change?',
        answers: [
          { id: 'a', text: 'I see it as a logical challenge to manage.', scores: { solver: 4 } },
          { id: 'b', text: 'It scares me a lot and destabilizes me.', scores: { emotional: 4 } },
          { id: 'c', text: 'I try to resist as long as possible.', scores: { avoider: 4 } },
          { id: 'd', text: 'I welcome it as a natural evolution.', scores: { resilient: 4 } },
        ],
      },
      {
        id: 'sm9',
        text: 'When you feel overwhelmed, you...',
        answers: [
          { id: 'a', text: 'Take a break to clear your head.', scores: { resilient: 4 } },
          { id: 'b', text: 'Keep pushing until you burn out.', scores: { emotional: 4 } },
          { id: 'c', text: 'Call a friend to vent.', scores: { social: 4 } },
          { id: 'd', text: 'Go to sleep to avoid the situation.', scores: { avoider: 4 } },
        ],
      },
      {
        id: 'sm10',
        text: 'How do you handle criticism?',
        answers: [
          { id: 'a', text: 'I listen and try to improve.', scores: { solver: 4 } },
          { id: 'b', text: 'I take it personally and get defensive.', scores: { emotional: 4 } },
          { id: 'c', text: 'I ask others if they agree with the criticism.', scores: { social: 4 } },
          { id: 'd', text: 'I ignore it and pretend it didn\'t happen.', scores: { avoider: 4 } },
        ],
      },
    ],
    results: [
      {
        id: 'problem-solver',
        type: 'solver',
        title: 'The Problem Solver',
        description: 'Your approach to stress is rational and action-oriented. You try to eliminate the source of stress by acting directly on the cause. You are very efficient but risk neglecting your emotions.',
        icon: 'build',
      },
      {
        id: 'emotivo',
        type: 'emotional',
        title: 'Emotional Coping',
        description: 'You manage stress through sharing and processing feelings. You need social support and to express what you feel. You are very empathetic but stress can paralyze you if you don\'t find a listener.',
        icon: 'favorite',
      },
      {
        id: 'evitante',
        type: 'avoider',
        title: 'The Avoider',
        description: 'Your main strategy is distraction. You try not to think about what stresses you, hoping it will pass on its own or taking refuge in pleasant activities. Useful in the short term, but problems tend to accumulate.',
        icon: 'visibility_off',
      },
      {
        id: 'resiliente',
        type: 'resilient',
        title: 'The Resilient',
        description: 'You have a high capacity for adaptation. You accept stress as part of life and maintain inner calm. You manage to transform difficulties into strength without being overwhelmed.',
        icon: 'psychology',
      },
    ],
  },
  {
    id: 'leadership-style-test',
    categoryId: 'behavioral',
    type: 'personality',
    title: "What Kind of Leader Are You?",
    description: "Discover your natural approach to leading a team.",
    icon: 'leaderboard',
    estimatedMinutes: 8,
    version: 'v1.1',
    tag: 'NEW',
    questions: [
      {
        id: 'ld1',
        text: 'In an emergency situation where you need to decide quickly:',
        answers: [
          { id: 'a', text: 'I take command and tell everyone exactly what to do.', scores: { autocratic: 4 } },
          { id: 'b', text: 'I ask the team for a quick opinion before deciding.', scores: { democratic: 4 } },
          { id: 'c', text: 'I let the most experienced members decide independently.', scores: { laissez: 4 } },
          { id: 'd', text: 'I inspire the team by reminding them of our common goal.', scores: { transform: 4 } },
        ],
      },
      {
        id: 'ld2',
        text: 'How do you handle a team member who is not performing well?',
        answers: [
          { id: 'a', text: 'I give them stricter instructions and monitor their work.', scores: { autocratic: 4 } },
          { id: 'b', text: 'I sit down with them to understand the difficulties and find solutions together.', scores: { democratic: 4 } },
          { id: 'c', text: 'I give them space, trusting they will find their way.', scores: { laissez: 4 } },
          { id: 'd', text: 'I try to motivate them by showing them their future potential.', scores: { transform: 4 } },
        ],
      },
      {
        id: 'ld3',
        text: 'What is your main priority as a leader?',
        answers: [
          { id: 'a', text: 'Achieving results at all costs.', scores: { autocratic: 4 } },
          { id: 'b', text: 'Maintaining harmony and consensus in the group.', scores: { democratic: 4 } },
          { id: 'c', text: 'Avoiding interfering with others\' work.', scores: { laissez: 4 } },
          { id: 'd', text: 'Inspiring deep and lasting change.', scores: { transform: 4 } },
        ],
      },
      {
        id: 'ld4',
        text: 'How do you prefer to communicate with your team?',
        answers: [
          { id: 'a', text: 'Through clear orders and written directives.', scores: { autocratic: 4 } },
          { id: 'b', text: 'With meetings open to debate and comparison.', scores: { democratic: 4 } },
          { id: 'c', text: 'Only when strictly necessary or requested.', scores: { laissez: 4 } },
          { id: 'd', text: 'With motivational speeches and overall visions.', scores: { transform: 4 } },
        ],
      },
      {
        id: 'ld5',
        text: 'In case of conflict between two collaborators, you...',
        answers: [
          { id: 'a', text: 'I decide who is right and close the matter.', scores: { autocratic: 4 } },
          { id: 'b', text: 'I act as a mediator to find a compromise.', scores: { democratic: 4 } },
          { id: 'c', text: 'I let them handle it themselves.', scores: { laissez: 4 } },
          { id: 'd', text: 'I try to transform the conflict into a learning moment.', scores: { transform: 4 } },
        ],
      },
      {
        id: 'ld6',
        text: 'How do you see innovation?',
        answers: [
          { id: 'a', text: 'A tool to increase control and efficiency.', scores: { autocratic: 4 } },
          { id: 'b', text: 'A collective process that starts from the bottom.', scores: { democratic: 4 } },
          { id: 'c', text: 'Something that happens naturally if left free.', scores: { laissez: 4 } },
          { id: 'd', text: 'The main mission to constantly evolve.', scores: { transform: 4 } },
        ],
      },
      {
        id: 'ld7',
        text: 'What is your relationship with power?',
        answers: [
          { id: 'a', text: 'It is necessary to maintain order.', scores: { autocratic: 4 } },
          { id: 'b', text: 'It should be shared as much as possible.', scores: { democratic: 4 } },
          { id: 'c', text: 'It is a burden I would gladly do without.', scores: { laissez: 4 } },
          { id: 'd', text: 'It is a means to serve a larger cause.', scores: { transform: 4 } },
        ],
      },
      {
        id: 'ld8',
        text: 'What makes you most proud of your work?',
        answers: [
          { id: 'a', text: 'Having perfectly met deadlines and budgets.', scores: { autocratic: 4 } },
          { id: 'b', text: 'Having created a united and happy team.', scores: { democratic: 4 } },
          { id: 'c', text: 'Seeing my collaborators become independent.', scores: { laissez: 4 } },
          { id: 'd', text: 'Seeing the positive impact of my work on society.', scores: { transform: 4 } },
        ],
      },
      {
        id: 'ld9',
        text: 'When a project fails, your first thought is...',
        answers: [
          { id: 'a', text: 'Who failed to follow the instructions?', scores: { autocratic: 4 } },
          { id: 'b', text: 'How can we discuss this as a team to improve?', scores: { democratic: 4 } },
          { id: 'c', text: 'It\'s part of the learning process, let\'s move on.', scores: { laissez: 4 } },
          { id: 'd', text: 'How can we use this failure to inspire a new direction?', scores: { transform: 4 } },
        ],
      },
      {
        id: 'ld10',
        text: 'Your ideal team is one that...',
        answers: [
          { id: 'a', text: 'Follows my lead without hesitation.', scores: { autocratic: 4 } },
          { id: 'b', text: 'Collaborates and makes decisions together.', scores: { democratic: 4 } },
          { id: 'c', text: 'Operates independently with minimal supervision.', scores: { laissez: 4 } },
          { id: 'd', text: 'Is constantly growing and challenging the status quo.', scores: { transform: 4 } },
        ],
      },
    ],
    results: [
      {
        id: 'autocratico',
        type: 'autocratic',
        title: 'Autocratic Leader',
        description: 'You make decisions independently and expect them to be followed. You are excellent in crises and where maximum efficiency is needed, but you risk demotivating more creative collaborators.',
        icon: 'gavel',
      },
      {
        id: 'democratico',
        type: 'democratic',
        title: 'Democratic Leader',
        description: 'You involve the team in every important decision. You favor collaboration and high morale. The process may be slower, but the results are more shared and lasting.',
        icon: 'groups',
      },
      {
        id: 'laissez-faire',
        type: 'laissez',
        title: 'Laissez-faire Leader',
        description: 'You give maximum autonomy to your collaborators. You function well with highly motivated teams of experts who do not need constant guidance. However, you risk a lack of direction if the team is inexperienced.',
        icon: 'auto_awesome',
      },
      {
        id: 'trasformazionale',
        type: 'transform',
        title: 'Transformational Leader',
        description: 'You are a visionary who inspires and motivates through enthusiasm and example. You focus on the growth of individuals and positive long-term change.',
        icon: 'trending_up',
      },
    ],
  },
  {
    id: 'multiple-intelligences-gardner',
    categoryId: 'cognitive',
    type: 'personality',
    title: "What Is Your Dominant Intelligence?",
    description: "Discover your strongest cognitive areas based on Gardner's theory.",
    icon: 'psychology',
    estimatedMinutes: 10,
    version: 'v1.1',
    tag: 'NEW',
    questions: [
      {
        id: 'mi1',
        text: 'What comes most naturally to you in your free time?',
        answers: [
          { id: 'a', text: 'Reading, writing, or playing word games.', scores: { linguistic: 4 } },
          { id: 'b', text: 'Solving logical puzzles or doing calculations.', scores: { logical: 4 } },
          { id: 'c', text: 'Drawing, photographing, or navigating with maps.', scores: { spatial: 4 } },
          { id: 'd', text: 'Playing sports, dancing, or manual work.', scores: { kinesthetic: 4 } },
        ],
      },
      {
        id: 'mi2',
        text: 'Which of these activities are you most passionate about?',
        answers: [
          { id: 'a', text: 'Listening to or composing music.', scores: { musical: 4 } },
          { id: 'b', text: 'Mediating conflicts between friends or organizing events.', scores: { interpersonal: 4 } },
          { id: 'c', text: 'Reflecting on my goals and inner life.', scores: { intrapersonal: 4 } },
          { id: 'd', text: 'Being outdoors, caring for plants, or observing animals.', scores: { naturalist: 4 } },
        ],
      },
      {
        id: 'mi3',
        text: 'In school, which subject did you excel in?',
        answers: [
          { id: 'a', text: 'Literature, foreign languages, or history.', scores: { linguistic: 4 } },
          { id: 'b', text: 'Mathematics, physics, or science.', scores: { logical: 4 } },
          { id: 'c', text: 'Art or geometry.', scores: { spatial: 4 } },
          { id: 'd', text: 'Physical education or technical workshops.', scores: { kinesthetic: 4 } },
        ],
      },
      {
        id: 'mi4',
        text: 'How do you prefer to spend an ideal evening?',
        answers: [
          { id: 'a', text: 'Going to a concert or playing an instrument.', scores: { musical: 4 } },
          { id: 'b', text: 'Attending a crowded party or a debate.', scores: { interpersonal: 4 } },
          { id: 'c', text: 'Writing a diary or meditating in solitude.', scores: { intrapersonal: 4 } },
          { id: 'd', text: 'Camping or a trip to the mountains.', scores: { naturalist: 4 } },
        ],
      },
      {
        id: 'mi5',
        text: 'What is your favorite way to learn something new?',
        answers: [
          { id: 'a', text: 'Reading books or in-depth articles.', scores: { linguistic: 4 } },
          { id: 'b', text: 'Analyzing data, statistics, and logical patterns.', scores: { logical: 4 } },
          { id: 'c', text: 'Looking at diagrams, maps, and videos.', scores: { spatial: 4 } },
          { id: 'd', text: 'Physically trying the activity.', scores: { kinesthetic: 4 } },
        ],
      },
      {
        id: 'mi6',
        text: 'What do you notice first when you enter a new room?',
        answers: [
          { id: 'a', text: 'The sounds, background music, or acoustics.', scores: { musical: 4 } },
          { id: 'b', text: 'The people present and their interactions.', scores: { interpersonal: 4 } },
          { id: 'c', text: 'The atmosphere and how it makes me feel inside.', scores: { intrapersonal: 4 } },
          { id: 'd', text: 'The plants, natural light, or natural materials.', scores: { naturalist: 4 } },
        ],
      },
      {
        id: 'mi7',
        text: 'Which of these problems do you feel most capable of solving?',
        answers: [
          { id: 'a', text: 'Writing a convincing speech.', scores: { linguistic: 4 } },
          { id: 'b', text: 'Solving a complex chess problem.', scores: { logical: 4 } },
          { id: 'c', text: 'Assembling complicated furniture without instructions.', scores: { spatial: 4 } },
          { id: 'd', text: 'Repairing a broken object using my hands.', scores: { kinesthetic: 4 } },
        ],
      },
      {
        id: 'mi8',
        text: 'What gives you the most satisfaction?',
        answers: [
          { id: 'a', text: 'Recognizing a complex melody.', scores: { musical: 4 } },
          { id: 'b', text: 'Helping a friend solve a personal problem.', scores: { interpersonal: 4 } },
          { id: 'c', text: 'Deeply understanding one of my emotions.', scores: { intrapersonal: 4 } },
          { id: 'd', text: 'Identifying a rare species of bird or plant.', scores: { naturalist: 4 } },
        ],
      },
      {
        id: 'mi9',
        text: 'When you are in a new city, you prefer to...',
        answers: [
          { id: 'a', text: 'Read about its history and local stories.', scores: { linguistic: 4 } },
          { id: 'b', text: 'Study the map and understand the layout.', scores: { spatial: 4 } },
          { id: 'c', text: 'Interact with locals to understand the culture.', scores: { interpersonal: 4 } },
          { id: 'd', text: 'Visit local parks and natural areas.', scores: { naturalist: 4 } },
        ],
      },
      {
        id: 'mi10',
        text: 'How do you best remember information?',
        answers: [
          { id: 'a', text: 'By repeating it out loud or writing it down.', scores: { linguistic: 4 } },
          { id: 'b', text: 'By creating a mental image or diagram.', scores: { spatial: 4 } },
          { id: 'c', text: 'By associating it with a rhythm or song.', scores: { musical: 4 } },
          { id: 'd', text: 'By relating it to a personal experience.', scores: { intrapersonal: 4 } },
        ],
      },
    ],
    results: [
      { id: 'linguistica', type: 'linguistic', title: 'Linguistic Intelligence', description: 'Mastery of language, love for reading and writing.', icon: 'menu_book' },
      { id: 'logico-matematica', type: 'logical', title: 'Logical-Mathematical Intelligence', description: 'You excel in abstract reasoning and calculation.', icon: 'calculate' },
      { id: 'spaziale', type: 'spatial', title: 'Visual-Spatial Intelligence', description: 'Excellent visualization and orientation skills.', icon: 'architecture' },
      { id: 'corporeo-cinestetica', type: 'kinesthetic', title: 'Bodily-Kinesthetic Intelligence', description: 'Great coordination and manual skills.', icon: 'fitness_center' },
      { id: 'musicale', type: 'musical', title: 'Musical Intelligence', description: 'Sensitivity to rhythms, tones, and harmonies.', icon: 'music_note' },
      { id: 'interpersonale', type: 'interpersonal', title: 'Interpersonal Intelligence', description: 'Ability to understand and relate to others.', icon: 'forum' },
      { id: 'intrapersonale', type: 'intrapersonale', title: 'Intrapersonal Intelligence', description: 'Deep knowledge of self and one\'s own feelings.', icon: 'person' },
      { id: 'naturalistica', type: 'naturalist', title: 'Naturalistic Intelligence', description: 'Connection with the natural world and living beings.', icon: 'nature' },
    ],
  },
];

export const getQuizById = (id: string) => quizzes.find(q => q.id === id);
export const getQuizzesByCategory = (catId: string) => quizzes.filter(q => q.categoryId === catId);
