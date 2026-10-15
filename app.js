/**
 * Internet of Things (IoT) Study Studio & Quiz Platform
 * Single Page Application (SPA) architecture with browser localStorage persistence.
 */

import { QUIZ_MODULES, QUIZ_QUESTIONS } from './quiz-data.js';

const STORAGE_KEY = 'iot-study-studio-v1';
const THEME_STORAGE_KEY = 'iot-study-studio-theme-v2';

// User Study Progress History
let history = {
  completed: 0,
  answered: 0,
  best: 0,
  attempts: 0,
  weekScores: {}, // { [moduleIndex]: { score: number, total: number } }
  scoreAttempts: [], // [{ attemptNumber: 1, testTitle: '...', score: 12, total: 15, percent: 80, timestamp: 123 }]
  mistakeVault: {}, // { [questionId]: consecutiveCorrectCount }
  starred: [], // ['w0-q1', 'w1-q3', ...]
  bestStreak: 0, // highest survival streak
  practiceMode: 'study' // 'study' (instant feedback) | 'exam' (grade at end)
};

try {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    const parsed = JSON.parse(saved);
    history = {
      ...history,
      ...parsed,
      scoreAttempts: Array.isArray(parsed?.scoreAttempts) ? parsed.scoreAttempts : [],
      mistakeVault: typeof parsed?.mistakeVault === 'object' && parsed.mistakeVault !== null ? parsed.mistakeVault : {},
      starred: Array.isArray(parsed?.starred) ? parsed.starred : [],
      bestStreak: typeof parsed?.bestStreak === 'number' ? parsed.bestStreak : 0,
      practiceMode: parsed?.practiceMode === 'exam' ? 'exam' : 'study'
    };
  }
} catch (e) {
  console.error('Error loading history:', e);
}

function saveHistory() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch (e) {
    console.error('Error saving history:', e);
  }
}

// Record question outcome for Mistake Vault:
// Questions enter the vault on incorrect answers, and graduate only after 2 consecutive correct answers!
function recordAnswerOutcome(questionId, isCorrect) {
  if (!questionId) return;
  if (!history.mistakeVault) history.mistakeVault = {};

  if (!isCorrect) {
    history.mistakeVault[questionId] = 0;
  } else {
    if (Object.prototype.hasOwnProperty.call(history.mistakeVault, questionId)) {
      history.mistakeVault[questionId] = (history.mistakeVault[questionId] || 0) + 1;
      if (history.mistakeVault[questionId] >= 2) {
        delete history.mistakeVault[questionId];
      }
    }
  }
  saveHistory();
}

function isStarred(questionId) {
  return Array.isArray(history.starred) && history.starred.includes(questionId);
}

function toggleStar(questionId) {
  if (!Array.isArray(history.starred)) history.starred = [];
  const idx = history.starred.indexOf(questionId);
  if (idx >= 0) {
    history.starred.splice(idx, 1);
    toast('Removed from Starred');
  } else {
    history.starred.push(questionId);
    toast('Saved to Starred questions ★');
  }
  saveHistory();
}

function setPracticeMode(newMode) {
  history.practiceMode = newMode;
  saveHistory();
  if (mode === 'home') {
    home();
  } else if (mode === 'quiz') {
    renderQuizKeepPosition();
  }
  toast(`Feedback mode: ${newMode === 'study' ? '⚡ Instant Feedback' : '📝 Grade at End'}`);
}

// Utility: HTML Escaper
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[c]));

// Utility: Arrays equality
function arraysEqual(a = [], b = []) {
  if (a.length !== b.length) return false;
  const sortedA = [...a].sort();
  const sortedB = [...b].sort();
  return sortedA.every((val, index) => val === sortedB[index]);
}

// ============================================================================
// Sleek In-App Custom Modal Controller (No ugly browser alert!)
// ============================================================================

let modalAction = null;

function showCustomModal({
  title,
  contextText = '',
  body,
  confirmText = 'Confirm',
  cancelText = 'Keep Practicing',
  isDanger = false,
  onConfirm
}) {
  const modal = document.getElementById('customModal');
  const titleEl = document.getElementById('modalTitle');
  const bodyEl = document.getElementById('modalBody');
  const iconWrap = document.getElementById('modalIconWrap');
  const confirmBtn = document.getElementById('modalConfirmBtn');
  const confirmTextEl = document.getElementById('modalConfirmBtnText');
  const confirmIconEl = document.getElementById('modalConfirmIcon');
  const cancelTextEl = document.getElementById('modalCancelBtnText');
  const contextChip = document.getElementById('modalContextChip');
  const contextTextEl = document.getElementById('modalContextText');

  if (!modal || !titleEl || !bodyEl || !confirmBtn) {
    if (confirm(body)) onConfirm();
    return;
  }

  titleEl.textContent = title;
  bodyEl.textContent = body;
  
  if (confirmTextEl) confirmTextEl.textContent = confirmText;
  else confirmBtn.textContent = confirmText;

  if (cancelTextEl) cancelTextEl.textContent = cancelText;

  if (contextChip && contextTextEl) {
    if (contextText) {
      contextTextEl.textContent = contextText;
      contextChip.style.display = 'inline-flex';
    } else {
      contextChip.style.display = 'none';
    }
  }

  if (isDanger) {
    iconWrap.className = 'modal-icon-wrap danger';
    iconWrap.innerHTML = `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
        <line x1="12" y1="9" x2="12" y2="13"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    `;
    confirmBtn.className = 'btn-modal-confirm danger';
    if (confirmIconEl) {
      confirmIconEl.innerHTML = `
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
          <polyline points="16 17 21 12 16 7"/>
          <line x1="21" y1="12" x2="9" y2="12"/>
        </svg>
      `;
    }
  } else {
    iconWrap.className = 'modal-icon-wrap notice';
    iconWrap.innerHTML = `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    `;
    confirmBtn.className = 'btn-modal-confirm primary';
    if (confirmIconEl) {
      confirmIconEl.innerHTML = `
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      `;
    }
  }

  modalAction = onConfirm;
  modal.classList.add('open');
}

function hideCustomModal() {
  const modal = document.getElementById('customModal');
  if (modal) modal.classList.remove('open');
  modalAction = null;
}

document.getElementById('modalCancelBtn')?.addEventListener('click', hideCustomModal);
document.getElementById('modalCloseXBtn')?.addEventListener('click', hideCustomModal);
document.getElementById('modalConfirmBtn')?.addEventListener('click', () => {
  if (typeof modalAction === 'function') {
    modalAction();
  }
  hideCustomModal();
});

// Click outside modal card to close
document.getElementById('customModal')?.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'customModal') {
    hideCustomModal();
  }
});

function promptExitTest() {
  const answeredCount = Object.keys(answers).filter((k) => answers[k] && answers[k].length > 0).length;
  const context = `${title || 'Active Test'} · ${answeredCount} of ${cur.length} answered`;

  showCustomModal({
    title: 'Exit this test?',
    contextText: context,
    body: 'Your answers for this test attempt will be cleared and you will return to the dashboard. You can start a fresh test anytime.',
    confirmText: 'Exit test',
    cancelText: 'Keep Practicing',
    isDanger: true,
    onConfirm: () => {
      home();
    }
  });
}

// ============================================================================
// ============================================================================
// Quiz Runtime State
// ============================================================================

