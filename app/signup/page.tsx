import type { CSSProperties } from "react";

export default function SignupPage() {
  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <h1>📝 Sign Up</h1>

        <p>Create your Science Minds account.</p>

        <form style={styles.form}>
          <input
            type="text"
            placeholder="Full Name"
            style={styles.input}
          />

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
            Create Account
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
    maxWidth: "450px",
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