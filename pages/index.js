import { useState } from "react";

export default function Home() {
  const [clicks, setClicks] = useState(0);

  const handleSecret = () => {
    const newClicks = clicks + 1;
    setClicks(newClicks);
    if (newClicks === 3) {
      window.location.href = "/admin";
    }
  };

  return (
    <div style={{ fontFamily: "Arial", padding: 40, textAlign: "center" }}>
      <h1 style={{ color: "#1e3a8a" }}>CVPro Africa</h1>
      <p>Créez un CV professionnel en moins de 10 minutes</p>

      <a
        href="/generate"
        style={{
          display: "inline-block",
          marginTop: 20,
          padding: "12px 24px",
          background: "#2563eb",
          color: "white",
          borderRadius: 8,
          textDecoration: "none"
        }}
      >
        Créer un document
      </a>

      <footer
        onClick={handleSecret}
        style={{ marginTop: 100, cursor: "pointer", color: "#888" }}
      >
        © 2026 CVPro Africa
      </footer>
    </div>
  );
  }