let cur = []; // active questions
let title = '';
let mode = 'home'; // 'home' | 'quiz' | 'results' | 'flashcards' | 'survival'
let selectedWeek = -1; // -1: Full, -2: Random, -3: Vault, -4: Starred, >=0: Module index
let answers = {}; // { [questionIndex]: ['a'] or ['a', 'b'] }
let verifiedMsq = {}; // { [questionIndex]: boolean }
let currentQuestion = 0;
let startedAt = 0;

// Flashcards Runtime State
let flashcardDeck = 'all';
let flashcardsList = [];
let flashcardIdx = 0;
let flashcardRevealed = false;

// Survival Runtime State
let survivalLives = 3;
let survivalStreak = 0;
let survivalPool = [];
let survivalIdx = 0;
let survivalSelected = [];
let survivalAnswered = false;
let survivalIsCorrect = false;

const app = document.getElementById('app');

function toast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove('show'), 2200);
}

function goTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (app) app.focus({ preventScroll: true });
}

// ============================================================================
// Screen 1: Dashboard View (Home)
// ============================================================================

function home() {
  mode = 'home';

  const vaultCount = Object.keys(history.mistakeVault || {}).length;
  const starCount = (history.starred || []).length;
  const bestStreak = history.bestStreak || 0;

  const weekCardsHtml = QUIZ_MODULES.map((mod, i) => {
    const score = history.weekScores[i];
    const bestScoreHtml = score
      ? `<span class="best-score-pill">Score: ${score.score}/${score.total} (${Math.round((score.score / score.total) * 100)}%)</span>`
      : `<span style="color: var(--muted); font-size: 0.74rem;">Not attempted</span>`;

    return `
      <button class="week-card" type="button" data-week="${i}" aria-label="Start ${mod.weekLabel}: ${esc(mod.title)}">
        <div>
          <span class="week-num">${i === 0 ? 'Introduction' : `Module ${mod.moduleNumber}`}</span>
          <span class="week-title">${esc(mod.weekLabel)}</span>
          <span class="week-desc-snippet">${esc(mod.description)}</span>
        </div>
        <div class="week-meta">
          <span>${mod.questionCount} questions</span>
          ${bestScoreHtml}
        </div>
      </button>
    `;
  }).join('');

  app.innerHTML = `
    <!-- Hero Section (2 Columns) -->
    <section class="hero" aria-labelledby="heroTitle">
      <div class="hero-main">
        <div>
          <div class="eyebrow">Learn · Practise · Improve</div>
          <h1 id="heroTitle">Make learning<br>stick.</h1>
          <p class="hero-copy">Master Internet of Things with focused module quizzes, full comprehensive tests, rapid flashcards, and mistaked-targeted drills.</p>
        </div>

        <!-- Mode Toggle in hero actions slot -->
        <div class="hero-actions">
          <div class="hero-segmented-toggle" role="radiogroup" aria-label="Feedback Mode">
            <button class="hero-seg-btn ${history.practiceMode === 'study' ? 'active' : ''}" id="modeToggleStudy" type="button">
              ⚡ Instant Feedback (Study)
            </button>
            <button class="hero-seg-btn ${history.practiceMode === 'exam' ? 'active' : ''}" id="modeToggleExam" type="button">
              📝 Grade at End (Exam)
            </button>
          </div>
        </div>
      </div>

      <!-- Stats Widget Card -->
      <aside class="hero-side" aria-label="Your study statistics">
        <div class="stat-block">
          <div class="stat-label">Questions in library</div>
          <div class="stat-number">${QUIZ_QUESTIONS.length}</div>
          <div class="stat-foot">Across ${QUIZ_MODULES.length} week-wise sets</div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-block">
          <div class="stat-label">Completed attempts</div>
          <div class="stat-number">${history.completed}</div>
          <div class="stat-foot">Personal best: <strong>${history.best}%</strong></div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-block">
          <div class="stat-label">Survival Best Streak</div>
          <div class="stat-number" style="color: #ea580c;">🔥 ${bestStreak}</div>
          <div class="stat-foot">${bestStreak > 0 ? 'Highest unbroken streak' : 'Test sudden death in Survival'}</div>
        </div>
      </aside>
    </section>

    <!-- Study Studio Practice Modes Section -->
    <section aria-labelledby="challengeHeading">
      <div class="section-head">
        <div>
          <div class="eyebrow">Study Studio Hub</div>
          <h2 id="challengeHeading">Practice modes</h2>
          <p>Target weaknesses with the Mistake Vault, flip rapid flashcards, or brave sudden death.</p>
        </div>
      </div>

      <div class="practice-grid">
        <!-- Card 1: Full Mock Exam -->
        <article class="practice-card">
          <div class="practice-icon" aria-hidden="true">◎</div>
          <div class="practice-card-content">
            <div class="practice-card-header">
              <h3>Full test</h3>
              <span class="practice-badge">210 Qs</span>
            </div>
            <p>Comprehensive exam containing all ${QUIZ_QUESTIONS.length} questions across every module.</p>
            <button class="text-btn" type="button" id="startFullTestCard">Take full test →</button>
          </div>
        </article>

        <!-- Card 2: Random Sprint -->
        <article class="practice-card">
          <div class="practice-icon" aria-hidden="true">⚄</div>
          <div class="practice-card-content">
            <div class="practice-card-header">
              <h3>Random sprint</h3>
              <span class="practice-badge">20 Qs</span>
            </div>
            <p>Fast practice session with 20 randomized questions drawn across all weeks.</p>
            <button class="text-btn" type="button" id="startRandomCard">Start random sprint →</button>
          </div>
        </article>

        <!-- Card 3: The Mistake Vault -->
        <article class="practice-card">
          <div class="practice-icon vault" aria-hidden="true">⚡</div>
          <div class="practice-card-content">
            <div class="practice-card-header">
              <h3>Mistake Vault</h3>
              <span class="practice-badge ${vaultCount > 0 ? 'active-vault' : ''}">
                ${vaultCount > 0 ? `${vaultCount} to fix` : 'All clear ✓'}
              </span>
            </div>
            <p>Only serves questions you got wrong. A question leaves once answered correctly twice in a row.</p>
            <button class="text-btn" type="button" id="startMistakeVaultCard" style="color: #dc2626;">
              ${vaultCount > 0 ? `Fix ${vaultCount} mistakes →` : 'Review vault →'}
            </button>
          </div>
        </article>

        <!-- Card 4: Rapid Flashcards -->
        <article class="practice-card">
          <div class="practice-icon flash" aria-hidden="true">🎴</div>
          <div class="practice-card-content">
            <div class="practice-card-header">
              <h3>Flashcard review</h3>
              <span class="practice-badge">Space to flip</span>
            </div>
            <p>Rapid mental repetition. Think of the answer, hit Space to reveal, and power through 210 questions fast.</p>
            <button class="text-btn" type="button" id="startFlashcardsCard" style="color: #6366f1;">
              Open flashcards →
            </button>
          </div>
        </article>

        <!-- Card 5: Survival Streak -->
        <article class="practice-card">
          <div class="practice-icon survival" aria-hidden="true">🔥</div>
          <div class="practice-card-content">
            <div class="practice-card-header">
              <h3>Survival mode</h3>
              <span class="practice-badge streak">
                ${bestStreak > 0 ? `Best: ${bestStreak}` : '3 Lives'}
              </span>
            </div>
            <p>Infinite random questions with 3 lives. One mistake costs a life. High pressure forces razor focus.</p>
            <button class="text-btn" type="button" id="startSurvivalCard" style="color: #ea580c;">
              Start survival run →
            </button>
          </div>
        </article>

        <!-- Card 6: Starred Questions -->
        <article class="practice-card">
          <div class="practice-icon star" aria-hidden="true">★</div>
          <div class="practice-card-content">
            <div class="practice-card-header">
              <h3>Starred vault</h3>
              <span class="practice-badge">
                ${starCount > 0 ? `${starCount} saved` : '0 saved'}
              </span>
            </div>
            <p>Quick drill focused exclusively on tricky formulas and tough questions you've bookmarked with ★.</p>
            <button class="text-btn" type="button" id="startStarredCard" style="color: #d97706;">
              ${starCount > 0 ? `Drill ${starCount} starred →` : 'Open starred →'}
            </button>
          </div>
        </article>
      </div>
    </section>

    <!-- Score & Module Practice Section -->
    <section aria-labelledby="weeksHeading">
      <div class="section-head">
        <div>
          <div class="eyebrow">Score tracker</div>
          <h2 id="weeksHeading">Module scores</h2>
          <p>Track your score for each module. Click any module to test and improve your score.</p>
        </div>
        <span class="stat-foot" id="totalSetsBadge">${QUIZ_MODULES.length} sets</span>
      </div>

      <!-- Search & Sort Filter Toolbar -->
      <div class="week-tools">
        <label class="search-wrap">
          <span class="search-icon" aria-hidden="true">⌕</span>
          <input class="week-search" id="weekSearch" type="search" placeholder="Find a week or topic…" aria-label="Search weekly tests">
        </label>
        <label>
          <span class="hidden">Sort weekly tests</span>
          <select class="week-sort" id="weekSort" aria-label="Sort weekly tests">
            <option value="original">Original order</option>
            <option value="name">Week name A–Z</option>
            <option value="best">Highest score</option>
          </select>
        </label>
        <span class="filter-count" id="filterCount" aria-live="polite">${QUIZ_MODULES.length} tests</span>
      </div>

      <!-- Weekly Modules 4-Column Grid -->
      <div class="week-grid" id="weekGrid">${weekCardsHtml}</div>
      <div class="empty-state hidden" id="filterEmpty" style="margin-top: 14px;">No weeks match that search term. Try another query.</div>
    </section>

    <!-- Analytics & Score Improvement Ledger -->
    ${buildPerformanceChart()}
  `;

  // Attach event listeners
  app.querySelectorAll('[data-week]').forEach((btn) => {
    btn.addEventListener('click', () => start(Number(btn.dataset.week)));
  });

  document.getElementById('modeToggleStudy')?.addEventListener('click', () => setPracticeMode('study'));
  document.getElementById('modeToggleExam')?.addEventListener('click', () => setPracticeMode('exam'));

  document.getElementById('startFullTestCard')?.addEventListener('click', () => start(-1));
  document.getElementById('startRandomCard')?.addEventListener('click', () => start(-2));

  document.getElementById('startMistakeVaultCard')?.addEventListener('click', () => {
    const vCount = Object.keys(history.mistakeVault || {}).length;
    if (vCount === 0) {
      showCustomModal({
        title: 'Mistake Vault is clear!',
        body: 'You currently have zero unmastered mistakes. As you take tests, any questions you get wrong will automatically appear here until you solve them correctly twice in a row.',
        confirmText: 'Take a test',
        cancelText: 'Dismiss',
        isDanger: false,
        onConfirm: () => start(-2)
      });
      return;
    }
    start(-3);
  });

  document.getElementById('startFlashcardsCard')?.addEventListener('click', () => openFlashcards('all'));
  document.getElementById('startSurvivalCard')?.addEventListener('click', openSurvival);

  document.getElementById('startStarredCard')?.addEventListener('click', () => {
    const sCount = (history.starred || []).length;
    if (sCount === 0) {
      toast('No starred questions yet. Bookmark questions using the ★ button during quizzes or flashcards.');
      return;
    }
    start(-4);
  });

  setupWeekFilters();
  goTop();
}

