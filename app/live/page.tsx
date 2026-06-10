"use client";

import { useState } from "react";

type Message = {
  user: string;
  text: string;
};

export default function LivePage() {
  const sessions = [
    {
      id: "math",
      title: "Algebra Mastery",
      subject: "Mathematics",
      status: "LIVE",
    },
    {
      id: "physics",
      title: "Electricity & Circuits",
      subject: "Physics",
      status: "LIVE",
    },
    {
      id: "chem",
      title: "Organic Chemistry Basics",
      subject: "Chemistry",
      status: "UPCOMING",
    },
  ];

  const [activeSession, setActiveSession] = useState("math");

  const [messages, setMessages] = useState<Record<string, Message[]>>({
    math: [
      { user: "Teacher", text: "Welcome to Algebra class 📚" },
      { user: "Student", text: "Good evening sir!" },
    ],
    physics: [{ user: "Teacher", text: "Let’s learn circuits ⚡" }],
    chem: [{ user: "Teacher", text: "Chemistry starts soon 🧪" }],
  });

  const [input, setInput] = useState("");

  // ✅ QUIZ STATE (FIXED LOCATION)
  const [showQuiz, setShowQuiz] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const quiz = {
    question: "What is Newton's Second Law?",
    options: ["F = ma", "E = mc²", "V = IR", "pH = -log[H+]"],
    answer: 0,
  };

  function sendMessage() {
    if (!input.trim()) return;

    setMessages((prev) => ({
      ...prev,
      [activeSession]: [
        ...(prev[activeSession] || []),
        { user: "You", text: input },
      ],
    }));

    setInput("");
  }

  const currentMessages = messages[activeSession] || [];

  return (
    <main style={styles.container}>
      {/* HEADER */}
      <h1 style={styles.title}>📡 Science Minds Live Classes</h1>

      {/* QUIZ BUTTON */}
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <button
          onClick={() => setShowQuiz(true)}
          style={styles.quizButton}
        >
          🧪 Launch Live Quiz
        </button>
      </div>

      {/* LAYOUT */}
      <div style={styles.layout}>
        {/* LEFT */}
        <div style={styles.sidebar}>
          {sessions.map((s) => (
            <div
              key={s.id}
              onClick={() => setActiveSession(s.id)}
              style={{
                ...styles.sessionCard,
                border:
                  activeSession === s.id
                    ? "2px solid #d4af37"
                    : "1px solid #1e293b",
              }}
            >
              <h3>{s.title}</h3>
              <p style={{ color: "#93c5fd" }}>{s.subject}</p>
              <span
                style={{
                  color: s.status === "LIVE" ? "#d4af37" : "#94a3b8",
                  fontWeight: "bold",
                }}
              >
                {s.status}
              </span>
            </div>
          ))}
        </div>

        {/* CENTER */}
        <div style={styles.videoArea}>
          <div style={styles.videoBox}>
            🎥 Live Stream Window ({activeSession})
          </div>

          <p style={styles.note}>
            Future: real video streaming (Zoom / Firebase / YouTube Live)
          </p>
        </div>

        {/* RIGHT CHAT */}
        <div style={styles.chatBox}>
          <h3 style={{ color: "#d4af37" }}>💬 Live Chat</h3>

          <div style={styles.messages}>
            {currentMessages.map((m, i) => (
              <div key={i} style={styles.message}>
                <b style={{ color: "#93c5fd" }}>{m.user}: </b>
                {m.text}
              </div>
            ))}
          </div>

          <div style={styles.inputBox}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type message..."
              style={styles.input}
            />
            <button onClick={sendMessage} style={styles.button}>
              Send
            </button>
          </div>
        </div>
      </div>

      {/* QUIZ MODAL */}
      {showQuiz && (
        <div style={quizStyles.overlay}>
          <div style={quizStyles.box}>
            <h2>🧪 Live Quiz</h2>

            <p>{quiz.question}</p>

            {quiz.options.map((opt, i) => (
              <div
                key={i}
                onClick={() => setSelected(i)}
                style={{
                  ...quizStyles.option,
                  background:
                    selected === i ? "#d4af37" : "#1e293b",
                  color: selected === i ? "#000" : "#fff",
                }}
              >
                {opt}
              </div>
            ))}

            <button
              onClick={() => {
                if (selected === quiz.answer) {
                  setResult("Correct 🎉");
                } else {
                  setResult("Wrong ❌");
                }
              }}
              style={quizStyles.submit}
            >
              Submit
            </button>

            {result && <p>{result}</p>}

            <button
              onClick={() => setShowQuiz(false)}
              style={quizStyles.close}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

/* ================= STYLES ================= */

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: "100vh",
    padding: "20px",
    background: "linear-gradient(135deg,#02122e,#052b78,#041a45)",
    color: "white",
    fontFamily: "Arial",
  },

  title: {
    textAlign: "center",
    color: "#d4af37",
    marginBottom: "10px",
  },

  quizButton: {
    background: "#d4af37",
    border: "none",
    padding: "10px 15px",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  layout: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr 1fr",
    gap: "15px",
  },

  sidebar: {
    background: "rgba(0,0,0,0.3)",
    padding: "10px",
    borderRadius: "10px",
  },

  sessionCard: {
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "10px",
    cursor: "pointer",
    background: "rgba(255,255,255,0.05)",
  },

  videoArea: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  videoBox: {
    width: "100%",
    height: "350px",
    background: "#0f172a",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #1e293b",
  },

  note: {
    marginTop: "10px",
    fontSize: "12px",
    color: "#cbd5e1",
  },

  chatBox: {
    background: "rgba(0,0,0,0.3)",
    padding: "10px",
    borderRadius: "10px",
  },

  messages: {
    height: "300px",
    overflowY: "auto",
    marginBottom: "10px",
  },

  message: {
    marginBottom: "8px",
  },

  inputBox: {
    display: "flex",
    gap: "5px",
  },

  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "8px",
    border: "none",
  },

  button: {
    background: "#d4af37",
    border: "none",
    padding: "8px 12px",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

/* ============ QUIZ STYLES ============ */

const quizStyles: Record<string, React.CSSProperties> = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    background: "#0f172a",
    padding: "20px",
    borderRadius: "15px",
    width: "300px",
    textAlign: "center",
    border: "1px solid #d4af37",
  },

  option: {
    padding: "10px",
    marginTop: "10px",
    borderRadius: "10px",
    cursor: "pointer",
  },

  submit: {
    marginTop: "15px",
    padding: "10px",
    width: "100%",
    background: "#d4af37",
    border: "none",
    borderRadius: "10px",
    fontWeight: "bold",
  },

  close: {
    marginTop: "10px",
    background: "#ef4444",
    color: "white",
    border: "none",
    padding: "8px",
    width: "100%",
    borderRadius: "10px",
  },
};