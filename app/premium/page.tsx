import type { CSSProperties } from "react";

export default function PremiumPage() {
  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <h1>💎 Premium Membership</h1>

        <p>
          Unlock premium lessons, live classes, advanced quizzes,
          downloadable notes, and exclusive learning resources.
        </p>

        <button style={styles.button}>
          Upgrade to Premium
        </button>
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

  button: {
    marginTop: "20px",
    padding: "12px 24px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};