// Build Performance Analytics Chart & Score History Timeline
function buildPerformanceChart() {
  const entries = Object.entries(history.weekScores || {})
    .map(([key, value]) => ({
      index: Number(key),
      label: QUIZ_MODULES[Number(key)]?.weekLabel || `Week ${key}`,
      title: QUIZ_MODULES[Number(key)]?.title || '',
      score: Number(value.score),
      total: Number(value.total)
    }))
    .filter((item) => Number.isInteger(item.index) && item.index >= 0 && item.index < QUIZ_MODULES.length && item.total > 0)
    .map((item) => ({ ...item, percent: Math.round((item.score / item.total) * 100) }))
    .sort((a, b) => a.index - b.index);

  // Score History Attempt Chips
  const attempts = history.scoreAttempts || [];
  let scoreHistoryHtml = '';

  if (attempts.length > 0) {
    const chipsHtml = attempts
      .map((att, idx) => {
        const isBetter = idx > 0 && att.percent >= attempts[idx - 1].percent;
        return `
          <div class="score-attempt-chip ${isBetter ? 'improving' : ''}">
            <span>Score ${idx + 1}:</span>
            <strong>${att.percent}%</strong>
            <span style="font-size: 0.7rem; color: var(--muted);">(${att.score}/${att.total})</span>
          </div>
        `;
      })
      .join('');

    scoreHistoryHtml = `
      <div class="score-timeline-box">
        <div class="score-timeline-title">Score progress over time</div>
        <div class="score-chips-wrap">
          ${chipsHtml}
        </div>
      </div>
    `;
  }

  if (!entries.length && !attempts.length) {
    return `
      <section class="performance-panel" aria-labelledby="performanceTitle">
        <div class="performance-head">
          <div>
            <div class="eyebrow">Your learning analytics</div>
            <h3 id="performanceTitle">Score performance</h3>
            <p>Your recorded scores will appear here as Score 1, Score 2, Score 3 to track your improvement.</p>
          </div>
        </div>
        <div class="empty-state">
          <div style="font-size: 1.5rem; margin-bottom: 8px" aria-hidden="true">↗</div>
          <strong>Your score progress starts here.</strong><br>
          Complete any module or test to see your score tracked below.
        </div>
      </section>
    `;
  }

  const average = entries.length
    ? Math.round(entries.reduce((sum, item) => sum + item.percent, 0) / entries.length)
    : 0;

  const bars = entries
    .map(
      (item) => `
        <div class="chart-row" title="${esc(item.label)}: ${item.score} out of ${item.total} (${item.percent}%)">
          <span class="chart-label">${esc(item.label)}</span>
          <div class="chart-track" role="img" aria-label="${esc(item.label)} score: ${item.percent} percent">
            <div class="chart-fill" style="width: ${item.percent}%"></div>
          </div>
          <span class="chart-value">${item.percent}%</span>
        </div>
      `
    )
    .join('');

  return `
    <section class="performance-panel" aria-labelledby="performanceTitle">
      <div class="performance-head">
        <div>
          <div class="eyebrow">Your learning analytics</div>
          <h3 id="performanceTitle">Score performance</h3>
          <p>Track your scores across modules and see your score improve attempt by attempt.</p>
        </div>
        <div class="performance-summary">
          <div class="mini-stat">
            <strong>${entries.length}/${QUIZ_MODULES.length}</strong>
            <span>Modules scored</span>
          </div>
          <div class="mini-stat">
            <strong>${average}%</strong>
            <span>Average score</span>
          </div>
        </div>
      </div>
      <div class="chart-bars">${bars}</div>
      ${scoreHistoryHtml}
    </section>
  `;
}

