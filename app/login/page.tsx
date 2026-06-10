import type { CSSProperties } from "react";

export default function LoginPage() {
  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <h1>🔐 Login</h1>

        <p>Welcome back to Science Minds.</p>

        <form style={styles.form}>
          <input
            type="email"
            placeholder="Email Address"
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Password"
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
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
    width: "100%",
    maxWidth: "400px",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginTop: "20px",
  },

  input: {
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },

  button: {
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};