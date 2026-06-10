"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        🔬 Science Minds
      </div>

      <div style={styles.links}>
        <Link href="/" style={styles.link}>
          🏠 Home
        </Link>

        <Link href="/dashboard" style={styles.link}>
          📊 Dashboard
        </Link>

        <Link href="/math" style={styles.link}>
          🧮 Mathematics
        </Link>

        <Link href="/physics" style={styles.link}>
          ⚛️ Physics
        </Link>

        <Link href="/chemistry" style={styles.link}>
          🧪 Chemistry
        </Link>

        <Link href="/live" style={styles.link}>
          📡 Live Classes
        </Link>

        <Link href="/chat" style={styles.link}>
          💬 Bishop's Deck
        </Link>

        <Link href="/quiz" style={styles.link}>
          📝 Quizzes
        </Link>

        <Link href="/premium" style={styles.link}>
          💎 Premium
        </Link>

        <Link href="/wallet" style={styles.link}>
          💰 Wallet
        </Link>

        <Link href="/faith" style={styles.link}>
          ✝️ Faith & Life
        </Link>

        <Link href="/login" style={styles.loginBtn}>
          🔐 Login
        </Link>
      </div>
    </nav>
  );
}

const styles: Record<string, React.CSSProperties> = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 1000,

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    padding: "15px 25px",

    background: "rgba(2,18,46,0.9)",

    backdropFilter: "blur(12px)",

    borderBottom: "2px solid #d4af37",

    boxShadow: "0 0 20px rgba(212,175,55,.25)",
  },

  logo: {
    color: "#d4af37",
    fontSize: "1.3rem",
    fontWeight: "bold",
    whiteSpace: "nowrap",
  },

  links: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: "bold",
    padding: "8px 10px",
    borderRadius: "8px",
  },

  loginBtn: {
    background: "#d4af37",
    color: "#000",
    textDecoration: "none",
    fontWeight: "bold",
    padding: "10px 18px",
    borderRadius: "10px",
  },
};