// Setup Filters & Search on Dashboard
function setupWeekFilters() {
  const grid = document.getElementById('weekGrid');
  const search = document.getElementById('weekSearch');
  const sort = document.getElementById('weekSort');
  const count = document.getElementById('filterCount');
  const empty = document.getElementById('filterEmpty');

  if (!grid || !search || !sort) return;

  const cards = Array.from(grid.querySelectorAll('.week-card'));

  function update() {
    const query = search.value.trim().toLowerCase();
    const ordered = [...cards];

    if (sort.value === 'name') {
      ordered.sort((a, b) =>
        a.querySelector('.week-title').textContent.localeCompare(b.querySelector('.week-title').textContent, undefined, { numeric: true })
      );
    } else if (sort.value === 'best') {
      ordered.sort((a, b) => {
        const sa = history.weekScores[a.dataset.week];
        const sb = history.weekScores[b.dataset.week];
        const pa = sa && sa.total ? sa.score / sa.total : -1;
        const pb = sb && sb.total ? sb.score / sb.total : -1;
        return pb - pa;
      });
    }

    ordered.forEach((c) => grid.appendChild(c));

    let visible = 0;
    cards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      const matches = text.includes(query);
      card.hidden = !matches;
      if (matches) visible++;
    });

    count.textContent = `${visible} of ${cards.length} tests`;
    empty.classList.toggle('hidden', visible !== 0);
  }

  search.addEventListener('input', update);
  sort.addEventListener('change', update);
}

// ============================================================================
// ============================================================================
// Screen 2: Active Test Execution
// ============================================================================

function prepareQuestions(weekIdx) {
  let list = [];

  if (weekIdx === -1) {
    // Full Test (All 210 questions)
    list = [...QUIZ_QUESTIONS];
  } else if (weekIdx === -2) {
    // Random Test (20 questions)
    list = [...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 20);
  } else if (weekIdx === -3) {
    // Mistake Vault (Only questions you got wrong)
    const vaultIds = Object.keys(history.mistakeVault || {});
    list = QUIZ_QUESTIONS.filter((q) => vaultIds.includes(q.id));
  } else if (weekIdx === -4) {
    // Starred Questions
    const starIds = history.starred || [];
    list = QUIZ_QUESTIONS.filter((q) => starIds.includes(q.id));
  } else {
    // Module Test
    const mod = QUIZ_MODULES[weekIdx];
    list = QUIZ_QUESTIONS.filter((q) => q.moduleId === mod.id);
  }

  return list;
}

function start(weekIdx) {
  selectedWeek = weekIdx;
  cur = prepareQuestions(weekIdx);
  answers = {};
  verifiedMsq = {};
  currentQuestion = 0;
  mode = 'quiz';
  startedAt = Date.now();

  if (weekIdx === -1) {
    title = `Full Test (All ${cur.length} Questions)`;
  } else if (weekIdx === -2) {
    title = `Random Sprint (${cur.length} Questions)`;
  } else if (weekIdx === -3) {
    title = `Mistake Vault (${cur.length} Questions to Fix)`;
  } else if (weekIdx === -4) {
    title = `Starred Vault (${cur.length} Bookmarks)`;
  } else {
    const mod = QUIZ_MODULES[weekIdx];
    title = `${mod.weekLabel}: ${mod.title}`;
  }

  renderQuiz();
  goTop();
}

