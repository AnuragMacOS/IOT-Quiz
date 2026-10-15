# IoT Quiz & Study Studio

A static web app for practicing all 195 assignment questions from NPTEL's Introduction to Internet of Things course across Weeks 0 to 12.

No build step, framework, or database needed. Everything runs in the browser and saves progress to localStorage.

## Practice modes

- Full test: all 195 questions across every module.
- Random sprint: 20 random questions pulled from across the course.
- Mistake Vault: automatically collects questions you miss or skip. A question stays in the vault until you answer it correctly twice in a row.
- Flashcard review: shows the question, press Space to reveal the verified answer and explanation, use arrow keys to navigate.
- Survival mode: answer random questions with 3 lives. One mistake loses a life; tracks your highest unbroken streak.
- Starred questions: bookmark tricky questions during tests or flashcards for quick revision.

## Grading options

- Instant feedback (Study): options turn green or red immediately upon selection, and the explanation opens right below.
- Grade at end (Exam): selections stay neutral until final submission to simulate real exam conditions.

## Running locally

Open `index.html` directly in any web browser, or serve it locally:

```bash
# Using Node
npx serve .

# Or using Python
python3 -m http.server 3000
```

Open `http://localhost:3000` (or the port shown in your terminal).

## Files

- `index.html`: page markup and modal containers
- `styles.css`: typography and light/dark theme styles
- `app.js`: test state, scoring, and keyboard handlers
- `quiz-data.js`: questions, options, answer keys, and explanations for Weeks 0 to 12
- `package.json`: optional local dev runner script

## Keyboard controls

- `Space`: flip flashcard to reveal or hide the solution
- `→`: next question or card
- `←`: previous question or card
- `Esc`: dismiss modal or prompt exit

## License

MIT
