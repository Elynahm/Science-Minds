import type { CSSProperties } from "react";

export default function ChemistryPage() {
  return (
    <main style={styles.container}>
      <h1>🟡 Chemistry</h1>
      <p>Learn elements, reactions, and chemical bonding.</p>
    </main>
  );
}

const styles: { container: CSSProperties } = {
  container: {
    padding: "40px",
    fontFamily: "Arial",
  },
};