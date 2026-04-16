import { useState } from "react";

export default function Admin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  // ⚠️ Change ce mot de passe par le tien !
  const ADMIN_PASSWORD = "Lionel@1";

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
    } else {
      alert("Mot de passe incorrect");
    }
  };

  if (!authenticated) {
    return (
      <div style={{ fontFamily: "Arial", padding: 40, maxWidth: 400, margin: "auto", textAlign: "center" }}>
        <h2 style={{ color: "#1e3a8a" }}>🔐 Accès Administrateur</h2>
        <input
          type="password"
          placeholder="Mot de passe"
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
          onChange={e => setPassword(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleLogin()}
        />
        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: 12,
            background: "#1e3a8a",
            color: "white",
            border: "none",
            borderRadius: 8,
            cursor: "pointer"
          }}
        >
          Se connecter
        </button>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "Arial", padding: 40, maxWidth: 1000, margin: "auto" }}>
      <h1 style={{ color: "#1e3a8a" }}>📊 Dashboard Administrateur</h1>
      <p>Bienvenue dans votre espace d'administration.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, marginTop: 30 }}>
        <div style={{ background: "#f0f9ff", padding: 20, borderRadius: 10 }}>
          <h3>💰 Revenus</h3>
          <p style={{ fontSize: 24, fontWeight: "bold" }}>0 FCFA</p>
        </div>

        <div style={{ background: "#f0fdf4", padding: 20, borderRadius: 10 }}>
          <h3>📄 CV générés</h3>
          <p style={{ fontSize: 24, fontWeight: "bold" }}>0</p>
        </div>

        <div style={{ background: "#fef3c7", padding: 20, borderRadius: 10 }}>
          <h3>✉️ Lettres générées</h3>
          <p style={{ fontSize: 24, fontWeight: "bold" }}>0</p>
        </div>

        <div style={{ background: "#fce7f3", padding: 20, borderRadius: 10 }}>
          <h3>⏳ En attente</h3>
          <p style={{ fontSize: 24, fontWeight: "bold" }}>0</p>
        </div>
      </div>

      <h2 style={{ marginTop: 40, color: "#1e3a8a" }}>📋 Paiements à valider</h2>
      <div style={{ background: "white", padding: 20, borderRadius: 10, boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
        <p style={{ color: "#666", textAlign: "center" }}>
          Aucun paiement en attente pour le moment.
        </p>
        <p style={{ color: "#999", textAlign: "center", fontSize: 14 }}>
          (Les paiements apparaîtront ici une fois la base de données connectée)
        </p>
      </div>
    </div>
  );
    }
