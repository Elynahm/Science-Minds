export default function FaithPage() {
  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🙏 Faith & Life</h1>

        <p style={styles.text}>
          Welcome to Faith & Life — a space for reflection, wisdom, and personal growth.
        </p>

        <p style={styles.subtext}>
          “Seek wisdom, build character, and grow in purpose every day.”
        </p>

        <div style={styles.quoteBox}>
          ✨ “Faith is not about seeing everything clearly, but trusting even when you cannot.”
        </div>

        <div style={styles.sections}>
          <div style={styles.sectionCard}>
            <h3>📖 Daily Reflection</h3>
            <p>Short messages to guide your mindset and discipline.</p>
          </div>

          <div style={styles.sectionCard}>
            <h3>🧠 Life Lessons</h3>
            <p>Practical wisdom for school, relationships, and growth.</p>
          </div>

          <div style={styles.sectionCard}>
            <h3>🎯 Purpose</h3>
            <p>Stay focused on goals, identity, and long-term success.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

/* ================= STYLES ================= */

const styles = {
  container: {
    minHeight: "100vh",
    padding: "40px",
    background: "linear-gradient(135deg,#02122e,#052b78,#041a45)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial",
  } as React.CSSProperties,

  card: {
    maxWidth: "800px",
    width: "100%",
    padding: "30px",
    borderRadius: "15px",
    background: "rgba(0,0,0,0.4)",
    border: "1px solid #d4af37",
    textAlign: "center",
    boxShadow: "0 0 20px rgba(0,0,0,0.4)",
  } as React.CSSProperties,

  title: {
    fontSize: "2.8rem",
    color: "#4169e1",
    marginBottom: "10px",
    textShadow: "0 0 15px rgba(65,105,225,0.4)",
  } as React.CSSProperties,

  text: {
    color: "#ffffff",
    fontSize: "1.1rem",
    marginBottom: "10px",
  } as React.CSSProperties,

  subtext: {
    color: "#d4af37",
    marginBottom: "20px",
  } as React.CSSProperties,

  quoteBox: {
    padding: "15px",
    borderRadius: "10px",
    background: "rgba(212,175,55,0.1)",
    border: "1px solid #d4af37",
    marginBottom: "25px",
    color: "#fff",
  } as React.CSSProperties,

  sections: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
    gap: "15px",
  } as React.CSSProperties,

  sectionCard: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid #4169e1",
    padding: "15px",
    borderRadius: "12px",
    color: "#fff",
  } as React.CSSProperties,
};