function renderQuiz() {
  const answeredCount = Object.keys(answers).filter((k) => answers[k] && answers[k].length > 0).length;
  const percent = cur.length ? (answeredCount / cur.length) * 100 : 0;
  const q = cur[currentQuestion];
  if (!q) return;

  const currentSelection = answers[currentQuestion] || [];
  const isAnswered = currentSelection.length > 0;
  const isStudyMode = history.practiceMode === 'study';

  const isMsq = q.type === 'msq';
  const typeBadgeText = isMsq
    ? 'Multiple Choice (Select all that apply)'
    : q.type === 'boolean'
    ? 'True / False'
    : 'Single Choice';

  // Instant Feedback evaluation
  let isEvaluated = false;
  let isCorrectAnswer = false;

  if (isStudyMode) {
    if (!isMsq && isAnswered) {
      isEvaluated = true;
      isCorrectAnswer = arraysEqual(currentSelection, q.correctKeys);
    } else if (isMsq && verifiedMsq[currentQuestion]) {
      isEvaluated = true;
      isCorrectAnswer = arraysEqual(currentSelection, q.correctKeys);
    }
  }

  const choicesHtml = q.options
    .map((option) => {
      const isChecked = currentSelection.includes(option.key);
      const inputType = isMsq ? 'checkbox' : 'radio';

      let feedbackClass = '';
      if (isEvaluated) {
        if (q.correctKeys.includes(option.key)) {
          feedbackClass = 'choice-correct';
        } else if (isChecked) {
          feedbackClass = 'choice-wrong';
        }
      }

      return `
        <label class="choice ${feedbackClass}" for="opt_${option.key}">
          <input type="${inputType}" id="opt_${option.key}" name="quiz_opt" value="${option.key}" ${isChecked ? 'checked' : ''} ${isEvaluated && !isMsq ? 'disabled' : ''}>
          <span class="choice-letter">${option.key.toUpperCase()}</span>
          <span class="choice-copy">${esc(option.text)}</span>
        </label>
      `;
    })
    .join('');

  const mapButtonsHtml = cur
    .map((_, idx) => {
      const answered = answers[idx] && answers[idx].length > 0;
      const isCurrent = idx === currentQuestion;
      return `
        <button class="map-btn ${answered ? 'answered' : ''} ${isCurrent ? 'current' : ''}" type="button" data-q="${idx}" aria-label="Go to question ${idx + 1}" ${isCurrent ? 'aria-current="step"' : ''}>
          ${idx + 1}
        </button>
      `;
    })
    .join('');

  app.innerHTML = `
    <!-- Top Progress Bar -->
    <div class="quiz-top">
      <div class="quiz-top-inner">
        <div>
          <div class="quiz-title">${esc(title)}</div>
          <div class="quiz-subtitle">Question ${currentQuestion + 1} of ${cur.length} · ${answeredCount} answered</div>
        </div>
        
        <div style="display: flex; align-items: center; gap: 8px;">
          <!-- Feedback Mode Switcher -->
          <div class="mode-indicator-pill ${isStudyMode ? 'instant' : ''}" id="toggleFeedbackQuiz" title="Click to toggle feedback style">
            <span class="mode-dot"></span>
            <span>${isStudyMode ? '⚡ Instant Feedback' : '📝 Exam Mode'}</span>
          </div>

          <!-- Sleek Custom Exit Button -->
          <button class="btn-exit" id="quitBtn" type="button" aria-label="Exit current test">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            <span>Exit test</span>
          </button>
        </div>
      </div>

      <div class="quiz-progress" role="progressbar" aria-label="Questions answered" aria-valuemin="0" aria-valuemax="${cur.length}" aria-valuenow="${answeredCount}">
        <span style="width: ${percent}%"></span>
      </div>
    </div>

    <!-- 2-Column Quiz Layout -->
    <div class="quiz-layout">
      
      <!-- Left: Active Question Card -->
      <section class="quiz-main" aria-label="Current question">
        <article class="question-card">
          <div class="question-meta" style="display: flex; align-items: center; justify-content: space-between;">
            <div>
              <span>${esc(q.weekLabel)}</span>
              <span class="${isAnswered ? 'status-saved' : ''}">${isAnswered ? 'Answer saved' : 'Not answered'}</span>
            </div>
            <!-- Star Bookmark Button -->
            <button class="btn-star-bookmark ${isStarred(q.id) ? 'active' : ''}" type="button" id="starQuestionBtn" data-star-id="${q.id}" title="${isStarred(q.id) ? 'Bookmarked' : 'Bookmark this question'}">
              <span class="star-icon">★</span>
              <span>${isStarred(q.id) ? 'Starred' : 'Star'}</span>
            </button>
          </div>

          <span class="question-type-badge">${typeBadgeText}</span>
          <h3>${currentQuestion + 1}. ${esc(q.questionText)}</h3>
          
          <div class="choice-list" role="group" aria-label="Answer options">
            ${choicesHtml}
          </div>

          ${
            isStudyMode && isMsq && !isEvaluated
              ? `<button class="btn btn-primary" id="checkMsqBtn" type="button" style="margin-top: 14px;">Check Answer ✓</button>`
              : ''
          }

          ${
            isEvaluated
              ? `
                <div class="instant-solution-card ${isCorrectAnswer ? 'correct' : 'wrong'}">
                  <div class="instant-solution-header">
                    <strong>${isCorrectAnswer ? '✓ Correct! Well done' : '✕ Incorrect'}</strong>
                    <span>Correct Answer: ${q.correctKeys.join(', ').toUpperCase()}</span>
                  </div>
                  <p class="instant-solution-text">${esc(q.solution)}</p>
                </div>
              `
              : ''
          }
        </article>

        <div class="quiz-actions">
          <button class="btn btn-soft" type="button" id="prevBtn" ${currentQuestion === 0 ? 'disabled' : ''}>
            ← Previous
          </button>
          <div class="right">
            ${
              currentQuestion < cur.length - 1
                ? '<button class="btn btn-primary" type="button" id="nextBtn">Next question →</button>'
                : '<button class="btn btn-primary" type="button" id="finishReviewBtn">Finish & review</button>'
            }
          </div>
        </div>
      </section>

      <!-- Right: Sticky Navigator Sidebar -->
      <aside class="quiz-sidebar" aria-label="Question Navigator">
        <div class="sidebar-label">Question navigator</div>
        <div class="question-map">${mapButtonsHtml}</div>
        <div class="sidebar-note">
          <strong>Green tint</strong> = answered · <strong>outlined</strong> = current
        </div>
        <button class="btn btn-primary" style="width: 100%; justify-content: center;" type="button" id="submitSidebarBtn">
          Submit test
        </button>
      </aside>

    </div>
  `;

  // Option click listeners
  app.querySelectorAll('input[name="quiz_opt"]').forEach((input) => {
    input.addEventListener('change', () => {
      const key = input.value;
      if (isMsq) {
        let selected = answers[currentQuestion] || [];
        if (input.checked) {
          if (!selected.includes(key)) selected = [...selected, key].sort();
        } else {
          selected = selected.filter((k) => k !== key);
        }
        answers[currentQuestion] = selected;
        verifiedMsq[currentQuestion] = false;
      } else {
        answers[currentQuestion] = [key];
        if (isStudyMode) {
          const isCorrect = arraysEqual([key], q.correctKeys);
          recordAnswerOutcome(q.id, isCorrect);
        }
      }
      renderQuizKeepPosition();
    });
  });

  // MSQ Check Answer Button
  document.getElementById('checkMsqBtn')?.addEventListener('click', () => {
    verifiedMsq[currentQuestion] = true;
    const isCorrect = arraysEqual(answers[currentQuestion] || [], q.correctKeys);
    recordAnswerOutcome(q.id, isCorrect);
    renderQuizKeepPosition();
  });

  // Star Question Button
  document.getElementById('starQuestionBtn')?.addEventListener('click', () => {
    toggleStar(q.id);
    renderQuizKeepPosition();
  });

  // Feedback Mode Toggle
  document.getElementById('toggleFeedbackQuiz')?.addEventListener('click', () => {
    setPracticeMode(history.practiceMode === 'study' ? 'exam' : 'study');
  });

  // Jump button listeners
  app.querySelectorAll('[data-q]').forEach((el) => {
    el.addEventListener('click', () => {
      currentQuestion = Number(el.dataset.q);
      renderQuiz();
      goTop();
    });
  });

  document.getElementById('prevBtn')?.addEventListener('click', () => {
    if (currentQuestion > 0) {
      currentQuestion--;
      renderQuiz();
      goTop();
    }
  });

  document.getElementById('nextBtn')?.addEventListener('click', () => {
    if (currentQuestion < cur.length - 1) {
      currentQuestion++;
      renderQuiz();
      goTop();
    }
  });

  document.getElementById('finishReviewBtn')?.addEventListener('click', confirmSubmit);
  document.getElementById('submitSidebarBtn')?.addEventListener('click', confirmSubmit);
  document.getElementById('quitBtn')?.addEventListener('click', promptExitTest);
}

function renderQuizKeepPosition() {
  const scrollY = window.scrollY;
  renderQuiz();
  window.scrollTo(0, scrollY);
}

function confirmSubmit() {
  const answeredCount = Object.keys(answers).filter((k) => answers[k] && answers[k].length > 0).length;
  const unanswered = cur.length - answeredCount;
  const context = `${title || 'Active Test'} · ${answeredCount} of ${cur.length} answered`;

  if (unanswered > 0) {
    showCustomModal({
      title: 'Submit with unanswered questions?',
      contextText: context,
      body: `You still have ${unanswered} question${unanswered === 1 ? '' : 's'} without an answer. Submit anyway to grade your completed responses?`,
      confirmText: 'Submit anyway',
      cancelText: 'Keep Answering',
      isDanger: true,
      onConfirm: showResults
    });
  } else {
    showCustomModal({
      title: 'Submit your completed test?',
      contextText: context,
      body: `All ${cur.length} questions are answered! Submit now to view your score, mastery summary, and in-depth question solutions.`,
      confirmText: 'Submit test',
      cancelText: 'Review answers',
      isDanger: false,
      onConfirm: showResults
    });
  }
}

// ============================================================================
// Screen 3: Results & Detailed Review Screen
// ============================================================================

