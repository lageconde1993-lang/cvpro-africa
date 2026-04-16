import { useState } from "react";

export default function Generate() {
  const [form, setForm] = useState({
    nom: "",
    poste: "",
    exp: "",
    type: "cv"
  });

  const handleSubmit = async () => {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    localStorage.setItem("document", data.content);
    localStorage.setItem("type", form.type);
    window.location.href = "/preview";
  };

  return (
    <div style={{ fontFamily: "Arial", padding: 40, maxWidth: 600, margin: "auto" }}>
      <h2 style={{ color: "#1e3a8a" }}>Vos informations</h2>

      <input
        placeholder="Nom complet"
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
        onChange={e => setForm({ ...form, nom: e.target.value })}
      />

      <input
        placeholder="Poste visé"
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
        onChange={e => setForm({ ...form, poste: e.target.value })}
      />

      <textarea
        placeholder="Décrivez votre expérience, formation, compétences..."
        rows={6}
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
        onChange={e => setForm({ ...form, exp: e.target.value })}
      />

      <select
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
        onChange={e => setForm({ ...form, type: e.target.value })}
      >
        <option value="cv">CV - 1000 FCFA</option>
        <option value="lettre">Lettre - 500 FCFA</option>
        <option value="pack">Pack CV + Lettre - 1500 FCFA</option>
      </select>

      <button
        onClick={handleSubmit}
        style={{
          width: "100%",
          padding: 12,
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: 8,
          cursor: "pointer"
        }}
      >
        Générer le document
      </button>
    </div>
  );
    }
