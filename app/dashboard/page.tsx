"use client";

import Link from "next/link";

export default function Dashboard() {
  return (
    <main style={styles.container}>
      {/* HEADER */}
      <section style={styles.header}>
        <h1 style={styles.title}>🧠 Science Minds Dashboard</h1>

        <p style={styles.subtitle}>
          Learn • Practice • Connect • Grow
        </p>
      </section>

      {/* QUICK STATS */}
      <section style={styles.stats}>
        <div style={styles.statCard}>
          <h2>50,000+</h2>
          <p>Questions</p>
        </div>

        <div style={styles.statCard}>
          <h2>500+</h2>
          <p>Lessons</p>
        </div>

        <div style={styles.statCard}>
          <h2>350+</h2>
          <p>Live Classes</p>
        </div>

        <div style={styles.statCard}>
          <h2>24/7</h2>
          <p>Community</p>
        </div>
      </section>

      {/* MAIN DASHBOARD */}
      <section style={styles.grid}>
        <Link
          href="/math"
          style={{
            ...styles.card,
            borderTop: "5px solid #800000",
          }}
        >
          <div>
            <h3>🟥 Mathematics</h3>
            <p>Algebra, Geometry, Calculus & Statistics</p>
          </div>
        </Link>

        <Link
          href="/physics"
          style={{
            ...styles.card,
            borderTop: "5px solid #4169e1",
          }}
        >
          <div>
            <h3>🔵 Physics</h3>
            <p>Mechanics, Electricity, Waves & Optics</p>
          </div>
        </Link>

        <Link
          href="/chemistry"
          style={{
            ...styles.card,
            borderTop: "5px solid #d4af37",
          }}
        >
          <div>
            <h3>🟡 Chemistry</h3>
            <p>Organic, Inorganic & Practical Chemistry</p>
          </div>
        </Link>

        <Link href="/quiz" style={styles.card}>
          <div>
            <h3>🧪 Quiz Center</h3>
            <p>Test your knowledge and track scores</p>
          </div>
        </Link>

        <Link href="/premium" style={styles.card}>
          <div>
            <h3>💎 Premium Lessons</h3>
            <p>Advanced resources and master classes</p>
          </div>
        </Link>

        <Link href="/chat" style={styles.card}>
          <div>
            <h3>💬 Bishop's Deck</h3>
            <p>Community discussions and group chats</p>
          </div>
        </Link>

        <Link href="/live" style={styles.card}>
          <div>
            <h3>📡 Live Classes</h3>
            <p>Join live science learning sessions</p>
          </div>
        </Link>

        <Link href="/faith" style={styles.card}>
          <div>
            <h3>🙏 Faith & Life</h3>
            <p>Daily reflections and life lessons</p>
          </div>
        </Link>

        <Link href="/wallet" style={styles.card}>
          <div>
            <h3>💰 Wallet</h3>
            <p>Savings, subscriptions and payments</p>
          </div>
        </Link>
      </section>

      {/* LEARNING PROGRESS */}
      <section style={styles.progressSection}>
        <h2 style={styles.sectionTitle}>🎯 Learning Progress</h2>

        <div style={styles.progressCard}>
          <p>Mathematics</p>
          <div style={styles.progressBar}>
            <div
              style={{
                ...styles.progressFill,
                width: "70%",
              }}
            />
          </div>

          <p>Physics</p>
          <div style={styles.progressBar}>
            <div
              style={{
                ...styles.progressFill,
                width: "50%",
              }}
            />
          </div>

          <p>Chemistry</p>
          <div style={styles.progressBar}>
            <div
              style={{
                ...styles.progressFill,
                width: "80%",
              }}
            />
          </div>
        </div>
      </section>

      {/* PREMIUM STATUS */}
      <section style={styles.premium}>
        <h2>💎 Premium Status</h2>

        <p>
          Upgrade to unlock mock exams, premium notes,
          masterclasses and downloadable resources.
        </p>

        <button style={styles.premiumButton}>
          Upgrade Soon
        </button>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: "100vh",
    padding: "30px",
    background:
      "linear-gradient(135deg,#02122e,#052b78,#041a45)",
    color: "white",
  },

  header: {
    textAlign: "center",
    marginBottom: "35px",
  },

  title: {
    color: "#d4af37",
    fontSize: "3rem",
  },

  subtitle: {
    color: "#e5e7eb",
  },

  stats: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(180px,1fr))",
    gap: "20px",
    marginBottom: "40px",
  },

  statCard: {
    background: "rgba(255,255,255,.08)",
    border: "1px solid #d4af37",
    borderRadius: "15px",
    padding: "20px",
    textAlign: "center",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(250px,1fr))",
    gap: "20px",
    marginBottom: "40px",
  },

  card: {
    background: "rgba(0,0,0,.35)",
    backdropFilter: "blur(10px)",
    borderRadius: "15px",
    padding: "25px",
    textDecoration: "none",
    color: "white",
    minHeight: "120px",
    boxShadow: "0 0 15px rgba(0,0,0,.2)",
  },

  progressSection: {
    marginBottom: "40px",
  },

  sectionTitle: {
    color: "#d4af37",
    marginBottom: "15px",
  },

  progressCard: {
    background: "rgba(0,0,0,.35)",
    padding: "25px",
    borderRadius: "15px",
  },

  progressBar: {
    height: "12px",
    background: "#1e293b",
    borderRadius: "20px",
    overflow: "hidden",
    marginBottom: "15px",
  },

  progressFill: {
    height: "100%",
    background: "#d4af37",
  },

  premium: {
    background: "rgba(0,0,0,.35)",
    border: "1px solid #d4af37",
    borderRadius: "15px",
    padding: "25px",
    textAlign: "center",
  },

  premiumButton: {
    marginTop: "15px",
    background: "#d4af37",
    color: "#000",
    border: "none",
    padding: "12px 24px",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};