"use client";

import { useState } from "react";

export default function FaithPage() {
  const [liveStatus] = useState("Live starting soon");

  return (
    <main style={styles.container}>
      <h1>🙏 Faith & Life Lessons</h1>

      <p style={styles.subtitle}>
        Spiritual growth • Motivation • Life guidance
      </p>

      <div style={styles.liveBox}>
        <h2>📡 Live Window</h2>
        <p>{liveStatus}</p>

        <div style={styles.videoPlaceholder}>
          🎥 Live video will appear here
        </div>
      </div>

      <div style={styles.cards}>
        <div style={styles.card}>
          <h3>Faith Talks</h3>
          <p>Weekly inspirational teachings</p>
        </div>

        <div style={styles.card}>
          <h3>Life Skills</h3>
          <p>Discipline, focus, and personal growth</p>
        </div>

        <div style={styles.card}>
          <h3>Motivation</h3>
          <p>Daily encouragement and mindset building</p>
        </div>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: "40px",
    fontFamily: "Arial",
    textAlign: "center",
    backgroundColor: "#fffaf3",
    minHeight: "100vh",
  },
  subtitle: {
    color: "#555",
    marginBottom: "20px",
  },
  liveBox: {
    margin: "20px auto",
    padding: "20px",
    maxWidth: "600px",
    borderRadius: "12px",
    border: "2px solid #d4af37",
    backgroundColor: "#fff",
  },
  videoPlaceholder: {
    marginTop: "15px",
    height: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f1f5f9",
    borderRadius: "10px",
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
    marginTop: "30px",
    maxWidth: "900px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  card: {
    padding: "15px",
    backgroundColor: "white",
    borderRadius: "10px",
    border: "1px solid #eee",
  },
};