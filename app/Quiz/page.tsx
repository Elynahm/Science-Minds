"use client";

import { useState } from "react";

const questions = [
  {
    q: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    q: "Which is a gas?",
    options: ["Iron", "Water", "Oxygen", "Gold"],
    answer: "Oxygen",
  },
];

export default function QuizPage() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  function handleAnswer(option: string) {
    if (option === questions[index].answer) {
      setScore(score + 1);
    }

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setDone(true);
    }
  }

  if (done) {
    return (
      <main style={styles.container}>
        <h1>Quiz Finished 🎉</h1>
        <p>Your Score: {score} / {questions.length}</p>
      </main>
    );
  }

  return (
    <main style={styles.container}>
      <h1>🧪 Science Quiz</h1>

      <h2>{questions[index].q}</h2>

      <div style={styles.options}>
        {questions[index].options.map((opt) => (
          <button key={opt} onClick={() => handleAnswer(opt)} style={styles.btn}>
            {opt}
          </button>
        ))}
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: "40px",
    fontFamily: "Arial",
    textAlign: "center",
  },
  options: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "20px",
  },
  btn: {
    padding: "10px",
    cursor: "pointer",
  },
};