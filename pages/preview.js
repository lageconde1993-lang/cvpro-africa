import { useEffect, useState } from "react";

export default function Preview() {
  const [doc, setDoc] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    setDoc(localStorage.getItem("document") || "");
    setType(localStorage.getItem("type") || "");
  }, []);

  const getPrice = () => {
    if (type === "cv") return "1000 FCFA";
    if (type === "lettre") return "500 FCFA";
    if (type === "pack") return "1500 FCFA";
    return "";
  };

  return (
    <div style={{ fontFamily: "Arial", padding: 40, maxWidth: 800, margin: "auto" }}>
      <h2 style={{ color: "#1e3a8a", textAlign: "center" }}>Aperçu de votre document</h2>

      <div
        style={{
          background: "white",
          padding: 30,
          borderRadius: 10,
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          whiteSpace: "pre-wrap",
          marginBottom: 20,
          minHeight: 400
        }}
      >
        {doc || "Aucun document généré. Retournez au formulaire."}
      </div>

      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: 18 }}>
          Montant à payer : <strong>{getPrice()}</strong>
        </p>

        <a
          href="/payment"
          style={{
            display: "inline-block",
            marginTop: 10,
            padding: "12px 30px",
            background: "#16a34a",
            color: "white",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          Procéder au paiement
        </a>
      </div>
    </div>
  );
}