function showResults() {
  mode = 'results';

  let score = 0;
  const resultsData = [];

  cur.forEach((q, idx) => {
    const userKeys = (answers[idx] || []).slice().sort();
    const correctKeys = (q.correctKeys || []).slice().sort();

    const isMatch = arraysEqual(userKeys, correctKeys);
    const isSkipped = userKeys.length === 0;

    if (isMatch) score++;

    // Feed outcome into Mistake Vault!
    recordAnswerOutcome(q.id, isMatch);

    resultsData.push({
      question: q,
      userKeys,
      correctKeys,
      isMatch,
      isSkipped
    });
  });

  const total = cur.length;
  const pct = total ? Math.round((score / total) * 100) : 0;

  // Update history & score attempts tracker
  history.completed++;
  history.attempts++;
  history.answered += Object.keys(answers).length;
  history.best = Math.max(history.best, pct);

  history.scoreAttempts = history.scoreAttempts || [];
  history.scoreAttempts.push({
    attemptNumber: history.scoreAttempts.length + 1,
    testTitle: title,
    score,
    total,
    percent: pct,
    timestamp: Date.now()
  });

  if (selectedWeek >= 0) {
    const old = history.weekScores[selectedWeek];
    if (!old || score / total > old.score / old.total) {
      history.weekScores[selectedWeek] = { score, total };
    }
  }

  saveHistory();

  const duration = Math.max(0, Math.round((Date.now() - startedAt) / 1000));
  const timeText = `${Math.floor(duration / 60)}m ${(duration % 60).toString().padStart(2, '0')}s`;

  let message = 'Every attempt builds retention. Review the solutions below and drill missed questions in the Mistake Vault.';
  if (pct >= 85) {
    message = 'Excellent work — you know this material thoroughly.';
  } else if (pct >= 65) {
    message = 'Good progress. Review the missed questions below to solidify your understanding.';
  }

  // Answer Review cards
  const reviewCardsHtml = resultsData
    .map((item, idx) => {
      const q = item.question;
      const isOk = item.isMatch;
      const statusText = isOk ? '✓ Correct' : item.isSkipped ? '— Skipped' : '✕ Incorrect';
      const statusClass = isOk ? 'answer-correct' : item.isSkipped ? '' : 'answer-wrong';

      const formatAnswer = (keys) => {
        if (!keys || keys.length === 0) return 'Not answered';
        return keys
          .map((k) => {
            const opt = q.options.find((o) => o.key === k);
            return opt ? `${k.toUpperCase()}. ${opt.text}` : k.toUpperCase();
          })
          .join('; ');
      };

      const userText = formatAnswer(item.userKeys);
      const correctText = formatAnswer(item.correctKeys);

      return `
        <article class="review-card">
          <div class="question-meta" style="display: flex; align-items: center; justify-content: space-between;">
            <div>
              <span>Question ${idx + 1} · ${esc(q.weekLabel)}</span>
              <span class="${statusClass}">${statusText}</span>
            </div>
            <button class="btn-star-bookmark ${isStarred(q.id) ? 'active' : ''}" type="button" data-star-result-id="${q.id}" title="${isStarred(q.id) ? 'Starred' : 'Bookmark question'}">
              <span class="star-icon">★</span>
              <span>${isStarred(q.id) ? 'Starred' : 'Star'}</span>
            </button>
          </div>
          <h3>${esc(q.questionText)}</h3>
          
          <div class="answer-line ${isOk ? 'answer-correct' : 'answer-wrong'}">
            <strong>Your answer:</strong> ${esc(userText)}
          </div>

          ${
            !isOk
              ? `<div class="answer-line answer-correct">
                  <strong>Correct answer:</strong> ${esc(correctText)}
                </div>`
              : ''
          }

          ${
            q.solution
              ? `<div class="solution-box">
                  <strong>Detailed Solution:</strong> ${esc(q.solution)}
                </div>`
              : ''
          }
        </article>
      `;
    })
    .join('');

  app.innerHTML = `
    <!-- Result Performance Banner -->
    <section class="result-hero">
      <div class="eyebrow">Test complete</div>
      <div class="result-score">${pct}%</div>
      <h2 class="result-ratio">${score} out of ${total} correct</h2>
      <p>${message}</p>
    </section>

    <!-- 3 KPI Metric Cards -->
    <div class="result-stats">
      <div class="result-stat">
        <strong style="color: var(--correct);">${score}</strong>
        <span>Correct answers</span>
      </div>
      <div class="result-stat">
        <strong style="color: var(--wrong);">${total - score}</strong>
        <span>To review</span>
      </div>
      <div class="result-stat">
        <strong>${timeText}</strong>
        <span>Time taken</span>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="hero-actions" style="margin-bottom: 30px;">
      <button class="btn btn-primary" id="retryBtn" type="button">Try again ↻</button>
      <button class="btn btn-soft" id="homeResultsBtn" type="button">Back to dashboard</button>
      <button class="btn btn-soft" id="printBtn" type="button">Print results</button>
    </div>

    <!-- Answer Review List -->
    <div class="section-head">
      <div>
        <div class="eyebrow">Learn from every attempt</div>
        <h2>Answer review</h2>
        <p>Incorrect and skipped questions include the correct answer and verified solution.</p>
      </div>
    </div>

    ${reviewCardsHtml}
  `;

  document.getElementById('retryBtn')?.addEventListener('click', () => start(selectedWeek));
  document.getElementById('homeResultsBtn')?.addEventListener('click', home);
  document.getElementById('printBtn')?.addEventListener('click', () => window.print());

  app.querySelectorAll('[data-star-result-id]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const qid = btn.dataset.starResultId;
      toggleStar(qid);
      const active = isStarred(qid);
      btn.classList.toggle('active', active);
      btn.querySelector('span:last-child').textContent = active ? 'Starred' : 'Star';
    });
  });

  goTop();
}

// ============================================================================
// Screen 4: Rapid Flashcard / "Review" Mode
// ============================================================================

function openFlashcards(deckId = 'all') {
  flashcardDeck = deckId;
  flashcardIdx = 0;
  flashcardRevealed = false;

  if (deckId === 'all') {
    flashcardsList = [...QUIZ_QUESTIONS];
  } else if (deckId === 'mistakes') {
    const vaultIds = Object.keys(history.mistakeVault || {});
    flashcardsList = QUIZ_QUESTIONS.filter((q) => vaultIds.includes(q.id));
  } else if (deckId === 'starred') {
    const starIds = history.starred || [];
    flashcardsList = QUIZ_QUESTIONS.filter((q) => starIds.includes(q.id));
  } else {
    flashcardsList = QUIZ_QUESTIONS.filter((q) => q.moduleId === deckId);
  }

  if (flashcardsList.length === 0) {
    if (deckId === 'mistakes') {
      toast('Mistake Vault is empty! No mistakes to review right now.');
    } else if (deckId === 'starred') {
      toast('No starred questions yet. Bookmark questions using the ★ button first.');
    } else {
      toast('No questions found in this deck.');
    }
    return;
  }

  mode = 'flashcards';
  renderFlashcards();
  goTop();
}

