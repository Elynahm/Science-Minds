export default function PhysicsPage() {
  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🔵 Physics</h1>

        <p style={styles.text}>
          Welcome to the Physics section of Science Minds.
        </p>

        <p style={styles.subtext}>
          Explore Mechanics, Electricity, Waves, Optics, and Modern Physics.
        </p>

        <div style={styles.highlightBox}>
          ⚡ Understanding the universe through motion, energy, and force.
        </div>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: "100vh",
    padding: "40px",
    background: "linear-gradient(135deg,#02122e,#052b78,#041a45)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial",
  },

  card: {
    maxWidth: "700px",
    width: "100%",
    padding: "30px",
    borderRadius: "15px",
    background: "rgba(0,0,0,0.4)",
    border: "1px solid #d4af37",
    textAlign: "center",
  },

  title: {
    color: "#4169e1",
    fontSize: "2.5rem",
  },

  text: {
    color: "#fff",
    fontSize: "1.1rem",
    marginTop: "10px",
  },

  subtext: {
    color: "#d4af37",
    marginTop: "10px",
  },

  highlightBox: {
    marginTop: "20px",
    padding: "15px",
    borderRadius: "10px",
    border: "1px solid #d4af37",
    background: "rgba(212,175,55,0.1)",
    color: "#fff",
  },
};