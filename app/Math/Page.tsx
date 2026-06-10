import type { CSSProperties } from "react";

export default function MathPage() {
  return (
    <main style={styles.container}>
      <h1>🧮 Mathematics</h1>

      <p>
        Welcome to Mathematics. Explore algebra, geometry, calculus,
        trigonometry, and problem-solving techniques.
      </p>
    </main>
  );
}

const styles: { container: CSSProperties } = {
  container: {
    padding: "40px",
    fontFamily: "Arial, sans-serif",
  },
};