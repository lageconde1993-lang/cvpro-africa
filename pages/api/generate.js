import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { nom, poste, exp, type } = req.body;

    let prompt = "";

    if (type === "cv") {
      prompt = `Rédige un CV professionnel structuré, optimisé ATS, adapté aux grandes entreprises pour :
Nom : ${nom}
Poste recherché : ${poste}
Expérience et formation : ${exp}

Inclure les sections : Profil, Expériences, Formation, Compétences, Langues.
Ton professionnel et clair. Réponds uniquement avec le contenu du CV.`;
    } else if (type === "lettre") {
      prompt = `Rédige une lettre de motivation professionnelle adaptée aux grandes entreprises pour :
Nom : ${nom}
Poste : ${poste}
Expérience : ${exp}

Structure classique : entête, accroche, motivation, valeur ajoutée, conclusion.
Ton sérieux et formel. Réponds uniquement avec le contenu de la lettre.`;
    } else {
      prompt = `Rédige un CV professionnel ET une lettre de motivation pour :
Nom : ${nom}
Poste : ${poste}
Expérience : ${exp}

Sépare clairement avec :
=== CV ===
=== LETTRE DE MOTIVATION ===

Ton professionnel adapté aux grandes entreprises.`;
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    res.status(200).json({ content: completion.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
