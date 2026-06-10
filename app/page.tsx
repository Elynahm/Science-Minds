import Link from "next/link";

export default function Home() {
  const symbols = [
    "π",
    "∫",
    "√x",
    "E=mc²",
    "F=ma",
    "H₂O",
    "CO₂",
    "NaCl",
    "C₆H₁₂O₆",
    "H₂SO₄",
    "x²+y²=r²",
  ];

  return (
    <main style={styles.page}>
      {/* Floating Background */}
      <div style={styles.background}>
        {/* Floating Science Images */}
        <img
          src="https://images.unsplash.com/photo-1532094349884-543bc11b234d"
          alt="science"
          style={{
            ...styles.floatImage,
            top: "5%",
            left: "3%",
          }}
        />

        <img
          src="https://images.unsplash.com/photo-1581093588401-22d04b2d1f4f"
          alt="physics"
          style={{
            ...styles.floatImage,
            top: "15%",
            right: "3%",
          }}
        />

        <img
          src="https://images.unsplash.com/photo-1532634993-15f421e42ec0"
          alt="chemistry"
          style={{
            ...styles.floatImage,
            bottom: "15%",
            left: "5%",
          }}
        />

        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
          alt="mathematics"
          style={{
            ...styles.floatImage,
            bottom: "10%",
            right: "5%",
          }}
        />

        {symbols.map((symbol, index) => (
          <span
            key={index}
            style={{
              ...styles.symbol,
              left: `${(index * 9) % 100}%`,
              animationDelay: `${index}s`,
            }}
          >
            {symbol}
          </span>
        ))}
      </div>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.liveBadge}>
          🔴 LIVE LEARNING AVAILABLE
        </div>

        <h1 style={styles.title}>SCIENCE MINDS</h1>

        <p style={styles.subtitle}>
          Mathematics • Physics • Chemistry
        </p>

        <p style={styles.description}>
          Learn, practice, collaborate and discover through
          live science lessons, quizzes, premium resources,
          Bishop's Deck discussions and interactive learning.
        </p>

        <div style={styles.buttons}>
          <Link href="/dashboard" style={styles.primaryBtn}>
            🚀 Enter Dashboard
          </Link>

          <Link href="/chat" style={styles.secondaryBtn}>
            💬 Bishop's Deck
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section style={styles.features}>
        <div style={styles.card}>
          <h3>🟥 Mathematics</h3>
          <p>
            Algebra, Geometry, Calculus, Statistics and
            advanced problem solving.
          </p>
        </div>

        <div style={styles.card}>
          <h3>🔵 Physics</h3>
          <p>
            Mechanics, Electricity, Waves, Optics and Modern
            Physics.
          </p>
        </div>

        <div style={styles.card}>
          <h3>🟡 Chemistry</h3>
          <p>
            Organic, Inorganic, Practical and Analytical
            Chemistry.
          </p>
        </div>

        <div style={styles.card}>
          <h3>📡 Live Classes</h3>
          <p>
            Join live lessons, discussions and revision
            sessions.
          </p>
        </div>

        <div style={styles.card}>
          <h3>🧪 Quizzes</h3>
          <p>
            Test knowledge through interactive assessments.
          </p>
        </div>

        <div style={styles.card}>
          <h3>💎 Premium Content</h3>
          <p>
            Unlock advanced notes, mock exams and master
            classes.
          </p>
        </div>
      </section>

      {/* STATISTICS */}
      <section style={styles.stats}>
        <div style={styles.statCard}>
          <h2 style={styles.statNumber}>50,000+</h2>
          <p>Questions</p>
        </div>

        <div style={styles.statCard}>
          <h2 style={styles.statNumber}>500+</h2>
          <p>Lessons</p>
        </div>

        <div style={styles.statCard}>
          <h2 style={styles.statNumber}>350+</h2>
          <p>Live Sessions</p>
        </div>

        <div style={styles.statCard}>
          <h2 style={styles.statNumber}>24/7</h2>
          <p>Community Access</p>
        </div>
      </section>

      {/* PREMIUM */}
      <section style={styles.premium}>
        <h2>💎 Science Minds Premium</h2>

        <p>
          Access premium notes, revision guides, live master
          classes, mock examinations and exclusive learning
          resources.
        </p>

        <button style={styles.premiumBtn}>
          Upgrade Coming Soon
        </button>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg,#02122e 0%,#052b78 35%,#041a45 70%,#010814 100%)",
    color: "#fff",
    overflow: "hidden",
    position: "relative",
  },

  background: {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
  },

  floatImage: {
    position: "absolute",
    width: "220px",
    height: "220px",
    objectFit: "cover",
    borderRadius: "20px",
    opacity: 0.18,
    animation: "floatImage 12s ease-in-out infinite",
    boxShadow: "0 0 40px rgba(212,175,55,.5)",
  },

  symbol: {
    position: "absolute",
    color: "#d4af37",
    opacity: 0.18,
    fontSize: "28px",
    animation: "floatUp 20s linear infinite",
  },

  hero: {
    textAlign: "center",
    padding: "100px 20px 60px",
    position: "relative",
    zIndex: 2,
  },

  liveBadge: {
    display: "inline-block",
    background: "#d4af37",
    color: "#000",
    padding: "10px 18px",
    borderRadius: "25px",
    fontWeight: "bold",
    marginBottom: "25px",
    boxShadow: "0 0 20px rgba(212,175,55,.6)",
  },

  title: {
    fontSize: "5rem",
    color: "#fff",
    textShadow:
      "0 0 20px #4169e1, 0 0 40px #4169e1, 0 0 60px #d4af37",
  },

  subtitle: {
    fontSize: "1.5rem",
    color: "#d4af37",
    marginTop: "15px",
    fontWeight: "bold",
  },

  description: {
    maxWidth: "800px",
    margin: "25px auto",
    lineHeight: "1.8",
    color: "#ddd",
    fontSize: "1.05rem",
  },

  buttons: {
    marginTop: "35px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    background: "#4169e1",
    color: "#fff",
    padding: "15px 28px",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: "bold",
    boxShadow: "0 0 25px rgba(65,105,225,.6)",
  },

  secondaryBtn: {
    background: "#d4af37",
    color: "#000",
    padding: "15px 28px",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: "bold",
  },

  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "20px",
    padding: "40px",
    position: "relative",
    zIndex: 2,
  },

  card: {
    background: "rgba(0,0,0,.35)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(212,175,55,.5)",
    padding: "25px",
    borderRadius: "18px",
    textAlign: "center",
  },

  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
    gap: "20px",
    padding: "40px",
    position: "relative",
    zIndex: 2,
  },

  statCard: {
    background: "rgba(0,0,0,.3)",
    borderRadius: "15px",
    padding: "20px",
    textAlign: "center",
  },

  statNumber: {
    color: "#d4af37",
    fontSize: "2rem",
  },

  premium: {
    margin: "30px",
    padding: "35px",
    border: "2px solid #d4af37",
    borderRadius: "20px",
    textAlign: "center",
    position: "relative",
    zIndex: 2,
    background: "rgba(0,0,0,.45)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 0 30px rgba(212,175,55,.4)",
  },

  premiumBtn: {
    marginTop: "20px",
    background: "#d4af37",
    color: "#000",
    border: "none",
    padding: "14px 28px",
    borderRadius: "12px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};