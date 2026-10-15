# Internet of Things (IoT) — Study Studio & Quiz Platform

A self-contained Single-Page Application (SPA) designed to help students and engineers practice, review, and master NPTEL Introduction to IoT assignments across Weeks 0 through 12 (14 structured modules, 210 verified questions).

Built with zero external frameworks or backend databases: just pure semantic HTML5, custom CSS, and Vanilla JavaScript with `localStorage` persistence.

---

## Key Features

- **210 Authentic Assignment Questions**: Verbatim coverage of Weeks 0 to 12, supporting single-choice (MCQ), multiple-select (MSQ), and True/False questions with comprehensive technical explanations.
- **The Mistake Vault**: Automatically captures questions you miss or skip. A question remains in your vault until you solve it correctly twice in a row.
- **Rapid Flashcard Mode**: Practice fast mental recall without multiple-choice fatigue. Press Space to flip and reveal verified answers and solutions, with arrow keys to navigate.
- **Survival Mode (Sudden Death)**: Random questions keep coming with a 3-lives challenge. One wrong answer costs a life. Tracks and saves your all-time highest unbroken streak.
- **Starred Questions Vault**: Bookmark tricky formulas, calculation problems, or confusing concepts with the star button for focused last-minute revision.
- **Dual Grading Modes**:
  - **Instant Feedback (Study Mode)**: Answers highlight immediately in green or red, with the solution expanding right below the question.
  - **Grade at End (Exam Mode)**: Keeps answers private until final submission to simulate real exam conditions.
- **Score Progress Ledger**: Tracks your attempt history (Score 1, Score 2, Score 3...) with percentage scores and module-by-module mastery bars.
- **Zero Backend Required**: All attempts, test progress, themes, and bookmarks persist directly in your browser disk via `localStorage`.
- **Print Friendly**: Dedicated print stylesheets for generating clean offline study sheets or review notes.
- **Dark & Light Modes**: High-contrast, tailored color schemes with automated system preference detection.

---

## Quick Start

You do not need to install complex build tools or compilers.

### Option 1: Using any static server (Recommended)

```bash
# Run with npx (Node.js)
npx serve .
```

Then open `http://localhost:3000` (or the port shown in your terminal) in your browser.

### Option 2: Direct file launch

Open `index.html` directly in any modern web browser (Google Chrome, Safari, Firefox, or Edge).

---

## Project Structure

```
.
├── index.html       # Semantic HTML5 shell and custom modal dialogs
├── styles.css       # Complete design system, responsive grids, and print styles
├── app.js           # SPA application logic, state, and test runner
├── quiz-data.js     # 14 modules and 210 structured question definitions
├── package.json     # Optional npm runner scripts
└── README.md        # Documentation and usage guide
```

---

## Keyboard Shortcuts

| Key | Context | Action |
| :--- | :--- | :--- |
| `Space` | Flashcard Mode | Flip card to reveal/hide solution |
| `→` (Right Arrow) | Quiz / Flashcards | Move to next question or card |
| `←` (Left Arrow) | Quiz / Flashcards | Move to previous question or card |
| `Esc` | Anywhere | Close active modal or prompt exit |

---

## License

MIT
