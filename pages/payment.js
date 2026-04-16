import { useState } from "react";

export default function Payment() {
  const [form, setForm] = useState({
    nomPayeur: "",
    telephone: "",
    montant: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!form.nomPayeur || !form.telephone || !form.montant) {
      alert("Veuillez remplir tous les champs");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ fontFamily: "Arial", padding: 40, maxWidth: 600, margin: "auto", textAlign: "center" }}>
        <h2 style={{ color: "#16a34a" }}>✅ Paiement enregistré</h2>
        <p>Votre paiement est en attente de validation.</p>
        <p>Vous recevrez votre document dès que l'administrateur aura confirmé votre paiement.</p>
        <p style={{ marginTop: 20, color: "#666" }}>
          Merci de votre confiance.
        </p>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "Arial", padding: 40, maxWidth: 600, margin: "auto" }}>
      <h2 style={{ color: "#1e3a8a", textAlign: "center" }}>Paiement</h2>

      <div
        style={{
          background: "#f0f9ff",
          padding: 20,
          borderRadius: 10,
          marginBottom: 20,
          border: "1px solid #bae6fd"
        }}
      >
        <h3>📱 Instructions de paiement</h3>
        <p>Effectuez votre paiement via :</p>
        <ul>
          <li><strong>Wave</strong></li>
          <li><strong>MTN Mobile Money</strong></li>
        </ul>
        <p style={{ fontSize: 18 }}>
          📞 Numéro : <strong>+225 0574803501</strong>
        </p>
        <p style={{ color: "#dc2626" }}>
          ⚠️ Indiquez votre <strong>NOM</strong> en référence du paiement.
        </p>
      </div>

      <h3>Confirmer votre paiement</h3>

      <input
        placeholder="Nom utilisé pour le paiement"
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
        onChange={e => setForm({ ...form, nomPayeur: e.target.value })}
      />

      <input
        placeholder="Numéro de téléphone"
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
        onChange={e => setForm({ ...form, telephone: e.target.value })}
      />

      <input
        placeholder="Montant payé (FCFA)"
        type="number"
        style={{ width: "100%", padding: 10, marginBottom: 10 }}
        onChange={e => setForm({ ...form, montant: e.target.value })}
      />

      <button
        onClick={handleSubmit}
        style={{
          width: "100%",
          padding: 12,
          background: "#16a34a",
          color: "white",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        J'ai effectué le paiement
      </button>
    </div>
  );
}