function renderFlashcards() {
  if (flashcardIdx >= flashcardsList.length) flashcardIdx = 0;
  if (flashcardIdx < 0) flashcardIdx = flashcardsList.length - 1;
  const q = flashcardsList[flashcardIdx];
  if (!q) return;

  const deckOptionsHtml = [
    { id: 'all', label: `All Questions (${QUIZ_QUESTIONS.length})` },
    { id: 'mistakes', label: `Mistake Vault (${Object.keys(history.mistakeVault || {}).length})` },
    { id: 'starred', label: `Starred (${(history.starred || []).length})` },
    ...QUIZ_MODULES.map((m) => ({ id: m.id, label: `${m.weekLabel} (${m.questionCount})` }))
  ].map((d) => `<option value="${d.id}" ${d.id === flashcardDeck ? 'selected' : ''}>${esc(d.label)}</option>`).join('');

  const correctKeys = q.correctKeys || [];
  const optionsHtml = q.options.map((opt) => {
    const isCorrect = correctKeys.includes(opt.key);
    const revealedClass = flashcardRevealed && isCorrect ? 'revealed-correct' : '';
    return `
      <div class="flashcard-opt-item ${revealedClass}">
        <strong>${opt.key.toUpperCase()}</strong>
        <span>${esc(opt.text)}</span>
        ${flashcardRevealed && isCorrect ? '<span style="margin-left: auto;">✓</span>' : ''}
      </div>
    `;
  }).join('');

  app.innerHTML = `
    <div class="flashcard-wrap">
      <div class="flashcard-topbar">
        <button class="btn-exit" id="exitFlashcardsBtn" type="button">
          ← Dashboard
        </button>
        <div style="display: flex; align-items: center; gap: 8px;">
          <select class="flashcard-deck-select" id="flashcardDeckSelect" aria-label="Select Flashcard Deck">
            ${deckOptionsHtml}
          </select>
          <button class="btn-star-bookmark ${isStarred(q.id) ? 'active' : ''}" type="button" id="starFlashcardBtn" data-star-id="${q.id}">
            <span class="star-icon">★</span>
            <span>${isStarred(q.id) ? 'Starred' : 'Star'}</span>
          </button>
        </div>
      </div>

      <div class="quiz-progress" role="progressbar" aria-valuenow="${flashcardIdx + 1}" aria-valuemin="1" aria-valuemax="${flashcardsList.length}">
        <span style="width: ${((flashcardIdx + 1) / flashcardsList.length) * 100}%"></span>
      </div>

      <div class="flashcard-card" id="flashcardCard" tabindex="0" role="button" aria-label="Flashcard. Tap or press space to reveal answer.">
        <div>
          <div class="question-meta">
            <span>${esc(q.weekLabel)} · Card ${flashcardIdx + 1} of ${flashcardsList.length}</span>
            <span class="question-type-badge">${q.type === 'msq' ? 'Multi-Select' : q.type === 'boolean' ? 'True / False' : 'Single Choice'}</span>
          </div>
          <div class="flashcard-question">${esc(q.questionText)}</div>
          <div class="flashcard-options-preview">
            ${optionsHtml}
          </div>
        </div>

        ${
          flashcardRevealed
            ? `
              <div class="flashcard-solution-pane">
                <div class="instant-solution-card correct" style="margin-top: 0;">
                  <div class="instant-solution-header">
                    <strong>✓ Correct Answer: ${correctKeys.join(', ').toUpperCase()}</strong>
                  </div>
                  <p class="instant-solution-text">${esc(q.solution)}</p>
                </div>
              </div>
            `
            : `
              <div class="flashcard-hint-badge">
                Tap card or press Spacebar to reveal answer ⎵
              </div>
            `
        }
      </div>

      <div class="flashcard-controls">
        <button class="btn btn-soft" id="prevCardBtn" type="button" ${flashcardIdx === 0 ? 'disabled' : ''}>
          ← Previous
        </button>
        <button class="btn btn-primary" id="toggleRevealBtn" type="button">
          ${flashcardRevealed ? 'Hide answer' : 'Reveal answer (Space)'}
        </button>
        <button class="btn btn-soft" id="nextCardBtn" type="button" ${flashcardIdx === flashcardsList.length - 1 ? 'disabled' : ''}>
          Next card →
        </button>
      </div>

      <div style="text-align: center; color: var(--muted); font-size: 0.76rem;">
        Shortcuts: <strong>Space</strong> to reveal · <strong>← / →</strong> to navigate · <strong>Esc</strong> to return
      </div>
    </div>
  `;

  document.getElementById('exitFlashcardsBtn')?.addEventListener('click', home);
  document.getElementById('flashcardDeckSelect')?.addEventListener('change', (e) => {
    openFlashcards(e.target.value);
  });
  document.getElementById('starFlashcardBtn')?.addEventListener('click', () => {
    toggleStar(q.id);
    renderFlashcards();
  });
  document.getElementById('flashcardCard')?.addEventListener('click', () => {
    flashcardRevealed = !flashcardRevealed;
    renderFlashcards();
  });
  document.getElementById('toggleRevealBtn')?.addEventListener('click', () => {
    flashcardRevealed = !flashcardRevealed;
    renderFlashcards();
  });
  document.getElementById('prevCardBtn')?.addEventListener('click', () => {
    if (flashcardIdx > 0) {
      flashcardIdx--;
      flashcardRevealed = false;
      renderFlashcards();
    }
  });
  document.getElementById('nextCardBtn')?.addEventListener('click', () => {
    if (flashcardIdx < flashcardsList.length - 1) {
      flashcardIdx++;
      flashcardRevealed = false;
      renderFlashcards();
    }
  });
}

// ============================================================================
// Screen 5: Survival / Streak Mode (Sudden Death)
// ============================================================================

function openSurvival() {
  survivalLives = 3;
  survivalStreak = 0;
  survivalPool = [...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5);
  survivalIdx = 0;
  survivalSelected = [];
  survivalAnswered = false;
  survivalIsCorrect = false;
  mode = 'survival';
  renderSurvival();
  goTop();
}

