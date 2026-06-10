import type { CSSProperties } from "react";

export default function TeacherPage() {
  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <h1>👨‍🏫 Teacher Portal</h1>

        <p>
          Manage classes, upload lessons, create quizzes,
          and interact with students.
        </p>
      </div>
    </main>
  );
}

const styles: Record<string, CSSProperties> = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },

  card: {
    maxWidth: "600px",
    padding: "30px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
};