function renderSurvival() {
  if (survivalIdx >= survivalPool.length) {
    survivalPool = [...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5);
    survivalIdx = 0;
  }
  const q = survivalPool[survivalIdx];
  if (!q) return;

  const heartsHtml = '❤️ '.repeat(Math.max(0, survivalLives)) + '💔 '.repeat(Math.max(0, 3 - survivalLives));
  const isMsq = q.type === 'msq';

  if (survivalLives <= 0) {
    app.innerHTML = `
      <div class="survival-wrap">
        <div class="game-over-panel">
          <div style="font-size: 3rem; margin-bottom: 8px;">💥</div>
          <div class="game-over-title">Sudden Death! Run Over</div>
          <p style="color: var(--muted); margin-bottom: 24px;">
            One slip broke the streak. The sudden death pressure trains razor-sharp focus for tricky exam phrasing.
          </p>
          <div class="result-stats" style="margin-bottom: 28px;">
            <div class="result-stat">
              <strong style="color: #ea580c;">${survivalStreak}</strong>
              <span>Streak Achieved</span>
            </div>
            <div class="result-stat">
              <strong style="color: var(--accent);">${history.bestStreak || 0}</strong>
              <span>All-Time Record</span>
            </div>
          </div>
          <div class="hero-actions" style="justify-content: center;">
            <button class="btn btn-primary" id="retrySurvivalBtn" type="button">Try again ↻</button>
            <button class="btn btn-soft" id="exitSurvivalHomeBtn" type="button">Dashboard</button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('retrySurvivalBtn')?.addEventListener('click', openSurvival);
    document.getElementById('exitSurvivalHomeBtn')?.addEventListener('click', home);
    return;
  }

  const choicesHtml = q.options.map((opt) => {
    let extraClass = '';
    const isChecked = survivalSelected.includes(opt.key);
    if (survivalAnswered) {
      if (q.correctKeys.includes(opt.key)) {
        extraClass = 'choice-correct';
      } else if (isChecked) {
        extraClass = 'choice-wrong';
      }
    }

    return `
      <label class="choice ${extraClass}" for="surv_opt_${opt.key}">
        <input type="${isMsq ? 'checkbox' : 'radio'}" id="surv_opt_${opt.key}" name="surv_opt" value="${opt.key}" ${isChecked ? 'checked' : ''} ${survivalAnswered ? 'disabled' : ''}>
        <span class="choice-letter">${opt.key.toUpperCase()}</span>
        <span class="choice-copy">${esc(opt.text)}</span>
      </label>
    `;
  }).join('');

  app.innerHTML = `
    <div class="survival-wrap">
      <div class="survival-hud">
        <button class="btn-exit" id="exitSurvivalBtn" type="button">
          Exit Run
        </button>
        <div class="lives-box" aria-label="${survivalLives} lives remaining">
          ${heartsHtml}
        </div>
        <div style="display: flex; align-items: center; gap: 14px;">
          <div class="streak-box">
            🔥 <span>${survivalStreak}</span>
          </div>
          <span class="best-streak-tag">Record: ${history.bestStreak || 0}</span>
        </div>
      </div>

      <article class="question-card">
        <div class="question-meta">
          <span>${esc(q.weekLabel)} · Sudden Death</span>
          <span class="question-type-badge">${isMsq ? 'Multi-Select' : q.type === 'boolean' ? 'True / False' : 'Single Choice'}</span>
        </div>
        <h3>${esc(q.questionText)}</h3>
        <div class="choice-list" role="group">
          ${choicesHtml}
        </div>

        ${
          !survivalAnswered && isMsq
            ? `<button class="btn btn-primary" id="submitMsqSurvivalBtn" style="margin-top: 14px;" type="button">Submit Answer</button>`
            : ''
        }

        ${
          survivalAnswered
            ? `
              <div class="instant-solution-card ${survivalIsCorrect ? 'correct' : 'wrong'}">
                <div class="instant-solution-header">
                  <strong>${survivalIsCorrect ? '✓ Streak safe! +1' : '💔 Life lost!'}</strong>
                  <span>Correct: ${q.correctKeys.join(', ').toUpperCase()}</span>
                </div>
                <p class="instant-solution-text">${esc(q.solution)}</p>
              </div>
              <div style="margin-top: 18px; text-align: right;">
                <button class="btn btn-primary" id="nextSurvivalBtn" type="button">
                  Next Challenge →
                </button>
              </div>
            `
            : ''
        }
      </article>
    </div>
  `;

  document.getElementById('exitSurvivalBtn')?.addEventListener('click', () => {
    showCustomModal({
      title: 'End survival run?',
      body: `Your current streak of ${survivalStreak} will be finalized. Return to dashboard?`,
      confirmText: 'End Run',
      cancelText: 'Stay in Run',
      isDanger: true,
      onConfirm: home
    });
  });

  if (!survivalAnswered) {
    app.querySelectorAll('input[name="surv_opt"]').forEach((inp) => {
      inp.addEventListener('change', () => {
        const val = inp.value;
        if (isMsq) {
          if (inp.checked) {
            if (!survivalSelected.includes(val)) survivalSelected.push(val);
          } else {
            survivalSelected = survivalSelected.filter((v) => v !== val);
          }
        } else {
          survivalSelected = [val];
          evaluateSurvival();
        }
      });
    });

    document.getElementById('submitMsqSurvivalBtn')?.addEventListener('click', () => {
      evaluateSurvival();
    });
  } else {
    document.getElementById('nextSurvivalBtn')?.addEventListener('click', () => {
      survivalIdx++;
      survivalSelected = [];
      survivalAnswered = false;
      renderSurvival();
      goTop();
    });
  }
}

function evaluateSurvival() {
  const q = survivalPool[survivalIdx];
  if (!q) return;

  survivalAnswered = true;
  survivalIsCorrect = arraysEqual(survivalSelected, q.correctKeys);
  recordAnswerOutcome(q.id, survivalIsCorrect);

  if (survivalIsCorrect) {
    survivalStreak++;
    if (survivalStreak > (history.bestStreak || 0)) {
      history.bestStreak = survivalStreak;
      saveHistory();
    }
  } else {
    survivalLives--;
  }

  renderSurvival();
}

// ============================================================================
// Global Controls & Keyboard Shortcuts
// ============================================================================

// Brand and Home click handlers
document.getElementById('homeBtn')?.addEventListener('click', () => {
  if (mode === 'quiz') {
    promptExitTest();
  } else if (mode === 'survival') {
    showCustomModal({
      title: 'End survival run?',
      body: 'Your current streak will end. Return to dashboard?',
      confirmText: 'End Run',
      cancelText: 'Stay',
      isDanger: true,
      onConfirm: home
    });
  } else {
    home();
  }
});

document.getElementById('homeBrandBtn')?.addEventListener('click', () => {
  if (mode === 'quiz') {
    promptExitTest();
  } else if (mode === 'survival') {
    showCustomModal({
      title: 'End survival run?',
      body: 'Your current streak will end. Return to dashboard?',
      confirmText: 'End Run',
      cancelText: 'Stay',
      isDanger: true,
      onConfirm: home
    });
  } else {
    home();
  }
});

// Theme Management
const themeBtn = document.getElementById('themeBtn');

function setTheme(theme, persist = true) {
  const activeTheme = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.dataset.theme = activeTheme;
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', activeTheme === 'dark' ? '#141a17' : '#f5f3ee');
  }
  if (themeBtn) {
    themeBtn.textContent = activeTheme === 'dark' ? '☀' : '☾';
    themeBtn.setAttribute('aria-label', activeTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }
  if (persist) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, activeTheme);
    } catch (e) {}
  }
}

themeBtn?.addEventListener('click', () => {
  const current = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
  setTheme(current === 'dark' ? 'light' : 'dark', true);
});

// Restore saved theme (defaults to light mode; users can toggle to dark manually)
try {
  // Clear any legacy auto-detected theme key from previous versions
  localStorage.removeItem('iot-study-studio-theme');
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme === 'dark' || savedTheme === 'light') {
    setTheme(savedTheme, false);
  } else {
    setTheme('light', false);
  }
} catch (e) {
  setTheme('light', false);
}

// Global Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('customModal');
    if (modal && modal.classList.contains('open')) {
      hideCustomModal();
      return;
    }
    if (mode === 'quiz') {
      promptExitTest();
    } else if (mode === 'flashcards' || mode === 'results') {
      home();
    }
    return;
  }

  // Flashcard Space & Arrow Keys
  if (mode === 'flashcards' && !e.altKey && !e.ctrlKey && !e.metaKey) {
    if (e.code === 'Space') {
      e.preventDefault();
      flashcardRevealed = !flashcardRevealed;
      renderFlashcards();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      if (flashcardIdx < flashcardsList.length - 1) {
        flashcardIdx++;
        flashcardRevealed = false;
        renderFlashcards();
      }
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (flashcardIdx > 0) {
        flashcardIdx--;
        flashcardRevealed = false;
        renderFlashcards();
      }
    }
    return;
  }

  // Quiz Mode Arrow Keys
  if (mode === 'quiz' && !e.altKey && !e.ctrlKey && !e.metaKey) {
    if (e.key === 'ArrowRight' && currentQuestion < cur.length - 1) {
      currentQuestion++;
      renderQuiz();
    } else if (e.key === 'ArrowLeft' && currentQuestion > 0) {
      currentQuestion--;
      renderQuiz();
    }
  }
});

// Initial boot
home();
